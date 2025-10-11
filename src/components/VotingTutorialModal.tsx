import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

interface VotingTutorialModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  departmentName?: string;
}

const tutorialSteps = [
  {
    title: "Step 1: Start Voting",
    description: "Click the 'Start Voting' button on the landing page to begin the voting process.",
    details: "You will be directed to the Student Verification page where you'll enter your information.",
  },
  {
    title: "Step 2: Student Verification",
    description: "Enter your Full Name, Student ID, and select your Course/Program.",
    details: "Important: Each Student ID can only vote once. Once you submit your vote, it cannot be changed or repeated.",
  },
  {
    title: "Step 3: Vote for Each Position",
    description: "Select your preferred candidate for each position by clicking the radio button next to their name.",
    details: "Navigate through positions using 'Previous' and 'Next' buttons. You must vote for all positions before proceeding.",
  },
  {
    title: "Step 4: Select Your Partylist",
    description: "Choose your preferred partylist for your department.",
    details: "Review the partylist descriptions carefully before making your selection. This choice represents your department-wide preference.",
  },
  {
    title: "Step 5: Review & Submit",
    description: "Review all your selections before final submission.",
    details: "Once you click 'Submit Vote', your choices are final and cannot be changed. Make sure all selections are correct!",
  },
];

export const VotingTutorialModal = ({ open, onOpenChange, departmentName }: VotingTutorialModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    setCurrentStep(0);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>How to Vote{departmentName ? ` - ${departmentName}` : ''}</span>
            <Button variant="ghost" size="icon" onClick={handleClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Step {currentStep + 1} of {tutorialSteps.length}</span>
            <div className="flex gap-1">
              {tutorialSteps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-8 rounded-full transition-colors ${
                    index === currentStep ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4 min-h-[200px]">
            <h3 className="text-xl font-semibold">{tutorialSteps[currentStep].title}</h3>
            <p className="text-base">{tutorialSteps[currentStep].description}</p>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">{tutorialSteps[currentStep].details}</p>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <Button
              onClick={currentStep === tutorialSteps.length - 1 ? handleClose : handleNext}
            >
              {currentStep === tutorialSteps.length - 1 ? 'Got It!' : (
                <>
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
