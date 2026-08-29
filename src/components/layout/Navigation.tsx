import React from 'react';
import { Container } from './Container';
import './Navigation.css';
import { useTheme } from '../../theme/ThemeContext';

export const Navigation: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string, hash?: string) => {
    // If it's a left-click (button 0) and not holding modifier keys
    if (e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      
      const isCurrentlyHome = window.location.pathname === '/';
      const isTargetHome = path === '/';
      
      if (isTargetHome) {
        if (!isCurrentlyHome) {
          // We are on a case study, go back to home via SPA pushState
          window.history.pushState({}, '', '/');
          window.dispatchEvent(new PopStateEvent('popstate'));
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

  return (
    <header className="navigation-header">
      <Container>
        <nav className="navigation-nav" aria-label="Main Navigation">
          <div className="navigation-brand">
            <a 
              href="/" 
              className="text-small" 
              style={{ fontWeight: 600 }}
              onClick={(e) => handleNavClick(e, '/', '')}
            >
              BADAL KHANDELWAL
            </a>
          </div>
          
          <ul className="navigation-links">
            <li><a href="/#work" className="text-small" onClick={(e) => handleNavClick(e, '/', 'work')}>WORK</a></li>
            <li><a href="/#about" className="text-small" onClick={(e) => handleNavClick(e, '/', 'about')}>ABOUT</a></li>
            <li><a href="/#contact" className="text-small" onClick={(e) => handleNavClick(e, '/', 'contact')}>CONTACT</a></li>
            <li>
              <button 
                onClick={toggleTheme} 
                className="theme-toggle-btn text-small"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? 'NIGHT' : 'DAY'}
              </button>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
