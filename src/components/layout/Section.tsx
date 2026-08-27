import React from 'react';
import './Section.css';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  fullHeight?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, id, className = '', fullHeight = false }) => {
  return (
    <section 
      id={id} 
      className={`section ${fullHeight ? 'section-full-height' : ''} ${className}`}
    >
      {children}
    </section>
  );
};
