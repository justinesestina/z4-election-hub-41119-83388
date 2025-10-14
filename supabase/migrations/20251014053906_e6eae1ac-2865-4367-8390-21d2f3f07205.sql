-- First, clear existing candidates and partylists to avoid duplicates
DELETE FROM candidates;
DELETE FROM partylists;

-- Insert comprehensive candidates for all 8 departments (4 candidates per position)

-- CCS (College of Computer Studies) - 32 candidates total
INSERT INTO candidates (department, position, candidate_name, year_level) VALUES
-- President
('CCS', 'President', 'John Michael Santos', '4th Year BSIT'),
('CCS', 'President', 'Maria Clara Reyes', '4th Year BSCS'),
('CCS', 'President', 'Carlos Emmanuel Cruz', '3rd Year BSIT'),
('CCS', 'President', 'Sarah Jane Dela Cruz', '4th Year BSIS'),
-- Vice President
('CCS', 'Vice President', 'James Patrick Gonzales', '3rd Year BSCS'),
('CCS', 'Vice President', 'Angela Marie Lopez', '4th Year BSIT'),
('CCS', 'Vice President', 'Rafael Antonio Bautista', '3rd Year BSIT'),
('CCS', 'Vice President', 'Christine Joy Mendoza', '4th Year BSCS'),
-- Secretary
('CCS', 'Secretary', 'Michelle Anne Torres', '3rd Year BSIS'),
('CCS', 'Secretary', 'Daniel Joseph Garcia', '2nd Year BSIT'),
('CCS', 'Secretary', 'Jasmine Marie Ramos', '3rd Year BSCS'),
('CCS', 'Secretary', 'Kevin Paul Santiago', '2nd Year BSIT'),
-- Treasurer
('CCS', 'Treasurer', 'Angelica Rose Fernandez', '3rd Year BSIT'),
('CCS', 'Treasurer', 'Mark Anthony Villanueva', '3rd Year BSCS'),
('CCS', 'Treasurer', 'Patricia Ann Manalo', '2nd Year BSIT'),
('CCS', 'Treasurer', 'Joshua Miguel Aquino', '3rd Year BSIS'),
-- Auditor
('CCS', 'Auditor', 'Nicole Marie Castro', '3rd Year BSCS'),
('CCS', 'Auditor', 'Francis Xavier Dizon', '2nd Year BSIT'),
('CCS', 'Auditor', 'Stephanie Grace Ocampo', '3rd Year BSIT'),
('CCS', 'Auditor', 'Adrian Kyle Mercado', '2nd Year BSCS'),
-- PIO
('CCS', 'PIO', 'Isabella Sofia Pascual', '2nd Year BSIT'),
('CCS', 'PIO', 'Nathan Gabriel Cruz', '3rd Year BSCS'),
('CCS', 'PIO', 'Samantha Nicole Tan', '2nd Year BSIT'),
('CCS', 'PIO', 'Ethan James Gomez', '3rd Year BSIS'),
-- Business Manager
('CCS', 'Business Manager', 'Gabriella Marie Santos', '3rd Year BSIT'),
('CCS', 'Business Manager', 'Matthew Alexander Lim', '2nd Year BSCS'),
('CCS', 'Business Manager', 'Natalie Grace Reyes', '3rd Year BSIT'),
('CCS', 'Business Manager', 'Christopher Ryan Perez', '2nd Year BSIS'),
-- Representative
('CCS', 'Representative', 'Sophia Catherine Rivera', '2nd Year BSIT'),
('CCS', 'Representative', 'Benjamin Joshua Torres', '3rd Year BSCS'),
('CCS', 'Representative', 'Olivia Marie Flores', '2nd Year BSIT'),
('CCS', 'Representative', 'Lucas Emmanuel Santos', '2nd Year BSCS');

