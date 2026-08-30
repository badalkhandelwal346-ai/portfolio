import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import './ProductThinking.css';

const steps = [
  {
    id: '01',
    title: 'START WITH THE PROBLEM',
    description: "I first try to understand what problem exists, who experiences it, and why it matters. Designing a solution requires knowing what makes the current experience difficult."
  },
  {
    id: '02',
    title: 'UNDERSTAND THE CONTEXT',
    description: "Product decisions must be grounded in the user's environment. For PolicyLens, relevance isn't just about the policy itself—it depends on the user's business type, industry, and scale. Context defines usability."
  },
  {
    id: '03',
    title: 'DESIGN THE EXPERIENCE',
    description: "I care about how the product works, not just how the interface looks. This means focusing on information hierarchy, reducing friction, and deciding what the user actually needs first."
  },
  {
    id: '04',
    title: 'BUILD THE PRODUCT',
    description: "I am learning full-stack development because design and implementation shouldn't exist in separate worlds. The design side asks \"Should we build this?\" while the engineering side asks \"How can we actually build this?\" I want to understand both."
  },
  {
    id: '05',
    title: 'LEARN AND ITERATE',
    description: "Building changes the original idea. PolicyLens started as an AI policy assistant, but thinking through the problem revealed that AI alone wasn't enough. It evolved into personalized policy intelligence. Iteration is where the product is actually made."
  }
];

export const ProductThinking: React.FC = () => {
  const { activeIndex: activeStep, elementsRef: stepRefs } = useScrollReveal();

  return (
    <Section id="thinking" className="thinking-section">
      <Container isEditorial>
        
        {/* Core Manifesto Statement */}
        <div className="thinking-manifesto">
          <h2 className="text-display manifesto-text">
            I don't start with screens.<br />
            I start with the problem.
          </h2>
        </div>

        {/* The Progression */}
        <div className="thinking-progression">
          <div className="progression-line-container">
            <div 
              className="progression-line-active" 
              style={{ height: activeStep === -1 ? '100%' : `${((activeStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
          
          <div className="steps-container">
            {steps.map((step, index) => {
              const isActive = activeStep === -1 || activeStep >= index;
              const isCurrent = activeStep === -1 || activeStep === index;
              
              return (
                <div 
                  key={step.id}
                  ref={(el) => { stepRefs.current[index] = el; }}
                  className={`thinking-step ${isActive ? 'is-active' : ''} ${isCurrent ? 'is-current' : ''}`}
                >
                  <div className="step-number text-metadata">{step.id}</div>
                  <div className="step-content">
                    <h3 className="text-heading-large step-title">{step.title}</h3>
                    <p className="text-body step-description">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </Container>
    </Section>
  );
};
