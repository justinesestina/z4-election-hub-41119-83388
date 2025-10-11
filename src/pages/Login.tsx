import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DarkModeToggle } from '@/components/DarkModeToggle';
import { toast } from 'sonner';
import { Vote } from 'lucide-react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // System entry credentials
    if (username === 'VoteNet25' && password === 'votenet2k25') {
      localStorage.setItem('isLoggedIn', 'true');
      toast.success('Login successful! Welcome to VoteNet.');
      setTimeout(() => {
        navigate('/auth-select');
      }, 500);
    } else {
      toast.error('Invalid username or password. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/20 px-4">
      {/* Dark Mode Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <DarkModeToggle />
      </div>

      {/* Login Card */}
      <Card className="w-full max-w-md shadow-xl animate-fade-in backdrop-blur-sm bg-card/95 border-border">
        <CardHeader className="space-y-3 text-center pb-6">
          <div className="flex justify-center mb-2">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Vote className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Z4 VoteNet
          </CardTitle>
          <CardDescription className="text-base">
            Secure Student Organization System
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="h-11 transition-all duration-200 focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-11 transition-all duration-200 focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-11 text-base font-semibold bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              Campus Vote - Departmental Voting System
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="fixed bottom-4 text-center w-full px-4">
        <p className="text-xs text-muted-foreground">
          Created by College of Computer Studies — Justine Ragaza
        </p>
      </div>
    </div>
  );
}
