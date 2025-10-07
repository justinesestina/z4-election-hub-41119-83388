// Course to Department mapping
export const courseMapping: Record<string, string> = {
  // CCS - College of Computer Studies
  'it': 'CCS',
  'information technology': 'CCS',
  'computer science': 'CCS',
  'cs': 'CCS',
  'bsit': 'CCS',
  'bscs': 'CCS',
  
  // Psychology
  'psychology': 'PSYCH',
  'psych': 'PSYCH',
  'ab psychology': 'PSYCH',
  'bs psychology': 'PSYCH',
  
  // Business Administration
  'business administration': 'BUS',
  'business admin': 'BUS',
  'bba': 'BUS',
  'accountancy': 'BUS',
  'accounting': 'BUS',
  'bsa': 'BUS',
  'management': 'BUS',
  
  // Education
  'elementary education': 'EDUC',
  'secondary education': 'EDUC',
  'education': 'EDUC',
  'beed': 'EDUC',
  'bsed': 'EDUC',
  'teaching': 'EDUC',
  
  // Engineering
  'civil engineering': 'ENG',
  'mechanical engineering': 'ENG',
  'electrical engineering': 'ENG',
  'engineering': 'ENG',
  'bsce': 'ENG',
  'bsme': 'ENG',
  'bsee': 'ENG',
  
  // Nursing / Health Sciences
  'nursing': 'NURS',
  'bsn': 'NURS',
  'health sciences': 'NURS',
  'midwifery': 'NURS',
  
  // Arts & Sciences
  'liberal arts': 'ARTS',
  'ba': 'ARTS',
  'bsc': 'ARTS',
  'arts and sciences': 'ARTS',
  'communication': 'ARTS',
  'english': 'ARTS',
  'mathematics': 'ARTS',
  'biology': 'ARTS',
  
  // Architecture & Design
  'architecture': 'ARCH',
  'bs architecture': 'ARCH',
  'interior design': 'ARCH',
  'landscape architecture': 'ARCH',
};

export const mapCourseToDepartment = (course: string): string | null => {
  const normalizedCourse = course.toLowerCase().trim();
  return courseMapping[normalizedCourse] || null;
};

export const getDepartmentSuggestions = (course: string): string[] => {
  const normalizedCourse = course.toLowerCase().trim();
  const suggestions: string[] = [];
  
  Object.entries(courseMapping).forEach(([key, dept]) => {
    if (key.includes(normalizedCourse) && !suggestions.includes(dept)) {
      suggestions.push(dept);
    }
  });
  
  return suggestions;
};
