-- Update CCS President candidates - Replace one with Justine Ragaza
UPDATE candidates 
SET candidate_name = 'Justine Ragaza'
WHERE department = 'CCS' 
  AND position = 'President' 
  AND id = (
    SELECT id 
    FROM candidates 
    WHERE department = 'CCS' AND position = 'President' 
    LIMIT 1
  );