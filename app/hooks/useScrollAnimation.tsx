'use client';

import { useEffect, useRef } from 'react';

// This hook adds a class to elements as they scroll into view
export default function useScrollAnimation() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1,
    });

    const currentRef = ref.current;
    
    if (currentRef) {
      const animatableElements = currentRef.querySelectorAll('.animate-on-scroll');
      animatableElements.forEach((el, index) => {
        el.setAttribute('style', `--animation-delay: ${index + 1}`);
        observer.observe(el);
      });
    }

    return () => {
      if (currentRef) {
        const animatableElements = currentRef.querySelectorAll('.animate-on-scroll');
        animatableElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return ref;
}