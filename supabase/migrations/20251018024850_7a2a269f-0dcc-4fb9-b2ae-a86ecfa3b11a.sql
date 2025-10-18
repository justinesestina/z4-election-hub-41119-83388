-- Update voter records to use correct department codes matching the departments table
UPDATE voters
SET department = 'NURSING'
WHERE department = 'BS Nursing';

-- Also update any votes that might have the wrong department code
UPDATE votes
SET department = 'NURSING'
WHERE department = 'BS Nursing';

-- Update candidates to use correct department codes
UPDATE candidates
SET department = 'NURSING'
WHERE department = 'BS Nursing';

-- Update partylists to use correct department codes
UPDATE partylists
SET department = 'NURSING'
WHERE department = 'BS Nursing';