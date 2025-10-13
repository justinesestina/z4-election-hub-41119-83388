-- Insert the 8 departments
INSERT INTO public.departments (short_code, name, icon_name, color_hex) VALUES
('CCS', 'College of Computer Studies', 'Laptop', '#8B5CF6'),
('BSED', 'Bachelor of Secondary Education', 'GraduationCap', '#3B82F6'),
('BEED', 'Bachelor of Elementary Education', 'BookOpen', '#10B981'),
('BSBA', 'Bachelor of Science in Business Administration', 'Briefcase', '#F59E0B'),
('BSIT', 'Bachelor of Science in Information Technology', 'Code', '#EF4444'),
('BSCRIM', 'Bachelor of Science in Criminology', 'Shield', '#EC4899'),
('BSHM', 'Bachelor of Science in Hospitality Management', 'Utensils', '#14B8A6'),
('BSTM', 'Bachelor of Science in Tourism Management', 'Plane', '#F97316')
ON CONFLICT (short_code) DO NOTHING;

-- Insert sample candidates for each department and position
-- CCS Department
INSERT INTO public.candidates (department, position, candidate_name, year_level) VALUES
('CCS', 'President', 'John Dela Cruz', '4th Year'),
('CCS', 'President', 'Maria Santos', '4th Year'),
('CCS', 'Vice President', 'Pedro Reyes', '3rd Year'),
('CCS', 'Vice President', 'Ana Garcia', '3rd Year'),
('CCS', 'Secretary', 'Jose Ramos', '2nd Year'),
('CCS', 'Secretary', 'Lisa Torres', '2nd Year'),
('CCS', 'Treasurer', 'Mark Gonzales', '3rd Year'),
('CCS', 'Treasurer', 'Jane Fernandez', '3rd Year'),
('CCS', 'Auditor', 'Carlos Mendoza', '2nd Year'),
('CCS', 'Auditor', 'Sofia Martinez', '2nd Year'),
('CCS', 'PIO', 'Miguel Cruz', '1st Year'),
('CCS', 'PIO', 'Isabella Lopez', '1st Year'),
('CCS', 'Business Manager', 'David Rivera', '3rd Year'),
('CCS', 'Business Manager', 'Emma Sanchez', '3rd Year'),
('CCS', 'Representative', 'Luis Gutierrez', '2nd Year'),
('CCS', 'Representative', 'Olivia Morales', '2nd Year')
ON CONFLICT DO NOTHING;

-- BSED Department  
INSERT INTO public.candidates (department, position, candidate_name, year_level) VALUES
('BSED', 'President', 'Robert Santos', '4th Year'),
('BSED', 'President', 'Angela Cruz', '4th Year'),
('BSED', 'Vice President', 'Daniel Flores', '3rd Year'),
('BSED', 'Vice President', 'Patricia Reyes', '3rd Year'),
('BSED', 'Secretary', 'Ricardo Mendez', '2nd Year'),
('BSED', 'Secretary', 'Carmen Garcia', '2nd Year'),
('BSED', 'Treasurer', 'Fernando Torres', '3rd Year'),
('BSED', 'Treasurer', 'Gloria Ramos', '3rd Year'),
('BSED', 'Auditor', 'Antonio Lopez', '2nd Year'),
('BSED', 'Auditor', 'Teresa Martinez', '2nd Year'),
('BSED', 'PIO', 'Manuel Gonzales', '1st Year'),
('BSED', 'PIO', 'Rosa Fernandez', '1st Year'),
('BSED', 'Business Manager', 'Jorge Rivera', '3rd Year'),
('BSED', 'Business Manager', 'Elena Sanchez', '3rd Year'),
('BSED', 'Representative', 'Rodrigo Morales', '2nd Year'),
('BSED', 'Representative', 'Lucia Gutierrez', '2nd Year')
ON CONFLICT DO NOTHING;

-- BEED Department
INSERT INTO public.candidates (department, position, candidate_name, year_level) VALUES
('BEED', 'President', 'Gabriel Santos', '4th Year'),
('BEED', 'President', 'Victoria Cruz', '4th Year'),
('BEED', 'Vice President', 'Rafael Flores', '3rd Year'),
('BEED', 'Vice President', 'Beatriz Reyes', '3rd Year'),
('BEED', 'Secretary', 'Marcos Mendez', '2nd Year'),
('BEED', 'Secretary', 'Cristina Garcia', '2nd Year'),
('BEED', 'Treasurer', 'Alberto Torres', '3rd Year'),
('BEED', 'Treasurer', 'Diana Ramos', '3rd Year'),
('BEED', 'Auditor', 'Francisco Lopez', '2nd Year'),
('BEED', 'Auditor', 'Monica Martinez', '2nd Year'),
('BEED', 'PIO', 'Sergio Gonzales', '1st Year'),
('BEED', 'PIO', 'Adriana Fernandez', '1st Year'),
('BEED', 'Business Manager', 'Enrique Rivera', '3rd Year'),
('BEED', 'Business Manager', 'Valentina Sanchez', '3rd Year'),
('BEED', 'Representative', 'Alejandro Morales', '2nd Year'),
('BEED', 'Representative', 'Camila Gutierrez', '2nd Year')
ON CONFLICT DO NOTHING;

