import * as React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Preview } from '@mui/icons-material';

// Import components
import Header from '../src/components/sections/Header';
import Hero from '../src/components/sections/HeroSection';
import UploadSection from '../src/components/sections/UploadSection';
import ThemeSelection from '../src/components/sections/ThemeSelection';
import PreviewSection from '../src/components/sections/PreviewSection';

// Import hooks
import { useResumeHandlers } from '../src/hooks/useResumeHandlers';

// Import styles
import { 
  MainContainer, 
  ContentContainer, 
  Footer 
} from '../src/styles/containerStyles';
import { GlobalPrintStyles } from '../src/styles/previewStyles';

export default function ResumeGenerator() {
  const {
    selectedTemplate,
    uploadedFile,
    resumeJsonData,
    showPreview,
    handlePrint,
    handleDownloadPDF,
    handleDownloadSample,
    handlePreview,
    handleBackToEdit,
    handleTemplateChange,
    handleFileUpload,
    handleDrop,
    handleDragOver,
    handleViewSample
  } = useResumeHandlers();

  return (
    <>
      <GlobalPrintStyles />
      <MainContainer>
        <Header 
          showPreview={showPreview} 
        />

        <ContentContainer>
          <Container component="main" maxWidth="lg" disableGutters sx={{ mt: '0 !important', '& > :first-child': { mt: '0 !important' } }}>
            {!showPreview && <Hero />}
            
            {!showPreview && (
              <UploadSection 
                uploadedFile={uploadedFile}
                handleFileUpload={handleFileUpload}
                handleDrop={handleDrop}
                handleDragOver={handleDragOver}
                handleDownloadSample={handleDownloadSample}
                handleViewSample={handleViewSample}
              />
            )}

            {!showPreview && (
              <ThemeSelection 
                selectedTemplate={selectedTemplate}
                handleTemplateChange={handleTemplateChange}
              />
            )}

            {uploadedFile && resumeJsonData && !showPreview && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Button
                  variant="contained"
                  size="medium"
                  startIcon={<Preview />}
                  onClick={handlePreview}
                >
                  Preview Resume
                </Button>
              </Box>
            )}

            {showPreview && (
              <PreviewSection 
                selectedTemplate={selectedTemplate}
                resumeJsonData={resumeJsonData}
                handleBackToEdit={handleBackToEdit}
                handlePrint={handlePrint}
              />
            )}
          </Container>
        </ContentContainer>

        {!showPreview && (
          <Footer>
            <Typography variant="body2">
              2026 Resume Generator. Built with Next.js and Material-UI.
            </Typography>
            <Typography variant="caption" display="block">
              Create professional resumes with customizable templates.
            </Typography>
          </Footer>
        )}
      </MainContainer>
    </>
  );
}
