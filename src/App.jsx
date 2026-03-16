import React, { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Holopin from './components/Holopin';
import Footer from './components/Footer';

function App() {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!loaded && <Loader onComplete={handleLoadComplete} />}
      </AnimatePresence>

      <div
        id="main"
        className={`min-h-screen bg-background overflow-x-clip transition-opacity duration-700 delay-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Services />
        <Education />
        <Achievements />
        <Holopin />
        <Footer />
      </div>
    </>
  );
}

export default App;
