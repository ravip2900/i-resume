import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { CloudUpload, CheckCircle, Download, Visibility } from '@mui/icons-material';
import { UploadArea } from '../../styles/uploadStyles';

const UploadSection = ({ 
  uploadedFile, 
  handleFileUpload, 
  handleDrop, 
  handleDragOver, 
  handleDownloadSample,
  handleViewSample
}) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h5" gutterBottom textAlign="center">
        Upload Your Resume Data
      </Typography>
      <Typography variant="body2" textAlign="center" sx={{ mb: 2 }}>
        Upload your resume data as JSON file or download our sample template
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Button
          variant="outlined"
          size="small"
          startIcon={<Visibility />}
          onClick={handleViewSample}
          sx={{ mr: 2 }}
        >
          View Sample Resume
        </Button>
        <Button
          variant="outlined"
          size="small"
          startIcon={<Download />}
          onClick={handleDownloadSample}
        >
          Download Sample JSON
        </Button>
      </Box>
      <UploadArea
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => document.getElementById('file-upload').click()}
      >
        <input
          id="file-upload"
          type="file"
          accept=".json"
          style={{ display: 'none' }}
          onChange={handleFileUpload}
        />
        <CloudUpload sx={{ fontSize: 36, color: 'primary.main', mb: 1 }} />
        <Typography variant="body2" gutterBottom>
          Drag & Drop Your JSON File Here
        </Typography>
        <Typography variant="caption" color="text.secondary">
          or click to browse JSON files only
        </Typography>
        {uploadedFile && (
          <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CheckCircle color="success" sx={{ mr: 1 }} />
            <Typography variant="caption" color="success.main">
              {uploadedFile.name} uploaded successfully!
            </Typography>
          </Box>
        )}
      </UploadArea>
    </Box>
  );
};

export default UploadSection;
