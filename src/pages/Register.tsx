import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, ArrowLeft, Copy, Check } from 'lucide-react';
import { mapCourseToDepartment, availableCourses } from '@/utils/courseMapping';
import { DarkModeToggle } from '@/components/DarkModeToggle';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    email: '',
    course: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [verificationInput, setVerificationInput] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [copied, setCopied] = useState(false);

  const generateCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!formData.name || !formData.studentId || !formData.email || !formData.course) {
        setError('Please fill in all fields');
        setLoading(false);
        return;
      }

      const department = mapCourseToDepartment(formData.course);
      if (!department) {
        setError('Invalid course selection');
        setLoading(false);
        return;
      }

      // Check if student already registered
      const { data: existing } = await supabase
        .from('voters')
        .select('*')
        .eq('student_id', formData.studentId)
        .eq('email', formData.email)
        .maybeSingle();

      if (existing) {
        setError('You have already registered your vote.');
        setLoading(false);
        return;
      }

      // Generate on-screen verification code
      const code = generateCode();
      setGeneratedCode(code);
      setShowCodeInput(true);
      setAttempts(0);
      setVerificationInput('');
      toast.success('Verification code generated!');
    } catch (err: any) {
      console.error('Generation error:', err);
      setError(err.message || 'Failed to generate verification code');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success('Code copied to clipboard!');
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (verificationInput !== generatedCode) {
      setAttempts(attempts + 1);
      
      if (attempts >= 2) {
        setError('Maximum attempts reached. Please start over.');
        setTimeout(() => {
          setShowCodeInput(false);
          setGeneratedCode('');
          setVerificationInput('');
          setAttempts(0);
          setError('');
        }, 2000);
        return;
      }
      
      setError(`Invalid code. ${2 - attempts} attempt(s) remaining.`);
      setVerificationInput('');
      return;
    }

    setLoading(true);

    try {
      // Verify the entered details match exactly
      const { data: existingVoter } = await supabase
        .from('voters')
        .select('*')
        .eq('student_id', formData.studentId)
        .eq('email', formData.email)
        .maybeSingle();

      if (existingVoter) {
        if (existingVoter.name !== formData.name) {
          setError('Verification failed. Name does not match our records.');
          setLoading(false);
          return;
        }
      }

      const department = mapCourseToDepartment(formData.course);

      // Create voter record if doesn't exist
      if (!existingVoter) {
        const { error: voterError } = await supabase
          .from('voters')
          .insert({
            name: formData.name,
            student_id: formData.studentId,
            email: formData.email,
            department: department!,
            verified_at: new Date().toISOString(),
          });

        if (voterError) throw voterError;
      }

      // Store voter session
      localStorage.setItem('voterSession', JSON.stringify({
        name: formData.name,
        student_id: formData.studentId,
        email: formData.email,
        department: department,
      }));

      toast.success('Registration successful! Redirecting to vote...');
      navigate('/');
    } catch (err: any) {
      console.error('Registration error:', err);
      setError(err.message || 'Failed to complete registration');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/20 px-4">
      <div className="fixed top-4 left-4 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/auth-select')}
          className="rounded-full"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>
      <div className="fixed top-4 right-4 z-50">
        <DarkModeToggle />
      </div>

      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2">Voter Registration</h1>
          <p className="text-muted-foreground">Create your account to vote</p>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {!showCodeInput ? (
          <form onSubmit={handleSendCode} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="studentId">Student ID</Label>
              <Input
                id="studentId"
                value={formData.studentId}
                onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="course">Course / Program</Label>
              <Select
                value={formData.course}
                onValueChange={(value) => setFormData({ ...formData, course: value })}
                required
              >
                <SelectTrigger id="course">
                  <SelectValue placeholder="Select your course" />
                </SelectTrigger>
                <SelectContent>
                  {availableCourses.map((course) => (
                    <SelectItem key={course.code} value={course.code}>
                      {course.code} - {course.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Generating...' : 'Generate Verification Code'}
            </Button>

            <Button
              type="button"
              variant="ghost"
              className="w-full"
              onClick={() => navigate('/login')}
            >
              Already registered? Log in
            </Button>
          </form>
        ) : (
          <form onSubmit={handleVerifyCode} className="space-y-6">
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Your verification code:
              </p>
              
              <div className="bg-primary/10 border-2 border-primary rounded-lg p-6">
                <div className="text-4xl font-bold tracking-widest text-primary mb-4">
                  {generatedCode}
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleCopyCode}
                  className="w-full"
                >
                  {copied ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Code
                    </>
                  )}
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                Please type the code above to continue
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="code">Enter Verification Code</Label>
              <Input
                id="code"
                value={verificationInput}
                onChange={(e) => setVerificationInput(e.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="000000"
                maxLength={6}
                className="text-center text-2xl tracking-widest"
                required
              />
              <p className="text-xs text-muted-foreground text-center">
                Attempts remaining: {3 - attempts}
              </p>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Verifying...' : 'Verify & Continue'}
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => {
                const newCode = generateCode();
                setGeneratedCode(newCode);
                setVerificationInput('');
                setAttempts(0);
                setError('');
                toast.info('New code generated');
              }}
              disabled={loading}
            >
              Generate New Code
            </Button>
          </form>
        )}
      </Card>
    </div>
  );
}
