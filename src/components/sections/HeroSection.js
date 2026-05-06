import React from 'react';
import { Typography } from '@mui/material';
import { HeroSection } from '../../styles/heroStyles';

const Hero = () => {
  return (
    <HeroSection>
      <Typography variant="h4" component="h1" gutterBottom>
        Create Your Professional Resume
      </Typography>
      <Typography variant="h6" paragraph>
        Build stunning resumes in minutes with our AI-powered templates
      </Typography>
      <Typography variant="body2" sx={{ maxWidth: 600, mx: 'auto', mb: 1 }}>
        Choose from professional templates, customize your content, and print your perfect resume. 
        Stand out from the crowd with a beautifully designed resume that showcases your skills and experience.
      </Typography>
    </HeroSection>
  );
};

export default Hero;
