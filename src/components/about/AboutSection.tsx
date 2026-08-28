import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import './AboutSection.css';

export const AboutSection: React.FC = () => {
  return (
    <Section id="about" className="about-section">
      <Container isEditorial>
        
        {/* 01 INTRODUCTION */}
        <div className="about-intro">
          <h2 className="text-display about-manifesto">
            Problem first.<br />
            Product second.<br />
            Interface third.
          </h2>
          <p className="text-heading-large about-statement">
            I am a product designer and builder interested in turning problems into useful products. 
            I like understanding why a product should exist before deciding how it should look.
          </p>
        </div>

        {/* 02 WHAT I WORK ON */}
        <div className="about-block alt-bg">
          <div className="about-block-sidebar">
            <h3 className="text-metadata about-label">02 / WHAT I WORK ON</h3>
          </div>
          <div className="about-block-content">
            <div className="about-item">
              <h4 className="text-heading-section">PRODUCT DESIGN</h4>
              <p className="text-body">
                Understanding the problem and designing the experience around the user's actual needs. Design is part of defining what should be built in the first place.
              </p>
            </div>
            <div className="about-item">
              <h4 className="text-heading-section">PRODUCT BUILDING</h4>
              <p className="text-body">
                Turning ideas into working products rather than stopping at static screens. I want to build what I believe should exist.
              </p>
            </div>
            <div className="about-item">
              <h4 className="text-heading-section">USABILITY</h4>
              <p className="text-body">
                Thinking about how people actually use the product, not only how the interface looks. A beautiful product that is hard to use is a failed product.
              </p>
            </div>
            <div className="about-item">
              <h4 className="text-heading-section">EXPERIMENTATION</h4>
              <p className="text-body">
                Building ideas, testing them through actual implementation, and learning from what changes along the way.
              </p>
            </div>
          </div>
        </div>

        {/* 03 WHAT I'M LEARNING */}
        <div className="about-block">
          <div className="about-block-sidebar">
            <h3 className="text-metadata about-label">03 / WHAT I'M LEARNING</h3>
          </div>
          <div className="about-block-content">
            <p className="text-heading-section emphasis-text">
              I am actively learning so I can better understand the environment in which products operate.
            </p>
            <div className="about-grid">
              <div className="about-grid-item">
                <span className="text-metadata highlight-label">FULL-STACK DEVELOPMENT</span>
                <p className="text-body">
                  So I can understand the technical side of the products I design and build.
                </p>
              </div>
              <div className="about-grid-item">
                <span className="text-metadata highlight-label">ECONOMICS</span>
                <p className="text-body">
                  To better understand incentives, markets, constraints, and how products operate within larger systems.
                </p>
              </div>
              <div className="about-grid-item">
                <span className="text-metadata highlight-label">PUBLIC POLICY</span>
                <p className="text-body">
                  Because policies can influence the environment in which products, businesses, and users operate.
                </p>
              </div>
              <div className="about-grid-item">
                <span className="text-metadata highlight-label">ENTREPRENEURSHIP</span>
                <p className="text-body">
                  I want to take products beyond prototypes and understand how useful products can become viable businesses.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 04 HOW I THINK */}
        <div className="about-block alt-bg">
          <div className="about-block-sidebar">
            <h3 className="text-metadata about-label">04 / HOW I THINK</h3>
          </div>
          <div className="about-block-content">
            <div className="thinking-flow">
              <div className="flow-step">PROBLEM</div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">USER</div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">CONTEXT</div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">EXPERIENCE</div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">BUILD</div>
              <div className="flow-arrow">→</div>
              <div className="flow-step highlight-node">ITERATE</div>
            </div>
            <p className="text-heading-section emphasis-text about-statement-large">
              Design is not the final layer added to a product. It is part of understanding what should be built in the first place.
            </p>
          </div>
        </div>

        {/* 05 CURRENT DIRECTION */}
        <div className="about-block">
          <div className="about-block-sidebar">
            <h3 className="text-metadata about-label">05 / CURRENT DIRECTION</h3>
          </div>
          <div className="about-block-content">
            <ul className="direction-list text-heading-section">
              <li>Build products that are useful.</li>
              <li>Become better at product design.</li>
              <li>Become technically stronger.</li>
              <li>Understand business and economic context.</li>
              <li>Explore how policy and systems affect products.</li>
              <li>Eventually turn strong product ideas into real businesses.</li>
            </ul>
          </div>
        </div>

      </Container>
    </Section>
  );
};
