import React, { forwardRef } from 'react';
import './Section.css';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  fullHeight?: boolean;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, id, className = '', fullHeight = false }, ref) => {
    return (
      <section 
        ref={ref}
        id={id} 
        className={`section ${fullHeight ? 'section-full-height' : ''} ${className}`}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';
