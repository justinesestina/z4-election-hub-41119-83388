import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, LogIn } from 'lucide-react';

export default function VoterLogin() {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { data: voter, error: voterError } = await supabase
        .from('voters')
        .select('*')
        .eq('student_id', studentId)
        .eq('email', email)
        .maybeSingle();

      if (voterError || !voter) {
        setError('Invalid Student ID or Email. Please register first.');
        setLoading(false);
        return;
      }

      if (voter.has_voted) {
        toast.info('You have already voted. Redirecting to results...');
        navigate('/');
        return;
      }

      // Store voter session
      localStorage.setItem('voterSession', JSON.stringify(voter));
      toast.success(`Welcome back, ${voter.name}!`);
      navigate('/');
    } catch (err: any) {
      console.error('Login error:', err);
      setError('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/20 px-4">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2">Voter Login</h1>
          <p className="text-muted-foreground">Access your voting dashboard</p>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="studentId">Student ID</Label>
            <Input
              id="studentId"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="2021-12345"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Logging in...' : 'Log In'}
            <LogIn className="ml-2 h-4 w-4" />
          </Button>

          <Button
            type="button"
            variant="ghost"
            className="w-full"
            onClick={() => navigate('/register')}
          >
            Need to register? Sign up
          </Button>
        </form>
      </Card>
    </div>
  );
}
