import { ThemeProvider } from './theme/ThemeContext';
import { Layout } from './components/layout/Layout';
import { Section } from './components/layout/Section';
import { Container } from './components/layout/Container';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        {/* Placeholder hero section to demonstrate the layout and typography systems.
            The actual Hero and Intro animations are explicitly restricted from this milestone. */}
        <Section fullHeight>
          <Container isEditorial>
            <h1 className="text-display" style={{ marginBottom: 'var(--space-24)' }}>
              Product Designer & Builder
            </h1>
            <p className="text-heading-section" style={{ color: 'var(--color-secondary-text)' }}>
              I think in products, design for people, and build what I believe should exist.
            </p>
          </Container>
        </Section>
        
        {/* Placeholders for future sections */}
        <Section id="work">
          <Container>
            <h2 className="text-metadata" style={{ marginBottom: 'var(--space-32)' }}>Work Placeholder</h2>
            {/* Project cards will go here in a future milestone */}
          </Container>
        </Section>

        <Section id="about">
          <Container>
            <h2 className="text-metadata" style={{ marginBottom: 'var(--space-32)' }}>About Placeholder</h2>
            {/* About content will go here in a future milestone */}
          </Container>
        </Section>
        
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
