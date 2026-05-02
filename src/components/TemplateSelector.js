import React from 'react';
import { Box, ButtonGroup, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const TemplateContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
}));

const templates = [
  { id: 'modern', name: 'Modern', description: 'Clean and contemporary design' },
  { id: 'classic', name: 'Classic', description: 'Traditional professional layout' },
  { id: 'minimal', name: 'Minimal', description: 'Simple and focused content' },
  { id: 'creative', name: 'Creative', description: 'Bold and unique design' },
];

function TemplateSelector({ selectedTemplate, onTemplateChange }) {
  return (
    <TemplateContainer>
      <Typography variant="h6" gutterBottom>
        Choose Template
      </Typography>
      <ButtonGroup variant="outlined" aria-label="template selection">
        {templates.map((template) => (
          <Button
            key={template.id}
            variant={selectedTemplate === template.id ? 'contained' : 'outlined'}
            onClick={() => onTemplateChange(template.id)}
            title={template.description}
          >
            {template.name}
          </Button>
        ))}
      </ButtonGroup>
    </TemplateContainer>
  );
}

export default TemplateSelector;
