import { useState } from 'react';
import { 
  Box, 
  Grid, 
  Paper, 
  Typography, 
  TextField, 
  TextareaAutosize,
  Divider,
  IconButton
} from '@mui/material';
import { 
  Person, 
  LocationOn, 
  Phone, 
  Email, 
  LinkedIn,
  Edit,
  Save
} from '@mui/icons-material';

const CoverLetter = ({ data, theme = 'modern', editable = false, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localData, setLocalData] = useState(data);

  const handleFieldChange = (section, field, value) => {
    const updatedData = { ...localData };
    if (section.includes('.')) {
      const [parent, child] = section.split('.');
      updatedData[parent][child] = value;
    } else if (section === 'body') {
      updatedData.letterContent.body[field] = value;
    } else {
      updatedData[section][field] = value;
    }
    setLocalData(updatedData);
    if (onUpdate) {
      onUpdate(updatedData);
    }
  };

  const renderEditableField = (value, section, field, multiline = false, rows = 1, customStyle = {}) => {
    const defaultStyle = {
      fontFamily: 'Arial, sans-serif',
      color: '#333333',
      fontSize: '12px',
      lineHeight: '1.5',
      textAlign: 'left'
    };

    if (!editable || !isEditing) {
      return multiline ? (
        <Typography 
          variant="body1" 
          sx={{ 
            whiteSpace: 'pre-line', 
            ...defaultStyle,
            ...customStyle
          }}
        >
          {value}
        </Typography>
      ) : (
        <Typography 
          variant="body1" 
          sx={{ 
            ...defaultStyle,
            ...customStyle
          }}
        >
          {value}
        </Typography>
      );
    }

    return multiline ? (
      <TextareaAutosize
        value={value}
        onChange={(e) => handleFieldChange(section, field, e.target.value)}
        minRows={rows}
        style={{
          width: '100%',
          border: '1px solid #333333',
          borderRadius: '0px',
          padding: '4px',
          resize: 'vertical',
          ...defaultStyle,
          ...customStyle,
          '@media print': {
            border: 'none !important',
            padding: '0 !important',
            resize: 'none !important',
            backgroundColor: 'transparent !important',
            borderRadius: '0 !important',
            boxShadow: 'none !important',
            outline: 'none !important'
          }
        }}
      />
    ) : (
      <TextField
        value={value}
        onChange={(e) => handleFieldChange(section, field, e.target.value)}
        variant="outlined"
        size="small"
        fullWidth
        sx={{ 
          '& .MuiOutlinedInput-root': {
            borderColor: '#333333',
            ...defaultStyle,
            ...customStyle,
            '@media print': {
              border: 'none !important',
              backgroundColor: 'transparent !important',
              padding: '0 !important',
              borderRadius: '0 !important',
              boxShadow: 'none !important',
              '& fieldset': {
                border: 'none !important'
              }
            }
          },
          '@media print': {
            '& .MuiInputBase-input': {
              padding: '0 !important',
              border: 'none !important',
              backgroundColor: 'transparent !important',
              borderRadius: '0 !important',
              boxShadow: 'none !important'
            },
            '& fieldset': {
              border: 'none !important'
            }
          }
        }}
      />
    );
  };

  const themeStyles = {
    modern: {
      container: {
        backgroundColor: '#ffffff',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        borderRadius: '0px',
        border: '1px solid #333333',
        '@media print': {
          boxShadow: 'none !important',
          border: '1px solid #333333 !important',
          backgroundColor: '#ffffff !important',
          margin: '0 !important',
          padding: '0 !important',
          printColorAdjust: 'exact',
          WebkitPrintColorAdjust: 'exact'
        }
      },
      leftColumn: {
        backgroundColor: '#ffffff',
        padding: '40px 30px',
        borderRadius: '0px',
        borderRight: '1px solid #333333',
        '@media print': {
          backgroundColor: '#ffffff !important',
          borderRight: '1px solid #333333 !important',
          padding: '40px 30px !important'
        }
      },
      rightColumn: {
        padding: '40px 40px',
        backgroundColor: '#ffffff',
        borderRadius: '0px',
        '@media print': {
          backgroundColor: '#ffffff !important',
          padding: '40px 40px !important'
        }
      },
      name: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: '30px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'left',
        '@media print': {
          fontSize: '24px !important',
          color: '#000000 !important',
          marginBottom: '30px !important'
        }
      },
      personalInfo: {
        fontSize: '12px',
        color: '#000000',
        marginBottom: '15px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'left',
        '@media print': {
          fontSize: '12px !important',
          color: '#000000 !important',
          marginBottom: '15px !important'
        }
      },
      heading: {
        fontSize: '14px',
        fontWeight: 'normal',
        color: '#000000',
        marginBottom: '10px',
        fontFamily: 'Arial, sans-serif',
        '@media print': {
          fontSize: '14px !important',
          color: '#000000 !important',
          marginBottom: '10px !important'
        }
      },
      body: {
        fontSize: '12px',
        color: '#000000',
        lineHeight: 1.5,
        fontFamily: 'Arial, sans-serif',
        '@media print': {
          fontSize: '12px !important',
          color: '#000000 !important',
          lineHeight: '1.5 !important'
        }
      },
      date: {
        fontSize: '12px',
        color: '#000000',
        marginBottom: '20px',
        fontFamily: 'Arial, sans-serif',
        '@media print': {
          fontSize: '12px !important',
          color: '#000000 !important',
          marginBottom: '20px !important'
        }
      },
      company: {
        fontSize: '12px',
        color: '#000000',
        marginBottom: '8px',
        fontFamily: 'Arial, sans-serif',
        '@media print': {
          fontSize: '12px !important',
          color: '#000000 !important',
          marginBottom: '8px !important'
        }
      },
      subject: {
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: '15px',
        fontFamily: 'Arial, sans-serif',
        '@media print': {
          fontSize: '12px !important',
          color: '#000000 !important',
          marginBottom: '15px !important',
          fontWeight: 'bold !important'
        }
      }
    }
  };

  const currentTheme = themeStyles[theme] || themeStyles.modern;

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        ...currentTheme.container,
        overflow: 'hidden',
        position: 'relative',
        '@media print': {
          boxShadow: 'none',
          border: '1px solid #333333 !important',
          margin: '0 !important',
          padding: '0 !important',
          printColorAdjust: 'exact',
          WebkitPrintColorAdjust: 'exact'
        }
      }}
    >
      {editable && (
        <IconButton
          onClick={() => setIsEditing(!isEditing)}
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            zIndex: 1,
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            '@media print': {
              display: 'none !important'
            }
          }}
        >
          {isEditing ? <Save /> : <Edit />}
        </IconButton>
      )}
      
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        {/* Left Section - Contact Information */}
        <Box sx={{ flex: '0 0 33%', ...currentTheme.leftColumn }}>
          {/* Name at the top */}
          {renderEditableField(
            localData.personalInfo.name, 
            'personalInfo', 
            'name',
            false,
            1,
            currentTheme.name
          )}
          
          {/* Contact Information below */}
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
              <LocationOn sx={{ fontSize: 16, mr: 1, color: '#333333', flexShrink: 0 }} />
              {renderEditableField(
                localData.personalInfo.address, 
                'personalInfo', 
                'address',
                false,
                1,
                currentTheme.personalInfo
              )}
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
              <Phone sx={{ fontSize: 16, mr: 1, color: '#333333', flexShrink: 0 }} />
              {renderEditableField(
                localData.personalInfo.phone, 
                'personalInfo', 
                'phone',
                false,
                1,
                currentTheme.personalInfo
              )}
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
              <Email sx={{ fontSize: 16, mr: 1, color: '#333333', flexShrink: 0 }} />
              {renderEditableField(
                localData.personalInfo.email, 
                'personalInfo', 
                'email',
                false,
                1,
                currentTheme.personalInfo
              )}
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <LinkedIn sx={{ fontSize: 16, mr: 1, color: '#333333', flexShrink: 0 }} />
              {renderEditableField(
                localData.personalInfo.linkedin, 
                'personalInfo', 
                'linkedin',
                false,
                1,
                currentTheme.personalInfo
              )}
            </Box>
          </Box>
        </Box>

        {/* Right Section - Letter Content */}
        <Box sx={{ flex: '0 0 67%', ...currentTheme.rightColumn }}>
          {renderEditableField(
            localData.letterContent.date, 
            'letterContent', 
            'date',
            false,
            1,
            currentTheme.date
          )}
          
          <Box sx={{ mb: 4 }}>
            {renderEditableField(
              localData.letterContent.company.name, 
              'letterContent.company', 
              'name',
              false,
              1,
              currentTheme.company
            )}
            {renderEditableField(
              localData.letterContent.company.address, 
              'letterContent.company', 
              'address',
              true,
              2,
              currentTheme.company
            )}
          </Box>
          
          <Box sx={{ mb: 4 }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold', ...currentTheme.subject }}>
              Subject: {localData.letterContent.subject}
            </Typography>
          </Box>
          
          <Box sx={{ mb: 4 }}>
            {renderEditableField(
              localData.letterContent.salutation, 
              'letterContent', 
              'salutation',
              false,
              1,
              currentTheme.body
            )}
          </Box>
          
          <Box sx={{ mb: 4 }}>
            {localData.letterContent.body.map((paragraph, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                {renderEditableField(
                  paragraph, 
                  'body', 
                  index,
                  true,
                  3,
                  currentTheme.body
                )}
              </Box>
            ))}
          </Box>
          
          <Box sx={{ mt: 6, mb: 3 }}>
            {renderEditableField(
              localData.letterContent.closing, 
              'letterContent', 
              'closing',
              false,
              1,
              currentTheme.body
            )}
          </Box>
          
          <Box sx={{ mt: 4 }}>
            {renderEditableField(
              localData.letterContent.signature, 
              'letterContent', 
              'signature',
              false,
              1,
              currentTheme.body
            )}
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default CoverLetter;
