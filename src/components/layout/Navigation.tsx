import React, { useEffect, useState } from 'react';
import { Container } from './Container';
import './Navigation.css';
import { useTheme } from '../../theme/ThemeContext';

export const Navigation: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      // The sections we want to track
      const sections = ['work', 'thinking', 'about', 'contact'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust offset as needed for when a section is considered "active"
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      
      // If we are at the very top, maybe nothing is highlighted, or home is.
      if (window.scrollY < 50) {
        current = ''; // or default to 'work' if work is the first section
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string, hash?: string) => {
    // If it's a left-click (button 0) and not holding modifier keys
    if (e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      
      const isCurrentlyHome = window.location.pathname === '/';
      const isTargetHome = path === '/';
      
      if (isTargetHome) {
        if (!isCurrentlyHome) {
          // We are on a case study, go back to home via SPA pushState
          const targetUrl = hash ? `/#${hash}` : '/';
          window.history.pushState({}, '', targetUrl);
          window.dispatchEvent(new Event('navigate'));
        } else if (hash) {
          // We are already home, but we should update the URL bar to include the hash
          window.history.pushState({}, '', `/#${hash}`);
        }
        
        // Let React re-render home page (if we were away), then scroll
        setTimeout(() => {
          if (hash) {
            const element = document.getElementById(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          } else {
            // Dashboard / Home link clicked
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 50);
      }
    }
  };

  const renderLink = (hash: string, label: string) => {
    const isActive = activeSection === hash;
    return (
      <li>
        <a href={`/#${hash}`} className="text-body nav-link-item" onClick={(e) => handleNavClick(e, '/', hash)}>
          {label} {isActive && <span className="silver-glow-dot"></span>}
        </a>
      </li>
    );
  };

  return (
    <header className="navigation-header">
      <Container>
        <nav className="navigation-nav" aria-label="Main Navigation">
          <div className="navigation-brand">
            <a 
              href="/" 
              className="text-body nav-logo" 
              onClick={(e) => handleNavClick(e, '/', '')}
            >
              <span className="nav-signature-text">
                <span className="signature-initial">B</span>adal <span className="signature-initial">K</span>handelwal
              </span>
            </a>
          </div>
          
          <ul className="navigation-links">
            {renderLink('work', 'Work')}
            {renderLink('thinking', 'Thinking')}
            {renderLink('about', 'About')}
            {renderLink('contact', 'Contact')}
          </ul>
        </nav>
      </Container>
    </header>
  );
};
