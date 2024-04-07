import { useState, useEffect } from 'react';

//------------------------------------------------------------

type ReturnType = {
  x: number;
  y: number;
};

function useScrollPosition(elementRef: React.RefObject<HTMLElement> | null): ReturnType {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = elementRef?.current || window;
    function handleScroll() {
      const position = elementRef?.current
        ? { x: elementRef?.current.scrollLeft, y: elementRef.current.scrollTop }
        : { x: window.scrollX, y: window.scrollY };

      setScrollPosition(position);
    }

    element.addEventListener('scroll', handleScroll);

    return () => element.removeEventListener('scroll', handleScroll);
  }, [elementRef]);

  return scrollPosition;
}

export default useScrollPosition;
