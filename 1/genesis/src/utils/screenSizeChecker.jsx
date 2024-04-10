
import { useState, useEffect } from 'react';

export const checkScreenSize = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const breakpoint = 768;
      setIsMobile(window.innerWidth <= breakpoint);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};
