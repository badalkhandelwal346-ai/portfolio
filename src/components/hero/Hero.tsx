import React from 'react';
import './Hero.css';
import { Container } from '../layout/Container';

// Portrait config relocated to Hero where it will live permanently.
const PORTRAIT_CONFIG = {
  src: '', // Leave blank so the placeholder renders
  alt: 'Badal Khandelwal',
  hasAsset: false // Change to true when real asset is provided
};

interface HeroProps {
  introPhase: string;
}

export const Hero: React.FC<HeroProps> = ({ introPhase }) => {
  // Hero elements stagger in as the intro transitions
  const isTransitioning = introPhase === 'transitioning' || introPhase === 'complete';
  const isComplete = introPhase === 'complete';

  return (
    <section className="hero-section">
      <Container className="hero-container">
        
        {/* Main Composition */}
        <div className={`hero-composition ${isTransitioning ? 'revealed' : ''}`}>
          
          <div className="hero-content">
            <h1 className="hero-name text-display">
              BADAL KHANDELWAL
            </h1>
            <h2 className="hero-role text-heading-section">
              Product Designer & Builder
            </h2>
            <p className="hero-statement text-body">
              I’m a product designer and builder who turns complex problems into usable software.
            </p>
          </div>

          <div className="hero-portrait-anchor">
            <div className="portrait-container">
              {PORTRAIT_CONFIG.hasAsset && PORTRAIT_CONFIG.src ? (
                <img 
                  src={PORTRAIT_CONFIG.src} 
                  alt={PORTRAIT_CONFIG.alt}
                  className="portrait-image"
                />
              ) : (
                <div className="portrait-placeholder">
                  <span className="text-metadata">PORTRAIT ASSET</span>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className={`hero-cta-wrapper ${isComplete ? 'revealed' : ''}`}>
          <a href="#work" className="hero-cta text-small">
            Explore Work 
            <span className="hero-cta-arrow">↓</span>
          </a>
        </div>

      </Container>
    </section>
  );
};
