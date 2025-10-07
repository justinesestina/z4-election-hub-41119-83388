-- Clear existing data
DELETE FROM votes;
DELETE FROM verifications;
DELETE FROM candidates;
DELETE FROM departments;

-- Insert 8 departments
INSERT INTO departments (short_code, name, icon_name, color_hex) VALUES
('ARCH', 'Architecture & Design', 'Ruler', '#E63946'),
('ARTS', 'Arts & Sciences', 'Palette', '#F77F00'),
('BUS', 'Business Administration', 'Briefcase', '#06AED5'),
('CCS', 'College of Computer Studies', 'Code', '#6366F1'),
('EDUC', 'Education Department', 'GraduationCap', '#10B981'),
('ENG', 'Engineering Department', 'Settings', '#F59E0B'),
('NURS', 'Nursing / Health Sciences', 'Heart', '#EC4899'),
('PSYCH', 'Psychology Department', 'Brain', '#8B5CF6');

-- Insert candidates for ARCH
INSERT INTO candidates (department, position, candidate_name) VALUES
-- President
('ARCH', 'President', 'Miguel Santos'),
('ARCH', 'President', 'Carlo Dela Vega'),
('ARCH', 'President', 'Sophia Cruz'),
('ARCH', 'President', 'Adrian Lim'),
-- Vice President
('ARCH', 'Vice President', 'Julia Mendoza'),
('ARCH', 'Vice President', 'Ethan Ramos'),
('ARCH', 'Vice President', 'Lara Sison'),
('ARCH', 'Vice President', 'Paolo Reyes'),
-- Secretary
('ARCH', 'Secretary', 'Angela Tan'),
('ARCH', 'Secretary', 'Carlo Aquino'),
('ARCH', 'Secretary', 'Bea Lopez'),
('ARCH', 'Secretary', 'Jerome Dizon'),
-- Treasurer
('ARCH', 'Treasurer', 'Nicole David'),
('ARCH', 'Treasurer', 'Enzo Bautista'),
('ARCH', 'Treasurer', 'Kevin Chua'),
('ARCH', 'Treasurer', 'Faith Gomez'),
-- Auditor
('ARCH', 'Auditor', 'Hannah Uy'),
('ARCH', 'Auditor', 'Aldrin Co'),
('ARCH', 'Auditor', 'Patricia Ong'),
('ARCH', 'Auditor', 'Louie Robles'),
-- PIO
('ARCH', 'PIO', 'Janelle Fajardo'),
('ARCH', 'PIO', 'Kim Morales'),
('ARCH', 'PIO', 'Marco Dela Peña'),
('ARCH', 'PIO', 'Rea Santiago'),
-- Business Manager
('ARCH', 'Business Manager', 'Bryan Go'),
('ARCH', 'Business Manager', 'Camille Yao'),
('ARCH', 'Business Manager', 'Lance Gutierrez'),
('ARCH', 'Business Manager', 'Andrea Roldan'),
-- Representative
('ARCH', 'Representative', 'AJ Villanueva'),
('ARCH', 'Representative', 'Joyce Castillo'),
('ARCH', 'Representative', 'Carlo Sarmiento'),
('ARCH', 'Representative', 'Mika Encarnacion'),

-- Insert candidates for ARTS
-- President
('ARTS', 'President', 'Marianne Torres'),
('ARTS', 'President', 'Liam Domingo'),
('ARTS', 'President', 'Denise Fabro'),
('ARTS', 'President', 'Patrick Jimenez'),
-- Vice President
('ARTS', 'Vice President', 'Sofia Ramos'),
('ARTS', 'Vice President', 'Anton Villar'),
('ARTS', 'Vice President', 'Bianca Cruz'),
('ARTS', 'Vice President', 'Nathaniel Uy'),
-- Secretary
('ARTS', 'Secretary', 'Claire Bautista'),
('ARTS', 'Secretary', 'Rico dela Cruz'),
('ARTS', 'Secretary', 'Karen Garcia'),
('ARTS', 'Secretary', 'Miles Go'),
-- Treasurer
('ARTS', 'Treasurer', 'Rina Co'),
('ARTS', 'Treasurer', 'Paolo Sison'),
('ARTS', 'Treasurer', 'Mariel David'),
('ARTS', 'Treasurer', 'Jericho Santos'),
-- Auditor
('ARTS', 'Auditor', 'JC Tan'),
('ARTS', 'Auditor', 'Trisha Ong'),
('ARTS', 'Auditor', 'Noah Villanueva'),
('ARTS', 'Auditor', 'Bea Velasco'),
-- PIO
('ARTS', 'PIO', 'Elly Soriano'),
('ARTS', 'PIO', 'Karl Lim'),
('ARTS', 'PIO', 'Faye Castillo'),
('ARTS', 'PIO', 'Nico Reyes'),
-- Business Manager
('ARTS', 'Business Manager', 'Nina Dizon'),
('ARTS', 'Business Manager', 'Ramon Yap'),
('ARTS', 'Business Manager', 'Kyla Ramos'),
('ARTS', 'Business Manager', 'Sean Alvarado'),
-- Representative
('ARTS', 'Representative', 'Alex Cruz'),
('ARTS', 'Representative', 'Dana Lee'),
('ARTS', 'Representative', 'Troy Mendoza'),
('ARTS', 'Representative', 'Jessa Catacutan'),

