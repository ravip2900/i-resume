import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { EmojiEvents, Star, CheckCircle } from '@mui/icons-material';
import {
  containerStyles,
  headerStyles,
  headerIconStyles,
  headerTitleStyles,
  awardsStackStyles,
  awardItemStyles,
  awardIconStyles,
  awardContentStyles,
  awardTextStyles,
  separatorStyles
} from '../../styles/awardsRecognitionStyles.js';

function AwardsRecognition({ data, theme }) {
  const themeColor = theme.primary;
  const awards = data?.awards || [];
  const iconMap = {
    Star,
    CheckCircle,
    EmojiEvents
  };

  return (
    <Box sx={containerStyles}>
      <Box sx={headerStyles}>
        <EmojiEvents sx={{...headerIconStyles, color: themeColor}} />
        <Typography variant="subtitle1" sx={{...headerTitleStyles, color: themeColor}}>
          Awards & Recognition
        </Typography>
      </Box>

      <Stack sx={awardsStackStyles}>
        {awards.map((award, index) => {
          const Icon = iconMap[award.icon] || EmojiEvents;
          return (
            <Box
              key={index}
              sx={awardItemStyles}
            >
              <Icon sx={{...awardIconStyles, color: themeColor}} />
              <Box sx={awardContentStyles}>
                <Typography variant="body2" sx={awardTextStyles}>
                  {award.company} <span style={separatorStyles}>–</span> {award.title}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}

export default AwardsRecognition;
