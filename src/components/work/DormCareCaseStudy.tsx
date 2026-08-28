import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { ThemeProvider } from '../../theme/ThemeContext';
import { Layout } from '../layout/Layout';
import './DormCareCaseStudy.css';

export const DormCareCaseStudy: React.FC = () => {
  return (
    <ThemeProvider>
      <Layout>
        
        {/* 01 OVERVIEW */}
        <Section className="case-study-hero">
          <Container isEditorial>
            <div className="case-study-header">
              <span className="text-metadata case-study-label">03 / PRODUCT & FRONTEND</span>
              <h1 className="text-display case-study-title">DORMCARE</h1>
              <p className="text-heading-section case-study-subtitle">
                Student Services, Simplified.
              </p>
              
              <div className="case-study-metadata">
                <div className="metadata-item">
                  <span className="text-metadata metadata-label">ROLE</span>
                  <span className="text-body metadata-value">Product Designer / Frontend Builder</span>
                </div>
                <div className="metadata-item">
                  <span className="text-metadata metadata-label">TYPE</span>
                  <span className="text-body metadata-value">Product Concept / Frontend Prototype</span>
                </div>
                <div className="metadata-item">
                  <span className="text-metadata metadata-label">TECHNOLOGY</span>
                  <span className="text-body metadata-value">React</span>
                </div>
                <div className="metadata-item">
                  <span className="text-metadata metadata-label">FOCUS</span>
                  <span className="text-body metadata-value">Service Design / UX / Product Thinking</span>
                </div>
              </div>
              
              <div style={{ marginTop: 'var(--space-32)' }}>
                <a 
                  href="https://dorm-care2.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-body"
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    padding: 'var(--space-12) var(--space-24)', 
                    backgroundColor: 'var(--color-primary-text)', 
                    color: 'var(--color-page-background)', 
                    textDecoration: 'none', 
                    borderRadius: '4px',
                    fontWeight: 500
                  }}
                >
                  View Live Product ↗
                </a>
              </div>
            </div>
          </Container>
        </Section>

        {/* 02 THE PROBLEM */}
        <Section className="case-study-section">
          <Container isEditorial>
            <div className="case-study-grid">
              <div className="grid-sidebar">
                <h2 className="text-metadata section-number">02 THE PROBLEM</h2>
              </div>
              <div className="grid-content">
                <h3 className="text-heading-large section-title">Students have demanding class schedules.</h3>
                <p className="text-body">
                  When students are busy, rooms may not get cleaned regularly, small maintenance issues can become annoying, and finding the right person to solve the problem can take unnecessary effort.
                </p>
                <p className="text-body emphasis">
                  The product opportunity: Make requesting help as simple as possible.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* 03 THE USER CONTEXT */}
        <Section className="case-study-section alt-bg">
          <Container isEditorial>
            <div className="case-study-grid">
              <div className="grid-sidebar">
                <h2 className="text-metadata section-number">03 THE USER CONTEXT</h2>
              </div>
              <div className="grid-content">
                <div className="context-flow">
                  <div className="context-step text-body">CLASS (9:00 AM)</div>
                  <div className="context-arrow">↓</div>
                  <div className="context-step text-body">LECTURES / WORK</div>
                  <div className="context-arrow">↓</div>
                  <div className="context-step text-body">6:00 PM</div>
                  <div className="context-arrow">↓</div>
                  <div className="context-step text-body">ROOM / MAINTENANCE NEED</div>
                  <div className="context-arrow">↓</div>
                  <div className="context-step emphasis-box text-heading-section">
                    "I DON'T HAVE TIME TO DEAL WITH THIS"
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 04 THE PRODUCT IDEA */}
        <Section className="case-study-section">
          <Container isEditorial>
            <div className="case-study-grid">
              <div className="grid-sidebar">
                <h2 className="text-metadata section-number">04 THE PRODUCT IDEA</h2>
              </div>
              <div className="grid-content">
                <h3 className="text-heading-large section-title">Start with the need, not the department.</h3>
                <p className="text-body">
                  Instead of making students figure out <em>"Who do I contact?"</em>, DormCare lets them start with <em>"What do I need?"</em>
                </p>
                <ul className="text-body idea-list">
                  <li>Need cleaning? → <strong>Book a cleaner.</strong></li>
                  <li>Something broken? → <strong>Report a maintenance problem.</strong></li>
                  <li>Need another service? → <strong>Choose the relevant service category.</strong></li>
                </ul>
                <p className="text-body emphasis">
                  Organize the experience around the user's problem, not the internal service organization.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* 05 SERVICE FLOW */}
        <Section className="case-study-section">
          <Container isEditorial>
            <div className="case-study-grid">
              <div className="grid-sidebar">
                <h2 className="text-metadata section-number">05 SERVICE FLOW</h2>
              </div>
              <div className="grid-content">
                <div className="service-flow-diagram">
                  <span className="flow-node">STUDENT</span>
                  <span className="flow-arrow">→</span>
                  <span className="flow-node">SELECT NEED</span>
                  <span className="flow-arrow">→</span>
                  <span className="flow-node">PROVIDE DETAILS</span>
                  <span className="flow-arrow">→</span>
                  <span className="flow-node">REQUEST SERVICE</span>
                  <span className="flow-arrow">→</span>
                  <span className="flow-node">WORKER / SERVICE</span>
                  <span className="flow-arrow">→</span>
                  <span className="flow-node highlight">RESOLUTION</span>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 06 KEY UX DECISIONS */}
        <Section className="case-study-section alt-bg">
          <Container isEditorial>
            <div className="case-study-grid">
              <div className="grid-sidebar">
                <h2 className="text-metadata section-number">06 KEY UX DECISIONS</h2>
              </div>
              <div className="grid-content">
                <div className="ux-decision">
                  <h4 className="text-heading-section">1. Start with the user's need.</h4>
                  <p className="text-body">Instead of <em>"Which department do you need?"</em>, use <em>"What do you need help with?"</em></p>
                </div>
                <div className="ux-decision">
                  <h4 className="text-heading-section">2. Prioritize the two most important actions.</h4>
                  <p className="text-body"><strong>BOOK A CLEANER</strong> and <strong>REPORT A MAINTENANCE PROBLEM</strong> receive stronger visual hierarchy.</p>
                </div>
                <div className="ux-decision">
                  <h4 className="text-heading-section">3. Reduce friction.</h4>
                  <p className="text-body">A student who is already busy should not need to navigate through a complicated process just to request help.</p>
                </div>
                <div className="ux-decision">
                  <h4 className="text-heading-section">4. Keep service categories understandable.</h4>
                  <p className="text-body">Plumbing, carpentry, cleaning, etc. should be understandable as services rather than technical internal categories.</p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 07 & 08 CORE WORKFLOWS WITH VISUALS */}
        <Section className="case-study-section">
          <Container isEditorial>
            
            {/* BOOK A CLEANER */}
            <div className="workflow-section">
              <div className="workflow-text">
                <h2 className="text-metadata section-number">07 BOOK A CLEANER</h2>
                <div className="workflow-breakdown text-body">
                  <div className="workflow-step">
                    <strong>PROBLEM</strong>
                    <p>"I need my room cleaned, but I don't have enough time."</p>
                  </div>
                  <div className="workflow-step">
                    <strong>ACTION</strong>
                    <p>Book a Cleaner</p>
                  </div>
                  <div className="workflow-step">
                    <strong>DETAILS</strong>
                    <p>Collect only the information necessary for the request.</p>
                  </div>
                  <div className="workflow-step">
                    <strong>REQUEST</strong>
                    <p>Submit the service request.</p>
                  </div>
                </div>
              </div>
              <div className="workflow-visual">
                <div className="visual-placeholder">
                  <span className="text-metadata">BOOK A CLEANER INTERFACE</span>
                  <span className="text-small">Prioritizing the two most common actions reduces the time needed to decide what to do next.</span>
                </div>
              </div>
            </div>

            {/* REPORT MAINTENANCE */}
            <div className="workflow-section reverse">
              <div className="workflow-text">
                <h2 className="text-metadata section-number">08 REPORT A MAINTENANCE PROBLEM</h2>
                <div className="workflow-breakdown text-body">
                  <div className="workflow-step">
                    <strong>PROBLEM</strong>
                    <p>Something in the room needs fixing.</p>
                  </div>
                  <div className="workflow-step">
                    <strong>ACTION</strong>
                    <p>Report a Maintenance Problem</p>
                  </div>
                  <div className="workflow-step">
                    <strong>DETAILS</strong>
                    <p>Describe the issue.</p>
                  </div>
                  <div className="workflow-step">
                    <strong>SERVICE</strong>
                    <p>Connect it with the appropriate maintenance category.</p>
                  </div>
                </div>
              </div>
              <div className="workflow-visual">
                <div className="visual-placeholder">
                  <span className="text-metadata">REPORT MAINTENANCE INTERFACE</span>
                  <span className="text-small">Clear categorization routes the problem without forcing the user to understand internal operations.</span>
                </div>
              </div>
            </div>

          </Container>
        </Section>

        {/* 09 DESIGNING FOR SIMPLICITY */}
        <Section className="case-study-section alt-bg">
          <Container isEditorial>
            <div className="case-study-grid">
              <div className="grid-sidebar">
                <h2 className="text-metadata section-number">09 DESIGNING FOR SIMPLICITY</h2>
              </div>
              <div className="grid-content">
                <p className="text-body">
                  The product deals with users who are already busy. Therefore, the interface should not make them think harder than necessary.
                </p>
                <ul className="text-body checklist">
                  <li>Clear primary actions</li>
                  <li>Obvious service categories</li>
                  <li>Short workflows</li>
                  <li>Understandable labels</li>
                  <li>Strong hierarchy</li>
                  <li>Minimal unnecessary information</li>
                </ul>
                <div className="before-after-concept text-body">
                  <div className="concept-side">
                    <span className="text-metadata">FRICTION</span>
                    <p>"Find someone who can help."</p>
                  </div>
                  <div className="concept-arrow">→</div>
                  <div className="concept-side highlight">
                    <span className="text-metadata">DORMCARE</span>
                    <p>"Tell us what you need."</p>
                  </div>
                </div>
                <p className="text-heading-section emphasis">
                  Good service design can make the complexity behind the product invisible to the user.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* 10 BUILDING THE PROTOTYPE */}
        <Section className="case-study-section">
          <Container isEditorial>
            <div className="case-study-grid">
              <div className="grid-sidebar">
                <h2 className="text-metadata section-number">10 BUILDING THE PROTOTYPE</h2>
              </div>
              <div className="grid-content">
                <h3 className="text-heading-large section-title">Implementing the frontend in React.</h3>
                <p className="text-body">
                  Building the React prototype helped explore the actual product experience. It allowed me to validate user flows, service discovery, booking interactions, maintenance reporting, and information hierarchy in an interactive state.
                </p>
                <p className="text-body">
                  <em>(Note: This is a frontend product prototype focusing on service design, rather than a production-ready backend system.)</em>
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* 11 WHAT I LEARNED */}
        <Section className="case-study-section">
          <Container isEditorial>
            <div className="case-study-grid">
              <div className="grid-sidebar">
                <h2 className="text-metadata section-number">11 WHAT I LEARNED</h2>
              </div>
              <div className="grid-content">
                <ol className="text-body numbered-list">
                  <li>A simple problem can create a surprisingly complex service workflow.</li>
                  <li>The user should not need to understand the organization's internal structure.</li>
                  <li>Primary actions should reflect the most common user needs.</li>
                  <li>Designing the workflow is more important than simply creating screens.</li>
                  <li>Building the prototype exposes usability problems that aren't obvious during ideation.</li>
                </ol>
              </div>
            </div>
          </Container>
        </Section>

        {/* 12 WHAT I WOULD IMPROVE */}
        <Section className="case-study-section">
          <Container isEditorial>
            <div className="case-study-grid">
              <div className="grid-sidebar">
                <h2 className="text-metadata section-number">12 WHAT I WOULD IMPROVE</h2>
              </div>
              <div className="grid-content">
                <p className="text-body">Future possibilities for expanding the product concept:</p>
                <ul className="text-body bullet-list">
                  <li>Real worker availability & backend integration</li>
                  <li>Booking status and request tracking</li>
                  <li>Service history</li>
                  <li>Worker profiles, ratings, and feedback</li>
                  <li>System notifications</li>
                  <li>Better maintenance categorization</li>
                  <li>Real user testing in a dorm environment</li>
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* FOOTER NAV */}
        <Section className="case-study-footer">
          <Container isEditorial>
            <a 
              href="/" 
              className="text-small back-link"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
            >
              ← Back to Portfolio
            </a>
          </Container>
        </Section>

      </Layout>
    </ThemeProvider>
  );
};
