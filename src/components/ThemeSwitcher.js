import React from 'react';
import { Box, Button, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ThemeSwitcher = () => {
  const theme = useTheme();
  
  const themes = [
    { name: 'black', color: '#000000' },
    { name: 'green', color: '#19857b' },
    { name: 'orange', color: '#f57c00' },
    { name: 'blue', color: '#1976d2' }
  ];

  const switchTheme = (themeName) => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location);
      url.searchParams.set('theme', themeName);
      window.history.pushState({}, '', url);
      window.location.reload(); // Reload to apply new theme
    }
  };

  return (
    <Box sx={{ 
      position: 'fixed', 
      top: 20, 
      right: 20, 
      zIndex: 1000,
      backgroundColor: 'white',
      p: 2,
      borderRadius: 2,
      boxShadow: 2
    }}>
      <Stack spacing={1}>
        {themes.map((t) => (
          <Button
            key={t.name}
            variant={theme.palette.resume.current === t.name ? 'contained' : 'outlined'}
            size="small"
            onClick={() => switchTheme(t.name)}
            sx={{ 
              minWidth: 80,
              textTransform: 'capitalize',
              borderColor: t.color,
              color: theme.palette.resume.current === t.name ? 'white' : t.color,
              backgroundColor: theme.palette.resume.current === t.name ? t.color : 'transparent',
              '&:hover': {
                backgroundColor: t.color + '20',
                borderColor: t.color
              }
            }}
          >
            {t.name}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default ThemeSwitcher;
