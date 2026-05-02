import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { School } from '@mui/icons-material';
import {
  containerStyles,
  headerStyles,
  headerIconStyles,
  headerTitleStyles,
  educationStackStyles,
  educationItemStyles,
  degreeStyles,
  institutionStyles
} from '../../styles/educationStyles.js';

function Education({ data, theme }) {
  const themeColor = theme.primary;
  const education = data?.education || [];
  return (
    <Box sx={containerStyles}>
      <Box sx={headerStyles}>
        <School sx={{...headerIconStyles, color: themeColor}} />
        <Typography variant="subtitle1" sx={{...headerTitleStyles, color: themeColor}}>
          Education
        </Typography>
      </Box>

      <Stack sx={educationStackStyles}>
        {education.map((edu, index) => (
          <Box key={index} sx={educationItemStyles}>
            <Typography variant="subtitle2" sx={degreeStyles}>
              {edu.degree}
            </Typography>
            <Typography variant="body2" sx={institutionStyles}>
              {edu.institution}
            </Typography>
            {edu.year && (
              <Typography variant="body2" sx={institutionStyles}>
                Year: {edu.year}
              </Typography>
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default Education;
