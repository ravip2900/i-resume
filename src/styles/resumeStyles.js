export const mainContainerStyles = {
  backgroundColor: '#ffffff',
  '@media print': {
    backgroundColor: '#ffffff',
    margin: '0 !important',
    padding: '0 !important',
    width: '100% !important',
    maxWidth: '100% !important',
    minWidth: '100% !important',
    boxSizing: 'border-box !important'
  }
};

export const containerStyles = {
  maxWidth: 'lg',
  disableGutters: true,
  sx: {
    '@media print': {
      maxWidth: '100% !important',
      padding: '0 !important',
      margin: '0 !important',
      width: '100% !important',
      minWidth: '100% !important',
      boxSizing: 'border-box !important'
    }
  }
};

export const paperStyles = {
  p: 4,
  backgroundColor: '#ffffff',
  border: '1px solid rgba(0, 0, 0, 0.12)',
  '@media print': {
    p: 2,
    boxShadow: 'none',
    backgroundColor: '#ffffff',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    margin: 0,
    width: '100%',
    maxWidth: '100%'
  }
};

export const bottomGridStyles = {
  mb: 1,
  '@media print': {
    spacing: 1,
    mb: 0.5,
    flexDirection: 'row',
    flexWrap: 'nowrap'
  }
};

export const gridItemStyles = {
  '@media print': {
    '&:nth-of-type(1)': {
      flex: '1 1 41.667%',
      maxWidth: '41.667%',
      minWidth: '41.667%'
    },
    '&:nth-of-type(2)': {
      flex: '1 1 33.333%',
      maxWidth: '33.333%',
      minWidth: '33.333%'
    },
    '&:nth-of-type(3)': {
      flex: '1 1 25%',
      maxWidth: '25%',
      minWidth: '25%'
    }
  }
};
