import React from 'react';
import { Box, Typography, Stack, Paper } from '@mui/material';
import {
  Code,
  Monitor,
  Storage,
  Cloud,
  Psychology,
  People
} from '@mui/icons-material';
import {
  containerStyles,
  headerStyles,
  headerIconStyles,
  headerTitleStyles,
  competenciesPaperStyles,
  competenciesStackStyles,
  competencyItemStyles,
  competencyIconStyles,
  competencyContentStyles,
  competencyHeaderStyles,
  competencyTitleStyles,
  competencySkillsStyles,
  verticalLineStyles,
  printStyles
} from '../../styles/coreCompetenciesStyles.js';

function CoreCompetencies({ data, theme }) {
  const themeColor = theme.primary;
  const competencies = data?.coreCompetencies || [];
  
  // Icon mapping for competency items
  const iconMap = {
    Code,
    Monitor,
    Storage,
    Cloud,
    Psychology,
    People
  };

  return (
    <Box sx={containerStyles}>
      <Box sx={headerStyles}>
        <People sx={{...headerIconStyles, color: themeColor}} />
        <Typography variant="subtitle1" sx={{...headerTitleStyles, color: themeColor}}>
          Technical Skills
        </Typography>
      </Box>

      <Paper elevation={0} sx={competenciesPaperStyles}>
        <Stack sx={competenciesStackStyles}>
          {competencies.map((competency, index) => {
            const Icon = iconMap[competency.icon] || Code;
            return (
              <Box
                key={index}
                sx={{
                  ...competencyItemStyles,
                  ...printStyles['@media print'].competencyItemStyles
                }}
              >
                <Icon sx={{
                  ...competencyIconStyles, 
                  color: themeColor,
                  ...printStyles['@media print'].competencyIconStyles
                }} />
                <Box sx={competencyContentStyles}>
                  <Box sx={{
                    ...competencyHeaderStyles,
                    ...printStyles['@media print'].competencyHeaderStyles
                  }}>
                    <Typography 
                      variant="subtitle2" 
                      sx={competencyTitleStyles}
                    >
                      {competency.title}
                    </Typography>
                    <Box sx={verticalLineStyles} />
                    <Typography 
                      variant="body2" 
                      sx={competencySkillsStyles}
                    >
                      {competency.skills}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Stack>
      </Paper>
    </Box>
  );
}
export default CoreCompetencies;