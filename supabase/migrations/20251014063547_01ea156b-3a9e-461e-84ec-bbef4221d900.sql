-- Create departments table
CREATE TABLE IF NOT EXISTS public.departments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  short_code TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  color_hex TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for departments
ALTER TABLE public.departments ENABLE ROW LEVEL SECURITY;

-- Allow everyone to read departments
CREATE POLICY "Allow public read access to departments"
ON public.departments
FOR SELECT
USING (true);

-- Insert the 10 departments
INSERT INTO public.departments (short_code, name, color_hex, icon_name) VALUES
('CCS', 'College of Computer Studies', '#8B5CF6', 'Code2'),
('NURSING', 'BS Nursing', '#10B981', 'Heart'),
('PSYCHOLOGY', 'College of Psychology', '#F59E0B', 'Brain'),
('ENGINEERING', 'College of Engineering', '#3B82F6', 'Wrench'),
('CAS', 'College of Arts and Sciences', '#EC4899', 'Palette'),
('CBA', 'College of Business Administration', '#14B8A6', 'Briefcase'),
('CTHM', 'College of Tourism and Hospitality Management', '#F97316', 'Plane'),
('CRIMINOLOGY', 'College of Criminology', '#EF4444', 'Shield'),
('EDUCATION', 'College of Education', '#A855F7', 'GraduationCap'),
('AGRICULTURE', 'College of Agriculture', '#22C55E', 'Sprout');

-- Create voters table
CREATE TABLE IF NOT EXISTS public.voters (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  student_id TEXT NOT NULL,
  email TEXT NOT NULL,
  department TEXT NOT NULL,
  has_voted BOOLEAN NOT NULL DEFAULT false,
  verified_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(student_id, email)
);

-- Enable RLS for voters
ALTER TABLE public.voters ENABLE ROW LEVEL SECURITY;

-- Allow public read/write for voters (admin will manage via dashboard)
CREATE POLICY "Allow public insert for voters"
ON public.voters
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow public read for voters"
ON public.voters
FOR SELECT
USING (true);

CREATE POLICY "Allow public update for voters"
ON public.voters
FOR UPDATE
USING (true);

CREATE POLICY "Allow public delete for voters"
ON public.voters
FOR DELETE
USING (true);

-- Create candidates table
CREATE TABLE IF NOT EXISTS public.candidates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  department TEXT NOT NULL,
  position TEXT NOT NULL,
  candidate_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for candidates
ALTER TABLE public.candidates ENABLE ROW LEVEL SECURITY;

-- Allow everyone to read candidates
CREATE POLICY "Allow public read access to candidates"
ON public.candidates
FOR SELECT
USING (true);

-- Allow public insert/update/delete for candidates (admin management)
CREATE POLICY "Allow public insert for candidates"
ON public.candidates
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow public update for candidates"
ON public.candidates
FOR UPDATE
USING (true);

CREATE POLICY "Allow public delete for candidates"
ON public.candidates
FOR DELETE
USING (true);

-- Create partylists table
CREATE TABLE IF NOT EXISTS public.partylists (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  department TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for partylists
ALTER TABLE public.partylists ENABLE ROW LEVEL SECURITY;

-- Allow everyone to read partylists
CREATE POLICY "Allow public read access to partylists"
ON public.partylists
FOR SELECT
USING (true);

-- Allow public insert/update/delete for partylists (admin management)
CREATE POLICY "Allow public insert for partylists"
ON public.partylists
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow public update for partylists"
ON public.partylists
FOR UPDATE
USING (true);

CREATE POLICY "Allow public delete for partylists"
ON public.partylists
FOR DELETE
USING (true);

-- Create votes table
CREATE TABLE IF NOT EXISTS public.votes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id TEXT NOT NULL,
  department TEXT NOT NULL,
  position TEXT NOT NULL,
  candidate_name TEXT NOT NULL,
  partylist_vote TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for votes
ALTER TABLE public.votes ENABLE ROW LEVEL SECURITY;

-- Allow public read/write for votes
CREATE POLICY "Allow public insert for votes"
ON public.votes
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow public read for votes"
ON public.votes
FOR SELECT
USING (true);

CREATE POLICY "Allow public delete for votes"
ON public.votes
FOR DELETE
USING (true);

-- Create election_status table
CREATE TABLE IF NOT EXISTS public.election_status (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  department TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL DEFAULT 'not_started',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for election_status
ALTER TABLE public.election_status ENABLE ROW LEVEL SECURITY;

-- Allow everyone to read election status
CREATE POLICY "Allow public read access to election_status"
ON public.election_status
FOR SELECT
USING (true);

-- Allow public insert/update for election_status (admin management)
CREATE POLICY "Allow public insert for election_status"
ON public.election_status
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow public update for election_status"
ON public.election_status
FOR UPDATE
USING (true);

-- Enable realtime for votes table
ALTER PUBLICATION supabase_realtime ADD TABLE public.votes;