-- Insert candidates for BUS
-- President
('BUS', 'President', 'John Dela Cruz'),
('BUS', 'President', 'Rhea Flores'),
('BUS', 'President', 'Carlo Mercado'),
('BUS', 'President', 'Kristine Chan'),
-- Vice President
('BUS', 'Vice President', 'Angel Ramos'),
('BUS', 'Vice President', 'Luke Torres'),
('BUS', 'Vice President', 'Nina Gutierrez'),
('BUS', 'Vice President', 'Paulo Ong'),
-- Secretary
('BUS', 'Secretary', 'Lianne Go'),
('BUS', 'Secretary', 'Vince Bautista'),
('BUS', 'Secretary', 'Shaira Uy'),
('BUS', 'Secretary', 'Franco Dizon'),
-- Treasurer
('BUS', 'Treasurer', 'Kim David'),
('BUS', 'Treasurer', 'April Reyes'),
('BUS', 'Treasurer', 'Bryan Lim'),
('BUS', 'Treasurer', 'Trina Cortez'),
-- Auditor
('BUS', 'Auditor', 'Jomar Chua'),
('BUS', 'Auditor', 'Ynah Villanueva'),
('BUS', 'Auditor', 'Paolo Santiago'),
('BUS', 'Auditor', 'Mae Ocampo'),
-- PIO
('BUS', 'PIO', 'Rica Torres'),
('BUS', 'PIO', 'Aldrin Yao'),
('BUS', 'PIO', 'Claudine Lopez'),
('BUS', 'PIO', 'Ken De Guzman'),
-- Business Manager
('BUS', 'Business Manager', 'Allen Cruz'),
('BUS', 'Business Manager', 'Fiona Robles'),
('BUS', 'Business Manager', 'Vicky Lim'),
('BUS', 'Business Manager', 'Neil Mendoza'),
-- Representative
('BUS', 'Representative', 'George Aquino'),
('BUS', 'Representative', 'Mia Fabro'),
('BUS', 'Representative', 'Patrick Ong'),
('BUS', 'Representative', 'Lyka Ramos'),

-- Insert candidates for CCS
-- President
('CCS', 'President', 'Mark Reyes'),
('CCS', 'President', 'Janelle Cruz'),
('CCS', 'President', 'Joshua Lim'),
('CCS', 'President', 'Erika Dela Peña'),
-- Vice President
('CCS', 'Vice President', 'Carlo Santos'),
('CCS', 'Vice President', 'Faith Gomez'),
('CCS', 'Vice President', 'Adrian Tan'),
('CCS', 'Vice President', 'Mika Torres'),
-- Secretary
('CCS', 'Secretary', 'Bryan Dizon'),
('CCS', 'Secretary', 'Sofia Ramos'),
('CCS', 'Secretary', 'Kevin Ong'),
('CCS', 'Secretary', 'Rina David'),
-- Treasurer
('CCS', 'Treasurer', 'Lance Mendoza'),
('CCS', 'Treasurer', 'Bea Lopez'),
('CCS', 'Treasurer', 'Paolo Go'),
('CCS', 'Treasurer', 'Kim Uy'),
-- Auditor
('CCS', 'Auditor', 'Trisha Sarmiento'),
('CCS', 'Auditor', 'Nathan Co'),
('CCS', 'Auditor', 'Mariel Cruz'),
('CCS', 'Auditor', 'Leo Villanueva'),
-- PIO
('CCS', 'PIO', 'Jerome Bautista'),
('CCS', 'PIO', 'Faye Castillo'),
('CCS', 'PIO', 'Nico Chua'),
('CCS', 'PIO', 'Angel Ramos'),
-- Business Manager
('CCS', 'Business Manager', 'Camille Yao'),
('CCS', 'Business Manager', 'Aldrin Morales'),
('CCS', 'Business Manager', 'Kris Dela Vega'),
('CCS', 'Business Manager', 'Rea Santiago'),
-- Representative
('CCS', 'Representative', 'AJ Torres'),
('CCS', 'Representative', 'Hannah Uy'),
('CCS', 'Representative', 'Carlo Gutierrez'),
('CCS', 'Representative', 'Patricia Ong'),