-- BSED (Bachelor of Secondary Education) - 32 candidates total
INSERT INTO candidates (department, position, candidate_name, year_level) VALUES
-- President
('BSED', 'President', 'Anna Maria Santos', '4th Year'),
('BSED', 'President', 'Juan Pedro Garcia', '4th Year'),
('BSED', 'President', 'Sofia Isabel Cruz', '3rd Year'),
('BSED', 'President', 'Miguel Angel Reyes', '4th Year'),
-- Vice President
('BSED', 'Vice President', 'Elena Grace Mendoza', '3rd Year'),
('BSED', 'Vice President', 'Diego Emmanuel Lopez', '4th Year'),
('BSED', 'Vice President', 'Carmen Rosa Torres', '3rd Year'),
('BSED', 'Vice President', 'Ricardo Jose Bautista', '4th Year'),
-- Secretary
('BSED', 'Secretary', 'Luisa Marie Ramos', '3rd Year'),
('BSED', 'Secretary', 'Fernando Luis Santiago', '2nd Year'),
('BSED', 'Secretary', 'Teresa Ann Dela Cruz', '3rd Year'),
('BSED', 'Secretary', 'Antonio Miguel Fernandez', '2nd Year'),
-- Treasurer
('BSED', 'Treasurer', 'Patricia Joy Villanueva', '3rd Year'),
('BSED', 'Treasurer', 'Francisco Xavier Manalo', '3rd Year'),
('BSED', 'Treasurer', 'Beatriz Anne Aquino', '2nd Year'),
('BSED', 'Treasurer', 'Manuel Joseph Castro', '3rd Year'),
-- Auditor
('BSED', 'Auditor', 'Cecilia Marie Dizon', '3rd Year'),
('BSED', 'Auditor', 'Leonardo Paul Ocampo', '2nd Year'),
('BSED', 'Auditor', 'Margarita Rose Mercado', '3rd Year'),
('BSED', 'Auditor', 'Alberto Carlos Pascual', '2nd Year'),
-- PIO
('BSED', 'PIO', 'Valentina Grace Tan', '2nd Year'),
('BSED', 'PIO', 'Rafael Andres Gomez', '3rd Year'),
('BSED', 'PIO', 'Catalina Nicole Lim', '2nd Year'),
('BSED', 'PIO', 'Sebastian James Perez', '3rd Year'),
-- Business Manager
('BSED', 'Business Manager', 'Gabriela Sofia Rivera', '3rd Year'),
('BSED', 'Business Manager', 'Alejandro Ryan Flores', '2nd Year'),
('BSED', 'Business Manager', 'Isabella Catherine Santos', '3rd Year'),
('BSED', 'Business Manager', 'Joaquin Matthew Torres', '2nd Year'),
-- Representative
('BSED', 'Representative', 'Adriana Marie Garcia', '2nd Year'),
('BSED', 'Representative', 'Mateo Gabriel Cruz', '3rd Year'),
('BSED', 'Representative', 'Daniela Rose Reyes', '2nd Year'),
('BSED', 'Representative', 'Lorenzo Emmanuel Mendoza', '2nd Year');

