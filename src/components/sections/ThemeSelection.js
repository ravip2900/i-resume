import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Palette } from '@mui/icons-material';
import { ThemeCard } from '../../styles/themeStyles';
import { themes } from '../../data/themesData';

const ThemeSelection = ({ selectedTemplate, handleTemplateChange }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6" gutterBottom textAlign="center">
        Choose Your Template
      </Typography>
      <Typography variant="caption" textAlign="center" sx={{ mb: 1, display: 'block' }}>
        Select from our professionally designed templates
      </Typography>
      <Grid container spacing={1}>
        {themes.filter(theme => theme.id !== 'default').map((theme) => (
          <Grid item xs={12} sm={6} md={6} lg={3} key={theme.id}>
            <ThemeCard
              className={selectedTemplate === theme.id ? 'selected' : ''}
              onClick={() => handleTemplateChange(theme.id)}
            >
              <CardMedia
                component="div"
                sx={{
                  height: 60,
                  backgroundColor: theme.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Palette sx={{ fontSize: 24, color: 'white' }} />
              </CardMedia>
              <CardContent sx={{ pb: 1, '&:last-child': { pb: 1 } }}>
                <Typography variant="subtitle2" gutterBottom>
                  {theme.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {theme.description}
                </Typography>
              </CardContent>
            </ThemeCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ThemeSelection;
