-- Delete all existing candidates
DELETE FROM candidates;

-- Insert 3-4 Filipino candidates for each position in all departments
-- CCS (College of Computer Studies)
INSERT INTO candidates (department, position, candidate_name) VALUES
-- President
('CCS', 'President', 'Juan Dela Cruz'),
('CCS', 'President', 'Maria Santos'),
('CCS', 'President', 'Jose Rizal'),
('CCS', 'President', 'Ana Reyes'),
-- Vice President
('CCS', 'Vice President', 'Mark Villanueva'),
('CCS', 'Vice President', 'Carla Tan'),
('CCS', 'Vice President', 'Luis Garcia'),
('CCS', 'Vice President', 'Jenny Flores'),
-- Programming Head
('CCS', 'Programming Head', 'Daniel Cruz'),
('CCS', 'Programming Head', 'Jessa Flores'),
('CCS', 'Programming Head', 'Ryan Gonzales'),
('CCS', 'Programming Head', 'Katrina Soriano'),
-- Network Lead
('CCS', 'Network Lead', 'Paolo Reyes'),
('CCS', 'Network Lead', 'Maricar Aquino'),
('CCS', 'Network Lead', 'Nestor Tan'),
('CCS', 'Network Lead', 'Dianne Marcos'),
-- Systems Analyst
('CCS', 'Systems Analyst', 'Rico Ramos'),
('CCS', 'Systems Analyst', 'Jenny Dela Torre'),
('CCS', 'Systems Analyst', 'Miguel Alonzo'),
('CCS', 'Systems Analyst', 'Sheila Bautista'),
-- IT Coordinator
('CCS', 'IT Coordinator', 'Francis Lopez'),
('CCS', 'IT Coordinator', 'Erika Mendoza'),
('CCS', 'IT Coordinator', 'Paolo Bautista'),
('CCS', 'IT Coordinator', 'Liza Santos'),
-- Project Manager
('CCS', 'Project Manager', 'Angelo Cruz'),
('CCS', 'Project Manager', 'Maria Garcia'),
('CCS', 'Project Manager', 'Carlos Reyes'),
('CCS', 'Project Manager', 'Nina Tan'),
-- Security Lead
('CCS', 'Security Lead', 'Lito Mercado'),
('CCS', 'Security Lead', 'Rosa Villanueva'),
('CCS', 'Security Lead', 'Pedro Ramos'),
('CCS', 'Security Lead', 'Gloria Cruz');

-- NURSING
INSERT INTO candidates (department, position, candidate_name) VALUES
-- President
('NURSING', 'President', 'Rosa Mendoza'),
('NURSING', 'President', 'Carlos Santos'),
('NURSING', 'President', 'Elena Reyes'),
('NURSING', 'President', 'Rafael Cruz'),
-- Vice President
('NURSING', 'Vice President', 'Isabel Garcia'),
('NURSING', 'Vice President', 'Miguel Flores'),
('NURSING', 'Vice President', 'Sofia Villanueva'),
('NURSING', 'Vice President', 'Antonio Tan'),
-- Head Nurse
('NURSING', 'Head Nurse', 'Carmen Lopez'),
('NURSING', 'Head Nurse', 'Ricardo Bautista'),
('NURSING', 'Head Nurse', 'Teresa Gonzales'),
('NURSING', 'Head Nurse', 'Fernando Ramos'),
-- Clinical Coordinator
('NURSING', 'Clinical Coordinator', 'Lucia Mercado'),
('NURSING', 'Clinical Coordinator', 'Roberto Dela Cruz'),
('NURSING', 'Clinical Coordinator', 'Patricia Santos'),
('NURSING', 'Clinical Coordinator', 'Eduardo Garcia'),
-- Ward Supervisor
('NURSING', 'Ward Supervisor', 'Angela Reyes'),
('NURSING', 'Ward Supervisor', 'Manuel Torres'),
('NURSING', 'Ward Supervisor', 'Diana Cruz'),
('NURSING', 'Ward Supervisor', 'Francisco Flores'),
-- Training Officer
('NURSING', 'Training Officer', 'Beatriz Tan'),
('NURSING', 'Training Officer', 'Rodrigo Villanueva'),
('NURSING', 'Training Officer', 'Cecilia Ramos'),
('NURSING', 'Training Officer', 'Emilio Mercado'),
-- Patient Care Lead
('NURSING', 'Patient Care Lead', 'Victoria Santos'),
('NURSING', 'Patient Care Lead', 'Alfredo Cruz'),
('NURSING', 'Patient Care Lead', 'Margarita Garcia'),
('NURSING', 'Patient Care Lead', 'Enrique Reyes'),
-- Shift Manager
('NURSING', 'Shift Manager', 'Rosario Flores'),
('NURSING', 'Shift Manager', 'Gabriel Tan'),
('NURSING', 'Shift Manager', 'Dolores Villanueva'),
('NURSING', 'Shift Manager', 'Ramon Bautista');