-- BSBA Department
INSERT INTO public.candidates (department, position, candidate_name, year_level) VALUES
('BSBA', 'President', 'Leonardo Santos', '4th Year'),
('BSBA', 'President', 'Natalia Cruz', '4th Year'),
('BSBA', 'Vice President', 'Mateo Flores', '3rd Year'),
('BSBA', 'Vice President', 'Catalina Reyes', '3rd Year'),
('BSBA', 'Secretary', 'Santiago Mendez', '2nd Year'),
('BSBA', 'Secretary', 'Gabriela Garcia', '2nd Year'),
('BSBA', 'Treasurer', 'Diego Torres', '3rd Year'),
('BSBA', 'Treasurer', 'Mariana Ramos', '3rd Year'),
('BSBA', 'Auditor', 'Sebastian Lopez', '2nd Year'),
('BSBA', 'Auditor', 'Juliana Martinez', '2nd Year'),
('BSBA', 'PIO', 'Nicolas Gonzales', '1st Year'),
('BSBA', 'PIO', 'Andrea Fernandez', '1st Year'),
('BSBA', 'Business Manager', 'Felipe Rivera', '3rd Year'),
('BSBA', 'Business Manager', 'Carolina Sanchez', '3rd Year'),
('BSBA', 'Representative', 'Andres Morales', '2nd Year'),
('BSBA', 'Representative', 'Valeria Gutierrez', '2nd Year')
ON CONFLICT DO NOTHING;

-- BSIT Department
INSERT INTO public.candidates (department, position, candidate_name, year_level) VALUES
('BSIT', 'President', 'Pablo Santos', '4th Year'),
('BSIT', 'President', 'Fernanda Cruz', '4th Year'),
('BSIT', 'Vice President', 'Emilio Flores', '3rd Year'),
('BSIT', 'Vice President', 'Daniela Reyes', '3rd Year'),
('BSIT', 'Secretary', 'Raul Mendez', '2nd Year'),
('BSIT', 'Secretary', 'Claudia Garcia', '2nd Year'),
('BSIT', 'Treasurer', 'Omar Torres', '3rd Year'),
('BSIT', 'Treasurer', 'Paola Ramos', '3rd Year'),
('BSIT', 'Auditor', 'Hector Lopez', '2nd Year'),
('BSIT', 'Auditor', 'Veronica Martinez', '2nd Year'),
('BSIT', 'PIO', 'Ivan Gonzales', '1st Year'),
('BSIT', 'PIO', 'Silvia Fernandez', '1st Year'),
('BSIT', 'Business Manager', 'Arturo Rivera', '3rd Year'),
('BSIT', 'Business Manager', 'Laura Sanchez', '3rd Year'),
('BSIT', 'Representative', 'Hugo Morales', '2nd Year'),
('BSIT', 'Representative', 'Martina Gutierrez', '2nd Year')
ON CONFLICT DO NOTHING;

-- BSCRIM Department
INSERT INTO public.candidates (department, position, candidate_name, year_level) VALUES
('BSCRIM', 'President', 'Ramon Santos', '4th Year'),
('BSCRIM', 'President', 'Alicia Cruz', '4th Year'),
('BSCRIM', 'Vice President', 'Gustavo Flores', '3rd Year'),
('BSCRIM', 'Vice President', 'Lorena Reyes', '3rd Year'),
('BSCRIM', 'Secretary', 'Eduardo Mendez', '2nd Year'),
('BSCRIM', 'Secretary', 'Margarita Garcia', '2nd Year'),
('BSCRIM', 'Treasurer', 'Alfredo Torres', '3rd Year'),
('BSCRIM', 'Treasurer', 'Angelica Ramos', '3rd Year'),
('BSCRIM', 'Auditor', 'Ernesto Lopez', '2nd Year'),
('BSCRIM', 'Auditor', 'Susana Martinez', '2nd Year'),
('BSCRIM', 'PIO', 'Cesar Gonzales', '1st Year'),
('BSCRIM', 'PIO', 'Cecilia Fernandez', '1st Year'),
('BSCRIM', 'Business Manager', 'Ruben Rivera', '3rd Year'),
('BSCRIM', 'Business Manager', 'Marta Sanchez', '3rd Year'),
('BSCRIM', 'Representative', 'Javier Morales', '2nd Year'),
('BSCRIM', 'Representative', 'Esperanza Gutierrez', '2nd Year')
ON CONFLICT DO NOTHING;

