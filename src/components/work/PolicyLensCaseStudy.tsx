import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { ThemeProvider } from '../../theme/ThemeContext';
import { Layout } from '../layout/Layout';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './PolicyLensCaseStudy.css';

export const PolicyLensCaseStudy: React.FC = () => {
  const { activeIndex, elementsRef } = useScrollReveal();

  const getMarkerClass = (index: number) => {
    const isActive = activeIndex === -1 || activeIndex >= index;
    const isCurrent = activeIndex === -1 || activeIndex === index;
    return `cs-marker ${isActive ? 'is-active' : ''} ${isCurrent ? 'is-current' : ''}`.trim();
  };

  return (
    <ThemeProvider>
      <Layout>
        <Section fullHeight>
          <Container isEditorial>
            
            {/* Header */}
            <div className="cs-header" ref={(el) => { elementsRef.current[0] = el; }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-24)', maxWidth: '600px' }}>
                <span className={`text-metadata ${getMarkerClass(0)}`} style={{ color: 'var(--color-primary-text)' }}>
                  01 / OVERVIEW
                </span>
                <h1 className="text-display">PolicyLens AI</h1>
                <p className="text-heading-section" style={{ color: 'var(--color-secondary-text)' }}>
                  A product exploring how structured policy data and AI interpretation can make government information discoverable, readable, and personal.
                </p>
              </div>
            </div>

            {/* 02 THE PROBLEM */}
            <div className="cs-block" ref={(el) => { elementsRef.current[1] = el; }}>
              <div className="cs-sidebar">
                <h2 className="text-metadata cs-label">
                  <span className={getMarkerClass(1)}>02 / THE PROBLEM</span>
                </h2>
              </div>
              <div className="cs-content">
                <h3 className="text-heading-large cs-statement">
                  Policy information is fragmented and incomprehensible.
                </h3>
                <p className="text-body cs-text">
                  Government websites publish thousands of pages of policies, subsidies, and regulations. However, raw information does not automatically translate into useful personal guidance.
                </p>
                <p className="text-body cs-text">
                  Individuals struggle to discover which policies apply to them, what the bureaucratic language means, and what actions they need to take. The complexity lies in finding relevant information, interpreting it accurately, and deciding on next steps without being overwhelmed.
                </p>
              </div>
            </div>

            {/* 03 THE PRODUCT */}
            <div className="cs-block" ref={(el) => { elementsRef.current[2] = el; }}>
              <div className="cs-sidebar">
                <h2 className="text-metadata cs-label">
                  <span className={getMarkerClass(2)}>03 / THE PRODUCT</span>
                </h2>
              </div>
              <div className="cs-content">
                <h3 className="text-heading-large cs-statement">
                  Structured Policy Data + AI Interpretation.
                </h3>
                <p className="text-body cs-text">
                  PolicyLens addresses this discovery problem by acting as an intelligent intermediary. It does not invent information. Instead, it relies on a two-layer architecture:
                </p>
                
                <div className="cs-highlight-box">
                  <div className="highlight-layer">
                    <h4 className="text-metadata highlight-layer-title">SOURCE OF INFORMATION</h4>
                    <p className="text-body highlight-layer-text">
                      A structured database containing deterministic, verified facts about policies, eligibility criteria, and deadlines.
                    </p>
                  </div>
                  <div className="highlight-layer">
                    <h4 className="text-metadata highlight-layer-title">INTERPRETATION LAYER</h4>
                    <p className="text-body highlight-layer-text">
                      An AI layer (Google Gemini) that translates the grounded facts from the database into personalized, readable explanations based on the user's context.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 04 PRODUCT THINKING */}
            <div className="cs-block" ref={(el) => { elementsRef.current[3] = el; }}>
              <div className="cs-sidebar">
                <h2 className="text-metadata cs-label">
                  <span className={getMarkerClass(3)}>04 / PRODUCT THINKING</span>
                </h2>
              </div>
              <div className="cs-content">
                <h3 className="text-heading-large cs-statement">
                  Designing for trust and personalization.
                </h3>
                <p className="text-body cs-text">
                  The core product tension was balancing the hyper-personalization capabilities of AI with the absolute accuracy required for government policy.
                </p>
                
                <div className="ux-decisions">
                  <div className="ux-decision">
                    <h4 className="text-metadata ux-decision-title">PROBLEM: RELEVANCE & COGNITIVE LOAD</h4>
                    <p className="text-body ux-decision-text">
                      <strong>Decision:</strong> Surface policies based on relevant user context rather than manual search.<br/>
                      <strong>Reason:</strong> Users often don't know what to search for. Context-driven discovery reduces cognitive overhead.<br/>
                      <strong>Trade-off:</strong> Personalization requires users to input structured personal context, introducing friction and privacy considerations.
                    </p>
                  </div>
                  
                  <div className="ux-decision">
                    <h4 className="text-metadata ux-decision-title">PROBLEM: AI HALLUCINATIONS</h4>
                    <p className="text-body ux-decision-text">
                      <strong>Decision:</strong> Restrict AI strictly to an interpretation role; keep it out of the factual database.<br/>
                      <strong>Reason:</strong> An AI inventing an eligibility requirement could have severe real-world consequences. The LLM must translate, not generate, facts.<br/>
                      <strong>Trade-off:</strong> The system is constrained by the quality and structure of the underlying deterministic database.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 05 DESIGN DECISIONS */}
            <div className="cs-block" ref={(el) => { elementsRef.current[4] = el; }}>
              <div className="cs-sidebar">
                <h2 className="text-metadata cs-label">
                  <span className={getMarkerClass(4)}>05 / DESIGN DECISIONS</span>
                </h2>
              </div>
              <div className="cs-content">
                <h3 className="text-heading-large cs-statement">
                  Information hierarchy and transparency.
                </h3>
                
                <div className="ux-decisions">
                  <div className="ux-decision">
                    <h4 className="text-metadata ux-decision-title">WHAT: PROGRESSIVE DISCLOSURE</h4>
                    <p className="text-body ux-decision-text">
                      <strong>Why:</strong> Policy language is dense. Providing high-level summaries first, with options to drill down into specific clauses, prevents immediate overwhelm.<br/>
                      <strong>Trade-off:</strong> Requires carefully structured UI components and increases the number of clicks for users who want all details immediately.
                    </p>
                  </div>

                  <div className="ux-decision">
                    <h4 className="text-metadata ux-decision-title">WHAT: EXPLICIT SOURCING</h4>
                    <p className="text-body ux-decision-text">
                      <strong>Why:</strong> Even with grounded data, users need an escape hatch to verify the primary source. The interface visually separates the AI summary from official government links.<br/>
                      <strong>Trade-off:</strong> Adds visual density to the interface and requires the backend to consistently map and return source URLs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 06 BUILD / IMPLEMENTATION */}
            <div className="cs-block" ref={(el) => { elementsRef.current[5] = el; }}>
              <div className="cs-sidebar">
                <h2 className="text-metadata cs-label">
                  <span className={getMarkerClass(5)}>06 / IMPLEMENTATION</span>
                </h2>
              </div>
              <div className="cs-content">
                <p className="text-body cs-text">
                  The prototype is built using Next.js, React, TypeScript, and Tailwind CSS. The architecture enforces a strict directional flow:
                </p>
                
                <div className="architecture-diagram">
                  <div className="arch-node">USER PROVIDES CONTEXT (FRONTEND)</div>
                  <div className="arch-arrow">↓</div>
                  <div className="arch-node">NEXT.JS API ROUTES</div>
                  <div className="arch-arrow">↓</div>
                  <div className="arch-node">STRUCTURED POLICY DATA QUERIED</div>
                  <div className="arch-arrow">↓</div>
                  <div className="arch-node">GEMINI PROMPTED WITH STRICT CONSTRAINTS</div>
                  <div className="arch-arrow">↓</div>
                  <div className="arch-node">PERSONALIZED EXPLANATION RENDERED</div>
                </div>
                
                <p className="text-body cs-text">
                  Google Gemini integration is handled server-side via Next.js API routes, ensuring API keys remain secure while applying strict system prompts to constrain model behavior.
                </p>
              </div>
            </div>

            {/* 07 OUTCOME / CURRENT STATE */}
            <div className="cs-block" ref={(el) => { elementsRef.current[6] = el; }}>
              <div className="cs-sidebar">
                <h2 className="text-metadata cs-label">
                  <span className={getMarkerClass(6)}>07 / CURRENT STATE</span>
                </h2>
              </div>
              <div className="cs-content">
                <h3 className="text-heading-large cs-statement">
                  A functional implementation and prototype.
                </h3>
                <p className="text-body cs-text">
                  PolicyLens currently exists as a working product concept. The technical architecture successfully separates data from interpretation, demonstrating the viability of the approach.
                </p>
                <p className="text-body cs-text">
                  However, it relies on a localized, static dataset for its policy facts. Real-world implementation would require robust data pipelines connected to live government repositories.
                </p>
              </div>
            </div>

            {/* 08 REFLECTION */}
            <div className="cs-block" ref={(el) => { elementsRef.current[7] = el; }}>
              <div className="cs-sidebar">
                <h2 className="text-metadata cs-label">
                  <span className={getMarkerClass(7)}>08 / REFLECTION</span>
                </h2>
              </div>
              <div className="cs-content">
                <h3 className="text-heading-large cs-statement">
                  Balancing AI with structured information.
                </h3>
                <p className="text-body cs-text">
                  Building PolicyLens highlighted the limitations of treating AI as an all-in-one solution for information retrieval. While LLMs are exceptional at translation and summarization, they are unreliable as databases.
                </p>
                <p className="text-body cs-text">
                  The most critical product decision was acknowledging that constraint. By designing the system to rely on a deterministic database first, the AI could safely focus on what it does best: making complex, bureaucratic language understandable. The next logical step would be validating these comprehension assumptions with users facing actual policy constraints.
                </p>
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