-- PSYCHOLOGY
INSERT INTO candidates (department, position, candidate_name) VALUES
-- President
('PSYCHOLOGY', 'President', 'Andrea Santos'),
('PSYCHOLOGY', 'President', 'Marco Reyes'),
('PSYCHOLOGY', 'President', 'Isabela Cruz'),
('PSYCHOLOGY', 'President', 'Diego Garcia'),
-- Vice President
('PSYCHOLOGY', 'Vice President', 'Gabriela Flores'),
('PSYCHOLOGY', 'Vice President', 'Lorenzo Tan'),
('PSYCHOLOGY', 'Vice President', 'Camila Villanueva'),
('PSYCHOLOGY', 'Vice President', 'Sebastian Ramos'),
-- Research Coordinator
('PSYCHOLOGY', 'Research Coordinator', 'Valentina Mercado'),
('PSYCHOLOGY', 'Research Coordinator', 'Mateo Dela Cruz'),
('PSYCHOLOGY', 'Research Coordinator', 'Luna Santos'),
('PSYCHOLOGY', 'Research Coordinator', 'Nicolas Garcia'),
-- Clinical Affairs Head
('PSYCHOLOGY', 'Clinical Affairs Head', 'Sofia Reyes'),
('PSYCHOLOGY', 'Clinical Affairs Head', 'Santiago Torres'),
('PSYCHOLOGY', 'Clinical Affairs Head', 'Mia Cruz'),
('PSYCHOLOGY', 'Clinical Affairs Head', 'Lucas Flores'),
-- Counseling Lead
('PSYCHOLOGY', 'Counseling Lead', 'Emma Tan'),
('PSYCHOLOGY', 'Counseling Lead', 'Daniel Villanueva'),
('PSYCHOLOGY', 'Counseling Lead', 'Olivia Ramos'),
('PSYCHOLOGY', 'Counseling Lead', 'Alexander Mercado'),
-- Assessment Officer
('PSYCHOLOGY', 'Assessment Officer', 'Isabella Santos'),
('PSYCHOLOGY', 'Assessment Officer', 'Benjamin Cruz'),
('PSYCHOLOGY', 'Assessment Officer', 'Amelia Garcia'),
('PSYCHOLOGY', 'Assessment Officer', 'Samuel Reyes'),
-- Mental Health Advocate
('PSYCHOLOGY', 'Mental Health Advocate', 'Charlotte Flores'),
('PSYCHOLOGY', 'Mental Health Advocate', 'Joseph Tan'),
('PSYCHOLOGY', 'Mental Health Advocate', 'Ava Villanueva'),
('PSYCHOLOGY', 'Mental Health Advocate', 'Henry Bautista'),
-- Behavioral Studies Head
('PSYCHOLOGY', 'Behavioral Studies Head', 'Mila Santos'),
('PSYCHOLOGY', 'Behavioral Studies Head', 'Jacob Reyes'),
('PSYCHOLOGY', 'Behavioral Studies Head', 'Ella Cruz'),
('PSYCHOLOGY', 'Behavioral Studies Head', 'Michael Garcia');