-- BEED (Bachelor of Elementary Education) - 32 candidates total
INSERT INTO candidates (department, position, candidate_name, year_level) VALUES
-- President
('BEED', 'President', 'Maria Cristina Lopez', '4th Year'),
('BEED', 'President', 'Jose Ricardo Bautista', '4th Year'),
('BEED', 'President', 'Ana Luisa Ramos', '3rd Year'),
('BEED', 'President', 'Carlos Miguel Santiago', '4th Year'),
-- Vice President
('BEED', 'Vice President', 'Rosa Elena Fernandez', '3rd Year'),
('BEED', 'Vice President', 'Pedro Antonio Villanueva', '4th Year'),
('BEED', 'Vice President', 'Linda Grace Manalo', '3rd Year'),
('BEED', 'Vice President', 'Eduardo Jose Aquino', '4th Year'),
-- Secretary
('BEED', 'Secretary', 'Gloria Marie Castro', '3rd Year'),
('BEED', 'Secretary', 'Victor Luis Dizon', '2nd Year'),
('BEED', 'Secretary', 'Norma Ann Ocampo', '3rd Year'),
('BEED', 'Secretary', 'Ramon Miguel Mercado', '2nd Year'),
-- Treasurer
('BEED', 'Treasurer', 'Clara Joy Pascual', '3rd Year'),
('BEED', 'Treasurer', 'Enrique Xavier Tan', '3rd Year'),
('BEED', 'Treasurer', 'Dolores Anne Gomez', '2nd Year'),
('BEED', 'Treasurer', 'Armando Joseph Lim', '3rd Year'),
-- Auditor
('BEED', 'Auditor', 'Esperanza Marie Perez', '3rd Year'),
('BEED', 'Auditor', 'Federico Paul Rivera', '2nd Year'),
('BEED', 'Auditor', 'Soledad Rose Flores', '3rd Year'),
('BEED', 'Auditor', 'Guillermo Carlos Santos', '2nd Year'),
-- PIO
('BEED', 'PIO', 'Pilar Grace Torres', '2nd Year'),
('BEED', 'PIO', 'Alfredo Andres Garcia', '3rd Year'),
('BEED', 'PIO', 'Mercedes Nicole Cruz', '2nd Year'),
('BEED', 'PIO', 'Rodrigo James Reyes', '3rd Year'),
-- Business Manager
('BEED', 'Business Manager', 'Remedios Sofia Mendoza', '3rd Year'),
('BEED', 'Business Manager', 'Arturo Ryan Lopez', '2nd Year'),
('BEED', 'Business Manager', 'Concepcion Catherine Bautista', '3rd Year'),
('BEED', 'Business Manager', 'Benito Matthew Ramos', '2nd Year'),
-- Representative
('BEED', 'Representative', 'Josefina Marie Santiago', '2nd Year'),
('BEED', 'Representative', 'Salvador Gabriel Fernandez', '3rd Year'),
('BEED', 'Representative', 'Trinidad Rose Villanueva', '2nd Year'),
('BEED', 'Representative', 'Emilio Emmanuel Manalo', '2nd Year');

-- BSBA (Business Administration) - 32 candidates total
INSERT INTO candidates (department, position, candidate_name, year_level) VALUES
-- President
('BSBA', 'President', 'Jennifer Anne Cruz', '4th Year'),
('BSBA', 'President', 'Andrew James Santos', '4th Year'),
('BSBA', 'President', 'Katherine Marie Reyes', '3rd Year'),
('BSBA', 'President', 'Steven Michael Garcia', '4th Year'),
-- Vice President
('BSBA', 'Vice President', 'Michelle Grace Lopez', '3rd Year'),
('BSBA', 'Vice President', 'Robert Anthony Bautista', '4th Year'),
('BSBA', 'Vice President', 'Amanda Rose Ramos', '3rd Year'),
('BSBA', 'Vice President', 'Thomas Joseph Santiago', '4th Year'),
-- Secretary
('BSBA', 'Secretary', 'Jessica Marie Fernandez', '3rd Year'),
('BSBA', 'Secretary', 'Jonathan Luis Villanueva', '2nd Year'),
('BSBA', 'Secretary', 'Melissa Ann Manalo', '3rd Year'),
('BSBA', 'Secretary', 'David Miguel Aquino', '2nd Year'),
-- Treasurer
('BSBA', 'Treasurer', 'Elizabeth Joy Castro', '3rd Year'),
('BSBA', 'Treasurer', 'Christopher Xavier Dizon', '3rd Year'),
('BSBA', 'Treasurer', 'Rebecca Anne Ocampo', '2nd Year'),
('BSBA', 'Treasurer', 'Daniel Joseph Mercado', '3rd Year'),
-- Auditor
('BSBA', 'Auditor', 'Stephanie Marie Pascual', '3rd Year'),
('BSBA', 'Auditor', 'Richard Paul Tan', '2nd Year'),
('BSBA', 'Auditor', 'Lauren Rose Gomez', '3rd Year'),
('BSBA', 'Auditor', 'Nicholas Carlos Lim', '2nd Year'),
-- PIO
('BSBA', 'PIO', 'Ashley Grace Perez', '2nd Year'),
('BSBA', 'PIO', 'Alexander Andres Rivera', '3rd Year'),
('BSBA', 'PIO', 'Brittany Nicole Flores', '2nd Year'),
('BSBA', 'PIO', 'William James Santos', '3rd Year'),
-- Business Manager
('BSBA', 'Business Manager', 'Samantha Sofia Torres', '3rd Year'),
('BSBA', 'Business Manager', 'Justin Ryan Garcia', '2nd Year'),
('BSBA', 'Business Manager', 'Emily Catherine Cruz', '3rd Year'),
('BSBA', 'Business Manager', 'Brandon Matthew Reyes', '2nd Year'),
-- Representative
('BSBA', 'Representative', 'Rachel Marie Mendoza', '2nd Year'),
('BSBA', 'Representative', 'Kevin Gabriel Lopez', '3rd Year'),
('BSBA', 'Representative', 'Sarah Rose Bautista', '2nd Year'),
('BSBA', 'Representative', 'Tyler Emmanuel Ramos', '2nd Year');

