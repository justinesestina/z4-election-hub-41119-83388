import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/integrations/supabase/client';
import { DarkModeToggle } from '@/components/DarkModeToggle';
import { ArrowLeft, Users, Vote, AlertTriangle, Trash2, Play, Pause, Square, Search, Download } from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
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
import { CandidateManager } from '@/components/CandidateManager';

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
  verified_at?: string;
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
  const [searchTerm, setSearchTerm] = useState('');
  const [votingStatus, setVotingStatus] = useState<string>('not_started');

  useEffect(() => {
    fetchDepartments();
  }, []);

  useEffect(() => {
    if (selectedDept) {
      fetchDepartmentData(selectedDept);
      fetchVotingStatus(selectedDept);
    }
  }, [selectedDept]);

  const fetchVotingStatus = async (deptCode: string) => {
    const { data } = await supabase
      .from('election_status')
      .select('status')
      .eq('department', deptCode)
      .single();
    
    if (data) {
      setVotingStatus(data.status || 'not_started');
    }
  };

  const updateVotingStatus = async (status: string) => {
    const { error } = await supabase
      .from('election_status')
      .upsert({ 
        department: selectedDept, 
        status 
      }, { 
        onConflict: 'department' 
      });

    if (error) {
      toast.error('Failed to update voting status');
      return;
    }

    setVotingStatus(status);
    toast.success(`Voting ${status === 'active' ? 'started' : status === 'paused' ? 'paused' : 'ended'}`);
  };

  const exportVotersToCSV = () => {
    const headers = ['Name', 'Student ID', 'Email', 'Department', 'Status', 'Registered Date'];
    const rows = filteredVoters.map(v => [
      v.name,
      v.student_id,
      v.email,
      v.department,
      v.has_voted ? 'Voted' : 'Not Voted',
      new Date(v.created_at).toLocaleString()
    ]);

    const csvContent = [headers, ...rows]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `voters-${selectedDept}-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    toast.success('Voters exported successfully');
  };

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

  const filteredVoters = voters.filter(voter =>
    voter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    voter.student_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    voter.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

        {/* Voting Control */}
        <Card className="p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Voting Control - {selectedDept}</h2>
          <div className="flex gap-3">
            <Button
              onClick={() => updateVotingStatus('active')}
              disabled={votingStatus === 'active'}
              className="flex items-center gap-2"
            >
              <Play className="h-4 w-4" />
              Start Voting
            </Button>
            <Button
              variant="outline"
              onClick={() => updateVotingStatus('paused')}
              disabled={votingStatus !== 'active'}
              className="flex items-center gap-2"
            >
              <Pause className="h-4 w-4" />
              Pause
            </Button>
            <Button
              variant="destructive"
              onClick={() => updateVotingStatus('ended')}
              disabled={votingStatus === 'ended'}
              className="flex items-center gap-2"
            >
              <Square className="h-4 w-4" />
              End Voting
            </Button>
            <div className="ml-auto flex items-center">
              <Badge variant={votingStatus === 'active' ? 'default' : votingStatus === 'paused' ? 'secondary' : 'outline'}>
                {votingStatus === 'active' ? '🟢 Active' : votingStatus === 'paused' ? '⏸️ Paused' : '⏹️ Ended'}
              </Badge>
            </div>
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
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="voters">Voter Management</TabsTrigger>
            <TabsTrigger value="candidates">Candidates & Partylists</TabsTrigger>
            <TabsTrigger value="votes">Vote Counts</TabsTrigger>
            <TabsTrigger value="duplicates">Duplicate Attempts</TabsTrigger>
          </TabsList>

          <TabsContent value="candidates" className="mt-6">
            {selectedDept ? (
              <CandidateManager department={selectedDept} />
            ) : (
              <Card className="p-6">
                <p className="text-center text-muted-foreground">Please select a department first</p>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="voters" className="mt-6">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Voter Management - {selectedDept}</h3>
                <Button onClick={exportVotersToCSV} variant="outline" size="sm" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Export CSV
                </Button>
              </div>
              
              <div className="mb-4 flex items-center gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name, student ID, or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="text-sm text-muted-foreground">
                  {filteredVoters.length} of {voters.length} voters
                </div>
              </div>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Student ID</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Vote Time</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredVoters.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center text-muted-foreground">
                          {searchTerm ? 'No voters match your search' : 'No voters registered yet'}
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredVoters.map((voter) => (
                        <TableRow key={voter.id}>
                          <TableCell className="font-medium">{voter.name}</TableCell>
                          <TableCell>{voter.student_id}</TableCell>
                          <TableCell>{voter.email}</TableCell>
                          <TableCell>{voter.department}</TableCell>
                          <TableCell>
                            <Badge variant={voter.has_voted ? 'default' : 'secondary'}>
                              {voter.has_voted ? '🟢 Voted' : '🔴 Not Voted'}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {voter.has_voted && voter.verified_at 
                              ? new Date(voter.verified_at).toLocaleString()
                              : '-'}
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
