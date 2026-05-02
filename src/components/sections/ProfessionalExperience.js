import React from 'react';
import { Box, Typography, Stack, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Work, Circle, FiberManualRecord } from '@mui/icons-material';
import {
  containerStyles,
  headerStyles,
  headerIconStyles,
  headerTitleStyles,
  timelineContainerStyles,
  timelineLineStyles,
  experiencesStackStyles,
  experienceItemStyles,
  timelineBulletStyles,
  bulletInnerStyles,
  experienceContentStyles,
  experienceHeaderStyles,
  titleStyles,
  companyStyles,
  durationStyles,
  techStyles,
  responsibilitiesListStyles,
  responsibilityItemStyles,
  responsibilityIconStyles,
  responsibilityBulletStyles,
  responsibilityTextStyles
} from '../../styles/professionalExperienceStyles.js';

function ProfessionalExperience({ data, theme }) {
  const themeColor = theme.primary;
  const experiences = data?.professionalExperience || [];
  
  return (
    <Box sx={containerStyles}>
      <Box sx={headerStyles}>
        <Work sx={{...headerIconStyles, color: themeColor}} />
        <Typography variant="subtitle1" sx={{...headerTitleStyles, color: themeColor}}>
          Professional Experience
        </Typography>
      </Box>

      <Box sx={timelineContainerStyles}>
        {/* Vertical Timeline Line */}
        <Box sx={{
          position: 'absolute',
          left: 12,
          top: 12,
          bottom: 0,
          width: 2,
          backgroundColor: themeColor + '20'
        }} />
        
        <Stack sx={experiencesStackStyles}>
          {experiences.map((experience, index) => (
            <Box key={index} sx={experienceItemStyles}>
              {/* Timeline Bullet */}
              <Box sx={{...timelineBulletStyles, backgroundColor: themeColor}}>
                <FiberManualRecord sx={{ fontSize: 8, color: '#ffffff' }} />
              </Box>
              
              {/* Experience Content */}
              <Box sx={experienceContentStyles}>
                <Box sx={experienceHeaderStyles}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle2" sx={titleStyles}>
                      {experience.title}{experience.company ? ` - ${experience.company}` : ''}
                    </Typography>
                  </Box>
                  <Typography variant="caption" sx={durationStyles}>
                    {experience.duration}
                  </Typography>
                </Box>
                <Typography variant="caption" sx={techStyles}>
                  {experience.tech}
                </Typography>
                <List sx={responsibilitiesListStyles}>
                  {experience.responsibilities?.map((responsibility, respIndex) => (
                    <ListItem key={respIndex} sx={responsibilityItemStyles}>
                      <ListItemIcon sx={responsibilityIconStyles}>
                        <Circle sx={{...responsibilityBulletStyles, color: themeColor}} />
                      </ListItemIcon>
                      <ListItemText
                        primary={responsibility}
                        primaryTypographyProps={{ variant: 'body2', sx: responsibilityTextStyles }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default ProfessionalExperience;