-- BSIT (Information Technology) - 32 candidates total
INSERT INTO candidates (department, position, candidate_name, year_level) VALUES
-- President
('BSIT', 'President', 'Megan Elizabeth Santiago', '4th Year'),
('BSIT', 'President', 'Joshua Ryan Fernandez', '4th Year'),
('BSIT', 'President', 'Hannah Grace Villanueva', '3rd Year'),
('BSIT', 'President', 'Ryan Michael Manalo', '4th Year'),
-- Vice President
('BSIT', 'Vice President', 'Chloe Marie Aquino', '3rd Year'),
('BSIT', 'Vice President', 'Jacob Anthony Castro', '4th Year'),
('BSIT', 'Vice President', 'Taylor Rose Dizon', '3rd Year'),
('BSIT', 'Vice President', 'Austin Joseph Ocampo', '4th Year'),
-- Secretary
('BSIT', 'Secretary', 'Emma Marie Mercado', '3rd Year'),
('BSIT', 'Secretary', 'Zachary Luis Pascual', '2nd Year'),
('BSIT', 'Secretary', 'Abigail Ann Tan', '3rd Year'),
('BSIT', 'Secretary', 'Caleb Miguel Gomez', '2nd Year'),
-- Treasurer
('BSIT', 'Treasurer', 'Natalie Joy Lim', '3rd Year'),
('BSIT', 'Treasurer', 'Dylan Xavier Perez', '3rd Year'),
('BSIT', 'Treasurer', 'Victoria Anne Rivera', '2nd Year'),
('BSIT', 'Treasurer', 'Jordan Joseph Flores', '3rd Year'),
-- Auditor
('BSIT', 'Auditor', 'Alexis Marie Santos', '3rd Year'),
('BSIT', 'Auditor', 'Connor Paul Torres', '2nd Year'),
('BSIT', 'Auditor', 'Madison Rose Garcia', '3rd Year'),
('BSIT', 'Auditor', 'Cameron Carlos Cruz', '2nd Year'),
-- PIO
('BSIT', 'PIO', 'Kayla Grace Reyes', '2nd Year'),
('BSIT', 'PIO', 'Mason Andres Mendoza', '3rd Year'),
('BSIT', 'PIO', 'Ella Nicole Lopez', '2nd Year'),
('BSIT', 'PIO', 'Logan James Bautista', '3rd Year'),
-- Business Manager
('BSIT', 'Business Manager', 'Lily Sofia Ramos', '3rd Year'),
('BSIT', 'Business Manager', 'Noah Ryan Santiago', '2nd Year'),
('BSIT', 'Business Manager', 'Grace Catherine Fernandez', '3rd Year'),
('BSIT', 'Business Manager', 'Aiden Matthew Villanueva', '2nd Year'),
-- Representative
('BSIT', 'Representative', 'Zoe Marie Manalo', '2nd Year'),
('BSIT', 'Representative', 'Lucas Gabriel Aquino', '3rd Year'),
('BSIT', 'Representative', 'Aria Rose Castro', '2nd Year'),
('BSIT', 'Representative', 'Liam Emmanuel Dizon', '2nd Year');

