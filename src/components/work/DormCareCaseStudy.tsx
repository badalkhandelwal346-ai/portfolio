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
        
        {/* 00 OVERVIEW / HERO */}
        <Section className="case-study-hero">
          <Container isEditorial>
            <div className="case-study-header">
              <span className="text-metadata case-study-label">02 / PRODUCT & FRONTEND</span>
              <h1 className="text-display case-study-title">DormCare</h1>
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
                  <span className="text-body metadata-value">Service Prototype</span>
                </div>
                <div className="metadata-item">
                  <span className="text-metadata metadata-label">TECHNOLOGY</span>
                  <span className="text-body metadata-value">React</span>
                </div>
                <div className="metadata-item">
                  <span className="text-metadata metadata-label">FOCUS</span>
                  <span className="text-body metadata-value">Service Design / UX / Task Flow</span>
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

        {/* 01 THE PROBLEM */}
        <Section className="case-study-section">
          <Container isEditorial>
            <div className="case-study-grid">
              <div className="grid-sidebar">
                <h2 className="text-metadata section-number">01 / THE PROBLEM</h2>
              </div>
              <div className="grid-content">
                <h3 className="text-heading-large section-title">Everyday maintenance is deeply fragmented.</h3>
                <p className="text-body">
                  When a student needs their room cleaned, a plumbing issue fixed, or general maintenance help, the process is rarely unified. Finding the appropriate person, explaining the issue, arranging the service, and knowing what happens next creates unnecessary friction in a student's already busy schedule.
                </p>
                <p className="text-body emphasis">
                  The product hypothesis: Students have the need, and staff have the capability, but the connecting tissue between them is broken.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* 02 THE PRODUCT QUESTION */}
        <Section className="case-study-section alt-bg">
          <Container isEditorial>
            <div className="case-study-grid">
              <div className="grid-sidebar">
                <h2 className="text-metadata section-number">02 / PRODUCT QUESTION</h2>
              </div>
              <div className="grid-content">
                <h3 className="text-heading-large section-title">
                  How might we make everyday dorm maintenance as simple as requesting a digital service?
                </h3>
                <p className="text-body">
                  The goal was reducing the cognitive load and friction between "I have a problem" and "I have a person handling it."
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* 03 USERS AND SERVICE SYSTEM */}
        <Section className="case-study-section">
          <Container isEditorial>
            <div className="case-study-grid">
              <div className="grid-sidebar">
                <h2 className="text-metadata section-number">03 / SERVICE SYSTEM</h2>
              </div>
              <div className="grid-content">
                <p className="text-body">
                  DormCare is a two-sided platform. While the frontend prototype focuses on the student experience, the architecture was designed with the entire service loop in mind.
                </p>
                
                <div className="service-system-container" style={{ display: 'flex', gap: 'var(--space-32)', marginTop: 'var(--space-32)', flexWrap: 'wrap' }}>
                  <div className="system-side" style={{ flex: '1 1 250px', padding: 'var(--space-24)', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '4px' }}>
                    <h4 className="text-metadata">PRIMARY USER: STUDENT</h4>
                    <ul className="text-body" style={{ marginTop: 'var(--space-16)', paddingLeft: 'var(--space-16)' }}>
                      <li>Simple request creation</li>
                      <li>Clear service categories</li>
                      <li>Minimal cognitive effort</li>
                      <li>Visibility into the request</li>
                    </ul>
                  </div>
                  
                  <div className="system-side" style={{ flex: '1 1 250px', padding: 'var(--space-24)', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '4px' }}>
                    <h4 className="text-metadata">SERVICE PROVIDER: STAFF</h4>
                    <ul className="text-body" style={{ marginTop: 'var(--space-16)', paddingLeft: 'var(--space-16)' }}>
                      <li>Clear, structured request information</li>
                      <li>Understandable service type</li>
                      <li>Ability to fulfill the request quickly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 04 KEY PRODUCT DECISION */}
        <Section className="case-study-section alt-bg">
          <Container isEditorial>
            <div className="case-study-grid">
              <div className="grid-sidebar">
                <h2 className="text-metadata section-number">04 / KEY DECISION</h2>
              </div>
              <div className="grid-content">
                <h3 className="text-heading-large section-title">Task-oriented entry points.</h3>
                <p className="text-body">
                  The strongest product decision was elevating the two primary tasks directly to the forefront: <strong>Book a Cleaner</strong> and <strong>Report a Maintenance Problem</strong>.
                </p>
                <p className="text-body">
                  Rather than forcing a student to understand the entire service catalog or navigate internal departments (e.g., "Facilities" vs "Janitorial"), the interface uses task-oriented design. Need cleaning? Book a cleaner. Something is broken? Report the problem. This drastically reduces the time to action.
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
                <h2 className="text-metadata section-number">05 / SERVICE FLOW</h2>
              </div>
              <div className="grid-content">
                <div className="service-flow-diagram" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)', margin: 'var(--space-32) 0' }}>
                  <div style={{ backgroundColor: 'var(--color-page-background)', border: '1px solid var(--color-border)', padding: 'var(--space-16)', textAlign: 'center', borderRadius: '4px', fontWeight: 500 }}>STUDENT</div>
                  <div style={{ textAlign: 'center', color: 'var(--color-muted-text)' }}>↓</div>
                  <div style={{ backgroundColor: 'var(--color-page-background)', border: '1px solid var(--color-border)', padding: 'var(--space-16)', textAlign: 'center', borderRadius: '4px', fontWeight: 500 }}>SELECT SERVICE</div>
                  <div style={{ textAlign: 'center', color: 'var(--color-muted-text)' }}>↓</div>
                  <div style={{ backgroundColor: 'var(--color-page-background)', border: '1px solid var(--color-border)', padding: 'var(--space-16)', textAlign: 'center', borderRadius: '4px', fontWeight: 500 }}>DESCRIBE / REQUEST</div>
                  <div style={{ textAlign: 'center', color: 'var(--color-muted-text)' }}>↓</div>
                  <div style={{ backgroundColor: 'var(--color-page-background)', border: '1px dashed var(--color-border)', padding: 'var(--space-16)', textAlign: 'center', borderRadius: '4px', fontWeight: 500, color: 'var(--color-secondary-text)' }}>REQUEST RECEIVED (SYSTEM)</div>
                  <div style={{ textAlign: 'center', color: 'var(--color-muted-text)' }}>↓</div>
                  <div style={{ backgroundColor: 'var(--color-page-background)', border: '1px dashed var(--color-border)', padding: 'var(--space-16)', textAlign: 'center', borderRadius: '4px', fontWeight: 500, color: 'var(--color-secondary-text)' }}>SERVICE FULFILLED (PROVIDER)</div>
                </div>
                <p className="text-metadata" style={{ textAlign: 'center', color: 'var(--color-muted-text)' }}>
                  *Dashed steps indicate the backend/provider workflow required to close the loop.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* 06 UX DECISIONS */}
        <Section className="case-study-section alt-bg">
          <Container isEditorial>
            <div className="case-study-grid">
              <div className="grid-sidebar">
                <h2 className="text-metadata section-number">06 / UX DECISIONS</h2>
              </div>
              <div className="grid-content">
                <div className="ux-decisions" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-48)' }}>
                  
                  <div className="ux-decision" style={{ borderLeft: '2px solid var(--color-subtle-border)', paddingLeft: 'var(--space-24)' }}>
                    <h4 className="text-metadata">PROBLEM: ROUTING ISSUES ACCURATELY</h4>
                    <p className="text-body" style={{ marginTop: 'var(--space-12)' }}>
                      <strong>Decision:</strong> Using explicit, human-readable service categories (e.g., Plumbing, Carpentry) during the reporting flow.<br/>
                      <strong>Why:</strong> It forces the user to loosely categorize their own problem, reducing the triage burden on the backend service team while keeping the terminology accessible to students.
                    </p>
                  </div>

                  <div className="ux-decision" style={{ borderLeft: '2px solid var(--color-subtle-border)', paddingLeft: 'var(--space-24)' }}>
                    <h4 className="text-metadata">PROBLEM: COGNITIVE OVERLOAD</h4>
                    <p className="text-body" style={{ marginTop: 'var(--space-12)' }}>
                      <strong>Decision:</strong> Splitting the primary UI strictly into two massive, unmissable entry points.<br/>
                      <strong>Why:</strong> A student who is already late for class shouldn't have to scan a dense dashboard of options. The UI reflects the immediate urgency of the user's context.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 07 DESIGN VS PRODUCT THINKING */}
        <Section className="case-study-section">
          <Container isEditorial>
            <div className="case-study-grid">
              <div className="grid-sidebar">
                <h2 className="text-metadata section-number">07 / DESIGN VS PRODUCT</h2>
              </div>
              <div className="grid-content">
                <h3 className="text-heading-large section-title">Designing around a service model.</h3>
                <p className="text-body">
                  While the interface utilizes clean typography, clear spacing, and modern UI paradigms, the true design work was conceptual. DormCare is not just an exercise in arranging buttons; it is an attempt to structure a messy, real-world service workflow into a predictable, digital task flow that respects the user's limited time.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* 08 WHAT I BUILT */}
        <Section className="case-study-section alt-bg">
          <Container isEditorial>
            <div className="case-study-grid">
              <div className="grid-sidebar">
                <h2 className="text-metadata section-number">08 / WHAT I BUILT</h2>
              </div>
              <div className="grid-content">
                <h3 className="text-heading-large section-title">A frontend service prototype.</h3>
                <p className="text-body">
                  The actual implementation is a React-based frontend application. It successfully demonstrates the core student-facing workflows: service discovery, category selection, issue description, and form submission. The architecture isolates these tasks to prove the validity of the task-oriented UI hypothesis.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* 09 LIMITATIONS */}
        <Section className="case-study-section">
          <Container isEditorial>
            <div className="case-study-grid">
              <div className="grid-sidebar">
                <h2 className="text-metadata section-number">09 / LIMITATIONS</h2>
              </div>
              <div className="grid-content">
                <h3 className="text-heading-large section-title">What this prototype does not solve.</h3>
                <p className="text-body">
                  Because this is a frontend prototype, several critical service components remain unresolved:
                </p>
                <ul className="text-body bullet-list" style={{ paddingLeft: 'var(--space-24)', marginTop: 'var(--space-16)' }}>
                  <li><strong>Service-Provider Workflow:</strong> There is no backend dashboard or interface for staff to accept, manage, or close out these requests.</li>
                  <li><strong>Request Tracking:</strong> The system cannot yet provide students with real-time updates on their request status.</li>
                  <li><strong>Real-World Validation:</strong> The core hypothesis—that students will use this specific categorization—remains untested against actual university operations.</li>
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* 10 WHAT I WOULD DO NEXT */}
        <Section className="case-study-section alt-bg">
          <Container isEditorial>
            <div className="case-study-grid">
              <div className="grid-sidebar">
                <h2 className="text-metadata section-number">10 / NEXT STEPS</h2>
              </div>
              <div className="grid-content">
                <h3 className="text-heading-large section-title">Future Product Direction</h3>
                <p className="text-body">If I were to take this product from prototype to production, my immediate priorities would be:</p>
                <ol className="text-body numbered-list" style={{ paddingLeft: 'var(--space-24)', marginTop: 'var(--space-16)' }}>
                  <li><strong>Validate the service-request flow</strong> with actual students to see if the two-button primary architecture holds up under stress.</li>
                  <li><strong>Understand staff workflows</strong> by interviewing maintenance workers to see how they currently receive and manage requests.</li>
                  <li><strong>Test service categories</strong> to ensure "Plumbing" and "Carpentry" align with real maintenance needs rather than arbitrary system design.</li>
                </ol>
              </div>
            </div>
          </Container>
        </Section>

        {/* FOOTER NAV */}
        <Section className="case-study-footer">
          <Container isEditorial>
            <div style={{ paddingBottom: 'var(--space-128)', paddingTop: 'var(--space-96)' }}>
              <a 
                href="/" 
              className="text-small back-link"
              style={{ textDecoration: 'none', color: 'var(--color-secondary-text)', borderBottom: '1px solid var(--color-border)', paddingBottom: '4px' }}
              onClick={(e) => {
                if (e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
                  e.preventDefault();
                  window.history.pushState({}, '', '/');
                  window.dispatchEvent(new Event('navigate'));
                }
              }}
            >
              ← Back to Portfolio
              </a>
            </div>
          </Container>
        </Section>

      </Layout>
    </ThemeProvider>
  );
};
