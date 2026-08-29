import { useState, useEffect } from 'react';
import { ThemeProvider } from './theme/ThemeContext';
import { IntroExperience } from './components/intro/IntroExperience';
import { Hero } from './components/hero/Hero';
import { SelectedWork } from './components/work/SelectedWork';
import { PolicyLensCaseStudy } from './components/work/PolicyLensCaseStudy';
import { DormCareCaseStudy } from './components/work/DormCareCaseStudy';
import { ProductThinking } from './components/thinking/ProductThinking';
import { PerspectiveSection } from './components/about/PerspectiveSection';
import { AboutSection } from './components/about/AboutSection';
import { ContactSection } from './components/contact/ContactSection';
import { Layout } from './components/layout/Layout';
import './index.css';

function App() {
  const [introPhase, setIntroPhase] = useState<'initial' | 'coding' | 'transitioning' | 'complete'>('initial');
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      // Let the browser handle scroll restoration naturally
    };

    const handleCustomNavigate = () => {
      setCurrentPath(window.location.pathname);
      // Programmatic navigation scrolls to top by default
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('navigate', handleCustomNavigate);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('navigate', handleCustomNavigate);
    };
  }, []);

  const normalizedPath = currentPath.endsWith('/') && currentPath.length > 1 
    ? currentPath.slice(0, -1) 
    : currentPath;

  if (normalizedPath === '/work/policylens') {
    return <PolicyLensCaseStudy />;
  }

  if (normalizedPath === '/work/dormcare') {
    return <DormCareCaseStudy />;
  }

  return (
    <ThemeProvider>
      <Layout>
        {/* Intro is an absolute overlay that fades out once complete */}
        <IntroExperience phase={introPhase} setPhase={setIntroPhase} />
        
        {/* Hero acts as the primary content anchored to the viewport top */}
        <Hero introPhase={introPhase} />
        
        {/* Selected Work Section */}
        <SelectedWork />

        {/* Product Thinking Section */}
        <ProductThinking />
        
        {/* Perspective Section */}
        <PerspectiveSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Contact & Footer Section */}
        <ContactSection />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
