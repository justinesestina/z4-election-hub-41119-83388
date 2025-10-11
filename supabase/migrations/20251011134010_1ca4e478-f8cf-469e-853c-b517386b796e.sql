-- Create departments table
CREATE TABLE public.departments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  short_code TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  color_hex TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create candidates table
CREATE TABLE public.candidates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  department TEXT NOT NULL,
  position TEXT NOT NULL,
  candidate_name TEXT NOT NULL,
  year_level TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create verifications table
CREATE TABLE public.verifications (
  student_id TEXT NOT NULL PRIMARY KEY,
  name TEXT NOT NULL,
  course TEXT NOT NULL,
  department TEXT NOT NULL,
  device_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create votes table
CREATE TABLE public.votes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  department TEXT NOT NULL,
  position TEXT NOT NULL,
  candidate_name TEXT NOT NULL,
  student_id TEXT NOT NULL,
  device_id TEXT,
  partylist_vote TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create partylists table
CREATE TABLE public.partylists (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  department TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.departments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.candidates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.verifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.partylists ENABLE ROW LEVEL SECURITY;

-- RLS Policies for departments (public read)
CREATE POLICY "Departments are viewable by everyone" 
ON public.departments FOR SELECT 
USING (true);

-- RLS Policies for candidates (public read)
CREATE POLICY "Candidates are viewable by everyone" 
ON public.candidates FOR SELECT 
USING (true);

-- RLS Policies for partylists (public read)
CREATE POLICY "Partylists are viewable by everyone" 
ON public.partylists FOR SELECT 
USING (true);

-- RLS Policies for verifications (public access for voting functionality)
CREATE POLICY "Verifications are viewable by everyone" 
ON public.verifications FOR SELECT 
USING (true);

CREATE POLICY "Anyone can create verifications" 
ON public.verifications FOR INSERT 
WITH CHECK (true);

-- RLS Policies for votes (public write for voting, read for results)
CREATE POLICY "Votes are viewable by everyone" 
ON public.votes FOR SELECT 
USING (true);

CREATE POLICY "Anyone can create votes" 
ON public.votes FOR INSERT 
WITH CHECK (true);

-- Enable realtime for votes table
ALTER TABLE public.votes REPLICA IDENTITY FULL;
ALTER PUBLICATION supabase_realtime ADD TABLE public.votes;

-- Create indexes for better performance
CREATE INDEX idx_votes_department ON public.votes(department);
CREATE INDEX idx_votes_position ON public.votes(position);
CREATE INDEX idx_candidates_department ON public.candidates(department);
CREATE INDEX idx_verifications_student_id ON public.verifications(student_id);