-- Insert candidates for EDUC
-- President
('EDUC', 'President', 'Hannah Cruz'),
('EDUC', 'President', 'Patrick Uy'),
('EDUC', 'President', 'Carla David'),
('EDUC', 'President', 'John Torres'),
-- Vice President
('EDUC', 'Vice President', 'Bea Villanueva'),
('EDUC', 'Vice President', 'Nico Dela Cruz'),
('EDUC', 'Vice President', 'Andrea Lim'),
('EDUC', 'Vice President', 'Vince Ramos'),
-- Secretary
('EDUC', 'Secretary', 'Kristine Go'),
('EDUC', 'Secretary', 'Paolo Castillo'),
('EDUC', 'Secretary', 'Ella Fabro'),
('EDUC', 'Secretary', 'Carlo Dizon'),
-- Treasurer
('EDUC', 'Treasurer', 'Rina Mercado'),
('EDUC', 'Treasurer', 'Kim Uy'),
('EDUC', 'Treasurer', 'Liza Chua'),
('EDUC', 'Treasurer', 'Aldrin Santos'),
-- Auditor
('EDUC', 'Auditor', 'Nathan Robles'),
('EDUC', 'Auditor', 'Erika Bautista'),
('EDUC', 'Auditor', 'Joshua Go'),
('EDUC', 'Auditor', 'Faith Torres'),
-- PIO
('EDUC', 'PIO', 'Mika Ramos'),
('EDUC', 'PIO', 'JC Lim'),
('EDUC', 'PIO', 'Trisha Uy'),
('EDUC', 'PIO', 'Enzo Castillo'),
-- Business Manager
('EDUC', 'Business Manager', 'Rico Sarmiento'),
('EDUC', 'Business Manager', 'Lara Dela Vega'),
('EDUC', 'Business Manager', 'Louie Go'),
('EDUC', 'Business Manager', 'Bianca Ramos'),
-- Representative
('EDUC', 'Representative', 'Ella Cruz'),
('EDUC', 'Representative', 'Paolo Mendoza'),
('EDUC', 'Representative', 'Nina David'),
('EDUC', 'Representative', 'Mark Chua'),

-- Insert candidates for ENG
-- President
('ENG', 'President', 'Karl Dizon'),
('ENG', 'President', 'Bianca Lim'),
('ENG', 'President', 'Lance Go'),
('ENG', 'President', 'Patricia Cruz'),
-- Vice President
('ENG', 'Vice President', 'Aldrin Ramos'),
('ENG', 'Vice President', 'Rea Uy'),
('ENG', 'Vice President', 'Jerome Castillo'),
('ENG', 'Vice President', 'Sofia Robles'),
-- Secretary
('ENG', 'Secretary', 'Paolo David'),
('ENG', 'Secretary', 'Erika Go'),
('ENG', 'Secretary', 'Joshua Torres'),
('ENG', 'Secretary', 'Lianne Santos'),
-- Treasurer
('ENG', 'Treasurer', 'Nico Mercado'),
('ENG', 'Treasurer', 'Hannah Cruz'),
('ENG', 'Treasurer', 'Adrian Chua'),
('ENG', 'Treasurer', 'Bea Dela Vega'),
-- Auditor
('ENG', 'Auditor', 'Kim Bautista'),
('ENG', 'Auditor', 'Janelle Ramos'),
('ENG', 'Auditor', 'Carlo Ong'),
('ENG', 'Auditor', 'Faith Mendoza'),
-- PIO
('ENG', 'PIO', 'Patrick Sison'),
('ENG', 'PIO', 'Camille Go'),
('ENG', 'PIO', 'Leo Reyes'),
('ENG', 'PIO', 'Nina Torres'),
-- Business Manager
('ENG', 'Business Manager', 'Marco Yao'),
('ENG', 'Business Manager', 'Lara Castillo'),
('ENG', 'Business Manager', 'Kris Lim'),
('ENG', 'Business Manager', 'Angelo Fabro'),
-- Representative
('ENG', 'Representative', 'Hannah Uy'),
('ENG', 'Representative', 'AJ Cruz'),
('ENG', 'Representative', 'Kevin Santos'),
('ENG', 'Representative', 'Trisha Ong'),

