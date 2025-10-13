-- Add voting control functions and improve voter tracking

-- Add function to get vote counts by position and department
CREATE OR REPLACE FUNCTION get_vote_counts(dept_code TEXT)
RETURNS TABLE (
  pos TEXT,
  candidate_name TEXT,
  vote_count BIGINT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    v.position as pos,
    v.candidate_name,
    COUNT(*) as vote_count
  FROM votes v
  WHERE v.department = dept_code
  GROUP BY v.position, v.candidate_name
  ORDER BY v.position, vote_count DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Add function to get partylist vote counts by department
CREATE OR REPLACE FUNCTION get_partylist_counts(dept_code TEXT)
RETURNS TABLE (
  partylist_name TEXT,
  vote_count BIGINT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    v.partylist_vote as partylist_name,
    COUNT(*) as vote_count
  FROM votes v
  WHERE v.department = dept_code
    AND v.partylist_vote IS NOT NULL
  GROUP BY v.partylist_vote
  ORDER BY vote_count DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Add RLS policy for delete operations on voters (for admin reset)
CREATE POLICY "Voters can be deleted"
ON public.voters
FOR DELETE
USING (true);

-- Add RLS policy for delete operations on votes (for admin reset)
CREATE POLICY "Votes can be deleted"
ON public.votes
FOR DELETE
USING (true);

-- Add RLS policies for candidate management
CREATE POLICY "Candidates can be inserted"
ON public.candidates
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Candidates can be updated"
ON public.candidates
FOR UPDATE
USING (true);

CREATE POLICY "Candidates can be deleted"
ON public.candidates
FOR DELETE
USING (true);