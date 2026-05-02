import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ArrowBack, Print } from '@mui/icons-material';
import { PreviewSection, ResumePaper, ScreenOnly } from '../../styles/previewStyles';
import Resume from '../Resume';

const PreviewSectionComponent = ({ 
  selectedTemplate, 
  resumeJsonData, 
  handleBackToEdit, 
  handlePrint 
}) => {
  return (
    <PreviewSection>
      <ScreenOnly>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4">
            Resume Preview
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="outlined"
              startIcon={<ArrowBack />}
              onClick={handleBackToEdit}
            >
              Back to Edit
            </Button>
            <Button
              variant="contained"
              startIcon={<Print />}
              onClick={handlePrint}
            >
              Print Resume
            </Button>
          </Box>
        </Box>
      </ScreenOnly>
      <ResumePaper>
        <Resume template={selectedTemplate} data={resumeJsonData} />
      </ResumePaper>
    </PreviewSection>
  );
};

export default PreviewSectionComponent;
