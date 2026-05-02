import { Box, Container, Paper, Grid, Divider } from '@mui/material';
import { useThemeColor } from '../hooks/useThemeColor';
import Profile from './sections/Profile';
import CoreCompetencies from './sections/CoreCompetencies';
import ProfessionalExperience from './sections/ProfessionalExperience';
import Education from './sections/Education';
import AwardsRecognition from './sections/AwardsRecognition';
import Languages from './sections/Languages';
import KeyProjects from './sections/KeyProjects';
import {
  mainContainerStyles,
  containerStyles,
  paperStyles,
  bottomGridStyles,
  gridItemStyles
} from '../styles/resumeStyles.js';

// Theme configurations
const themes = {
  default: {
    primary: '#000000',
    secondary: '#333333',
    background: '#ffffff',
    text: '#000000',
    accent: '#f5f5f5'
  },
  classic: {
    primary: '#4CAF50',
    secondary: '#388E3C',
    background: '#ffffff',
    text: '#1a1a1a',
    accent: '#e8f5e8'
  },
  modern: {
    primary: '#2196F3',
    secondary: '#1976D2',
    background: '#ffffff',
    text: '#333333',
    accent: '#f5f5f5'
  },
  minimal: {
    primary: '#000000',
    secondary: '#333333',
    background: '#ffffff',
    text: '#212121',
    accent: '#f5f5f5'
  },
  creative: {
    primary: '#FF9800',
    secondary: '#F57C00',
    background: '#ffffff',
    text: '#333333',
    accent: '#fff3e0'
  },
  // Color name aliases
  black: {
    primary: '#000000',
    secondary: '#333333',
    background: '#ffffff',
    text: '#000000',
    accent: '#f5f5f5'
  },
  green: {
    primary: '#4CAF50',
    secondary: '#388E3C',
    background: '#ffffff',
    text: '#1a1a1a',
    accent: '#e8f5e8'
  },
  blue: {
    primary: '#2196F3',
    secondary: '#1976D2',
    background: '#ffffff',
    text: '#333333',
    accent: '#f5f5f5'
  },
  orange: {
    primary: '#FF9800',
    secondary: '#F57C00',
    background: '#ffffff',
    text: '#333333',
    accent: '#fff3e0'
  }
};

function Resume({ template = 'modern', data, themeColors = null, theme = null }) {
  // Use theme prop from query params, or custom theme colors, or predefined template
  const selectedTheme = theme || template;
  const activeTheme = themeColors || themes[selectedTheme] || themes.modern;
  const themeColor = activeTheme.primary;
  
  // Handle case when no data is provided
  if (!data) {
    return (
      <Box sx={mainContainerStyles}>
        <Container {...containerStyles}>
          <Paper 
            elevation={0} 
            sx={{
              ...paperStyles,
              backgroundColor: activeTheme.background,
              color: activeTheme.text,
              padding: 4,
              textAlign: 'center'
            }}
          >
            <Box sx={{ py: 8 }}>
              <Box sx={{ fontSize: 48, mb: 2 }}>📄</Box>
              <Box sx={{ fontSize: 24, fontWeight: 'bold', mb: 2 }}>
                No Resume Data Available
              </Box>
              <Box sx={{ fontSize: 16, color: 'text.secondary' }}>
                Please upload a JSON file with your resume data to generate a resume.
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    );
  }
  
  return (
    <Box sx={mainContainerStyles}>
      <Container {...containerStyles}>
        <Paper 
          elevation={0} 
          sx={{
            ...paperStyles,
            backgroundColor: activeTheme.background,
            color: activeTheme.text
          }}
        >
          {data.profile && <Profile data={data} theme={activeTheme} />}
          
          {data.profile && data.coreCompetencies && (
            <Divider sx={{ mx: 1, my: 2, borderColor: activeTheme.primary + '20' }} />
          )}
          {data.coreCompetencies && <CoreCompetencies data={data} theme={activeTheme} />}
          
          {data.coreCompetencies && data.professionalExperience && (
            <Divider sx={{ mx: 1, my: 2, borderColor: activeTheme.primary + '20' }} />
          )}
          {data.professionalExperience && <ProfessionalExperience data={data} theme={activeTheme} />}
          
          {(data.professionalExperience && (data.awards || data.education || data.languages)) && (
            <Divider sx={{ mx: 1, my: 2, borderColor: activeTheme.primary + '20' }} />
          )}
          <Grid container spacing={2} sx={bottomGridStyles}>
            {data.awards && (
              <Grid item xs={12} md={5} sx={gridItemStyles}>
                <AwardsRecognition data={data} theme={activeTheme} />
              </Grid>
            )}
            {data.education && (
              <Grid item xs={12} md={data.awards ? 4 : 5} sx={gridItemStyles}>
                <Education data={data} theme={activeTheme} />
              </Grid>
            )}
            {data.languages && (
              <Grid item xs={12} md={3} sx={gridItemStyles}>
                <Languages data={data} theme={activeTheme} />
              </Grid>
            )}
          </Grid>
          
          {(data.education || data.languages || data.awards) && data.keyProjects && (
            <Divider sx={{ mx: 1, my: 2, borderColor: activeTheme.primary + '20' }} />
          )}
          {data.keyProjects && <KeyProjects data={data} theme={activeTheme} />}
        </Paper>
      </Container>
    </Box>
  );
}

export default Resume;
