import { useEffect, useRef, useState } from 'react';

export function useScrollReveal() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setActiveIndex(-1); // -1 signifies all active
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = elementsRef.current.findIndex((ref) => ref === entry.target);
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    }, observerOptions);

    // Filter out nulls before observing
    const currentRefs = elementsRef.current.filter(Boolean) as HTMLElement[];
    currentRefs.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        observer.unobserve(ref);
      });
    };
  }, []);

  return { activeIndex, elementsRef };
}
