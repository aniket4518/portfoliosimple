import { useEffect } from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { InteractionProvider } from './contexts/InteractionContext';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent() {
  const { isDark } = useTheme();
  
  useEffect(() => {
    document.title = 'Aniket Kumar Jha | Modern Portfolio';
    
    // Add modern font loading
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);
  
  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white' 
        : 'bg-gradient-to-br from-white via-neutral-50 to-white text-neutral-900'
    }`}>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <InteractionProvider>
        <AppContent />
      </InteractionProvider>
    </ThemeProvider>
  );
}

export default App;