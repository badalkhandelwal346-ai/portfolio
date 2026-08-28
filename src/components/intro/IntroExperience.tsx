import React, { useEffect } from 'react';
import './IntroExperience.css';

export const IntroExperience: React.FC<{ phase: string; setPhase: (phase: any) => void }> = ({ phase, setPhase }) => {
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
      // Wait for typing animation to complete
      setTimeout(() => setPhase('transitioning'), 2000),
      // Resolve to final state
      setTimeout(() => {
        setPhase('complete');
        sessionStorage.setItem('portfolio-intro-seen', 'true');
      }, 3500)
    ];

    return () => timers.forEach(clearTimeout);
  }, [setPhase]);

  // We keep it mounted but hidden to allow smooth transitions via CSS opacity.

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
    </div>
  );
};
