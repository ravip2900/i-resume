import { useState } from 'react';

export const useResumeHandlers = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [resumeJsonData, setResumeJsonData] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const handlePrint = () => {
    window.print();
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
