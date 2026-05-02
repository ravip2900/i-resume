import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

export const ThemeCard = styled(Card)(({ theme }) => ({
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.12), 0 4px 15px rgba(0, 0, 0, 0.08)',
  },
  '&.selected': {
    border: `2px solid ${theme.palette.primary.main}`,
    boxShadow: '0 8px 30px rgba(25, 118, 210, 0.25), 0 4px 15px rgba(25, 118, 210, 0.15)',
  },
}));
