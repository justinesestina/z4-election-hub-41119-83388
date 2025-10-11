import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, Check, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/integrations/supabase/client';
import { DepartmentIcon } from '@/components/DepartmentIcon';
import { POSITIONS, Candidate, Department } from '@/types';
import { getDeviceId } from '@/utils/deviceId';
import { toast } from 'sonner';
import { DarkModeToggle } from '@/components/DarkModeToggle';
import { useQuery } from '@tanstack/react-query';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { VotingTutorialModal } from '@/components/VotingTutorialModal';

interface Partylist {
  id: string;
  department: string;
  name: string;
  description: string | null;
}

interface LocationState {
  studentId: string;
  name: string;
  department: string;
}

export default function Vote() {
  const { deptCode } = useParams<{ deptCode: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;

  const [currentPosition, setCurrentPosition] = useState(0);
  const [votes, setVotes] = useState<Record<string, string>>({});
  const [selectedPartylist, setSelectedPartylist] = useState('');
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);

  // Fetch department info
  const { data: department } = useQuery({
    queryKey: ['department', deptCode],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('departments')
        .select('*')
        .eq('short_code', deptCode)
        .single();
      
      if (error) throw error;
      return data as Department;
    },
  });

  // Fetch candidates for this department
  const { data: candidates = [] } = useQuery({
    queryKey: ['candidates', deptCode],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('candidates')
        .select('*')
        .eq('department', deptCode)
        .order('position')
        .order('candidate_name');
      
      if (error) throw error;
      return data as Candidate[];
    },
  });

  // Fetch partylists for this department
  const { data: partylists = [] } = useQuery({
    queryKey: ['partylists', deptCode],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('partylists')
        .select('*')
        .eq('department', deptCode)
        .order('name');
      
      if (error) throw error;
      return data as Partylist[];
    },
  });

  useEffect(() => {
    if (!state?.studentId || !state?.department) {
      navigate('/verify');
    }
  }, [state, navigate]);

  const totalSteps = POSITIONS.length + 1; // +1 for partylist
  const position = currentPosition < POSITIONS.length ? POSITIONS[currentPosition] : null;
  const positionCandidates = position ? candidates.filter(c => c.position === position) : [];
  const progress = ((currentPosition + 1) / totalSteps) * 100;
  const isPartylistStep = currentPosition === POSITIONS.length;

  const handleNext = () => {
    if (isPartylistStep) {
      if (!selectedPartylist) {
        toast.error('Please select a partylist');
        return;
      }
      setShowConfirmDialog(true);
    } else {
      if (!votes[position!]) {
        toast.error('Please select a candidate');
        return;
      }
      setCurrentPosition(currentPosition + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPosition > 0) {
      setCurrentPosition(currentPosition - 1);
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);

    try {
      const deviceId = await getDeviceId();

      // Check if student has already voted in this department
      const { data: existingVotes } = await supabase
        .from('votes')
        .select('position')
        .eq('student_id', state.studentId)
        .eq('department', deptCode!);

      if (existingVotes && existingVotes.length > 0) {
        toast.error('You have already voted in this department');
        navigate(`/results/${deptCode}`);
        return;
      }

      // Insert all votes with partylist
      const voteRecords = Object.entries(votes).map(([position, candidateName]) => ({
        department: deptCode!,
        position,
        candidate_name: candidateName,
        student_id: state.studentId,
        device_id: deviceId,
        partylist_vote: selectedPartylist,
      }));

      const { error } = await supabase
        .from('votes')
        .insert(voteRecords);

      if (error) {
        console.error('Vote submission error:', error);
        if (error.code === '23505') {
          toast.error('You have already voted for some positions');
        } else {
          toast.error('Failed to submit votes. Please try again.');
        }
        setSubmitting(false);
        return;
      }

      toast.success('Your votes have been recorded!');
      navigate(`/results/${deptCode}`);
    } catch (err) {
      console.error('Vote submission error:', err);
      toast.error('An unexpected error occurred');
    } finally {
      setSubmitting(false);
    }
  };

  if (!department) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div 
              className="h-10 w-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${department.color_hex}20`, color: department.color_hex }}
            >
              <DepartmentIcon iconName={department.icon_name} className="h-6 w-6" />
            </div>
            <div>
              <span className="text-lg font-semibold text-foreground block">{department.short_code}</span>
              <span className="text-xs text-muted-foreground">{department.name}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setShowTutorial(true)}>
              How to Vote
            </Button>
            <DarkModeToggle />
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="container mx-auto px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-foreground">
              {isPartylistStep ? 'Partylist Selection' : `Position ${currentPosition + 1} of ${POSITIONS.length}`}
            </span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Voting Form */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          key={currentPosition}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-8">
            {isPartylistStep ? (
              <>
                <h2 className="text-2xl font-bold mb-6 text-center text-foreground">
                  Select Your Partylist
                </h2>
                <p className="text-sm text-muted-foreground text-center mb-6">
                  Choose the partylist that best represents your vision for {department.short_code}
                </p>

                {partylists.length === 0 ? (
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      No partylists available for this department.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <RadioGroup
                    value={selectedPartylist}
                    onValueChange={setSelectedPartylist}
                    className="space-y-3"
                  >
                    {partylists.map((partylist) => (
                      <div key={partylist.id} className="flex items-center space-x-3">
                        <RadioGroupItem value={partylist.name} id={partylist.id} />
                        <Label
                          htmlFor={partylist.id}
                          className="flex-1 cursor-pointer p-4 rounded-lg border-2 border-border hover:border-primary/50 transition-colors"
                        >
                          <div className="font-semibold text-foreground">{partylist.name}</div>
                          {partylist.description && (
                            <div className="text-sm text-muted-foreground mt-1">{partylist.description}</div>
                          )}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                )}
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-6 text-center text-foreground">
                  {position}
                </h2>

                {positionCandidates.length === 0 ? (
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      No candidates available for this position.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <RadioGroup
                    value={votes[position!] || ''}
                    onValueChange={(value) => setVotes({ ...votes, [position!]: value })}
                    className="space-y-3"
                  >
                    {positionCandidates.map((candidate) => (
                      <div key={candidate.id} className="flex items-center space-x-3">
                        <RadioGroupItem value={candidate.candidate_name} id={candidate.id} />
                        <Label
                          htmlFor={candidate.id}
                          className="flex-1 cursor-pointer p-4 rounded-lg border-2 border-border hover:border-primary/50 transition-colors"
                        >
                          <div className="font-semibold text-foreground">{candidate.candidate_name}</div>
                          {candidate.year_level && (
                            <div className="text-sm text-muted-foreground">{candidate.year_level}</div>
                          )}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                )}
              </>
            )}

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentPosition === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={isPartylistStep ? !selectedPartylist : !votes[position!]}
                style={{ backgroundColor: department.color_hex }}
                className="text-white hover:opacity-90"
              >
                {isPartylistStep ? (
                  <>
                    Review & Submit
                    <Check className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Confirmation Dialog */}
      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Your Votes</AlertDialogTitle>
            <AlertDialogDescription>
              Please review your selections before submitting. You cannot change your votes after submission.
            </AlertDialogDescription>
          </AlertDialogHeader>
          
          <div className="max-h-60 overflow-y-auto space-y-2 my-4">
            {Object.entries(votes).map(([position, candidate]) => (
              <div key={position} className="p-3 bg-muted rounded-lg">
                <div className="font-medium text-sm text-foreground">{position}</div>
                <div className="text-sm text-muted-foreground">{candidate}</div>
              </div>
            ))}
            {selectedPartylist && (
              <div className="p-3 bg-muted rounded-lg">
                <div className="font-medium text-sm text-foreground">Partylist</div>
                <div className="text-sm text-muted-foreground">{selectedPartylist}</div>
              </div>
            )}
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel disabled={submitting}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleSubmit}
              disabled={submitting}
              style={{ backgroundColor: department.color_hex }}
              className="text-white"
            >
              {submitting ? 'Submitting...' : 'Submit Votes'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Tutorial Modal */}
      <VotingTutorialModal
        open={showTutorial}
        onOpenChange={setShowTutorial}
        departmentName={department.name}
      />

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Secure • Transparent • Democratic
          </p>
          <p className="text-xs text-muted-foreground mt-3 italic">
            This website was created by Justine Ragaza, a student of the College of Computer Studies.
          </p>
        </div>
      </footer>
    </div>
  );
}
