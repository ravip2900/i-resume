import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { Language } from '@mui/icons-material';
import {
  containerStyles,
  headerStyles,
  headerIconStyles,
  headerTitleStyles,
  languagesStackStyles,
  languageItemStyles,
  bulletStyles,
  languageTextStyles
} from '../../styles/languagesStyles.js';

function Languages({ data, theme }) {
  const themeColor = theme.primary;
  const languages = data?.languages || [];
  return (
    <Box sx={containerStyles}>
      <Box sx={headerStyles}>
        <Language sx={{...headerIconStyles, color: themeColor}} />
        <Typography variant="subtitle1" sx={{...headerTitleStyles, color: themeColor}}>
          Languages
        </Typography>
      </Box>

      <Stack sx={languagesStackStyles}>
        {languages.map((language, index) => (
          <Box key={index} sx={languageItemStyles}>
            <Box sx={{...bulletStyles, backgroundColor: themeColor}} />
            <Typography variant="body2" sx={languageTextStyles}>
              {language.name}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default Languages;
