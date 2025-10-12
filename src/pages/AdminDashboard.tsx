import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/integrations/supabase/client';
import { DarkModeToggle } from '@/components/DarkModeToggle';
import { ArrowLeft, Users, Vote, AlertTriangle, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface Department {
  id: string;
  short_code: string;
  name: string;
}

interface Voter {
  id: string;
  name: string;
  student_id: string;
  email: string;
  department: string;
  has_voted: boolean;
  created_at: string;
}

interface VoteRecord {
  id: string;
  student_id: string;
  department: string;
  position: string;
  candidate_name: string;
  created_at: string;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [departments, setDepartments] = useState<Department[]>([]);
  const [selectedDept, setSelectedDept] = useState<string>('');
  const [voters, setVoters] = useState<Voter[]>([]);
  const [votes, setVotes] = useState<VoteRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDepartments();
  }, []);

  useEffect(() => {
    if (selectedDept) {
      fetchDepartmentData(selectedDept);
    }
  }, [selectedDept]);

  const fetchDepartments = async () => {
    const { data, error } = await supabase
      .from('departments')
      .select('*')
      .order('short_code');

    if (error) {
      toast.error('Failed to load departments');
      console.error(error);
      return;
    }

    setDepartments(data || []);
    if (data && data.length > 0) {
      setSelectedDept(data[0].short_code);
    }
    setLoading(false);
  };

  const fetchDepartmentData = async (deptCode: string) => {
    // Fetch voters
    const { data: votersData, error: votersError } = await supabase
      .from('voters')
      .select('*')
      .eq('department', deptCode)
      .order('created_at', { ascending: false });

    if (votersError) {
      console.error('Error fetching voters:', votersError);
    } else {
      setVoters(votersData || []);
    }

    // Fetch votes
    const { data: votesData, error: votesError } = await supabase
      .from('votes')
      .select('*')
      .eq('department', deptCode)
      .order('created_at', { ascending: false });

    if (votesError) {
      console.error('Error fetching votes:', votesError);
    } else {
      setVotes(votesData || []);
    }
  };

  const handleResetVoter = async (voterId: string, studentId: string) => {
    try {
      // Reset has_voted flag
      const { error: updateError } = await supabase
        .from('voters')
        .update({ has_voted: false })
        .eq('id', voterId);

      if (updateError) throw updateError;

      // Delete all votes for this student
      const { error: deleteError } = await supabase
        .from('votes')
        .delete()
        .eq('student_id', studentId);

      if (deleteError) throw deleteError;

      toast.success('Voter reset successfully');
      fetchDepartmentData(selectedDept);
    } catch (err) {
      console.error('Reset error:', err);
      toast.error('Failed to reset voter');
    }
  };

  const handleDeleteVoter = async (voterId: string, studentId: string) => {
    try {
      // Delete all votes first
      await supabase
        .from('votes')
        .delete()
        .eq('student_id', studentId);

      // Delete voter record
      const { error } = await supabase
        .from('voters')
        .delete()
        .eq('id', voterId);

      if (error) throw error;

      toast.success('Voter deleted successfully');
      fetchDepartmentData(selectedDept);
    } catch (err) {
      console.error('Delete error:', err);
      toast.error('Failed to delete voter');
    }
  };

  const voteCounts = votes.reduce((acc: Record<string, Record<string, number>>, vote) => {
    if (!acc[vote.position]) {
      acc[vote.position] = {};
    }
    acc[vote.position][vote.candidate_name] = (acc[vote.position][vote.candidate_name] || 0) + 1;
    return acc;
  }, {});

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

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
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
          </div>
          <DarkModeToggle />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Department Selection */}
        <Card className="p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Select Department</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {departments.map((dept) => (
              <Button
                key={dept.id}
                variant={selectedDept === dept.short_code ? 'default' : 'outline'}
                onClick={() => setSelectedDept(dept.short_code)}
                className="w-full"
              >
                {dept.short_code}
              </Button>
            ))}
          </div>
        </Card>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Voters</p>
                <p className="text-2xl font-bold">{voters.length}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center">
                <Vote className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Voted</p>
                <p className="text-2xl font-bold">{voters.filter(v => v.has_voted).length}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Not Voted</p>
                <p className="text-2xl font-bold">{voters.filter(v => !v.has_voted).length}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Tabs for different views */}
        <Tabs defaultValue="voters" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="voters">Verified Voters</TabsTrigger>
            <TabsTrigger value="votes">Vote Counts</TabsTrigger>
            <TabsTrigger value="duplicates">Duplicate Attempts</TabsTrigger>
          </TabsList>

          <TabsContent value="voters" className="mt-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Registered Voters - {selectedDept}</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Student ID</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Registered</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {voters.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center text-muted-foreground">
                          No voters registered yet
                        </TableCell>
                      </TableRow>
                    ) : (
                      voters.map((voter) => (
                        <TableRow key={voter.id}>
                          <TableCell className="font-medium">{voter.name}</TableCell>
                          <TableCell>{voter.student_id}</TableCell>
                          <TableCell>{voter.email}</TableCell>
                          <TableCell>
                            <Badge variant={voter.has_voted ? 'default' : 'secondary'}>
                              {voter.has_voted ? 'Voted' : 'Not Voted'}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {new Date(voter.created_at).toLocaleDateString()}
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              {voter.has_voted && (
                                <AlertDialog>
                                  <AlertDialogTrigger asChild>
                                    <Button variant="outline" size="sm">
                                      Reset
                                    </Button>
                                  </AlertDialogTrigger>
                                  <AlertDialogContent>
                                    <AlertDialogHeader>
                                      <AlertDialogTitle>Reset Voter?</AlertDialogTitle>
                                      <AlertDialogDescription>
                                        This will allow {voter.name} to vote again and delete their previous votes.
                                      </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                                      <AlertDialogAction
                                        onClick={() => handleResetVoter(voter.id, voter.student_id)}
                                      >
                                        Reset
                                      </AlertDialogAction>
                                    </AlertDialogFooter>
                                  </AlertDialogContent>
                                </AlertDialog>
                              )}
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button variant="destructive" size="sm">
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Delete Voter?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      This will permanently delete {voter.name} and all their votes. This action cannot be undone.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction
                                      onClick={() => handleDeleteVoter(voter.id, voter.student_id)}
                                      className="bg-destructive"
                                    >
                                      Delete
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="votes" className="mt-6">
            <div className="space-y-6">
              {Object.entries(voteCounts).map(([position, candidates]) => (
                <Card key={position} className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{position}</h3>
                  <div className="space-y-2">
                    {Object.entries(candidates)
                      .sort(([, a], [, b]) => (b as number) - (a as number))
                      .map(([candidate, count]) => (
                        <div key={candidate} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <span className="font-medium">{candidate}</span>
                          <Badge variant="secondary">{count} votes</Badge>
                        </div>
                      ))}
                  </div>
                </Card>
              ))}
              {Object.keys(voteCounts).length === 0 && (
                <Card className="p-6">
                  <p className="text-center text-muted-foreground">No votes recorded yet</p>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="duplicates" className="mt-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Duplicate Voting Attempts</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student ID</TableHead>
                      <TableHead>Attempt Time</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {voters.filter(v => v.has_voted).length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={3} className="text-center text-muted-foreground">
                          No duplicate attempts detected
                        </TableCell>
                      </TableRow>
                    ) : (
                      voters
                        .filter(v => v.has_voted)
                        .map((voter) => {
                          const voteCount = votes.filter(v => v.student_id === voter.student_id).length;
                          if (voteCount === 0) return null;
                          
                          return (
                            <TableRow key={voter.id}>
                              <TableCell>{voter.student_id}</TableCell>
                              <TableCell>
                                {new Date(voter.created_at).toLocaleString()}
                              </TableCell>
                              <TableCell>
                                <Badge variant="outline">
                                  {voteCount} positions voted
                                </Badge>
                              </TableCell>
                            </TableRow>
                          );
                        })
                        .filter(Boolean)
                    )}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