-- ENGINEERING
INSERT INTO candidates (department, position, candidate_name) VALUES
-- President
('ENGINEERING', 'President', 'Rafael Mendoza'),
('ENGINEERING', 'President', 'Carmen Lopez'),
('ENGINEERING', 'President', 'Antonio Bautista'),
('ENGINEERING', 'President', 'Teresa Gonzales'),
-- Vice President
('ENGINEERING', 'Vice President', 'Fernando Ramos'),
('ENGINEERING', 'Vice President', 'Lucia Mercado'),
('ENGINEERING', 'Vice President', 'Roberto Dela Cruz'),
('ENGINEERING', 'Vice President', 'Patricia Santos'),
-- Chief Engineer
('ENGINEERING', 'Chief Engineer', 'Eduardo Garcia'),
('ENGINEERING', 'Chief Engineer', 'Angela Reyes'),
('ENGINEERING', 'Chief Engineer', 'Manuel Torres'),
('ENGINEERING', 'Chief Engineer', 'Diana Cruz'),
-- Design Lead
('ENGINEERING', 'Design Lead', 'Francisco Flores'),
('ENGINEERING', 'Design Lead', 'Beatriz Tan'),
('ENGINEERING', 'Design Lead', 'Rodrigo Villanueva'),
('ENGINEERING', 'Design Lead', 'Cecilia Ramos'),
-- Project Supervisor
('ENGINEERING', 'Project Supervisor', 'Emilio Mercado'),
('ENGINEERING', 'Project Supervisor', 'Victoria Santos'),
('ENGINEERING', 'Project Supervisor', 'Alfredo Cruz'),
('ENGINEERING', 'Project Supervisor', 'Margarita Garcia'),
-- Technical Coordinator
('ENGINEERING', 'Technical Coordinator', 'Enrique Reyes'),
('ENGINEERING', 'Technical Coordinator', 'Rosario Flores'),
('ENGINEERING', 'Technical Coordinator', 'Gabriel Tan'),
('ENGINEERING', 'Technical Coordinator', 'Dolores Villanueva'),
-- Quality Assurance Head
('ENGINEERING', 'Quality Assurance Head', 'Ramon Bautista'),
('ENGINEERING', 'Quality Assurance Head', 'Consuelo Santos'),
('ENGINEERING', 'Quality Assurance Head', 'Arturo Reyes'),
('ENGINEERING', 'Quality Assurance Head', 'Esperanza Cruz'),
-- Safety Officer
('ENGINEERING', 'Safety Officer', 'Sergio Garcia'),
('ENGINEERING', 'Safety Officer', 'Remedios Flores'),
('ENGINEERING', 'Safety Officer', 'Leandro Tan'),
('ENGINEERING', 'Safety Officer', 'Amparo Villanueva');

