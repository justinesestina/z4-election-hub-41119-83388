-- Create voters table for registered voters with email verification
CREATE TABLE public.voters (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  student_id text UNIQUE NOT NULL,
  department text NOT NULL,
  has_voted boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT now(),
  verified_at timestamp with time zone
);

-- Create verification_codes table for 6-digit email codes
CREATE TABLE public.verification_codes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  code text NOT NULL,
  expires_at timestamp with time zone NOT NULL,
  verified boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT now()
);

-- Create election_status table for Start/Pause/End controls per department
CREATE TABLE public.election_status (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  department text UNIQUE NOT NULL,
  status text DEFAULT 'not_started',
  updated_at timestamp with time zone DEFAULT now()
);

-- Create audit_logs table for tracking all admin actions
CREATE TABLE public.audit_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  action text NOT NULL,
  details jsonb,
  admin_user text,
  created_at timestamp with time zone DEFAULT now()
);

-- Add description column to existing partylists table
ALTER TABLE public.partylists ADD COLUMN IF NOT EXISTS description text;

-- Enable RLS on all new tables
ALTER TABLE public.voters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.verification_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.election_status ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies for voters
CREATE POLICY "Voters are viewable by everyone" ON public.voters FOR SELECT USING (true);
CREATE POLICY "Anyone can register as voter" ON public.voters FOR INSERT WITH CHECK (true);
CREATE POLICY "Voters can be updated" ON public.voters FOR UPDATE USING (true);

-- RLS Policies for verification_codes
CREATE POLICY "Anyone can create verification codes" ON public.verification_codes FOR INSERT WITH CHECK (true);
CREATE POLICY "Verification codes are viewable by everyone" ON public.verification_codes FOR SELECT USING (true);
CREATE POLICY "Verification codes can be updated" ON public.verification_codes FOR UPDATE USING (true);

-- RLS Policies for election_status
CREATE POLICY "Election status is viewable by everyone" ON public.election_status FOR SELECT USING (true);
CREATE POLICY "Election status can be updated" ON public.election_status FOR UPDATE USING (true);
CREATE POLICY "Election status can be inserted" ON public.election_status FOR INSERT WITH CHECK (true);

-- RLS Policies for audit_logs
CREATE POLICY "Audit logs are viewable by everyone" ON public.audit_logs FOR SELECT USING (true);
CREATE POLICY "Audit logs can be created" ON public.audit_logs FOR INSERT WITH CHECK (true);

-- Insert default election status for all 8 departments
INSERT INTO public.election_status (department, status) VALUES
  ('CCS', 'not_started'),
  ('CBA', 'not_started'),
  ('COED', 'not_started'),
  ('CAS', 'not_started'),
  ('CEN', 'not_started'),
  ('CHM', 'not_started'),
  ('CTE', 'not_started'),
  ('CCJE', 'not_started');

-- Insert sample partylists with descriptions for all 8 departments
INSERT INTO public.partylists (department, name, description) VALUES
  -- CCS
  ('CCS', 'TechForward', 'Leading innovation in technology and digital solutions for tomorrow'),
  ('CCS', 'CodeAlliance', 'United developers building the future through collaborative coding'),
  ('CCS', 'InnovateIT', 'Pioneering breakthrough solutions in information technology'),
  
  -- CBA
  ('CBA', 'MarketMinds', 'Strategic business leaders shaping the future of commerce'),
  ('CBA', 'ProfitPulse', 'Driving sustainable growth and financial excellence'),
  ('CBA', 'StratEdge', 'Competitive advantage through strategic business innovation'),
  
  -- COED
  ('COED', 'EduLeaders', 'Transforming education through visionary leadership'),
  ('COED', 'TeachCore', 'Building strong foundations for future educators'),
  ('COED', 'LearnLink', 'Connecting students, teachers, and communities'),
  
  -- CAS
  ('CAS', 'SciVision', 'Advancing scientific discovery and research excellence'),
  ('CAS', 'ArtBound', 'Celebrating creativity and artistic expression'),
  ('CAS', 'SocioReach', 'Bridging communities through social sciences'),
  
  -- CEN
  ('CEN', 'BuildTech', 'Engineering sustainable infrastructure for tomorrow'),
  ('CEN', 'EngiForce', 'Powering innovation through engineering excellence'),
  ('CEN', 'Structify', 'Building strong foundations through structural integrity'),
  
  -- CHM
  ('CHM', 'MedServe', 'Committed to compassionate healthcare and medical service'),
  ('CHM', 'HealthLink', 'Connecting communities with quality health solutions'),
  ('CHM', 'BioCare', 'Advancing biological sciences for better health outcomes'),
  
  -- CTE
  ('CTE', 'TranspoPlus', 'Revolutionizing transportation and logistics systems'),
  ('CTE', 'DriveNation', 'Accelerating mobility and automotive innovation'),
  ('CTE', 'MechWave', 'Leading mechanical engineering breakthroughs'),
  
  -- CCJE
  ('CCJE', 'LawShield', 'Defending justice and upholding the rule of law'),
  ('CCJE', 'JusticeCore', 'Building a foundation of fairness and legal integrity'),
  ('CCJE', 'PeaceFront', 'Promoting peace through criminal justice reform');

-- Enable realtime updates for voters and election_status
ALTER PUBLICATION supabase_realtime ADD TABLE voters;
ALTER PUBLICATION supabase_realtime ADD TABLE election_status;
ALTER TABLE voters REPLICA IDENTITY FULL;
ALTER TABLE election_status REPLICA IDENTITY FULL;

-- Create indexes for performance
CREATE INDEX idx_voters_student_id ON public.voters(student_id);
CREATE INDEX idx_voters_email ON public.voters(email);
CREATE INDEX idx_verification_codes_email ON public.verification_codes(email);
CREATE INDEX idx_verification_codes_expires ON public.verification_codes(expires_at);
CREATE INDEX idx_election_status_department ON public.election_status(department);
CREATE INDEX idx_audit_logs_created ON public.audit_logs(created_at DESC);