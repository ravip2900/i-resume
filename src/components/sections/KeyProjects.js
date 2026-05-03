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
  projectCompanyRoleStyles,
  projectScopeStyles,
  projectImpactStyles,
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
        {keyProjects.filter(project => !project.hide).map((project, index) => (
          <Box key={index} sx={{...projectItemStyles, pl: 0}}>
            <Box sx={projectTitleContainerStyles}>
              <Circle sx={{...bulletIconStyles, color: themeColor}} />
              <Box>
                <Typography variant="subtitle2" sx={projectTitleStyles}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={projectCompanyRoleStyles}>
                  {project.company} | {project.role}
                </Typography>
                <Typography variant="body2" sx={projectScopeStyles}>
                  {project.scope}
                </Typography>
                <Typography variant="body2" sx={projectImpactStyles}>
                  {project.impact}
                </Typography>
                <Typography variant="body2" sx={projectTechStyles}>
                  Technologies: <span style={{fontWeight: 'normal'}}>{project.technologies?.join(', ')}</span>
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default KeyProjects;
