import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export const useThemeColors = () => {
  const router = useRouter();
  const [customThemeColors, setCustomThemeColors] = useState(null);

  useEffect(() => {
    if (router.isReady && router.query) {
      const { primary, secondary, background, text, accent } = router.query;
      if (primary || secondary || background || text || accent) {
        setCustomThemeColors({
          primary: primary || '#1976d2',
          secondary: secondary || '#dc004e',
          background: background || '#ffffff',
          text: text || '#333333',
          accent: accent || '#f5f5f5'
        });
      }
    }
  }, [router.isReady, router.query]);

  return customThemeColors;
};
