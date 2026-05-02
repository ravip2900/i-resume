import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { Work, Circle } from '@mui/icons-material';
import {
  containerStyles,
  headerStyles,
  headerIconStyles,
  headerTitleStyles,
  projectsStackStyles,
  projectItemStyles,
  projectTitleContainerStyles,
  bulletIconStyles,
  projectTitleStyles,
  projectDescriptionStyles,
  projectTechStyles
} from '../../styles/keyProjectsStyles.js';

function KeyProjects({ data, theme }) {
  const themeColor = theme.primary;
  const keyProjects = data?.keyProjects || [];
  return (
    <Box sx={containerStyles}>
      <Box sx={headerStyles}>
        <Work sx={{...headerIconStyles, color: themeColor}} />
        <Typography variant="subtitle1" sx={{...headerTitleStyles, color: themeColor}}>
          Key Projects
        </Typography>
      </Box>

      <Stack sx={projectsStackStyles}>
        {keyProjects.map((project, index) => (
          <Box key={index} sx={projectItemStyles}>
            <Box sx={projectTitleContainerStyles}>
              <Circle sx={{...bulletIconStyles, color: themeColor}} />
              <Typography variant="subtitle2" sx={projectTitleStyles}>
                {project.title}
              </Typography>
            </Box>
            <Typography variant="body2" sx={projectDescriptionStyles}>
              {project.description}
            </Typography>
            <Typography variant="body2" sx={projectTechStyles}>
              {project.tech}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default KeyProjects;
