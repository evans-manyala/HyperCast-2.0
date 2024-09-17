import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleContinue = () => {
    navigate('/app');
  };

  return (
    <div className="landing-page">
      <h1>Welcome to HYperCast</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleContinue}>Continue without login</button>
    </div>
  );
};

export default LandingPage;
