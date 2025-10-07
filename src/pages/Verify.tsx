import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertCircle, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/integrations/supabase/client';
import { mapCourseToDepartment, availableCourses } from '@/utils/courseMapping';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getDeviceId } from '@/utils/deviceId';
import { toast } from 'sonner';
import { DarkModeToggle } from '@/components/DarkModeToggle';

export default function Verify() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    course: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validate fields
      if (!formData.name || !formData.studentId || !formData.course) {
        setError('Please fill in all fields');
        setLoading(false);
        return;
      }

      // Map course to department
      const department = mapCourseToDepartment(formData.course);
      
      if (!department) {
        setError(
          `Could not map "${formData.course}" to a department. Please enter your full course/program name (e.g., "Computer Science", "Psychology", "Nursing").`
        );
        setLoading(false);
        return;
      }

      // Get device ID
      const deviceId = await getDeviceId();

      // Check if student has already verified for this department
      const { data: existing } = await supabase
        .from('verifications')
        .select('*')
        .eq('student_id', formData.studentId)
        .eq('department', department)
        .maybeSingle();

      if (existing) {
        // Student already verified, navigate to voting
        toast.success(`Welcome back, ${formData.name}!`);
        navigate(`/vote/${department}`, {
          state: {
            studentId: formData.studentId,
            name: formData.name,
            department,
          },
        });
        return;
      }

      // Insert verification record
      const { error: insertError } = await supabase
        .from('verifications')
        .insert({
          student_id: formData.studentId,
          name: formData.name,
          course: formData.course,
          department,
          device_id: deviceId,
        });

      if (insertError) {
        console.error('Verification error:', insertError);
        setError('Failed to verify student. Please try again.');
        setLoading(false);
        return;
      }

      toast.success(`Verified for ${department}!`);
      
      // Navigate to voting page
      navigate(`/vote/${department}`, {
        state: {
          studentId: formData.studentId,
          name: formData.name,
          department,
        },
      });
    } catch (err) {
      console.error('Verification error:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
              className="rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">Z4</span>
            </div>
            <span className="text-xl font-semibold text-foreground">Campus Vote</span>
          </div>
          <DarkModeToggle />
        </div>
      </header>

      {/* Verification Form */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto"
        >
          <Card className="p-8">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold mb-2 text-foreground">Student Verification</h1>
              <p className="text-muted-foreground">
                Enter your details to access your department's ballot
              </p>
            </div>

            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Juan dela Cruz"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="studentId">Student ID</Label>
                <Input
                  id="studentId"
                  type="text"
                  placeholder="2021-12345"
                  value={formData.studentId}
                  onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
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
                    <SelectValue placeholder="Select your course/program" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableCourses.map((course) => (
                      <SelectItem key={course.code} value={course.code}>
                        {course.code} - {course.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  Select your course/program. System will auto-route you to the correct department.
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark"
                disabled={loading}
              >
                {loading ? 'Verifying...' : 'Continue to Voting'}
                <CheckCircle2 className="ml-2 h-5 w-5" />
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              <p>Your information is secure and used only for vote verification.</p>
            </div>
          </Card>
        </motion.div>
      </div>

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
