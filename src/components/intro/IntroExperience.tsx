import React, { useEffect } from 'react';
import './IntroExperience.css';

export const IntroExperience: React.FC<{ phase: string; setPhase: (phase: any) => void }> = ({ phase, setPhase }) => {
  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setPhase('complete');
      return;
    }

    // Timing sequence for the intro experience
    const timers = [
      setTimeout(() => setPhase('coding'), 100),
      // Wait for typing animation to complete (finishes ~2000ms)
      setTimeout(() => setPhase('transitioning'), 2300),
      // Resolve to final state faster to reduce wait
      setTimeout(() => {
        setPhase('complete');
      }, 2600)
    ];

    return () => timers.forEach(clearTimeout);
  }, [setPhase]);

  // We keep it mounted but hidden to allow smooth transitions via CSS opacity.

  return (
    <div className={`intro-experience phase-${phase}`} aria-hidden={phase === 'complete'}>
      {/* CODE LAYER */}
      <div className="intro-code-layer">
        <div className="code-block">
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