-- BSHM Department
INSERT INTO public.candidates (department, position, candidate_name, year_level) VALUES
('BSHM', 'President', 'Armando Santos', '4th Year'),
('BSHM', 'President', 'Dolores Cruz', '4th Year'),
('BSHM', 'Vice President', 'Lorenzo Flores', '3rd Year'),
('BSHM', 'Vice President', 'Pilar Reyes', '3rd Year'),
('BSHM', 'Secretary', 'Salvador Mendez', '2nd Year'),
('BSHM', 'Secretary', 'Rosario Garcia', '2nd Year'),
('BSHM', 'Treasurer', 'Gregorio Torres', '3rd Year'),
('BSHM', 'Treasurer', 'Mercedes Ramos', '3rd Year'),
('BSHM', 'Auditor', 'Ignacio Lopez', '2nd Year'),
('BSHM', 'Auditor', 'Remedios Martinez', '2nd Year'),
('BSHM', 'PIO', 'Benito Gonzales', '1st Year'),
('BSHM', 'PIO', 'Concepcion Fernandez', '1st Year'),
('BSHM', 'Business Manager', 'Vicente Rivera', '3rd Year'),
('BSHM', 'Business Manager', 'Amparo Sanchez', '3rd Year'),
('BSHM', 'Representative', 'Leandro Morales', '2nd Year'),
('BSHM', 'Representative', 'Consuelo Gutierrez', '2nd Year')
ON CONFLICT DO NOTHING;

-- BSTM Department
INSERT INTO public.candidates (department, position, candidate_name, year_level) VALUES
('BSTM', 'President', 'Esteban Santos', '4th Year'),
('BSTM', 'President', 'Estrella Cruz', '4th Year'),
('BSTM', 'Vice President', 'Joaquin Flores', '3rd Year'),
('BSTM', 'Vice President', 'Soledad Reyes', '3rd Year'),
('BSTM', 'Secretary', 'Mauricio Mendez', '2nd Year'),
('BSTM', 'Secretary', 'Milagros Garcia', '2nd Year'),
('BSTM', 'Treasurer', 'Reynaldo Torres', '3rd Year'),
('BSTM', 'Treasurer', 'Asuncion Ramos', '3rd Year'),
('BSTM', 'Auditor', 'Teodoro Lopez', '2nd Year'),
('BSTM', 'Auditor', 'Purificacion Martinez', '2nd Year'),
('BSTM', 'PIO', 'Domingo Gonzales', '1st Year'),
('BSTM', 'PIO', 'Trinidad Fernandez', '1st Year'),
('BSTM', 'Business Manager', 'Bernardo Rivera', '3rd Year'),
('BSTM', 'Business Manager', 'Encarnacion Sanchez', '3rd Year'),
('BSTM', 'Representative', 'Baltazar Morales', '2nd Year'),
('BSTM', 'Representative', 'Socorro Gutierrez', '2nd Year')
ON CONFLICT DO NOTHING;

-- Insert sample partylists for each department
INSERT INTO public.partylists (department, name, description) VALUES
('CCS', 'Tech Innovators', 'Advancing technology and innovation in CCS'),
('CCS', 'Digital Leaders', 'Leading the digital transformation'),
('BSED', 'Educators United', 'United for quality education'),
('BSED', 'Teaching Excellence', 'Excellence in education'),
('BEED', 'Future Teachers', 'Building the future of education'),
('BEED', 'Elementary Advocates', 'Advocating for elementary education'),
('BSBA', 'Business Pioneers', 'Pioneering business leadership'),
('BSBA', 'Commerce Alliance', 'United for business excellence'),
('BSIT', 'IT Innovators', 'Innovation in information technology'),
('BSIT', 'Tech Advance', 'Advancing technology forward'),
('BSCRIM', 'Justice League', 'Fighting for justice and law'),
('BSCRIM', 'Law Enforcers', 'Enforcing law and order'),
('BSHM', 'Hospitality First', 'Excellence in hospitality'),
('BSHM', 'Service Leaders', 'Leading through service'),
('BSTM', 'Tourism Ambassadors', 'Promoting tourism excellence'),
('BSTM', 'Travel Pioneers', 'Pioneering in tourism')
ON CONFLICT DO NOTHING;

-- Initialize election status for all departments
INSERT INTO public.election_status (department, status) VALUES
('CCS', 'active'),
('BSED', 'active'),
('BEED', 'active'),
('BSBA', 'active'),
('BSIT', 'active'),
('BSCRIM', 'active'),
('BSHM', 'active'),
('BSTM', 'active')
ON CONFLICT (department) DO UPDATE SET status = 'active';