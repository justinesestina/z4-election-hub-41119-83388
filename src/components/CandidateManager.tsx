import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
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
import { Pencil, Trash2, Plus } from 'lucide-react';
import { toast } from 'sonner';
import { POSITIONS } from '@/types';

interface Candidate {
  id: string;
  department: string;
  position: string;
  candidate_name: string;
  year_level?: string;
}

interface Partylist {
  id: string;
  department: string;
  name: string;
  description?: string;
}

interface CandidateManagerProps {
  department: string;
}

export function CandidateManager({ department }: CandidateManagerProps) {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [partylists, setPartylists] = useState<Partylist[]>([]);
  const [editingCandidate, setEditingCandidate] = useState<Candidate | null>(null);
  const [editingPartylist, setEditingPartylist] = useState<Partylist | null>(null);
  const [newCandidate, setNewCandidate] = useState({ position: '', name: '', yearLevel: '' });
  const [newPartylist, setNewPartylist] = useState({ name: '', description: '' });

  useEffect(() => {
    if (department) {
      fetchCandidates();
      fetchPartylists();
    }
  }, [department]);

  const fetchCandidates = async () => {
    const { data, error } = await supabase
      .from('candidates')
      .select('*')
      .eq('department', department)
      .order('position')
      .order('candidate_name');
    
    if (!error && data) setCandidates(data);
  };

  const fetchPartylists = async () => {
    const { data, error } = await supabase
      .from('partylists')
      .select('*')
      .eq('department', department)
      .order('name');
    
    if (!error && data) setPartylists(data);
  };

  const handleAddCandidate = async () => {
    if (!newCandidate.position || !newCandidate.name) {
      toast.error('Please fill in all required fields');
      return;
    }

    const { error } = await supabase
      .from('candidates')
      .insert({
        department,
        position: newCandidate.position,
        candidate_name: newCandidate.name,
        year_level: newCandidate.yearLevel || null,
      });

    if (error) {
      toast.error('Failed to add candidate');
    } else {
      toast.success('Candidate added successfully');
      setNewCandidate({ position: '', name: '', yearLevel: '' });
      fetchCandidates();
    }
  };

  const handleUpdateCandidate = async () => {
    if (!editingCandidate) return;

    const { error } = await supabase
      .from('candidates')
      .update({
        candidate_name: editingCandidate.candidate_name,
        year_level: editingCandidate.year_level,
      })
      .eq('id', editingCandidate.id);

    if (error) {
      toast.error('Failed to update candidate');
    } else {
      toast.success('Candidate updated successfully');
      setEditingCandidate(null);
      fetchCandidates();
    }
  };

  const handleDeleteCandidate = async (id: string) => {
    const { error } = await supabase
      .from('candidates')
      .delete()
      .eq('id', id);

    if (error) {
      toast.error('Failed to delete candidate');
    } else {
      toast.success('Candidate deleted successfully');
      fetchCandidates();
    }
  };

  const handleAddPartylist = async () => {
    if (!newPartylist.name) {
      toast.error('Please enter a partylist name');
      return;
    }

    const { error } = await supabase
      .from('partylists')
      .insert({
        department,
        name: newPartylist.name,
        description: newPartylist.description || null,
      });

    if (error) {
      toast.error('Failed to add partylist');
    } else {
      toast.success('Partylist added successfully');
      setNewPartylist({ name: '', description: '' });
      fetchPartylists();
    }
  };

  const handleUpdatePartylist = async () => {
    if (!editingPartylist) return;

    const { error } = await supabase
      .from('partylists')
      .update({
        name: editingPartylist.name,
        description: editingPartylist.description,
      })
      .eq('id', editingPartylist.id);

    if (error) {
      toast.error('Failed to update partylist');
    } else {
      toast.success('Partylist updated successfully');
      setEditingPartylist(null);
      fetchPartylists();
    }
  };

  const handleDeletePartylist = async (id: string) => {
    const { error } = await supabase
      .from('partylists')
      .delete()
      .eq('id', id);

    if (error) {
      toast.error('Failed to delete partylist');
    } else {
      toast.success('Partylist deleted successfully');
      fetchPartylists();
    }
  };

  return (
    <div className="space-y-6">
      {/* Candidates Section */}
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4">Manage Candidates</h3>
        
        {/* Add New Candidate */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
          <div>
            <Label>Position</Label>
            <Select value={newCandidate.position} onValueChange={(value) => setNewCandidate({ ...newCandidate, position: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select position" />
              </SelectTrigger>
              <SelectContent>
                {POSITIONS.map((pos) => (
                  <SelectItem key={pos} value={pos}>{pos}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Candidate Name</Label>
            <Input
              value={newCandidate.name}
              onChange={(e) => setNewCandidate({ ...newCandidate, name: e.target.value })}
              placeholder="Enter name"
            />
          </div>
          <div>
            <Label>Year Level (Optional)</Label>
            <Input
              value={newCandidate.yearLevel}
              onChange={(e) => setNewCandidate({ ...newCandidate, yearLevel: e.target.value })}
              placeholder="e.g., 4th Year BSIT"
            />
          </div>
          <div className="flex items-end">
            <Button onClick={handleAddCandidate} className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Add Candidate
            </Button>
          </div>
        </div>

        {/* Candidates Table */}
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Position</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Year Level</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {candidates.map((candidate) => (
                <TableRow key={candidate.id}>
                  <TableCell>{candidate.position}</TableCell>
                  <TableCell>{candidate.candidate_name}</TableCell>
                  <TableCell>{candidate.year_level || '-'}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="sm" onClick={() => setEditingCandidate(candidate)}>
                            <Pencil className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Edit Candidate</AlertDialogTitle>
                          </AlertDialogHeader>
                          {editingCandidate && (
                            <div className="space-y-4">
                              <div>
                                <Label>Name</Label>
                                <Input
                                  value={editingCandidate.candidate_name}
                                  onChange={(e) => setEditingCandidate({ ...editingCandidate, candidate_name: e.target.value })}
                                />
                              </div>
                              <div>
                                <Label>Year Level</Label>
                                <Input
                                  value={editingCandidate.year_level || ''}
                                  onChange={(e) => setEditingCandidate({ ...editingCandidate, year_level: e.target.value })}
                                />
                              </div>
                            </div>
                          )}
                          <AlertDialogFooter>
                            <AlertDialogCancel onClick={() => setEditingCandidate(null)}>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleUpdateCandidate}>Save Changes</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Candidate</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete {candidate.candidate_name}? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDeleteCandidate(candidate.id)}>Delete</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Partylists Section */}
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4">Manage Partylists</h3>
        
        {/* Add New Partylist */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          <div>
            <Label>Partylist Name</Label>
            <Input
              value={newPartylist.name}
              onChange={(e) => setNewPartylist({ ...newPartylist, name: e.target.value })}
              placeholder="Enter partylist name"
            />
          </div>
          <div>
            <Label>Description (Optional)</Label>
            <Input
              value={newPartylist.description}
              onChange={(e) => setNewPartylist({ ...newPartylist, description: e.target.value })}
              placeholder="Enter description"
            />
          </div>
          <div className="flex items-end">
            <Button onClick={handleAddPartylist} className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Add Partylist
            </Button>
          </div>
        </div>

        {/* Partylists Table */}
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {partylists.map((partylist) => (
                <TableRow key={partylist.id}>
                  <TableCell className="font-medium">{partylist.name}</TableCell>
                  <TableCell>{partylist.description || '-'}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="sm" onClick={() => setEditingPartylist(partylist)}>
                            <Pencil className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Edit Partylist</AlertDialogTitle>
                          </AlertDialogHeader>
                          {editingPartylist && (
                            <div className="space-y-4">
                              <div>
                                <Label>Name</Label>
                                <Input
                                  value={editingPartylist.name}
                                  onChange={(e) => setEditingPartylist({ ...editingPartylist, name: e.target.value })}
                                />
                              </div>
                              <div>
                                <Label>Description</Label>
                                <Input
                                  value={editingPartylist.description || ''}
                                  onChange={(e) => setEditingPartylist({ ...editingPartylist, description: e.target.value })}
                                />
                              </div>
                            </div>
                          )}
                          <AlertDialogFooter>
                            <AlertDialogCancel onClick={() => setEditingPartylist(null)}>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleUpdatePartylist}>Save Changes</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Partylist</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete {partylist.name}? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDeletePartylist(partylist.id)}>Delete</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
