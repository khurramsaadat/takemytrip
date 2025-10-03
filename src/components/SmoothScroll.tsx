"use client";

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    // Enhanced smooth scrolling with better continuous scroll handling
    let scrollTimeout: NodeJS.Timeout | null = null;
    let isScrolling = false;
    let accumulatedDelta = 0;
    
    const smoothScrollHandler = (e: WheelEvent) => {
      e.preventDefault();
      
      const delta = e.deltaY;
      accumulatedDelta += delta;
      
      // Clear existing timeout to handle continuous scrolling
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // For continuous scrolling, don't block if already scrolling
      if (!isScrolling) {
        isScrolling = true;
        
        // Calculate scroll amount based on accumulated delta for smoother continuous scrolling
        const scrollMultiplier = Math.abs(accumulatedDelta) > 300 ? 2.5 : 
                                Math.abs(accumulatedDelta) > 150 ? 2 : 1.5;
        const scrollAmount = Math.sign(accumulatedDelta) * Math.min(Math.abs(accumulatedDelta) * scrollMultiplier, 400);
        
        window.scrollBy({
          top: scrollAmount,
          behavior: 'smooth'
        });
        
        // Reset accumulated delta after scrolling
        accumulatedDelta = 0;
      }
      
      // Set timeout to reset scrolling state - shorter for continuous scrolling
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        accumulatedDelta = 0;
        scrollTimeout = null;
      }, 20);
    };

    // Add smooth scroll behavior for mouse wheel
    window.addEventListener('wheel', smoothScrollHandler, { passive: false });
    
    // Cleanup
    return () => {
      window.removeEventListener('wheel', smoothScrollHandler);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  return null;
}
