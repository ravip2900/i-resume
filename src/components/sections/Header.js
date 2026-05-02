import React from 'react';
import { Typography, Toolbar } from '@mui/material';
import { StyledAppBar } from '../../styles/headerStyles';

const Header = ({ showPreview }) => {
  if (showPreview) return null;

  return (
    <div id="header" style={{marginBottom:'16px'}}>
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Resume Generator
        </Typography>
      </Toolbar>
    </StyledAppBar>
    </div>
  );
};

export default Header;
