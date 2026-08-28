import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import './ContactSection.css';

export const ContactSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Section id="contact" className="contact-section">
      <Container isEditorial>
        <div className="contact-grid">
          
          <div className="contact-sidebar">
            <h2 className="text-metadata contact-label">06 / LET'S TALK</h2>
          </div>
          
          <div className="contact-content">
            <h3 className="text-heading-large contact-statement">
              Have a product problem worth thinking about? Let's build something worth using.
            </h3>
            
            <div className="contact-actions">
              {/* Primary CTA */}
              <a 
                href="mailto:badalkhandelwal346@gmail.com" 
                className="contact-cta"
              >
                Get in touch ↗
              </a>
              
              {/* Secondary links */}
              <div className="contact-links">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-body secondary-link"
                >
                  LinkedIn ↗
                </a>
                <a 
                  href="https://github.com/badalkhandelwal346-ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-body secondary-link"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
          
        </div>

        {/* Minimal Footer */}
        <footer className="minimal-footer">
          <div className="footer-identity">
            <span className="text-metadata">BADAL KHANDELWAL © {currentYear}</span>
          </div>
          <div className="footer-links">
            <a href="mailto:badalkhandelwal346@gmail.com" className="text-metadata">EMAIL</a>
            <a href="#" className="text-metadata">LINKEDIN</a>
            <a href="https://github.com/badalkhandelwal346-ai" className="text-metadata">GITHUB</a>
          </div>
        </footer>
      </Container>
    </Section>
  );
};
