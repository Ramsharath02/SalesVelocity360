import React from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import HighlightsSection from './components/sections/HighlightsSection';
import CtaSection from './components/sections/CtaSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <HighlightsSection />
        <AboutSection />
        <CtaSection />
      </main>
    </div>
  );
}

export default App;