import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Trophy, Users, TrendingUp } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { DepartmentIcon } from '@/components/DepartmentIcon';
import { POSITIONS, Department } from '@/types';
import { DarkModeToggle } from '@/components/DarkModeToggle';
import { useQuery } from '@tanstack/react-query';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface VoteCount {
  candidate_name: string;
  count: number;
}

export default function Results() {
  const { deptCode } = useParams<{ deptCode: string }>();
  const navigate = useNavigate();
  const [voteCounts, setVoteCounts] = useState<Record<string, VoteCount[]>>({});

  // Fetch department info
  const { data: department } = useQuery({
    queryKey: ['department', deptCode],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('departments')
        .select('*')
        .eq('short_code', deptCode)
        .single();
      
      if (error) throw error;
      return data as Department;
    },
  });

  // Fetch and aggregate votes
  const fetchVotes = async () => {
    const { data: votes, error } = await supabase
      .from('votes')
      .select('position, candidate_name')
      .eq('department', deptCode!);

    if (error) {
      console.error('Error fetching votes:', error);
      return;
    }

    // Aggregate votes by position and candidate
    const counts: Record<string, Record<string, number>> = {};
    
    votes?.forEach((vote) => {
      if (!counts[vote.position]) {
        counts[vote.position] = {};
      }
      if (!counts[vote.position][vote.candidate_name]) {
        counts[vote.position][vote.candidate_name] = 0;
      }
      counts[vote.position][vote.candidate_name]++;
    });

    // Convert to array format for charts
    const formattedCounts: Record<string, VoteCount[]> = {};
    Object.entries(counts).forEach(([position, candidateCounts]) => {
      formattedCounts[position] = Object.entries(candidateCounts)
        .map(([candidate_name, count]) => ({ candidate_name, count }))
        .sort((a, b) => b.count - a.count);
    });

    setVoteCounts(formattedCounts);
  };

  useEffect(() => {
    if (!deptCode) return;

    fetchVotes();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('votes-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'votes',
          filter: `department=eq.${deptCode}`,
        },
        () => {
          fetchVotes();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [deptCode]);

  const totalVotes = Object.values(voteCounts).reduce(
    (sum, counts) => sum + counts.reduce((s, c) => s + c.count, 0),
    0
  );

  if (!department) {
    return <div>Loading...</div>;
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
            <div 
              className="h-10 w-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${department.color_hex}20`, color: department.color_hex }}
            >
              <DepartmentIcon iconName={department.icon_name} className="h-6 w-6" />
            </div>
            <div>
              <span className="text-lg font-semibold text-foreground block">{department.short_code} Results</span>
              <span className="text-xs text-muted-foreground">{department.name}</span>
            </div>
          </div>
          <DarkModeToggle />
        </div>
      </header>

      {/* Stats Overview */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div 
                  className="h-12 w-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${department.color_hex}20`, color: department.color_hex }}
                >
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Votes</p>
                  <p className="text-2xl font-bold text-foreground">{totalVotes}</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div 
                  className="h-12 w-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${department.color_hex}20`, color: department.color_hex }}
                >
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Positions</p>
                  <p className="text-2xl font-bold text-foreground">{POSITIONS.length}</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div 
                  className="h-12 w-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${department.color_hex}20`, color: department.color_hex }}
                >
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Live Updates</p>
                  <p className="text-lg font-bold text-success">Active</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Results Charts */}
        <div className="space-y-8">
          {POSITIONS.map((position, index) => {
            const positionCounts = voteCounts[position] || [];
            const maxVotes = positionCounts[0]?.count || 0;

            return (
              <motion.div
                key={position}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-foreground">
                    {position}
                  </h3>

                  {positionCounts.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">No votes yet</p>
                  ) : (
                    <ResponsiveContainer width="100%" height={200}>
                      <BarChart data={positionCounts} layout="horizontal">
                        <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                        <XAxis type="number" className="text-muted-foreground" />
                        <YAxis 
                          type="category" 
                          dataKey="candidate_name" 
                          width={150}
                          className="text-muted-foreground text-sm"
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'hsl(var(--card))',
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '8px',
                          }}
                          labelStyle={{ color: 'hsl(var(--foreground))' }}
                        />
                        <Bar dataKey="count" radius={[0, 8, 8, 0]}>
                          {positionCounts.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`}
                              fill={entry.count === maxVotes ? department.color_hex : `${department.color_hex}60`}
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  )}

                  {positionCounts.length > 0 && (
                    <div className="mt-4 space-y-3">
                      {positionCounts.map((candidate, i) => {
                        const isLeader = i === 0;
                        const getRankEmoji = () => {
                          if (i === 0) return '🥇';
                          if (i === 1) return '🥈';
                          if (i === 2) return '🥉';
                          return '';
                        };
                        
                        return (
                          <motion.div 
                            key={candidate.candidate_name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className={`p-4 rounded-lg flex items-center justify-between transition-all duration-300 ${
                              isLeader 
                                ? 'border-2 shadow-lg' 
                                : 'bg-muted hover:bg-muted/70'
                            }`}
                            style={isLeader ? { 
                              borderColor: '#FFD700',
                              backgroundColor: 'rgba(255, 215, 0, 0.15)'
                            } : {}}
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-2 w-12">
                                <span className={`text-lg font-bold ${isLeader ? 'text-[#FFD700]' : 'text-muted-foreground'}`}>
                                  {i + 1}.
                                </span>
                                {getRankEmoji() && (
                                  <span className="text-xl">{getRankEmoji()}</span>
                                )}
                              </div>
                              <p className={`text-base font-medium ${isLeader ? 'font-bold' : ''} text-foreground`}>
                                {candidate.candidate_name}
                              </p>
                            </div>
                            <div className="flex items-center gap-3">
                              <p 
                                className={`text-xl font-bold ${isLeader ? 'text-2xl' : ''}`}
                                style={{ color: isLeader ? '#FFD700' : department.color_hex }}
                              >
                                {candidate.count} {candidate.count === 1 ? 'vote' : 'votes'}
                              </p>
                              {isLeader && (
                                <Trophy className="h-6 w-6 text-[#FFD700] animate-pulse" />
                              )}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
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
