import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Trophy } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { DepartmentIcon } from '@/components/DepartmentIcon';
import { POSITIONS, Department } from '@/types';
import { DarkModeToggle } from '@/components/DarkModeToggle';

interface Winner {
  position: string;
  candidate_name: string;
  votes: number;
}

interface PartylistResult {
  name: string;
  votes: number;
}

interface DepartmentWinners {
  department: Department;
  winners: Winner[];
  partylistResults: PartylistResult[];
}

export default function OverallWinners() {
  const navigate = useNavigate();
  const [departmentWinners, setDepartmentWinners] = useState<DepartmentWinners[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOverallWinners();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('votes-overall-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'votes',
        },
        () => {
          fetchOverallWinners();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchOverallWinners = async () => {
    try {
      // Fetch all departments
      const { data: departments, error: deptError } = await supabase
        .from('departments')
        .select('*')
        .order('short_code');

      if (deptError) throw deptError;

      // Fetch all votes with partylist
      const { data: votes, error: votesError } = await supabase
        .from('votes')
        .select('department, position, candidate_name, partylist_vote');

      if (votesError) throw votesError;

      // Aggregate winners for each department
      const winnersData: DepartmentWinners[] = departments?.map((dept) => {
        const deptVotes = votes?.filter((v) => v.department === dept.short_code) || [];
        
        const winners: Winner[] = POSITIONS.map((position) => {
          const positionVotes = deptVotes.filter((v) => v.position === position);
          
          // Count votes per candidate
          const counts: Record<string, number> = {};
          positionVotes.forEach((vote) => {
            counts[vote.candidate_name] = (counts[vote.candidate_name] || 0) + 1;
          });

          // Find winner (candidate with most votes)
          let winnerName = 'No votes yet';
          let maxVotes = 0;
          Object.entries(counts).forEach(([name, voteCount]) => {
            if (voteCount > maxVotes) {
              maxVotes = voteCount;
              winnerName = name;
            }
          });

          return {
            position,
            candidate_name: winnerName,
            votes: maxVotes,
          };
        });

        // Aggregate partylist votes
        const partylistCounts: Record<string, number> = {};
        deptVotes.forEach((vote) => {
          if (vote.partylist_vote) {
            partylistCounts[vote.partylist_vote] = (partylistCounts[vote.partylist_vote] || 0) + 1;
          }
        });

        const partylistResults: PartylistResult[] = Object.entries(partylistCounts)
          .map(([name, votes]) => ({ name, votes }))
          .sort((a, b) => b.votes - a.votes);

        return {
          department: dept as Department,
          winners,
          partylistResults,
        };
      }) || [];

      setDepartmentWinners(winnersData);
    } catch (error) {
      console.error('Error fetching overall winners:', error);
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
            <div className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold text-foreground">Overall Winners Summary</span>
            </div>
          </div>
          <DarkModeToggle />
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
            Winners Across All Departments
          </h1>
          <p className="text-muted-foreground">
            Live results for all 8 positions across every department
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading winners...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {departmentWinners.map((deptData, index) => (
              <motion.div
                key={deptData.department.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all border-2" style={{ borderColor: `${deptData.department.color_hex}30` }}>
                  {/* Department Header */}
                  <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border">
                    <div
                      className="h-14 w-14 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${deptData.department.color_hex}20`, color: deptData.department.color_hex }}
                    >
                      <DepartmentIcon iconName={deptData.department.icon_name} className="h-7 w-7" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-foreground">{deptData.department.short_code}</h2>
                      <p className="text-sm text-muted-foreground">{deptData.department.name}</p>
                    </div>
                  </div>

                  {/* Winners List */}
                  <div className="space-y-3">
                    {deptData.winners.map((winner) => (
                      <div
                        key={winner.position}
                        className="p-3 rounded-lg bg-muted hover:bg-muted/70 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-muted-foreground font-medium uppercase">{winner.position}</p>
                            <p className="text-sm font-semibold text-foreground mt-1">
                              {winner.candidate_name}
                            </p>
                          </div>
                          {winner.votes > 0 && (
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold" style={{ color: deptData.department.color_hex }}>
                                {winner.votes} {winner.votes === 1 ? 'vote' : 'votes'}
                              </span>
                              <Trophy className="h-4 w-4" style={{ color: deptData.department.color_hex }} />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Partylist Results */}
                  {deptData.partylistResults.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-border">
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-3">Partylist Results</h3>
                      <div className="space-y-2">
                        {deptData.partylistResults.map((partylist, idx) => (
                          <div
                            key={partylist.name}
                            className="p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-muted-foreground">
                                  {idx + 1}.
                                </span>
                                <p className="text-sm font-medium text-foreground">
                                  {partylist.name}
                                </p>
                              </div>
                              <span className="text-sm font-bold" style={{ color: deptData.department.color_hex }}>
                                {partylist.votes} {partylist.votes === 1 ? 'vote' : 'votes'}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* View Full Results Button */}
                  <Button
                    variant="outline"
                    className="w-full mt-4"
                    onClick={() => navigate(`/results/${deptData.department.short_code}`)}
                    style={{ borderColor: deptData.department.color_hex, color: deptData.department.color_hex }}
                  >
                    View Full Breakdown
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Real-time Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 p-6 rounded-lg bg-muted/50"
        >
          <p className="text-sm text-muted-foreground">
            All data are displayed in real time and updated automatically through Supabase.
          </p>
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
