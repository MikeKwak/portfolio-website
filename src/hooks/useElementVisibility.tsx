import { useState, useEffect, useRef } from 'react';

// Custom hook to check if an element is in the viewport
const useElementVisibility = (callback: () => void) => {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const isElementInViewport = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (elementRef.current) {
        const visible = isElementInViewport(elementRef.current);
        if (visible !== isVisible) {
          setIsVisible(visible);
          callback();
        }
      }
    };

    window.addEventListener('load', handleVisibilityChange, false);
    window.addEventListener('scroll', handleVisibilityChange, false);
    window.addEventListener('resize', handleVisibilityChange, false);

    // Cleanup
    return () => {
      window.removeEventListener('load', handleVisibilityChange);
      window.removeEventListener('scroll', handleVisibilityChange);
      window.removeEventListener('resize', handleVisibilityChange);
    };
  }, [isVisible, callback]); // Depend on isVisible and callback to avoid re-creation

  return elementRef;
};

export default useElementVisibility;