import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import './splashScreen.css';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/landing');
    }, 2000); // Navigate to landing page after 2 seconds

    return () => clearTimeout(timeout);
  }, [navigate]);

  return(
    <div className="splash-screen">
      <img src={logo} alt="HyperCast Logo" className="splash-logo" />
    </div>
  );
};

export default SplashScreen;