-- Insert candidates for NURS
-- President
('NURS', 'President', 'Erika Santos'),
('NURS', 'President', 'Carlo Uy'),
('NURS', 'President', 'Bea Lim'),
('NURS', 'President', 'Nathan Ramos'),
-- Vice President
('NURS', 'Vice President', 'Faith Torres'),
('NURS', 'Vice President', 'Enzo Castillo'),
('NURS', 'Vice President', 'Lara Dela Vega'),
('NURS', 'Vice President', 'Paolo Go'),
-- Secretary
('NURS', 'Secretary', 'Mika Robles'),
('NURS', 'Secretary', 'Jomar Cruz'),
('NURS', 'Secretary', 'Hannah Tan'),
('NURS', 'Secretary', 'Louie David'),
-- Treasurer
('NURS', 'Treasurer', 'Janelle Ramos'),
('NURS', 'Treasurer', 'Aldrin Chua'),
('NURS', 'Treasurer', 'Camille Yao'),
('NURS', 'Treasurer', 'Trina Fabro'),
-- Auditor
('NURS', 'Auditor', 'Bryan Lim'),
('NURS', 'Auditor', 'Nina Sarmiento'),
('NURS', 'Auditor', 'Patrick Mendoza'),
('NURS', 'Auditor', 'Angela Go'),
-- PIO
('NURS', 'PIO', 'Carlo Dela Peña'),
('NURS', 'PIO', 'Rhea Torres'),
('NURS', 'PIO', 'Kris Castillo'),
('NURS', 'PIO', 'Faye Lopez'),
-- Business Manager
('NURS', 'Business Manager', 'Nathan Uy'),
('NURS', 'Business Manager', 'Bea Dizon'),
('NURS', 'Business Manager', 'Adrian Ramos'),
('NURS', 'Business Manager', 'Sofia Cruz'),
-- Representative
('NURS', 'Representative', 'AJ Santos'),
('NURS', 'Representative', 'Lara Go'),
('NURS', 'Representative', 'Marco Villanueva'),
('NURS', 'Representative', 'Denise Uy'),

-- Insert candidates for PSYCH
-- President
('PSYCH', 'President', 'Justine Ragaza'),
('PSYCH', 'President', 'Erika Cruz'),
('PSYCH', 'President', 'Lance Mendoza'),
('PSYCH', 'President', 'Bea Villanueva'),
-- Vice President
('PSYCH', 'Vice President', 'Carlo Uy'),
('PSYCH', 'Vice President', 'Faith Ramos'),
('PSYCH', 'Vice President', 'Adrian Go'),
('PSYCH', 'Vice President', 'Lara Dela Vega'),
-- Secretary
('PSYCH', 'Secretary', 'Hannah Tan'),
('PSYCH', 'Secretary', 'Jerome Castillo'),
('PSYCH', 'Secretary', 'Mika Torres'),
('PSYCH', 'Secretary', 'Paolo Bautista'),
-- Treasurer
('PSYCH', 'Treasurer', 'Bianca Lim'),
('PSYCH', 'Treasurer', 'Nathan Sarmiento'),
('PSYCH', 'Treasurer', 'Trisha Uy'),
('PSYCH', 'Treasurer', 'Louie Ramos'),
-- Auditor
('PSYCH', 'Auditor', 'Kim Dizon'),
('PSYCH', 'Auditor', 'Patrick Santos'),
('PSYCH', 'Auditor', 'Janelle David'),
('PSYCH', 'Auditor', 'Carlo Robles'),
-- PIO
('PSYCH', 'PIO', 'Erika Go'),
('PSYCH', 'PIO', 'Rina Uy'),
('PSYCH', 'PIO', 'Nico Chua'),
('PSYCH', 'PIO', 'Patricia Mendoza'),
-- Business Manager
('PSYCH', 'Business Manager', 'Bea Yao'),
('PSYCH', 'Business Manager', 'Aldrin Lim'),
('PSYCH', 'Business Manager', 'Marco Dela Cruz'),
('PSYCH', 'Business Manager', 'Camille Torres'),
-- Representative
('PSYCH', 'Representative', 'AJ Villanueva'),
('PSYCH', 'Representative', 'Lara Go'),
('PSYCH', 'Representative', 'Hannah Uy'),
('PSYCH', 'Representative', 'Angelo Fabro');