export const avatarContainerStyles = {
  mb: 1,
  display: 'flex',
  justifyContent: 'flex-start'
};

export const getAvatarStyles = (avatarData) => ({
  width: avatarData.size.width,
  height: avatarData.size.height,
  fontSize: avatarData.size.fontSize,
  backgroundColor: avatarData.styles.backgroundColor,
  color: avatarData.styles.color,
  border: avatarData.styles.border,
  '@media print': {
    width: avatarData.printSize.width,
    height: avatarData.printSize.height,
    fontSize: avatarData.printSize.fontSize,
    border: avatarData.printStyles.border
  }
});
