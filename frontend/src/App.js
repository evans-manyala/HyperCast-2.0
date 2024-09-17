import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SplashScreen from './components/splashScreen';
import LandingPage from './components/landingPage';
import LoginPage from './components/login';
import AppContent from './components/appContent';

function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  // Simulate splash screen timeout
  setTimeout(() => setShowSplashScreen(false), 2000);

  return (
    <Router>
      <Routes>
        {showSplashScreen ? (
          <Route path="/" element={<SplashScreen />} />
        ) : (
          <>
            <Route path="/" element={<Navigate to="/landing" />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/app" element={<AppContent />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
