import { useState, useEffect } from 'react';
import { getCurrentThemeColor } from '../theme';

export const useThemeColor = () => {
  const [themeColor, setThemeColor] = useState('#000000');

  useEffect(() => {
    setThemeColor(getCurrentThemeColor());
    
    const handleRouteChange = () => {
      setThemeColor(getCurrentThemeColor());
    };

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return themeColor;
};
