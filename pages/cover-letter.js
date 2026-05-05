import { useRouter } from 'next/router';
import { Box, Button, Container } from '@mui/material';
import { Print } from '@mui/icons-material';
import CoverLetter from '../src/components/CoverLetter'; 
import { coverLetterData } from '../src/data/coverLetterData.js';
import { useState } from 'react';

export default function CoverLetterPage() {
  const router = useRouter();
  const { theme = 'modern' } = router.query;
  const [coverLetterContent, setCoverLetterContent] = useState(coverLetterData);

  const handlePrint = () => {
    window.print();
  };

  const handleCoverLetterUpdate = (updatedData) => {
    setCoverLetterContent(updatedData);
  };

  return (
    <>
      <Box sx={{ 
          backgroundColor: '#f5f5f5', 
          minHeight: '100vh', 
          py: 4,
          '@media print': {
            backgroundColor: 'transparent !important',
            minHeight: 'auto !important',
            py: '0 !important',
            margin: '0 !important',
            padding: '0 !important'
          }
        }}>
        <Container 
          maxWidth="lg" 
          disableGutters
          sx={{
            '@media print': {
              maxWidth: 'none !important',
              padding: '0 !important',
              margin: '0 !important'
            }
          }}
        >
          <div data-cover-letter-container="true">
            <CoverLetter 
              data={coverLetterContent} 
              theme={theme} 
              editable={true}
              onUpdate={handleCoverLetterUpdate}
            />
          </div>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            p: 4,
            '@media print': {
              display: 'none !important'
            }
          }}>
            <Button
              variant="contained"
              startIcon={<Print />}
              onClick={handlePrint}
              data-testid="cover-letter-print-button"
            >
              Print Cover Letter
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
