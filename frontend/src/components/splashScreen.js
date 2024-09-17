import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/landing');
    }, 2000); // Navigate to landing page after 2 seconds

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <h1>Welcome to HYperCast</h1>
    </div>
  );
};

export default SplashScreen;
