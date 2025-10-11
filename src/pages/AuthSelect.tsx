import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserPlus, LogIn } from 'lucide-react';
import { DarkModeToggle } from '@/components/DarkModeToggle';

export default function AuthSelect() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
      <div className="fixed top-4 right-4 z-50">
        <DarkModeToggle />
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Z4 VoteNet</h1>
          <p className="text-lg text-muted-foreground">Choose your action</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="text-center space-y-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <UserPlus className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">New Voter</h2>
                <p className="text-muted-foreground">
                  Register to participate in the election
                </p>
              </div>
              <Button
                onClick={() => navigate('/register')}
                className="w-full"
                size="lg"
              >
                Register Now
              </Button>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="text-center space-y-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <LogIn className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Registered Voter</h2>
                <p className="text-muted-foreground">
                  Already registered? Log in to vote or view results
                </p>
              </div>
              <Button
                onClick={() => navigate('/voter-login')}
                className="w-full"
                size="lg"
                variant="outline"
              >
                Log In
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
