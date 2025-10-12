import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Landing from './Landing';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if voter is logged in
    const voterSession = localStorage.getItem('voterSession');
    if (!voterSession) {
      // If no voter session, redirect to auth select
      navigate('/auth-select');
    }
  }, [navigate]);

  return <Landing />;
};

export default Index;