-- CAS (College of Arts and Sciences)
INSERT INTO candidates (department, position, candidate_name) VALUES
-- President
('CAS', 'President', 'Cristina Ramos'),
('CAS', 'President', 'Ignacio Mercado'),
('CAS', 'President', 'Josefa Dela Cruz'),
('CAS', 'President', 'Domingo Santos'),
-- Vice President
('CAS', 'Vice President', 'Felicidad Garcia'),
('CAS', 'Vice President', 'Herminio Reyes'),
('CAS', 'Vice President', 'Milagros Torres'),
('CAS', 'Vice President', 'Gregorio Cruz'),
-- Academic Affairs Head
('CAS', 'Academic Affairs Head', 'Leonora Flores'),
('CAS', 'Academic Affairs Head', 'Salvador Tan'),
('CAS', 'Academic Affairs Head', 'Pilar Villanueva'),
('CAS', 'Academic Affairs Head', 'Augusto Ramos'),
-- Research Coordinator
('CAS', 'Research Coordinator', 'Teresita Mercado'),
('CAS', 'Research Coordinator', 'Virgilio Santos'),
('CAS', 'Research Coordinator', 'Socorro Cruz'),
('CAS', 'Research Coordinator', 'Eugenio Garcia'),
-- Cultural Affairs Lead
('CAS', 'Cultural Affairs Lead', 'Perpetua Reyes'),
('CAS', 'Cultural Affairs Lead', 'Clemente Flores'),
('CAS', 'Cultural Affairs Lead', 'Visitacion Tan'),
('CAS', 'Cultural Affairs Lead', 'Macario Villanueva'),
-- Publications Officer
('CAS', 'Publications Officer', 'Paz Bautista'),
('CAS', 'Publications Officer', 'Esteban Santos'),
('CAS', 'Publications Officer', 'Soledad Reyes'),
('CAS', 'Publications Officer', 'Tranquilino Cruz'),
-- Science Division Head
('CAS', 'Science Division Head', 'Asuncion Garcia'),
('CAS', 'Science Division Head', 'Bonifacio Flores'),
('CAS', 'Science Division Head', 'Purificacion Tan'),
('CAS', 'Science Division Head', 'Simeon Villanueva'),
-- Humanities Lead
('CAS', 'Humanities Lead', 'Trinidad Ramos'),
('CAS', 'Humanities Lead', 'Lazaro Mercado'),
('CAS', 'Humanities Lead', 'Encarnacion Dela Cruz'),
('CAS', 'Humanities Lead', 'Valentin Santos');

-- CBA (College of Business Administration)
INSERT INTO candidates (department, position, candidate_name) VALUES
-- President
('CBA', 'President', 'Estrella Garcia'),
('CBA', 'President', 'Florencio Reyes'),
('CBA', 'President', 'Norma Torres'),
('CBA', 'President', 'Alfredo Cruz'),
-- Vice President
('CBA', 'Vice President', 'Pacita Flores'),
('CBA', 'Vice President', 'Bernardo Tan'),
('CBA', 'Vice President', 'Gloria Villanueva'),
('CBA', 'Vice President', 'Faustino Ramos'),
-- Finance Head
('CBA', 'Finance Head', 'Rosalinda Mercado'),
('CBA', 'Finance Head', 'Eliseo Santos'),
('CBA', 'Finance Head', 'Violeta Cruz'),
('CBA', 'Finance Head', 'Teodoro Garcia'),
-- Marketing Lead
('CBA', 'Marketing Lead', 'Natividad Reyes'),
('CBA', 'Marketing Lead', 'Casimiro Flores'),
('CBA', 'Marketing Lead', 'Adelaida Tan'),
('CBA', 'Marketing Lead', 'Honesto Villanueva'),
-- Operations Manager
('CBA', 'Operations Manager', 'Perla Bautista'),
('CBA', 'Operations Manager', 'Florante Santos'),
('CBA', 'Operations Manager', 'Corazon Reyes'),
('CBA', 'Operations Manager', 'Anastacio Cruz'),
-- Business Development Officer
('CBA', 'Business Development Officer', 'Delia Garcia'),
('CBA', 'Business Development Officer', 'Laureano Flores'),
('CBA', 'Business Development Officer', 'Carmencita Tan'),
('CBA', 'Business Development Officer', 'Ernesto Villanueva'),
-- Accounting Supervisor
('CBA', 'Accounting Supervisor', 'Jovita Ramos'),
('CBA', 'Accounting Supervisor', 'Severino Mercado'),
('CBA', 'Accounting Supervisor', 'Leticia Dela Cruz'),
('CBA', 'Accounting Supervisor', 'Patricio Santos'),
-- Entrepreneurship Coordinator
('CBA', 'Entrepreneurship Coordinator', 'Aida Garcia'),
('CBA', 'Entrepreneurship Coordinator', 'Nestor Reyes'),
('CBA', 'Entrepreneurship Coordinator', 'Lourdes Torres'),
('CBA', 'Entrepreneurship Coordinator', 'Hilario Cruz');

