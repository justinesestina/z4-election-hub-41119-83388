-- Add partylists table
CREATE TABLE IF NOT EXISTS public.partylists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  department text NOT NULL,
  name text NOT NULL,
  description text,
  created_at timestamp with time zone DEFAULT now(),
  UNIQUE(department, name)
);

-- Enable RLS
ALTER TABLE public.partylists ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view partylists
CREATE POLICY "Anyone can view partylists"
ON public.partylists
FOR SELECT
USING (true);

-- Add partylist_vote column to votes table
ALTER TABLE public.votes
ADD COLUMN IF NOT EXISTS partylist_vote text;

-- Insert initial partylist data
INSERT INTO public.partylists (department, name, description) VALUES
('CCS', 'TechForward', 'Leading innovation in technology and software development'),
('CCS', 'CodeAlliance', 'United for excellence in computer science education'),
('CCS', 'InnovateIT', 'Pioneering the future of information technology'),
('CBA', 'MarketMinds', 'Strategic thinking for business excellence'),
('CBA', 'ProfitPulse', 'Driving growth and sustainable business practices'),
('CBA', 'StratEdge', 'Competitive advantage through strategic management'),
('COED', 'EduLeaders', 'Empowering future educators and leaders'),
('COED', 'TeachCore', 'Core values in teaching and learning'),
('COED', 'LearnLink', 'Connecting education with innovation'),
('CAS', 'SciVision', 'Advancing science and research'),
('CAS', 'ArtBound', 'Celebrating arts and culture'),
('CAS', 'SocioReach', 'Social sciences for community impact'),
('CEN', 'BuildTech', 'Engineering the future through technology'),
('CEN', 'EngiForce', 'Force of innovation in engineering'),
('CEN', 'Structify', 'Building strong foundations in engineering'),
('CHM', 'MedServe', 'Service excellence in healthcare'),
('CHM', 'HealthLink', 'Connecting health and medicine'),
('CHM', 'BioCare', 'Caring through biomedical sciences'),
('CTE', 'TranspoPlus', 'Advancing transportation technology'),
('CTE', 'DriveNation', 'Driving excellence in technical education'),
('CTE', 'MechWave', 'Innovation wave in mechanics'),
('CCJE', 'LawShield', 'Protecting justice and criminal law'),
('CCJE', 'JusticeCore', 'Core principles of justice'),
('CCJE', 'PeaceFront', 'Frontline of peace and justice')
ON CONFLICT (department, name) DO NOTHING;

-- Create election_status table for admin controls
CREATE TABLE IF NOT EXISTS public.election_status (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  department text UNIQUE NOT NULL,
  status text NOT NULL DEFAULT 'active',
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.election_status ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view election status
CREATE POLICY "Anyone can view election status"
ON public.election_status
FOR SELECT
USING (true);

-- Insert initial election status for all departments
INSERT INTO public.election_status (department, status) VALUES
('CCS', 'active'),
('CBA', 'active'),
('COED', 'active'),
('CAS', 'active'),
('CEN', 'active'),
('CHM', 'active'),
('CTE', 'active'),
('CCJE', 'active')
ON CONFLICT (department) DO NOTHING;