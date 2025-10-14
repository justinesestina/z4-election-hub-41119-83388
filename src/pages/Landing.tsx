import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Shield, Zap, BarChart3, Smartphone, CheckCircle2, Trophy, LogOut, HelpCircle, ShieldCheck } from 'lucide-react';
import { DarkModeToggle } from '@/components/DarkModeToggle';
import { useNavigate } from 'react-router-dom';
import { DepartmentIcon } from '@/components/DepartmentIcon';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Department } from '@/types';
import { toast } from 'sonner';
import { useState } from 'react';
import { VotingTutorialModal } from '@/components/VotingTutorialModal';

export default function Landing() {
  const navigate = useNavigate();
  const [showTutorial, setShowTutorial] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    toast.success('Logged out successfully');
    navigate('/login');
  };

  const { data: departments = [] } = useQuery({
    queryKey: ['departments'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('departments')
        .select('*')
        .order('short_code');
      
      if (error) throw error;
      return data as Department[];
    },
  });

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure Voting',
      description: 'One vote per student with device verification',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Fast & Simple',
      description: 'Streamlined voting process in minutes',
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Live Results',
      description: 'Real-time vote counting and analytics',
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile Friendly',
      description: 'Vote from any device, anywhere',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">Z4</span>
            </div>
            <span className="text-xl font-semibold text-foreground">Campus Vote</span>
          </motion.div>
          <div className="flex items-center gap-2">
            <DarkModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLogout}
              className="rounded-full hover:bg-destructive/10 hover:text-destructive transition-colors"
              aria-label="Logout"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
            Campus Vote (VoteNet): A Department-Based Online Student Voting System
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Empowering fair and transparent student elections across every college department.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/verify')}
              className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl"
            >
              Start Voting
              <CheckCircle2 className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setShowTutorial(true)}
              className="text-lg px-8 py-6 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              <HelpCircle className="mr-2 h-5 w-5" />
              How to Vote
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Tutorial Modal */}
      <VotingTutorialModal
        open={showTutorial}
        onOpenChange={setShowTutorial}
      />

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-muted/30 rounded-3xl mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Why Choose Campus Vote?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Departments Section */}
      <section className="container mx-auto px-4 py-16 mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Participating Departments
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="p-6 text-center hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary/50"
                  style={{ borderColor: `${dept.color_hex}20` }}
                  onClick={() => navigate(`/results/${dept.short_code}`)}
                >
                  <div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-3"
                    style={{ backgroundColor: `${dept.color_hex}20`, color: dept.color_hex }}
                  >
                    <DepartmentIcon iconName={dept.icon_name} className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-sm text-foreground">{dept.short_code}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{dept.name}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button
              size="lg"
              onClick={() => navigate('/overall-winners')}
              className="text-base px-8 py-6 rounded-full bg-primary hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl"
            >
              <Trophy className="mr-2 h-5 w-5" />
              View Overall Winners Summary
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/admin-login')}
              className="text-base px-8 py-6 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              <ShieldCheck className="mr-2 h-5 w-5" />
              Admin Access
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Campus Vote - Z4. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Secure • Transparent • Democratic
          </p>
          <p className="text-xs text-muted-foreground mt-3 italic">
            This website was created by Justine Ragaza, Justine Rae Ginga, and Jhon Zenn Godani.
          </p>
        </div>
      </footer>
    </div>
  );
}