-- CTHM (College of Tourism and Hospitality Management)
INSERT INTO candidates (department, position, candidate_name) VALUES
-- President
('CTHM', 'President', 'Angelita Flores'),
('CTHM', 'President', 'Gerardo Tan'),
('CTHM', 'President', 'Imelda Villanueva'),
('CTHM', 'President', 'Rogelio Ramos'),
-- Vice President
('CTHM', 'Vice President', 'Zenaida Mercado'),
('CTHM', 'Vice President', 'Renato Santos'),
('CTHM', 'Vice President', 'Lydia Cruz'),
('CTHM', 'Vice President', 'Reynaldo Garcia'),
-- Tourism Affairs Head
('CTHM', 'Tourism Affairs Head', 'Erlinda Reyes'),
('CTHM', 'Tourism Affairs Head', 'Domingo Flores'),
('CTHM', 'Tourism Affairs Head', 'Josefa Tan'),
('CTHM', 'Tourism Affairs Head', 'Herminio Villanueva'),
-- Hospitality Coordinator
('CTHM', 'Hospitality Coordinator', 'Milagros Bautista'),
('CTHM', 'Hospitality Coordinator', 'Gregorio Santos'),
('CTHM', 'Hospitality Coordinator', 'Leonora Reyes'),
('CTHM', 'Hospitality Coordinator', 'Salvador Cruz'),
-- Events Manager
('CTHM', 'Events Manager', 'Pilar Garcia'),
('CTHM', 'Events Manager', 'Augusto Flores'),
('CTHM', 'Events Manager', 'Teresita Tan'),
('CTHM', 'Events Manager', 'Virgilio Villanueva'),
-- Culinary Arts Lead
('CTHM', 'Culinary Arts Lead', 'Socorro Ramos'),
('CTHM', 'Culinary Arts Lead', 'Eugenio Mercado'),
('CTHM', 'Culinary Arts Lead', 'Perpetua Dela Cruz'),
('CTHM', 'Culinary Arts Lead', 'Clemente Santos'),
-- Front Office Supervisor
('CTHM', 'Front Office Supervisor', 'Visitacion Garcia'),
('CTHM', 'Front Office Supervisor', 'Macario Reyes'),
('CTHM', 'Front Office Supervisor', 'Paz Torres'),
('CTHM', 'Front Office Supervisor', 'Esteban Cruz'),
-- Travel Operations Head
('CTHM', 'Travel Operations Head', 'Soledad Flores'),
('CTHM', 'Travel Operations Head', 'Tranquilino Tan'),
('CTHM', 'Travel Operations Head', 'Asuncion Villanueva'),
('CTHM', 'Travel Operations Head', 'Bonifacio Ramos');

