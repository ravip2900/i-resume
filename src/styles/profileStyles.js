export const profileContainerStyles = {
  mb: 2,
  pt: 0,
  '@media print': {
    mb: 1,
    pb: 1,
    pt: 0,
    pageBreakInside: 'avoid',
    breakInside: 'avoid'
  }
};

export const gridContainerStyles = {
  spacing: 2,
  alignItems: 'flex-start',
  '@media print': {
    spacing: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap'
  }
};

export const mainContentStyles = {
  '@media print': {
    flex: '1 1 auto',
    minWidth: '400px'
  }
};

export const avatarColumnStyles = {
  '@media print': {
    width: '80px !important',
    flex: '0 0 auto',
    minWidth: '80px'
  }
};

export const contactColumnStyles = {
  '@media print': {
    width: '180px !important',
    flex: '0 0 auto',
    minWidth: '180px'
  }
};

export const titleStyles = {
  textAlign: 'left',
  fontWeight: 800,
  color: '#000000',
  mb: 0.2,
  letterSpacing: '0.5px',
  fontSize: '2rem',
  '@media print': {
    fontSize: '1.5rem',
    mb: 0.1,
    lineHeight: 1.2
  }
};

export const subtitleStyles = {
  textAlign: 'left',
  color: '#000000',
  fontWeight: 700,
  mb: 0.8,
  '@media print': {
    fontSize: '1.3rem',
    mb: 0.4,
    lineHeight: 1.3
  }
};

export const descriptionStyles = {
  textAlign: 'left',
  color: '#000000',
  lineHeight: 1.7,
  fontSize: '0.9rem',
  mb: 0,
  '@media print': {
    fontSize: '0.95rem',
    lineHeight: 1.4,
    mb: 0
  }
};

export const contactStackStyles = {
  spacing: 3,
  '@media print': {
    spacing: 0.3
  },
  alignItems: 'flex-start'
};

export const contactItemStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
  mb: 1.5,
  '@media print': {
    gap: 0.5,
    alignItems: 'flex-start',
    mb: 0.5
  }
};

export const contactIconStyles = {
  fontSize: 18,
  flexShrink: 0,
  alignSelf: 'flex-start',
  marginTop: '2px',
  '@media print': {
    fontSize: 16,
    mt: '2px'
  }
};

export const headerIconStyles = {
  fontSize: 24,
  alignSelf: 'center'
};

export const contactTextStyles = {
  textAlign: 'left',
  color: '#000000',
  fontSize: '0.85rem',
  fontWeight: 500,
  '@media print': {
    fontSize: '0.85rem',
    lineHeight: 1.2
  }
};