-- BSCRIM (Criminology) - 32 candidates total
INSERT INTO candidates (department, position, candidate_name, year_level) VALUES
-- President
('BSCRIM', 'President', 'Alexandra Faith Ocampo', '4th Year'),
('BSCRIM', 'President', 'Marcus James Mercado', '4th Year'),
('BSCRIM', 'President', 'Sophia Hope Pascual', '3rd Year'),
('BSCRIM', 'President', 'Ethan Alexander Tan', '4th Year'),
-- Vice President
('BSCRIM', 'Vice President', 'Isabella Marie Gomez', '3rd Year'),
('BSCRIM', 'Vice President', 'Jackson Anthony Lim', '4th Year'),
('BSCRIM', 'Vice President', 'Ava Grace Perez', '3rd Year'),
('BSCRIM', 'Vice President', 'Carter Joseph Rivera', '4th Year'),
-- Secretary
('BSCRIM', 'Secretary', 'Mia Marie Flores', '3rd Year'),
('BSCRIM', 'Secretary', 'Hunter Luis Santos', '2nd Year'),
('BSCRIM', 'Secretary', 'Charlotte Ann Torres', '3rd Year'),
('BSCRIM', 'Secretary', 'Wyatt Miguel Garcia', '2nd Year'),
-- Treasurer
('BSCRIM', 'Treasurer', 'Amelia Joy Cruz', '3rd Year'),
('BSCRIM', 'Treasurer', 'Grayson Xavier Reyes', '3rd Year'),
('BSCRIM', 'Treasurer', 'Harper Anne Mendoza', '2nd Year'),
('BSCRIM', 'Treasurer', 'Carson Joseph Lopez', '3rd Year'),
-- Auditor
('BSCRIM', 'Auditor', 'Evelyn Marie Bautista', '3rd Year'),
('BSCRIM', 'Auditor', 'Hudson Paul Ramos', '2nd Year'),
('BSCRIM', 'Auditor', 'Avery Rose Santiago', '3rd Year'),
('BSCRIM', 'Auditor', 'Parker Carlos Fernandez', '2nd Year'),
-- PIO
('BSCRIM', 'PIO', 'Scarlett Grace Villanueva', '2nd Year'),
('BSCRIM', 'PIO', 'Landon Andres Manalo', '3rd Year'),
('BSCRIM', 'PIO', 'Luna Nicole Aquino', '2nd Year'),
('BSCRIM', 'PIO', 'Colton James Castro', '3rd Year'),
-- Business Manager
('BSCRIM', 'Business Manager', 'Penelope Sofia Dizon', '3rd Year'),
('BSCRIM', 'Business Manager', 'Easton Ryan Ocampo', '2nd Year'),
('BSCRIM', 'Business Manager', 'Layla Catherine Mercado', '3rd Year'),
('BSCRIM', 'Business Manager', 'Jaxon Matthew Pascual', '2nd Year'),
-- Representative
('BSCRIM', 'Representative', 'Hazel Marie Tan', '2nd Year'),
('BSCRIM', 'Representative', 'Bentley Gabriel Gomez', '3rd Year'),
('BSCRIM', 'Representative', 'Violet Rose Lim', '2nd Year'),
('BSCRIM', 'Representative', 'Sawyer Emmanuel Perez', '2nd Year');

