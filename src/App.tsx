import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AuthSelect from "./pages/AuthSelect";
import Register from "./pages/Register";
import VoterLogin from "./pages/VoterLogin";
import Landing from "./pages/Landing";
import Verify from "./pages/Verify";
import Vote from "./pages/Vote";
import Results from "./pages/Results";
import OverallWinners from "./pages/OverallWinners";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? <>{children}</> : <Navigate to="/login" replace />;
};

// Admin Protected Route
import { useState, useEffect } from 'react';
import { supabase } from './integrations/supabase/client';

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAdminStatus = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        setIsAdmin(false);
        return;
      }

      const { data: roleData } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id)
        .eq('role', 'admin')
        .single();

      setIsAdmin(!!roleData);
    };

    checkAdminStatus();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      checkAdminStatus();
    });

    return () => subscription.unsubscribe();
  }, []);

  if (isAdmin === null) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return isAdmin ? <>{children}</> : <Navigate to="/admin-login" replace />;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/auth-select" element={<ProtectedRoute><AuthSelect /></ProtectedRoute>} />
          <Route path="/register" element={<ProtectedRoute><Register /></ProtectedRoute>} />
          <Route path="/voter-login" element={<ProtectedRoute><VoterLogin /></ProtectedRoute>} />
          <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
          <Route path="/landing" element={<ProtectedRoute><Landing /></ProtectedRoute>} />
          <Route path="/verify" element={<ProtectedRoute><Verify /></ProtectedRoute>} />
          <Route path="/vote/:deptCode" element={<ProtectedRoute><Vote /></ProtectedRoute>} />
          <Route path="/results/:deptCode" element={<ProtectedRoute><Results /></ProtectedRoute>} />
          <Route path="/overall-winners" element={<ProtectedRoute><OverallWinners /></ProtectedRoute>} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
