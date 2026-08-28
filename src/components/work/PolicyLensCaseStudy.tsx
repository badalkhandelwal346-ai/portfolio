import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { ThemeProvider } from '../../theme/ThemeContext';
import { Layout } from '../layout/Layout';

export const PolicyLensCaseStudy: React.FC = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Section fullHeight>
          <div style={{ paddingTop: 'var(--space-96)' }}>
            <Container isEditorial>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-24)', maxWidth: '600px' }}>
                <span className="text-metadata" style={{ color: 'var(--color-primary-text)' }}>
                  01 / PRODUCT & AI
                </span>
                <h1 className="text-display">PolicyLens AI</h1>
                <p className="text-heading-section" style={{ color: 'var(--color-secondary-text)' }}>
                  Turning fragmented government policies into information people can actually use.
                </p>
                
                <div style={{ marginTop: 'var(--space-48)', padding: 'var(--space-32)', backgroundColor: 'var(--color-surface)', border: '1px dashed var(--color-border)', borderRadius: '4px' }}>
                  <p className="text-body" style={{ color: 'var(--color-muted-text)', margin: 0, textAlign: 'center' }}>
                    Case study content will be implemented here.
                  </p>
                </div>

                <div style={{ marginTop: 'var(--space-64)' }}>
                  <a 
                    href="/" 
                    className="text-small"
                    style={{ textDecoration: 'none', color: 'var(--color-secondary-text)', borderBottom: '1px solid var(--color-border)', paddingBottom: '4px' }}
                    onClick={(e) => {
                      e.preventDefault();
                      window.history.pushState({}, '', '/');
                      window.dispatchEvent(new PopStateEvent('popstate'));
                    }}
                  >
                    ← Back to Portfolio
                  </a>
                </div>
              </div>
            </Container>
          </div>
        </Section>
      </Layout>
    </ThemeProvider>
  );
};