-- BSHM (Hospitality Management) - 32 candidates total
INSERT INTO candidates (department, position, candidate_name, year_level) VALUES
-- President
('BSHM', 'President', 'Aurora Faith Rivera', '4th Year'),
('BSHM', 'President', 'Maverick James Flores', '4th Year'),
('BSHM', 'President', 'Stella Hope Santos', '3rd Year'),
('BSHM', 'President', 'Knox Alexander Torres', '4th Year'),
-- Vice President
('BSHM', 'Vice President', 'Nova Marie Garcia', '3rd Year'),
('BSHM', 'Vice President', 'Jasper Anthony Cruz', '4th Year'),
('BSHM', 'Vice President', 'Willow Grace Reyes', '3rd Year'),
('BSHM', 'Vice President', 'Atlas Joseph Mendoza', '4th Year'),
-- Secretary
('BSHM', 'Secretary', 'Ivy Marie Lopez', '3rd Year'),
('BSHM', 'Secretary', 'Phoenix Luis Bautista', '2nd Year'),
('BSHM', 'Secretary', 'Ruby Ann Ramos', '3rd Year'),
('BSHM', 'Secretary', 'River Miguel Santiago', '2nd Year'),
-- Treasurer
('BSHM', 'Treasurer', 'Jade Joy Fernandez', '3rd Year'),
('BSHM', 'Treasurer', 'Bodhi Xavier Villanueva', '3rd Year'),
('BSHM', 'Treasurer', 'Iris Anne Manalo', '2nd Year'),
('BSHM', 'Treasurer', 'Orion Joseph Aquino', '3rd Year'),
-- Auditor
('BSHM', 'Auditor', 'Sage Marie Castro', '3rd Year'),
('BSHM', 'Auditor', 'Kai Paul Dizon', '2nd Year'),
('BSHM', 'Auditor', 'Pearl Rose Ocampo', '3rd Year'),
('BSHM', 'Auditor', 'Cruz Carlos Mercado', '2nd Year'),
-- PIO
('BSHM', 'PIO', 'Daisy Grace Pascual', '2nd Year'),
('BSHM', 'PIO', 'Ace Andres Tan', '3rd Year'),
('BSHM', 'PIO', 'Skye Nicole Gomez', '2nd Year'),
('BSHM', 'PIO', 'Jett James Lim', '3rd Year'),
-- Business Manager
('BSHM', 'Business Manager', 'Poppy Sofia Perez', '3rd Year'),
('BSHM', 'Business Manager', 'Cash Ryan Rivera', '2nd Year'),
('BSHM', 'Business Manager', 'Fern Catherine Flores', '3rd Year'),
('BSHM', 'Business Manager', 'Bear Matthew Santos', '2nd Year'),
-- Representative
('BSHM', 'Representative', 'Maple Marie Torres', '2nd Year'),
('BSHM', 'Representative', 'Fox Gabriel Garcia', '3rd Year'),
('BSHM', 'Representative', 'Coral Rose Cruz', '2nd Year'),
('BSHM', 'Representative', 'Wolf Emmanuel Reyes', '2nd Year');

-- BSTM (Tourism Management) - 32 candidates total
INSERT INTO candidates (department, position, candidate_name, year_level) VALUES
-- President
('BSTM', 'President', 'Quinn Faith Mendoza', '4th Year'),
('BSTM', 'President', 'Blaze James Lopez', '4th Year'),
('BSTM', 'President', 'Ember Hope Bautista', '3rd Year'),
('BSTM', 'President', 'Ridge Alexander Ramos', '4th Year'),
-- Vice President
('BSTM', 'Vice President', 'Wren Marie Santiago', '3rd Year'),
('BSTM', 'Vice President', 'Storm Anthony Fernandez', '4th Year'),
('BSTM', 'Vice President', 'Meadow Grace Villanueva', '3rd Year'),
('BSTM', 'Vice President', 'Stone Joseph Manalo', '4th Year'),
-- Secretary
('BSTM', 'Secretary', 'Rain Marie Aquino', '3rd Year'),
('BSTM', 'Secretary', 'Hawk Luis Castro', '2nd Year'),
('BSTM', 'Secretary', 'Ocean Ann Dizon', '3rd Year'),
('BSTM', 'Secretary', 'Slate Miguel Ocampo', '2nd Year'),
-- Treasurer
('BSTM', 'Treasurer', 'Brooke Joy Mercado', '3rd Year'),
('BSTM', 'Treasurer', 'Reed Xavier Pascual', '3rd Year'),
('BSTM', 'Treasurer', 'Sierra Anne Tan', '2nd Year'),
('BSTM', 'Treasurer', 'Canyon Joseph Gomez', '3rd Year'),
-- Auditor
('BSTM', 'Auditor', 'River Marie Lim', '3rd Year'),
('BSTM', 'Auditor', 'Flint Paul Perez', '2nd Year'),
('BSTM', 'Auditor', 'Autumn Rose Rivera', '3rd Year'),
('BSTM', 'Auditor', 'Colt Carlos Flores', '2nd Year'),
-- PIO
('BSTM', 'PIO', 'Summer Grace Santos', '2nd Year'),
('BSTM', 'PIO', 'Archer Andres Torres', '3rd Year'),
('BSTM', 'PIO', 'Winter Nicole Garcia', '2nd Year'),
('BSTM', 'PIO', 'Hunter James Cruz', '3rd Year'),
-- Business Manager
('BSTM', 'Business Manager', 'Briar Sofia Reyes', '3rd Year'),
('BSTM', 'Business Manager', 'Nash Ryan Mendoza', '2nd Year'),
('BSTM', 'Business Manager', 'Clover Catherine Lopez', '3rd Year'),
('BSTM', 'Business Manager', 'Blaze Matthew Bautista', '2nd Year'),
-- Representative
('BSTM', 'Representative', 'Dahlia Marie Ramos', '2nd Year'),
('BSTM', 'Representative', 'Arrow Gabriel Santiago', '3rd Year'),
('BSTM', 'Representative', 'Lily Rose Fernandez', '2nd Year'),
('BSTM', 'Representative', 'River Emmanuel Villanueva', '2nd Year');

