import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const MainContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.grey[50],
  '@media print': {
    minHeight: 'auto',
    backgroundColor: 'white !important',
    margin: '0 !important',
    padding: '0 !important',
    width: '100% !important',
    maxWidth: '100% !important',
    minWidth: '100% !important',
  },
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: 0,
  marginTop: 0,
  '@media print': {
    flex: 'none',
    padding: '0 !important',
    margin: '0 !important',
    width: '100% !important',
    maxWidth: '100% !important',
    minWidth: '100% !important',
  },
}));

export const Footer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2),
  textAlign: 'center',
  '@media print': {
    display: 'none !important',
  },
}));
