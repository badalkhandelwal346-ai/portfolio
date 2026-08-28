import { useState, useEffect } from 'react';
import { ThemeProvider } from './theme/ThemeContext';
import { IntroExperience } from './components/intro/IntroExperience';
import { Hero } from './components/hero/Hero';
import { SelectedWork } from './components/work/SelectedWork';
import { PolicyLensCaseStudy } from './components/work/PolicyLensCaseStudy';
import { DormCareCaseStudy } from './components/work/DormCareCaseStudy';
import { ProductThinking } from './components/thinking/ProductThinking';
import { AboutSection } from './components/about/AboutSection';
import { Layout } from './components/layout/Layout';
import { Section } from './components/layout/Section';
import { Container } from './components/layout/Container';
import './index.css';

function App() {
  const [introPhase, setIntroPhase] = useState<'initial' | 'coding' | 'transitioning' | 'complete'>('initial');
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Scroll to top when the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  if (currentPath === '/work/policylens') {
    return <PolicyLensCaseStudy />;
  }

  if (currentPath === '/work/dormcare') {
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
        
        {/* About Section */}
        <AboutSection />
        
        <Section id="contact">
          <Container>
            <h2 className="text-metadata" style={{ marginBottom: 'var(--space-32)' }}>Contact Placeholder</h2>
            {/* Contact content will go here in a future milestone */}
          </Container>
        </Section>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
