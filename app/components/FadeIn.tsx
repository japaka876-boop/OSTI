'use client';

import { useEffect, useRef, useState } from 'react';

export function FadeIn({ children }: { children: React.ReactNode }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        // No need to observe anymore, we want it to stay visible
        observer.unobserve(domRef.current!);
      }
    });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <div 
      ref={domRef}
      className={`transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-5'}`}
    >
      {children}
    </div>
  );
}
