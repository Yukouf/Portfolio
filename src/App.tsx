import { HashRouter as Router } from 'react-router-dom'
import { useState } from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import HackingIntro from './components/HackingIntro'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import LiveClock from './components/LiveClock'
import AppContent from './components/AppContent'

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen ai-bg">
          <ScrollProgress />
          <CustomCursor />
          {!showIntro && <LiveClock />}
          {showIntro ? (
            <HackingIntro onComplete={handleIntroComplete} />
          ) : (
            <AppContent />
          )}
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App 