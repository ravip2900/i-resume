// Import all data from individual files
import { avatarData } from './avatarData.js';
import { awardsData } from './awardsRecognitionData.js';
import { contactInfo } from './contactInfo.js';
import { coreCompetencies } from './coreCompetenciesData.js';
import { educationData } from './educationData.js';
import { keyProjectsData } from './keyProjectsData.js';
import { languagesData } from './languagesData.js';
import { professionalExperiences } from './professionalExperienceData.js';
import { profileContent } from './profileContent.js';

// Consolidated resume data object
export const resumeData = {
  profile: profileContent,
  avatar: avatarData,
  contact: contactInfo,
  coreCompetencies: coreCompetencies,
  professionalExperience: professionalExperiences,
  education: educationData,
  awards: awardsData,
  languages: languagesData,
  keyProjects: keyProjectsData
};
