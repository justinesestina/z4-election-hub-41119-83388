// Course to Department mapping
export const courseMapping: Record<string, string> = {
  // ARCH - Architecture & Design
  'BS Architecture': 'ARCH',
  'BS Interior Design': 'ARCH',
  
  // ARTS - Arts & Sciences
  'BA Communication': 'ARTS',
  'BA Political Science': 'ARTS',
  
  // BUS - Business Administration
  'BSBA': 'BUS',
  'BSEntrep': 'BUS',
  'BSHRM': 'BUS',
  
  // CCS - College of Computer Studies
  'BSIT': 'CCS',
  'BSCS': 'CCS',
  'BSIS': 'CCS',
  
  // EDUC - Education Department
  'BSEd English': 'EDUC',
  'BEEd': 'EDUC',
  
  // ENG - Engineering Department
  'BSCpE': 'ENG',
  'BSEE': 'ENG',
  'BSCE': 'ENG',
  'BSME': 'ENG',
  
  // NURS - Nursing / Health Sciences
  'BS Nursing': 'NURS',
  'BS Medical Technology': 'NURS',
  
  // PSYCH - Psychology Department
  'BSP': 'PSYCH',
};

// Available courses with full names
export const availableCourses = [
  // ARCH
  { code: 'BS Architecture', name: 'Bachelor of Science in Architecture', dept: 'ARCH' },
  { code: 'BS Interior Design', name: 'Bachelor of Science in Interior Design', dept: 'ARCH' },
  
  // ARTS
  { code: 'BA Communication', name: 'Bachelor of Arts in Communication', dept: 'ARTS' },
  { code: 'BA Political Science', name: 'Bachelor of Arts in Political Science', dept: 'ARTS' },
  
  // BUS
  { code: 'BSBA', name: 'Bachelor of Science in Business Administration', dept: 'BUS' },
  { code: 'BSEntrep', name: 'Bachelor of Science in Entrepreneurship', dept: 'BUS' },
  { code: 'BSHRM', name: 'Bachelor of Science in Hotel & Restaurant Management', dept: 'BUS' },
  
  // CCS
  { code: 'BSIT', name: 'Bachelor of Science in Information Technology', dept: 'CCS' },
  { code: 'BSCS', name: 'Bachelor of Science in Computer Science', dept: 'CCS' },
  { code: 'BSIS', name: 'Bachelor of Science in Information Systems', dept: 'CCS' },
  
  // EDUC
  { code: 'BSEd English', name: 'Bachelor of Secondary Education - English', dept: 'EDUC' },
  { code: 'BEEd', name: 'Bachelor of Elementary Education', dept: 'EDUC' },
  
  // ENG
  { code: 'BSCpE', name: 'Bachelor of Science in Computer Engineering', dept: 'ENG' },
  { code: 'BSEE', name: 'Bachelor of Science in Electrical Engineering', dept: 'ENG' },
  { code: 'BSCE', name: 'Bachelor of Science in Civil Engineering', dept: 'ENG' },
  { code: 'BSME', name: 'Bachelor of Science in Mechanical Engineering', dept: 'ENG' },
  
  // NURS
  { code: 'BS Nursing', name: 'Bachelor of Science in Nursing', dept: 'NURS' },
  { code: 'BS Medical Technology', name: 'Bachelor of Science in Medical Technology', dept: 'NURS' },
  
  // PSYCH
  { code: 'BSP', name: 'Bachelor of Science in Psychology', dept: 'PSYCH' },
];

export const mapCourseToDepartment = (courseCode: string): string | null => {
  return courseMapping[courseCode] || null;
};
