import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import './PerspectiveSection.css';

export const PerspectiveSection: React.FC = () => {
  return (
    <Section id="perspective" className="perspective-section">
      <Container isEditorial>
        <div className="perspective-grid">
          
          <div className="perspective-sidebar">
            <h2 className="text-metadata perspective-label">05 / WHAT I'M CURIOUS ABOUT</h2>
          </div>
          
          <div className="perspective-content">
            <h3 className="text-heading-large perspective-statement">
              I’m interested in the space between understanding a problem and building the right product.
            </h3>
            
            <p className="text-body perspective-intro">
              My work and interests sit across product building, economics, public policy, and technology. I want to understand what makes a product worth building, how people interact with it, what incentives shape it, and how the surrounding economic and policy environment affects it.
            </p>

            <div className="perspective-areas">
              
              <div className="perspective-area">
                <h4 className="text-metadata area-title">PRODUCT BUILDING</h4>
                <p className="text-body area-desc">
                  I like understanding what should be built before worrying about how it should look. Design is an intentional part of the building process.
                </p>
              </div>

              <div className="perspective-area">
                <h4 className="text-metadata area-title">ECONOMICS</h4>
                <p className="text-body area-desc">
                  I’m interested in how incentives, markets, and constraints shape products and ultimately influence user behavior.
                </p>
              </div>

              <div className="perspective-area">
                <h4 className="text-metadata area-title">PUBLIC POLICY</h4>
                <p className="text-body area-desc">
                  I study how rules, institutions, and policy decisions influence the environment that products and businesses operate within.
                </p>
              </div>

              <div className="perspective-area">
                <h4 className="text-metadata area-title">PRODUCT SYSTEMS</h4>
                <p className="text-body area-desc">
                  I want to understand products beyond the interface — the users, workflows, underlying technology, and constraints behind them.
                </p>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};