-- CRIMINOLOGY
INSERT INTO candidates (department, position, candidate_name) VALUES
-- President
('CRIMINOLOGY', 'President', 'Purificacion Mercado'),
('CRIMINOLOGY', 'President', 'Simeon Dela Cruz'),
('CRIMINOLOGY', 'President', 'Trinidad Santos'),
('CRIMINOLOGY', 'President', 'Lazaro Garcia'),
-- Vice President
('CRIMINOLOGY', 'Vice President', 'Encarnacion Reyes'),
('CRIMINOLOGY', 'Vice President', 'Valentin Flores'),
('CRIMINOLOGY', 'Vice President', 'Estrella Tan'),
('CRIMINOLOGY', 'Vice President', 'Florencio Villanueva'),
-- Investigation Head
('CRIMINOLOGY', 'Investigation Head', 'Norma Bautista'),
('CRIMINOLOGY', 'Investigation Head', 'Alfredo Santos'),
('CRIMINOLOGY', 'Investigation Head', 'Pacita Reyes'),
('CRIMINOLOGY', 'Investigation Head', 'Bernardo Cruz'),
-- Security Coordinator
('CRIMINOLOGY', 'Security Coordinator', 'Gloria Garcia'),
('CRIMINOLOGY', 'Security Coordinator', 'Faustino Flores'),
('CRIMINOLOGY', 'Security Coordinator', 'Rosalinda Tan'),
('CRIMINOLOGY', 'Security Coordinator', 'Eliseo Villanueva'),
-- Legal Affairs Officer
('CRIMINOLOGY', 'Legal Affairs Officer', 'Violeta Ramos'),
('CRIMINOLOGY', 'Legal Affairs Officer', 'Teodoro Mercado'),
('CRIMINOLOGY', 'Legal Affairs Officer', 'Natividad Dela Cruz'),
('CRIMINOLOGY', 'Legal Affairs Officer', 'Casimiro Santos'),
-- Forensics Lead
('CRIMINOLOGY', 'Forensics Lead', 'Adelaida Garcia'),
('CRIMINOLOGY', 'Forensics Lead', 'Honesto Reyes'),
('CRIMINOLOGY', 'Forensics Lead', 'Perla Torres'),
('CRIMINOLOGY', 'Forensics Lead', 'Florante Cruz'),
-- Law Enforcement Liaison
('CRIMINOLOGY', 'Law Enforcement Liaison', 'Corazon Flores'),
('CRIMINOLOGY', 'Law Enforcement Liaison', 'Anastacio Tan'),
('CRIMINOLOGY', 'Law Enforcement Liaison', 'Delia Villanueva'),
('CRIMINOLOGY', 'Law Enforcement Liaison', 'Laureano Ramos'),
-- Public Safety Head
('CRIMINOLOGY', 'Public Safety Head', 'Carmencita Mercado'),
('CRIMINOLOGY', 'Public Safety Head', 'Ernesto Dela Cruz'),
('CRIMINOLOGY', 'Public Safety Head', 'Jovita Santos'),
('CRIMINOLOGY', 'Public Safety Head', 'Severino Garcia');

-- EDUCATION
INSERT INTO candidates (department, position, candidate_name) VALUES
-- President
('EDUCATION', 'President', 'Leticia Reyes'),
('EDUCATION', 'President', 'Patricio Flores'),
('EDUCATION', 'President', 'Aida Tan'),
('EDUCATION', 'President', 'Nestor Villanueva'),
-- Vice President
('EDUCATION', 'Vice President', 'Lourdes Bautista'),
('EDUCATION', 'Vice President', 'Hilario Santos'),
('EDUCATION', 'Vice President', 'Angelita Reyes'),
('EDUCATION', 'Vice President', 'Gerardo Cruz'),
-- Teaching Methods Head
('EDUCATION', 'Teaching Methods Head', 'Imelda Garcia'),
('EDUCATION', 'Teaching Methods Head', 'Rogelio Flores'),
('EDUCATION', 'Teaching Methods Head', 'Zenaida Tan'),
('EDUCATION', 'Teaching Methods Head', 'Renato Villanueva'),
-- Curriculum Coordinator
('EDUCATION', 'Curriculum Coordinator', 'Lydia Ramos'),
('EDUCATION', 'Curriculum Coordinator', 'Reynaldo Mercado'),
('EDUCATION', 'Curriculum Coordinator', 'Erlinda Dela Cruz'),
('EDUCATION', 'Curriculum Coordinator', 'Domingo Santos'),
-- Student Affairs Lead
('EDUCATION', 'Student Affairs Lead', 'Josefa Garcia'),
('EDUCATION', 'Student Affairs Lead', 'Herminio Reyes'),
('EDUCATION', 'Student Affairs Lead', 'Milagros Torres'),
('EDUCATION', 'Student Affairs Lead', 'Gregorio Cruz'),
-- Educational Technology Officer
('EDUCATION', 'Educational Technology Officer', 'Leonora Flores'),
('EDUCATION', 'Educational Technology Officer', 'Salvador Tan'),
('EDUCATION', 'Educational Technology Officer', 'Pilar Villanueva'),
('EDUCATION', 'Educational Technology Officer', 'Augusto Ramos'),
-- Practicum Supervisor
('EDUCATION', 'Practicum Supervisor', 'Teresita Mercado'),
('EDUCATION', 'Practicum Supervisor', 'Virgilio Santos'),
('EDUCATION', 'Practicum Supervisor', 'Socorro Cruz'),
('EDUCATION', 'Practicum Supervisor', 'Eugenio Garcia'),
-- Literacy Program Head
('EDUCATION', 'Literacy Program Head', 'Perpetua Reyes'),
('EDUCATION', 'Literacy Program Head', 'Clemente Flores'),
('EDUCATION', 'Literacy Program Head', 'Visitacion Tan'),
('EDUCATION', 'Literacy Program Head', 'Macario Villanueva');

