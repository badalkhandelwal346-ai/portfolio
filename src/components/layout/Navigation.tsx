import React from 'react';
import { Container } from './Container';
import './Navigation.css';
import { useTheme } from '../../theme/ThemeContext';

export const Navigation: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navigation-header">
      <Container>
        <nav className="navigation-nav" aria-label="Main Navigation">
          <div className="navigation-brand">
            <a href="/" className="text-small" style={{ fontWeight: 600 }}>BADAL KHANDELWAL</a>
          </div>
          
          <ul className="navigation-links">
            <li><a href="#work" className="text-small">WORK</a></li>
            <li><a href="#about" className="text-small">ABOUT</a></li>
            <li><a href="#contact" className="text-small">CONTACT</a></li>
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
