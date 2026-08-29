import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { ThemeProvider } from '../../theme/ThemeContext';
import { Layout } from '../layout/Layout';
import './PolicyLensCaseStudy.css';

export const PolicyLensCaseStudy: React.FC = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Section fullHeight>
          <Container isEditorial>
            
            {/* Header */}
            <div className="cs-header">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-24)', maxWidth: '600px' }}>
                <span className="text-metadata" style={{ color: 'var(--color-primary-text)' }}>
                  01 / PRODUCT & AI
                </span>
                <h1 className="text-display">PolicyLens AI</h1>
                <p className="text-heading-section" style={{ color: 'var(--color-secondary-text)' }}>
                  Turning fragmented government policies into information people can actually use.
                </p>
              </div>
            </div>

            {/* 01 THE PROBLEM */}
            <div className="cs-block">
              <h3 className="text-metadata cs-label">01 / THE PROBLEM</h3>
              <div className="cs-content">
                <h4 className="text-heading-large cs-statement">
                  Policy information exists, but it is fundamentally inaccessible.
                </h4>
                <p className="text-body cs-text">
                  Government websites publish thousands of pages of policy documents, subsidies, and regulations. However, the product problem isn't a lack of information—it's a lack of context. 
                </p>
                <p className="text-body cs-text">
                  Users struggle because they do not know which policies are relevant to them, whether they qualify, what the bureaucratic language actually means, or what specific actions they need to take. The challenge is finding relevant information, understanding it, and deciding what to do next.
                </p>
              </div>
            </div>

            {/* 02 THE PRODUCT QUESTION */}
            <div className="cs-block">
              <h3 className="text-metadata cs-label">02 / PRODUCT QUESTION</h3>
              <div className="cs-content">
                <h4 className="text-heading-large cs-statement">
                  How might we make policy discovery personal without making the information unreliable?
                </h4>
                <p className="text-body cs-text">
                  The core tension of this product is personalization versus trust. AI is excellent at summarizing and personalizing information for a specific user. But government policy requires absolute accuracy. An AI hallucinating an eligibility requirement could have severe real-world consequences for a user relying on that information.
                </p>
              </div>
            </div>

            {/* 03 THE KEY DESIGN CHALLENGE */}
            <div className="cs-block">
              <h3 className="text-metadata cs-label">03 / THE CHALLENGE</h3>
              <div className="cs-content">
                <h4 className="text-heading-large cs-statement">
                  Keeping AI out of the database.
                </h4>
                <p className="text-body cs-text">
                  The central challenge was navigating how to use a Large Language Model without allowing AI-generated responses to become the source of truth. If a user asks "Do I qualify for the housing subsidy?", the application cannot simply ask the LLM to invent an answer based on its training data.
                </p>
              </div>
            </div>

            {/* 04 THE DECISION */}
            <div className="cs-block">
              <h3 className="text-metadata cs-label">04 / THE DECISION</h3>
              <div className="cs-content">
                <h4 className="text-heading-large cs-statement">
                  Separating structured data from AI interpretation.
                </h4>
                <p className="text-body cs-text">
                  To solve the trust problem, I architected a strict two-layer approach. The AI interprets the information rather than serving as the underlying database of truth.
                </p>
                
                <div className="cs-highlight-box">
                  <div className="highlight-layer">
                    <h4 className="text-metadata highlight-layer-title">LAYER 1: GROUNDED STRUCTURED POLICY INFORMATION</h4>
                    <p className="text-body highlight-layer-text">
                      The application relies on a deterministic database of structured policy data. This layer holds the verified facts: eligibility rules, deadlines, and official links. It cannot be altered by the AI.
                    </p>
                  </div>
                  <div className="highlight-layer">
                    <h4 className="text-metadata highlight-layer-title">LAYER 2: AI INTERPRETATION</h4>
                    <p className="text-body highlight-layer-text">
                      Google Gemini is used exclusively as an interpretation layer. It takes the grounded facts from Layer 1 and the user's specific context, and translates the bureaucratic language into a personalized, readable explanation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 05 HOW I BUILT IT */}
            <div className="cs-block">
              <h3 className="text-metadata cs-label">05 / HOW I BUILT IT</h3>
              <div className="cs-content">
                <p className="text-body cs-text">
                  The application is built with Next.js, React, and TypeScript. When a user interacts with the system, the architecture enforces a strict directional flow to maintain accuracy.
                </p>
                
                <div className="architecture-diagram">
                  <div className="arch-node">USER PROVIDES CONTEXT</div>
                  <div className="arch-arrow">↓</div>
                  <div className="arch-node">SYSTEM QUERIES STRUCTURED DATA</div>
                  <div className="arch-arrow">↓</div>
                  <div className="arch-node">VERIFIED POLICY FACTS RETRIEVED</div>
                  <div className="arch-arrow">↓</div>
                  <div className="arch-node">GEMINI PROMPTED WITH STRICT CONSTRAINTS</div>
                  <div className="arch-arrow">↓</div>
                  <div className="arch-node">PERSONALIZED EXPLANATION RENDERED</div>
                </div>
                
                <p className="text-body cs-text">
                  Gemini was chosen specifically because of its ability to process complex prompts with strict behavioral guardrails. The model's product role is strictly translational—turning rigid facts into accessible answers.
                </p>
              </div>
            </div>

            {/* UX DECISIONS */}
            <div className="cs-block">
              <h3 className="text-metadata cs-label">UX DECISIONS</h3>
              <div className="cs-content">
                <h4 className="text-heading-large cs-statement">
                  Designing for comprehension.
                </h4>
                
                <div className="ux-decisions">
                  <div className="ux-decision">
                    <h4 className="text-metadata ux-decision-title">PROBLEM: INFORMATION OVERLOAD</h4>
                    <p className="text-body ux-decision-text">
                      <strong>Decision:</strong> Grouping information strictly by life-events rather than government departments.<br/>
                      <strong>Reason:</strong> Users do not navigate their lives by knowing which ministry handles a problem; they navigate by events like "starting a business" or "having a child."
                    </p>
                  </div>
                  
                  <div className="ux-decision">
                    <h4 className="text-metadata ux-decision-title">PROBLEM: TRUSTING THE AI</h4>
                    <p className="text-body ux-decision-text">
                      <strong>Decision:</strong> Always displaying the official source link alongside the AI explanation.<br/>
                      <strong>Reason:</strong> Even with grounded data, users need an escape hatch to verify the primary source. The interface visually separates the AI summary from the official government link.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 06 WHAT I LEARNED */}
            <div className="cs-block">
              <h3 className="text-metadata cs-label">06 / REFLECTION</h3>
              <div className="cs-content">
                <h4 className="text-heading-large cs-statement">
                  What I would change next.
                </h4>
                <p className="text-body cs-text">
                  While the architectural separation of data and AI was successful, this prototype revealed several areas that need deeper work:
                </p>
                <ul className="text-body cs-text" style={{ paddingLeft: 'var(--space-24)', display: 'flex', flexDirection: 'column', gap: 'var(--space-12)', marginTop: 'var(--space-16)' }}>
                  <li><strong>Policy Data Freshness:</strong> The structured data layer currently relies on static integration. In a production environment, this would require a robust pipeline to detect and update when government policies change.</li>
                  <li><strong>Eligibility Edge Cases:</strong> The current logic handles standard eligibility well, but bureaucratic edge cases (e.g., overlapping subsidies) require a more sophisticated rules engine before reaching the AI layer.</li>
                  <li><strong>User Validation:</strong> Because this was built as a prototype, the next critical step would be validating the comprehension assumptions with real users facing actual policy constraints.</li>
                </ul>
              </div>
            </div>

            {/* Back Navigation */}
            <div style={{ marginTop: 'var(--space-128)', marginBottom: 'var(--space-96)' }}>
              <a 
                href="/" 
                className="text-small"
                style={{ textDecoration: 'none', color: 'var(--color-secondary-text)', borderBottom: '1px solid var(--color-border)', paddingBottom: '4px' }}
                onClick={(e) => {
                  if (e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
                    e.preventDefault();
                    window.history.pushState({}, '', '/');
                    window.dispatchEvent(new PopStateEvent('popstate'));
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