-- AGRICULTURE
INSERT INTO candidates (department, position, candidate_name) VALUES
-- President
('AGRICULTURE', 'President', 'Paz Bautista'),
('AGRICULTURE', 'President', 'Esteban Santos'),
('AGRICULTURE', 'President', 'Soledad Reyes'),
('AGRICULTURE', 'President', 'Tranquilino Cruz'),
-- Vice President
('AGRICULTURE', 'Vice President', 'Asuncion Garcia'),
('AGRICULTURE', 'Vice President', 'Bonifacio Flores'),
('AGRICULTURE', 'Vice President', 'Purificacion Tan'),
('AGRICULTURE', 'Vice President', 'Simeon Villanueva'),
-- Crop Production Head
('AGRICULTURE', 'Crop Production Head', 'Trinidad Ramos'),
('AGRICULTURE', 'Crop Production Head', 'Lazaro Mercado'),
('AGRICULTURE', 'Crop Production Head', 'Encarnacion Dela Cruz'),
('AGRICULTURE', 'Crop Production Head', 'Valentin Santos'),
-- Livestock Coordinator
('AGRICULTURE', 'Livestock Coordinator', 'Estrella Garcia'),
('AGRICULTURE', 'Livestock Coordinator', 'Florencio Reyes'),
('AGRICULTURE', 'Livestock Coordinator', 'Norma Torres'),
('AGRICULTURE', 'Livestock Coordinator', 'Alfredo Cruz'),
-- Agricultural Research Lead
('AGRICULTURE', 'Agricultural Research Lead', 'Pacita Flores'),
('AGRICULTURE', 'Agricultural Research Lead', 'Bernardo Tan'),
('AGRICULTURE', 'Agricultural Research Lead', 'Gloria Villanueva'),
('AGRICULTURE', 'Agricultural Research Lead', 'Faustino Ramos'),
-- Farm Operations Manager
('AGRICULTURE', 'Farm Operations Manager', 'Rosalinda Mercado'),
('AGRICULTURE', 'Farm Operations Manager', 'Eliseo Santos'),
('AGRICULTURE', 'Farm Operations Manager', 'Violeta Cruz'),
('AGRICULTURE', 'Farm Operations Manager', 'Teodoro Garcia'),
-- Agribusiness Officer
('AGRICULTURE', 'Agribusiness Officer', 'Natividad Reyes'),
('AGRICULTURE', 'Agribusiness Officer', 'Casimiro Flores'),
('AGRICULTURE', 'Agribusiness Officer', 'Adelaida Tan'),
('AGRICULTURE', 'Agribusiness Officer', 'Honesto Villanueva'),
-- Sustainability Head
('AGRICULTURE', 'Sustainability Head', 'Perla Bautista'),
('AGRICULTURE', 'Sustainability Head', 'Florante Santos'),
('AGRICULTURE', 'Sustainability Head', 'Corazon Reyes'),
('AGRICULTURE', 'Sustainability Head', 'Anastacio Cruz');