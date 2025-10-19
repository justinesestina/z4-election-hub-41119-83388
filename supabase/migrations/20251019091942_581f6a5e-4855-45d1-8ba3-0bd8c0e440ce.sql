-- Fix all department codes to use short codes consistently
UPDATE voters 
SET department = CASE 
  WHEN department = 'BS Nursing' THEN 'NURSING'
  WHEN department = 'College of Psychology' THEN 'PSYCHOLOGY'
  WHEN department = 'College of Engineering' THEN 'ENGINEERING'
  WHEN department = 'College of Criminology' THEN 'CRIMINOLOGY'
  WHEN department = 'College of Education' THEN 'EDUCATION'
  WHEN department = 'College of Agriculture' THEN 'AGRICULTURE'
  ELSE department
END
WHERE department IN ('BS Nursing', 'College of Psychology', 'College of Engineering', 'College of Criminology', 'College of Education', 'College of Agriculture');

UPDATE votes
SET department = CASE 
  WHEN department = 'BS Nursing' THEN 'NURSING'
  WHEN department = 'College of Psychology' THEN 'PSYCHOLOGY'
  WHEN department = 'College of Engineering' THEN 'ENGINEERING'
  WHEN department = 'College of Criminology' THEN 'CRIMINOLOGY'
  WHEN department = 'College of Education' THEN 'EDUCATION'
  WHEN department = 'College of Agriculture' THEN 'AGRICULTURE'
  ELSE department
END
WHERE department IN ('BS Nursing', 'College of Psychology', 'College of Engineering', 'College of Criminology', 'College of Education', 'College of Agriculture');

UPDATE candidates
SET department = CASE 
  WHEN department = 'BS Nursing' THEN 'NURSING'
  WHEN department = 'College of Psychology' THEN 'PSYCHOLOGY'
  WHEN department = 'College of Engineering' THEN 'ENGINEERING'
  WHEN department = 'College of Criminology' THEN 'CRIMINOLOGY'
  WHEN department = 'College of Education' THEN 'EDUCATION'
  WHEN department = 'College of Agriculture' THEN 'AGRICULTURE'
  ELSE department
END
WHERE department IN ('BS Nursing', 'College of Psychology', 'College of Engineering', 'College of Criminology', 'College of Education', 'College of Agriculture');

UPDATE partylists
SET department = CASE 
  WHEN department = 'BS Nursing' THEN 'NURSING'
  WHEN department = 'College of Psychology' THEN 'PSYCHOLOGY'
  WHEN department = 'College of Engineering' THEN 'ENGINEERING'
  WHEN department = 'College of Criminology' THEN 'CRIMINOLOGY'
  WHEN department = 'College of Education' THEN 'EDUCATION'
  WHEN department = 'College of Agriculture' THEN 'AGRICULTURE'
  ELSE department
END
WHERE department IN ('BS Nursing', 'College of Psychology', 'College of Engineering', 'College of Criminology', 'College of Education', 'College of Agriculture');

UPDATE election_status
SET department = CASE 
  WHEN department = 'BS Nursing' THEN 'NURSING'
  WHEN department = 'College of Psychology' THEN 'PSYCHOLOGY'
  WHEN department = 'College of Engineering' THEN 'ENGINEERING'
  WHEN department = 'College of Criminology' THEN 'CRIMINOLOGY'
  WHEN department = 'College of Education' THEN 'EDUCATION'
  WHEN department = 'College of Agriculture' THEN 'AGRICULTURE'
  ELSE department
END
WHERE department IN ('BS Nursing', 'College of Psychology', 'College of Engineering', 'College of Criminology', 'College of Education', 'College of Agriculture');