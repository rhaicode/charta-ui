import { useState, useEffect } from 'react';
import { debounce } from 'lodash';

const useViewport = (): { width: number | null } => {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleWindowResize = debounce(() => setWidth(window.innerWidth), 100);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return { width };
};

export default useViewport;
