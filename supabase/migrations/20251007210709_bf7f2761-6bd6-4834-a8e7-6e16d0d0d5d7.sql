-- Create app_role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'voter');

-- Create departments table
CREATE TABLE public.departments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  short_code TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  color_hex TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create candidates table
CREATE TABLE public.candidates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  department TEXT NOT NULL,
  position TEXT NOT NULL,
  candidate_name TEXT NOT NULL,
  year_level TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create verifications table
CREATE TABLE public.verifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id TEXT NOT NULL,
  name TEXT NOT NULL,
  course TEXT NOT NULL,
  department TEXT NOT NULL,
  device_id TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(student_id, department)
);

-- Create votes table
CREATE TABLE public.votes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  department TEXT NOT NULL,
  position TEXT NOT NULL,
  candidate_name TEXT NOT NULL,
  student_id TEXT NOT NULL,
  device_id TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(student_id, department, position)
);

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE(user_id, role)
);

-- Enable RLS
ALTER TABLE public.departments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.candidates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.verifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- RLS Policies for departments (public read)
CREATE POLICY "Anyone can view departments"
  ON public.departments FOR SELECT
  USING (true);

-- RLS Policies for candidates (public read)
CREATE POLICY "Anyone can view candidates"
  ON public.candidates FOR SELECT
  USING (true);

-- RLS Policies for verifications
CREATE POLICY "Anyone can insert verifications"
  ON public.verifications FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can view verifications"
  ON public.verifications FOR SELECT
  USING (true);

-- RLS Policies for votes
CREATE POLICY "Anyone can insert votes"
  ON public.votes FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can view votes for results"
  ON public.votes FOR SELECT
  USING (true);

-- RLS Policies for user_roles
CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT
  USING (auth.uid() = user_id);

-- Insert departments
INSERT INTO public.departments (short_code, name, icon_name, color_hex) VALUES
  ('CCS', 'College of Computer Studies', 'Laptop', '#0ea5a4'),
  ('PSYCH', 'Psychology Department', 'Brain', '#8b5cf6'),
  ('BUS', 'Business Administration', 'Briefcase', '#f59e0b'),
  ('EDUC', 'Education Department', 'GraduationCap', '#10b981'),
  ('ENG', 'Engineering Department', 'Cog', '#3b82f6'),
  ('NURS', 'Nursing / Health Sciences', 'Heart', '#ec4899'),
  ('ARTS', 'Arts & Sciences', 'Palette', '#14b8a6'),
  ('ARCH', 'Architecture & Design', 'Ruler', '#6366f1');

-- Insert preloaded candidates for CCS
INSERT INTO public.candidates (department, position, candidate_name, year_level) VALUES
  ('CCS', 'President', 'Maria Santos', '4th Year'),
  ('CCS', 'President', 'Juan dela Cruz', '4th Year'),
  ('CCS', 'President', 'Ana Reyes', '4th Year'),
  ('CCS', 'President', 'Carlos Garcia', '3rd Year'),
  ('CCS', 'Vice President', 'Sofia Hernandez', '3rd Year'),
  ('CCS', 'Vice President', 'Miguel Torres', '3rd Year'),
  ('CCS', 'Vice President', 'Isabel Ramos', '4th Year'),
  ('CCS', 'Vice President', 'Diego Lopez', '3rd Year'),
  ('CCS', 'Secretary', 'Carmen Flores', '2nd Year'),
  ('CCS', 'Secretary', 'Rafael Cruz', '3rd Year'),
  ('CCS', 'Secretary', 'Lucia Martinez', '2nd Year'),
  ('CCS', 'Secretary', 'Antonio Gonzales', '3rd Year'),
  ('CCS', 'Treasurer', 'Elena Diaz', '3rd Year'),
  ('CCS', 'Treasurer', 'Fernando Morales', '2nd Year'),
  ('CCS', 'Treasurer', 'Rosa Castillo', '3rd Year'),
  ('CCS', 'Treasurer', 'Ricardo Navarro', '2nd Year'),
  ('CCS', 'Auditor', 'Patricia Valdez', '3rd Year'),
  ('CCS', 'Auditor', 'Rodrigo Mendoza', '3rd Year'),
  ('CCS', 'Auditor', 'Angela Rivera', '2nd Year'),
  ('CCS', 'Auditor', 'Luis Santiago', '3rd Year'),
  ('CCS', 'PRO', 'Beatriz Aquino', '2nd Year'),
  ('CCS', 'PRO', 'Gabriel Bautista', '2nd Year'),
  ('CCS', 'PRO', 'Daniela Manalo', '3rd Year'),
  ('CCS', 'PRO', 'Paolo Santos', '2nd Year'),
  ('CCS', 'Creative/Multimedia Head', 'Jasmine Cruz', '3rd Year'),
  ('CCS', 'Creative/Multimedia Head', 'Lorenzo Reyes', '2nd Year'),
  ('CCS', 'Creative/Multimedia Head', 'Nina Garcia', '2nd Year'),
  ('CCS', 'Creative/Multimedia Head', 'Marco Torres', '3rd Year'),
  ('CCS', 'Logistics Head', 'Amanda Lopez', '3rd Year'),
  ('CCS', 'Logistics Head', 'Victor Ramos', '2nd Year'),
  ('CCS', 'Logistics Head', 'Gloria Flores', '3rd Year'),
  ('CCS', 'Logistics Head', 'Sebastian Martinez', '2nd Year'),
  ('CCS', '1st Year Rep', 'Kyla Gonzales', '1st Year'),
  ('CCS', '1st Year Rep', 'Joshua Diaz', '1st Year'),
  ('CCS', '1st Year Rep', 'Samantha Morales', '1st Year'),
  ('CCS', '1st Year Rep', 'Marcus Castillo', '1st Year'),
  ('CCS', '2nd Year Rep', 'Kristine Navarro', '2nd Year'),
  ('CCS', '2nd Year Rep', 'Patrick Valdez', '2nd Year'),
  ('CCS', '2nd Year Rep', 'Angelica Mendoza', '2nd Year'),
  ('CCS', '2nd Year Rep', 'Jason Rivera', '2nd Year'),
  ('CCS', '3rd Year Rep', 'Michelle Santiago', '3rd Year'),
  ('CCS', '3rd Year Rep', 'Ryan Aquino', '3rd Year'),
  ('CCS', '3rd Year Rep', 'Catherine Bautista', '3rd Year'),
  ('CCS', '3rd Year Rep', 'Daniel Manalo', '3rd Year'),
  ('CCS', '4th Year Rep', 'Stephanie Santos', '4th Year'),
  ('CCS', '4th Year Rep', 'Christian Cruz', '4th Year'),
  ('CCS', '4th Year Rep', 'Melissa Reyes', '4th Year'),
  ('CCS', '4th Year Rep', 'Kenneth Garcia', '4th Year');

-- Enable realtime for votes table
ALTER PUBLICATION supabase_realtime ADD TABLE votes;