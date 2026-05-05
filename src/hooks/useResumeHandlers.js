import { useState } from 'react';

export const useResumeHandlers = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [resumeJsonData, setResumeJsonData] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    try {
      // Dynamic import to avoid SSR issues
      const html2canvas = (await import('html2canvas')).default;
      const jsPDF = (await import('jspdf')).jsPDF;
      
      // Find the resume element
      const resumeElement = document.querySelector('[data-resume-container="true"]') || 
                           document.querySelector('.MuiPaper-root') ||
                           document.querySelector('[role="document"]') ||
                           document.body;
      
      if (!resumeElement) {
        alert('Resume element not found. Please try again.');
        return;
      }

      // Show loading state
      const originalButton = document.querySelector('[data-testid="download-button"]');
      if (originalButton) {
        originalButton.disabled = true;
        originalButton.textContent = 'Generating PDF...';
      }

      // Capture the resume as canvas with optimized settings
      const canvas = await html2canvas(resumeElement, {
        scale: 2, // Increased scale for better quality and larger fonts
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: resumeElement.scrollWidth,
        height: resumeElement.scrollHeight,
        // Optimization options
        removeContainer: false,
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

      // Create PDF with compression
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true // Enable compression
      });

      // Use JPEG with lower quality for smaller file size
      const imgData = canvas.toDataURL('image/jpeg', 0.8); // 80% quality JPEG
      
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      // Add image to PDF
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add new pages if content exceeds one page
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Download PDF
      const fileName = `resume-${selectedTemplate}-${Date.now()}.pdf`;
      pdf.save(fileName);

      // Restore button state
      if (originalButton) {
        originalButton.disabled = false;
        originalButton.textContent = 'Download Resume';
      }

    } catch (error) {
      console.error('PDF generation error:', error);
      alert('Failed to generate PDF. Please try again or use the Print option.');
      
      // Restore button state
      const originalButton = document.querySelector('[data-testid="download-button"]');
      if (originalButton) {
        originalButton.disabled = false;
        originalButton.textContent = 'Download Resume';
      }
    }
  };

  const handleDownloadDOCX = async () => {
    try {
      // Dynamic import to avoid SSR issues
      const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } = await import('docx');
      const { saveAs } = await import('file-saver');
      
      // Show loading state
      const originalButton = document.querySelector('[data-testid="download-button"]');
      if (originalButton) {
        originalButton.disabled = true;
        originalButton.textContent = 'Generating DOCX...';
      }

      const children = [];

      // Profile Section
      if (resumeJsonData?.profile) {
        children.push(
          new Paragraph({
            children: [
              new TextRun({
                text: resumeJsonData.profile.name || 'Resume',
                bold: true,
                size: 32
              })
            ],
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER
          })
        );

        // Contact Info
        const contactInfo = [
          resumeJsonData.profile.location,
          resumeJsonData.profile.phone,
          resumeJsonData.profile.email,
          resumeJsonData.profile.linkedin,
          resumeJsonData.profile.github
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

        // Summary
        if (resumeJsonData.profile.summary) {
          children.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: resumeJsonData.profile.summary,
                  size: 24
                })
              ],
              spacing: { after: 400 }
            })
          );
        }
      }

      // Core Competencies Section
      if (resumeJsonData?.coreCompetencies?.length > 0) {
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

        const competenciesText = resumeJsonData.coreCompetencies
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

      // Professional Experience Section
      if (resumeJsonData?.professionalExperience?.length > 0) {
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

        resumeJsonData.professionalExperience.forEach(exp => {
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

      // Education Section
      if (resumeJsonData?.education?.length > 0) {
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

        resumeJsonData.education.forEach(edu => {
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

      // Key Projects Section
      if (resumeJsonData?.keyProjects?.length > 0) {
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

        resumeJsonData.keyProjects.forEach(project => {
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

      // Awards & Recognition Section
      if (resumeJsonData?.awards?.length > 0) {
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

        resumeJsonData.awards.forEach(award => {
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

      // Languages Section
      if (resumeJsonData?.languages?.length > 0) {
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

        const languagesText = resumeJsonData.languages
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

      // Create DOCX document
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

      // Generate and download DOCX
      const buffer = await Packer.toBuffer(doc);
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
      saveAs(blob, `resume-${selectedTemplate}-${Date.now()}.docx`);

      // Restore button state
      if (originalButton) {
        originalButton.disabled = false;
        originalButton.textContent = 'Download Resume';
      }

    } catch (error) {
      console.error('DOCX generation error:', error);
      alert('Failed to generate DOCX. Please try again or use the PDF option.');
      
      // Restore button state
      const originalButton = document.querySelector('[data-testid="download-button"]');
      if (originalButton) {
        originalButton.disabled = false;
        originalButton.textContent = 'Download Resume';
      }
    }
  };

  const handleDownloadJSON = () => {
    try {
      const dataStr = JSON.stringify(resumeJsonData, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `resume-${selectedTemplate}-${Date.now()}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      alert('Failed to download JSON. Please try again.');
    }
  };

  const handleDownloadSample = () => {
    const link = document.createElement('a');
    link.href = '/sample-resume-data.json';
    link.download = 'sample-resume-data.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = () => {
    setShowPreview(true);
  };

  const handleBackToEdit = () => {
    setShowPreview(false);
  };

  const handleTemplateChange = (templateId) => {
    setSelectedTemplate(templateId);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          setResumeJsonData(jsonData);
          setShowPreview(false);
        } catch (error) {
          alert('Invalid JSON file. Please upload a valid resume data JSON file.');
        }
      };
      reader.readAsText(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setUploadedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          setResumeJsonData(jsonData);
          setShowPreview(false);
        } catch (error) {
          alert('Invalid JSON file. Please upload a valid resume data JSON file.');
        }
      };
      reader.readAsText(file);
    }
  };

  const handleViewSample = async () => {
    try {
      const response = await fetch('/sample-resume-data.json');
      const sampleData = await response.json();
      setResumeJsonData(sampleData);
      setUploadedFile(null);
      setShowPreview(true);
    } catch (error) {
      alert('Failed to load sample resume data.');
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return {
    selectedTemplate,
    uploadedFile,
    resumeJsonData,
    showPreview,
    handlePrint,
    handleDownloadPDF,
    handleDownloadDOCX,
    handleDownloadJSON,
    handleDownloadSample,
    handlePreview,
    handleBackToEdit,
    handleTemplateChange,
    handleFileUpload,
    handleDrop,
    handleDragOver,
    handleViewSample,
    setSelectedTemplate,
    setUploadedFile,
    setResumeJsonData,
    setShowPreview
  };
};
