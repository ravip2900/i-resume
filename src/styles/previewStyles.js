import { styled } from '@mui/material/styles';
import { Box, Paper } from '@mui/material';

export const PreviewSection = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

export const ResumePaper = styled(Paper)(({ theme }) => ({
  padding: 0,
  maxWidth: '100%',
  boxShadow: theme.shadows[3],
  '@media print': {
    boxShadow: 'none !important',
    border: 'none !important',
    backgroundColor: 'white !important',
    margin: '0 !important',
    padding: '0 !important',
    borderRadius: '0 !important',
    width: '100% !important',
    maxWidth: '100% !important',
    minWidth: '100% !important',
  },
}));

export const PrintOnly = styled('div')({
  '@media print': {
    display: 'block',
  },
  '@media screen': {
    display: 'none',
  },
});

export const ScreenOnly = styled(Box)({
  '@media print': {
    display: 'none !important',
  },
});

export const GlobalPrintStyles = styled('style')({
  '@media print': {
    '@global': {
      'body': {
        background: 'white !important',
        margin: '0 !important',
        padding: '0 !important',
        '-webkit-print-color-adjust': 'exact',
        'color-adjust': 'exact',
        width: '100% !important',
        maxWidth: '100% !important',
        minWidth: '100% !important',
      },
      'html': {
        background: 'white !important',
        margin: '0 !important',
        padding: '0 !important',
        width: '100% !important',
        maxWidth: '100% !important',
        minWidth: '100% !important',
      },
      '@page': {
        margin: '0.1in 0.15in 0.1in 0.15in',
        size: 'letter',
      },
      '*': {
        '-webkit-print-color-adjust': 'exact !important',
        'color-adjust': 'exact !important',
        margin: '0 !important',
        padding: '0 !important',
      },
      '*[class*="css-"]': {
        'margin-top': '0 !important',
        'margin-bottom': '0 !important',
        'margin-left': '0 !important',
        'margin-right': '0 !important',
        'padding-top': '0 !important',
        'padding-bottom': '0 !important',
        'padding-left': '0 !important',
        'padding-right': '0 !important',
      },
      '.MuiBox-root': {
        'margin-top': '0 !important',
        'margin-bottom': '0 !important',
        'margin-left': '0 !important',
        'margin-right': '0 !important',
        'padding-top': '0 !important',
        'padding-bottom': '0 !important',
        'padding-left': '0 !important',
        'padding-right': '0 !important',
        background: 'white !important',
        boxShadow: 'none !important',
        border: 'none !important',
        width: '100% !important',
        maxWidth: '100% !important',
        minWidth: '100% !important',
      },
      '.MuiPaper-root': {
        'margin-top': '0 !important',
        'margin-bottom': '0 !important',
        'margin-left': '0 !important',
        'margin-right': '0 !important',
        'padding-top': '0 !important',
        'padding-bottom': '0 !important',
        'padding-left': '0 !important',
        'padding-right': '0 !important',
        background: 'white !important',
        boxShadow: 'none !important',
        border: 'none !important',
        width: '100% !important',
        maxWidth: '100% !important',
        minWidth: '100% !important',
      },
      '[class*="Container"]': {
        background: 'white !important',
        boxShadow: 'none !important',
        border: 'none !important',
        margin: '0 !important',
        padding: '0 !important',
        width: '100% !important',
        maxWidth: '100% !important',
        minWidth: '100% !important',
      },
      '.MuiContainer-root': {
        background: 'white !important',
        boxShadow: 'none !important',
        border: 'none !important',
        margin: '0 !important',
        padding: '0 !important',
        maxWidth: 'none !important',
        width: '100% !important',
        minWidth: '100% !important',
      },
      '.MuiContainer-maxWidthLg': {
        background: 'white !important',
        boxShadow: 'none !important',
        border: 'none !important',
        margin: '0 !important',
        padding: '0 !important',
        maxWidth: 'none !important',
        width: '100% !important',
        minWidth: '100% !important',
      },
      '.MuiPaper-root': {
        background: 'white !important',
        boxShadow: 'none !important',
        border: '1px solid #000 !important',
        margin: '0 !important',
        padding: '0 !important',
      },
      '.MainContainer': {
        background: 'white !important',
        margin: '0 !important',
        padding: '0 !important',
        width: '100% !important',
        maxWidth: '100% !important',
        minWidth: '100% !important',
      },
      '.ContentContainer': {
        background: 'white !important',
        margin: '0 !important',
        padding: '0 !important',
        width: '100% !important',
        maxWidth: '100% !important',
        minWidth: '100% !important',
      },
      '.mainContainerStyles': {
        background: 'white !important',
        margin: '0 !important',
        padding: '0 !important',
        width: '100% !important',
        maxWidth: '100% !important',
        minWidth: '100% !important',
      },
      '.containerStyles': {
        background: 'white !important',
        margin: '0 !important',
        padding: '0 !important',
        width: '100% !important',
        maxWidth: '100% !important',
        minWidth: '100% !important',
      },
      '.PreviewSection': {
        background: 'white !important',
        margin: '0 !important',
        padding: '0 !important',
        width: '100% !important',
        maxWidth: '100% !important',
        minWidth: '100% !important',
      },
      '.ResumePaper': {
        background: 'white !important',
        boxShadow: 'none !important',
        border: '1px solid #000 !important',
        margin: '0 !important',
        padding: '20px 10px !important',
        width: '100% !important',
        maxWidth: '100% !important',
        minWidth: '100% !important',
        boxSizing: 'border-box !important',
      },
      'html': {
        background: 'white !important',
        width: '100% !important',
        maxWidth: '100% !important',
        minWidth: '100% !important',
      },
      '#__next': {
        background: 'white !important',
        margin: '0 !important',
        padding: '0 !important',
        width: '100% !important',
        maxWidth: '100% !important',
        minWidth: '100% !important',
      },
      '#__next > div': {
        margin: '0 !important',
        padding: '0 !important',
      },
      '#__next > div:first-child': {
        'margin-top': '0 !important',
        'padding-top': '0 !important',
      },
      'div': {
        background: 'white !important',
      },
      'div[class*="Container"], div[class*="container"]': {
        padding: '0 !important',
        margin: '0 !important',
      },
      '.MuiBox-root:first-child': {
        'margin-top': '0 !important',
        'padding-top': '0 !important',
      },
      '.MuiPaper-root:first-child': {
        'margin-top': '0 !important',
        'padding-top': '0 !important',
      },
      'body > div': {
        'margin-top': '0 !important',
        'padding-top': '0 !important',
      },
      'body > div:first-child': {
        'margin-top': '0 !important',
        'padding-top': '0 !important',
      },
    },
  },
});
