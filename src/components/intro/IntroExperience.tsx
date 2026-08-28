import React, { useState, useEffect } from 'react';
import './IntroExperience.css';

// The portrait asset placeholder config.
// The image will be added later by the user in the public directory.
const PORTRAIT_CONFIG = {
  src: '', // Leave blank so the placeholder renders
  alt: 'Badal Khandelwal',
  hasAsset: false // Change to true when real asset is provided
};

export const IntroExperience: React.FC = () => {
  const [phase, setPhase] = useState<'initial' | 'coding' | 'transitioning' | 'complete'>('initial');

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Check if the intro has been seen before (persistence)
    const hasSeenIntro = sessionStorage.getItem('portfolio-intro-seen');

    if (prefersReducedMotion || hasSeenIntro) {
      setPhase('complete');
      sessionStorage.setItem('portfolio-intro-seen', 'true');
      return;
    }

    // Timing sequence for the intro experience
    const timers = [
      setTimeout(() => setPhase('coding'), 100),
      // Wait for typing animation to complete (approx 1.5s for the short lines)
      setTimeout(() => setPhase('transitioning'), 2000),
      // Resolve to final state
      setTimeout(() => {
        setPhase('complete');
        sessionStorage.setItem('portfolio-intro-seen', 'true');
      }, 3500)
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className={`intro-experience phase-${phase}`} aria-hidden={phase === 'complete'}>
      {/* CODE LAYER */}
      <div className="intro-code-layer">
        <div className="code-block text-small">
          <div className="code-line line-1">
            <span className="keyword">const</span> builder <span className="operator">=</span> <span className="keyword">new</span> <span className="class-name">Badal</span>();
          </div>
          <div className="code-line line-2">
            builder.<span className="method">initialize</span>();<span className="cursor"></span>
          </div>
        </div>
      </div>

      {/* PORTRAIT LAYER */}
      <div className="intro-portrait-layer">
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
  );
};
