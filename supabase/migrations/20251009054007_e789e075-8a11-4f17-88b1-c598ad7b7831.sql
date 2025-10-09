-- Update one of the PSYCH President candidates to Sarah Malaya
UPDATE candidates 
SET candidate_name = 'Sarah Malaya'
WHERE department = 'PSYCH' 
  AND position = 'President' 
  AND candidate_name = 'Justine Ragaza';

-- Note: This keeps Justine Ragaza in CCS President and replaces the duplicate in PSYCH with Sarah Malaya