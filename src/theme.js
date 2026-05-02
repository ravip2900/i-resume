import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Theme colors for different color schemes
const themeColors = {
  green: '#19857b',
  blue: '#1976d2', 
  orange: '#f57c00',
  black: '#000000' // default
};

// Get current theme color from URL query parameters or default to black
const getCurrentThemeColor = () => {
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const themeParam = urlParams.get('theme');
    return themeColors[themeParam] || themeColors.black;
  }
  return themeColors.black;
};

// Export theme colors and helper function
export { getCurrentThemeColor, themeColors };
