import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { StudentFlow } from './components/StudentFlow';
import { HostFlow } from './components/HostFlow';
import { LandingPage } from './components/LandingPage';

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'student' | 'host'>('landing');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'student':
        return <StudentFlow onBack={() => setCurrentView('landing')} />;
      case 'host':
        return <HostFlow onBack={() => setCurrentView('landing')} />;
      default:
        return (
          <LandingPage 
            onStudentPath={() => setCurrentView('student')}
            onHostPath={() => setCurrentView('host')}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderCurrentView()}
    </div>
  );
}