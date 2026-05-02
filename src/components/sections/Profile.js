import React from 'react';
import { Box, Grid, Typography, Stack, Avatar } from '@mui/material';
import {
  profileContainerStyles,
  gridContainerStyles,
  mainContentStyles,
  avatarColumnStyles,
  contactColumnStyles,
  titleStyles,
  subtitleStyles,
  descriptionStyles,
  contactStackStyles,
  contactItemStyles,
  contactIconStyles,
  contactTextStyles
} from '../../styles/profileStyles.js';
import { avatarContainerStyles, getAvatarStyles } from '../../styles/avatarStyles.js';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

function Profile({ data, theme }) {
  const themeColor = theme.primary;
  const profile = data?.profile || {};
  const avatar = data?.avatar || {};
  const contact = data?.contact || [];
  
  // Icon mapping for contact items
  const iconMap = {
    location: LocationOnIcon,
    phone: PhoneIcon,
    email: EmailIcon,
    linkedin: LinkedInIcon,
    github: GitHubIcon,
    portfolio: LanguageIcon,
    website: LanguageIcon
  };

  return (
    <Box sx={profileContainerStyles}>
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 2, sm: 3 },
        alignItems: 'stretch'
      }}>
        {/* Main Content Section - Left */}
        <Box sx={{ flex: '1 1 auto', minWidth: 0 }}>
          <Typography variant="h4" sx={{...titleStyles, color: themeColor}}>
            {profile.name || 'Your Name'}
          </Typography>
          <Typography variant="h6" sx={{...subtitleStyles, color: themeColor}}>
            {profile.title || 'Your Title'}
          </Typography>
          <Typography variant="body2" sx={descriptionStyles}>
            {profile.description || 'Your professional description goes here.'}
          </Typography>
        </Box>
        
        {/* Contact and Avatar Section - Right */}
        <Box sx={{ 
          flex: '0 0 auto', 
          minWidth: avatar && avatar.showImage ? '300px' : '200px',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          gap: { xs: 2, sm: 3 },
          justifyContent: avatar && avatar.showImage ? 'flex-start' : 'flex-end'
        }}>
          {/* Vertical Divider - Left of Contact */}
          {!avatar?.showImage && (
            <Box sx={{
              width: '1px',
              backgroundColor: themeColor + '20',
              display: { xs: 'none', sm: 'block' },
              alignSelf: 'stretch',
              minHeight: '120px',
              mr: 1
            }} />
          )}
          
          {/* Avatar - Left (when shown) */}
          {avatar && avatar.showImage && (
            <Box sx={{ flex: '0 0 auto' }}>
              <Avatar 
                sx={{
                  width: 150,
                  height: 150,
                  '& img': {
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    transform: 'scale(1.2)'
                  }
                }}
                src={avatar.image}
                alt={avatar.initials}
              >
                {avatar.initials}
              </Avatar>
            </Box>
          )}
          
          {/* Contact Info - Right */}
          <Stack sx={contactStackStyles} alignItems="flex-start">
            {contact.map((info) => {
              const Icon = iconMap[info.id] || LanguageIcon;
              const isLink = info.id === 'email' || info.id === 'linkedin' || info.id === 'github' || info.id === 'portfolio' || info.id === 'website';
              const getHref = () => {
                switch(info.id) {
                  case 'email':
                    return `mailto:${info.text}`;
                  case 'linkedin':
                    return `https://${info.text}`;
                  case 'github':
                    return `https://${info.text}`;
                  case 'portfolio':
                  case 'website':
                    return info.text.startsWith('http') ? info.text : `https://${info.text}`;
                  default:
                    return null;
                }
              };
              
              return (
                <Box key={info.id} sx={contactItemStyles}>
                  <Icon sx={{...contactIconStyles, color: themeColor}} />
                  {isLink ? (
                    <Typography 
                      variant="body2" 
                      sx={contactTextStyles}
                      component="a"
                      href={getHref()}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: 'none',
                        color: 'inherit'
                      }}
                    >
                      {info.text}
                    </Typography>
                  ) : (
                    <Typography variant="body2" sx={contactTextStyles}>
                      {info.text}
                    </Typography>
                  )}
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