-- Insert Partylists for all departments (4 partylists each)

-- CCS Partylists
INSERT INTO partylists (department, name, description) VALUES
('CCS', 'TechForward', 'Leading innovation in technology education'),
('CCS', 'CodeUnity', 'Building a united community of developers'),
('CCS', 'InnovateIT', 'Pioneering solutions for tomorrow'),
('CCS', 'ByteServe', 'Serving students through digital excellence');

-- BSED Partylists
INSERT INTO partylists (department, name, description) VALUES
('BSED', 'TeachVision', 'Empowering future educators'),
('BSED', 'EduLeads', 'Leading excellence in education'),
('BSED', 'LearnHub', 'Connecting learners and teachers'),
('BSED', 'AcadGrow', 'Growing academic excellence together');

-- BEED Partylists
INSERT INTO partylists (department, name, description) VALUES
('BEED', 'FutureTeach', 'Shaping the future of elementary education'),
('BEED', 'KidsFirst', 'Putting children at the heart of education'),
('BEED', 'EduCare', 'Caring for the next generation of learners'),
('BEED', 'YoungMinds', 'Nurturing young minds for tomorrow');

-- BSBA Partylists
INSERT INTO partylists (department, name, description) VALUES
('BSBA', 'ProfitOne', 'Leading business excellence'),
('BSBA', 'EntreLeague', 'Empowering student entrepreneurs'),
('BSBA', 'MarketForce', 'Driving business innovation'),
('BSBA', 'FinVision', 'Financial leadership for the future');

-- BSIT Partylists
INSERT INTO partylists (department, name, description) VALUES
('BSIT', 'TechPioneers', 'Pioneering IT solutions'),
('BSIT', 'DataDrive', 'Driving success through data'),
('BSIT', 'NetForce', 'Networking for a better future'),
('BSIT', 'CloudNine', 'Elevating IT education');

-- BSCRIM Partylists
INSERT INTO partylists (department, name, description) VALUES
('BSCRIM', 'LawShield', 'Protecting justice and integrity'),
('BSCRIM', 'CrimeWatch', 'Vigilant for student welfare'),
('BSCRIM', 'JusticeNow', 'Fighting for fairness today'),
('BSCRIM', 'ForenX', 'Excellence in forensic education');

-- BSHM Partylists
INSERT INTO partylists (department, name, description) VALUES
('BSHM', 'TourElite', 'Elite service in hospitality'),
('BSHM', 'Hospitable', 'Welcoming excellence in service'),
('BSHM', 'FlightBound', 'Soaring to new heights in hospitality'),
('BSHM', 'EventSphere', 'Creating memorable experiences');

-- BSTM Partylists
INSERT INTO partylists (department, name, description) VALUES
('BSTM', 'WanderLust', 'Passionate about tourism excellence'),
('BSTM', 'TourVista', 'Visionary leadership in tourism'),
('BSTM', 'TravelPro', 'Professional tourism education'),
('BSTM', 'DestinationX', 'Your destination for success');