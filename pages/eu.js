import { useRouter } from 'next/router';
import { Box, Button, Container } from '@mui/material';
import { Print } from '@mui/icons-material';
import Resume from '../src/components/Resume'; 
import { resumeData } from '../src/data/resumeData.js';

export default function Index() {
  const router = useRouter();
  const { theme = 'modern' } = router.query;

  const handlePrint = () => {
    window.print();
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
          <div data-resume-container="true">
            <Resume data={resumeData} theme={theme} />
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
              data-testid="eu-print-button"
            >
              Print Resume
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}