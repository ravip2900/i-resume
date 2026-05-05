import { useRouter } from 'next/router';
import { Box, Button, Menu, MenuItem, Container } from '@mui/material';
import { Download, ArrowDropDown } from '@mui/icons-material';
import Resume from '../src/components/Resume'; 
import { resumeData } from '../src/data/resumeData.js';
import { useState } from 'react';

export default function Index() {
  const router = useRouter();
  const { theme = 'modern' } = router.query;
  const [downloadMenuAnchor, setDownloadMenuAnchor] = useState(null);

  const handleDownloadMenuClick = (event) => {
    setDownloadMenuAnchor(event.currentTarget);
  };

  const handleDownloadMenuClose = () => {
    setDownloadMenuAnchor(null);
  };

  const handleDownloadPDF = async () => {
    try {
      const html2canvas = (await import('html2canvas')).default;
      const jsPDF = (await import('jspdf')).jsPDF;
      
      const resumeElement = document.querySelector('[data-resume-container="true"]') || 
                           document.querySelector('.MuiPaper-root') ||
                           document.body;
      
      if (!resumeElement) {
        alert('Resume element not found. Please try again.');
        return;
      }

      const originalButton = document.querySelector('[data-testid="eu-download-button"]');
      if (originalButton) {
        originalButton.disabled = true;
        originalButton.textContent = 'Generating PDF...';
      }

      const canvas = await html2canvas(resumeElement, {
        scale: 2, // Increased scale for better quality and larger fonts
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: resumeElement.scrollWidth,
        height: resumeElement.scrollHeight,
        onclone: (clonedDoc) => {
          // Remove unnecessary elements and improve styles for PDF
          const elements = clonedDoc.querySelectorAll('*');
          elements.forEach(el => {
            // Remove unnecessary attributes
            el.removeAttribute('data-testid');
            el.removeAttribute('data-reactroot');
            
            // Increase font sizes for better PDF readability
            const style = window.getComputedStyle(el);
            const currentFontSize = parseFloat(style.fontSize);
            
            // Increase font sizes based on current size
            if (currentFontSize > 0) {
              if (currentFontSize < 12) {
                el.style.fontSize = '14px';
              } else if (currentFontSize < 14) {
                el.style.fontSize = '16px';
              } else if (currentFontSize < 16) {
                el.style.fontSize = '18px';
              } else if (currentFontSize < 18) {
                el.style.fontSize = '20px';
              } else if (currentFontSize < 20) {
                el.style.fontSize = '22px';
              } else if (currentFontSize < 24) {
                el.style.fontSize = '26px';
              } else {
                el.style.fontSize = `${currentFontSize * 1.2}px`;
              }
            }
            
            // Prevent line wrapping for competencies and improve spacing
            if (el.textContent && el.textContent.includes('•')) {
              el.style.whiteSpace = 'nowrap';
              el.style.overflow = 'visible';
              el.style.textOverflow = 'clip';
            }
            
            // Ensure proper spacing for sections
            if (el.textContent && (
              el.textContent.includes('Core Competencies') ||
              el.textContent.includes('Professional Experience') ||
              el.textContent.includes('Key Projects') ||
              el.textContent.includes('Education') ||
              el.textContent.includes('Awards') ||
              el.textContent.includes('Languages')
            )) {
              el.style.fontSize = '24px';
              el.style.fontWeight = 'bold';
              el.style.marginTop = '20px';
              el.style.marginBottom = '10px';
              el.style.pageBreakBefore = 'auto';
            }
            
            // Ensure grid items are visible
            if (el.classList && el.classList.contains('MuiGrid-item')) {
              el.style.display = 'block';
              el.style.width = '100%';
              el.style.marginBottom = '15px';
              el.style.pageBreakInside = 'avoid';
            }
            
            // Ensure all sections are visible
            const sectionKeywords = ['keyProjects', 'awards', 'education', 'languages'];
            sectionKeywords.forEach(keyword => {
              if (el.className && el.className.includes && el.className.includes(keyword)) {
                el.style.display = 'block';
                el.style.visibility = 'visible';
                el.style.opacity = '1';
              }
            });
            
            // Ensure font weights are appropriate
            if (style.fontWeight === '400' || style.fontWeight === 'normal') {
              el.style.fontWeight = 'normal';
            }
            
            // Improve line height for better readability
            el.style.lineHeight = '1.4';
          });
          
          // Ensure all sections are properly displayed
          const allElements = clonedDoc.querySelectorAll('*');
          allElements.forEach(el => {
            // Force visibility for all resume sections
            if (el.textContent && (
              el.textContent.includes('Key Projects') ||
              el.textContent.includes('Awards') ||
              el.textContent.includes('Education') ||
              el.textContent.includes('Languages')
            )) {
              el.style.display = 'block';
              el.style.visibility = 'visible';
              el.style.opacity = '1';
              
              // Also make parent elements visible
              let parent = el.parentElement;
              while (parent) {
                parent.style.display = 'block';
                parent.style.visibility = 'visible';
                parent.style.opacity = '1';
                parent = parent.parentElement;
              }
            }
          });
        }
      });

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.8);
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      const fileName = `resume-${theme}-${Date.now()}.pdf`;
      pdf.save(fileName);

      if (originalButton) {
        originalButton.disabled = false;
        originalButton.textContent = 'Download Resume';
      }

    } catch (error) {
      console.error('PDF generation error:', error);
      alert('Failed to generate PDF. Please try again.');
      
      const originalButton = document.querySelector('[data-testid="eu-download-button"]');
      if (originalButton) {
        originalButton.disabled = false;
        originalButton.textContent = 'Download Resume';
      }
    }
  };

  const handleDownloadDOCX = async () => {
    try {
      const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } = await import('docx');
      const { saveAs } = await import('file-saver');
      
      const originalButton = document.querySelector('[data-testid="eu-download-button"]');
      if (originalButton) {
        originalButton.disabled = true;
        originalButton.textContent = 'Generating DOCX...';
      }

      const children = [];

      if (resumeData?.profile) {
        children.push(
          new Paragraph({
            children: [
              new TextRun({
                text: resumeData.profile.name || 'Resume',
                bold: true,
                size: 32
              })
            ],
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER
          })
        );

        const contactInfo = [
          resumeData.profile.location,
          resumeData.profile.phone,
          resumeData.profile.email,
          resumeData.profile.linkedin,
          resumeData.profile.github
        ].filter(Boolean).join(' | ');

        if (contactInfo) {
          children.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: contactInfo,
                  size: 22
                })
              ],
              alignment: AlignmentType.CENTER
            })
          );
        }

        if (resumeData.profile.summary) {
          children.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: resumeData.profile.summary,
                  size: 24
                })
              ],
              spacing: { after: 400 }
            })
          );
        }
      }

      if (resumeData?.coreCompetencies?.length > 0) {
        children.push(
          new Paragraph({
            children: [
              new TextRun({
                text: 'Core Competencies',
                bold: true,
                size: 28
              })
            ],
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 }
          })
        );

        const competenciesText = resumeData.coreCompetencies
          .map(comp => comp.name || comp)
          .filter(Boolean)
          .join(' • ');

        if (competenciesText) {
          children.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: competenciesText,
                  size: 24
                })
              ],
              spacing: { after: 400 }
            })
          );
        }
      }

      if (resumeData?.professionalExperience?.length > 0) {
        children.push(
          new Paragraph({
            children: [
              new TextRun({
                text: 'Professional Experience',
                bold: true,
                size: 28
              })
            ],
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 }
          })
        );

        resumeData.professionalExperience.forEach(exp => {
          const titleText = exp.title ? `${exp.title}` : '';
          const companyText = exp.company ? ` at ${exp.company}` : '';
          const durationText = exp.duration ? ` (${exp.duration})` : '';
          
          children.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: `${titleText}${companyText}${durationText}`,
                  bold: true,
                  size: 26
                })
              ],
              spacing: { after: 100 }
            })
          );

          if (exp.description) {
            children.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: exp.description,
                    size: 24
                  })
                ],
                spacing: { after: 300 }
              })
            );
          }
        });
      }

      if (resumeData?.education?.length > 0) {
        children.push(
          new Paragraph({
            children: [
              new TextRun({
                text: 'Education',
                bold: true,
                size: 28
              })
            ],
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 }
          })
        );

        resumeData.education.forEach(edu => {
          const degreeText = edu.degree ? `${edu.degree}` : '';
          const schoolText = edu.school ? ` from ${edu.school}` : '';
          const durationText = edu.duration ? ` (${edu.duration})` : '';
          
          children.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: `${degreeText}${schoolText}${durationText}`,
                  bold: true,
                  size: 26
                })
              ],
              spacing: { after: 100 }
            })
          );

          if (edu.description) {
            children.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: edu.description,
                    size: 24
                  })
                ],
                spacing: { after: 300 }
              })
            );
          }
        });
      }

      if (resumeData?.keyProjects?.length > 0) {
        children.push(
          new Paragraph({
            children: [
              new TextRun({
                text: 'Key Projects',
                bold: true,
                size: 28
              })
            ],
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 }
          })
        );

        resumeData.keyProjects.forEach(project => {
          children.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: project.name || 'Project',
                  bold: true,
                  size: 26
                })
              ],
              spacing: { after: 100 }
            })
          );

          if (project.description) {
            children.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: project.description,
                    size: 24
                  })
                ],
                spacing: { after: 300 }
              })
            );
          }
        });
      }

      if (resumeData?.awards?.length > 0) {
        children.push(
          new Paragraph({
            children: [
              new TextRun({
                text: 'Awards & Recognition',
                bold: true,
                size: 28
              })
            ],
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 }
          })
        );

        resumeData.awards.forEach(award => {
          const awardText = award.title || '';
          const companyText = award.company ? ` - ${award.company}` : '';
          
          children.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: `${awardText}${companyText}`,
                  size: 24
                })
              ],
              spacing: { after: 200 }
            })
          );
        });
      }

      if (resumeData?.languages?.length > 0) {
        children.push(
          new Paragraph({
            children: [
              new TextRun({
                text: 'Languages',
                bold: true,
                size: 28
              })
            ],
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 }
          })
        );

        const languagesText = resumeData.languages
          .map(lang => lang.name || lang)
          .filter(Boolean)
          .join(', ');

        if (languagesText) {
          children.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: languagesText,
                  size: 24
                })
              ]
            })
          );
        }
      }

      const doc = new Document({
        sections: [{
          properties: {},
          children: children.length > 0 ? children : [
            new Paragraph({
              children: [
                new TextRun({
                  text: 'No resume data available',
                  size: 24
                })
              ]
            })
          ]
        }]
      });

      const buffer = await Packer.toBuffer(doc);
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
      saveAs(blob, `resume-${theme}-${Date.now()}.docx`);

      if (originalButton) {
        originalButton.disabled = false;
        originalButton.textContent = 'Download Resume';
      }

    } catch (error) {
      console.error('DOCX generation error:', error);
      alert('Failed to generate DOCX. Please try again or use the PDF option.');
      
      const originalButton = document.querySelector('[data-testid="eu-download-button"]');
      if (originalButton) {
        originalButton.disabled = false;
        originalButton.textContent = 'Download Resume';
      }
    }
  };

  return (
    <>
      <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
        <Container maxWidth="lg" disableGutters>
          <div data-resume-container="true">
            <Resume data={resumeData} theme={theme} />
          </div>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            p: 4,
            '@media print': {
              display: 'none !important'
            }
          }}>
            <Button
              variant="contained"
              startIcon={<Download />}
              endIcon={<ArrowDropDown />}
              onClick={handleDownloadMenuClick}
              data-testid="eu-download-button"
            >
              Download Resume
            </Button>
            <Menu
              anchorEl={downloadMenuAnchor}
              open={Boolean(downloadMenuAnchor)}
              onClose={handleDownloadMenuClose}
            >
              <MenuItem onClick={() => { handleDownloadMenuClose(); handleDownloadPDF(); }}>
                Download as PDF
              </MenuItem>
              <MenuItem onClick={() => { handleDownloadMenuClose(); handleDownloadDOCX(); }}>
                Download as DOCX
              </MenuItem>
            </Menu>
          </Box>
        </Container>
      </Box>
    </>
  );
}