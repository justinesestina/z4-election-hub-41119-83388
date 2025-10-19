// Map course codes to their respective departments
export const courseMapping: Record<string, string> = {
  // CCS
  'BSIT': 'CCS',
  'BSCS': 'CCS',
  'BSIS': 'CCS',
  
  // Nursing
  'BS Nursing': 'NURSING',
  'Midwifery': 'NURSING',
  'Health Care Services': 'NURSING',
  
  // Psychology
  'BS Psychology': 'PSYCHOLOGY',
  'Behavioral Science': 'PSYCHOLOGY',
  
  // Engineering
  'BSCE': 'ENGINEERING',
  'BSCpE': 'ENGINEERING',
  'BSME': 'ENGINEERING',
  'BSEE': 'ENGINEERING',
  
  // Arts & Sciences
  'AB English': 'CAS',
  'AB Communication': 'CAS',
  'BS Biology': 'CAS',
  'BS Math': 'CAS',
  
  // Business Administration
  'BSBA Marketing': 'CBA',
  'BSBA Finance': 'CBA',
  'BSBA HRM': 'CBA',
  'BS Accountancy': 'CBA',
  'BS Entrepreneurship': 'CBA',
  
  // Tourism & Hospitality
  'BSHM': 'CTHM',
  'BSTM': 'CTHM',
  
  // Criminology
  'BS Criminology': 'CRIMINOLOGY',
  'BS Forensic Science': 'CRIMINOLOGY',
  
  // Education
  'BEEd': 'EDUCATION',
  'BSEd': 'EDUCATION',
  
  // Agriculture
  'BS Agriculture': 'AGRICULTURE',
  'BS Agribusiness': 'AGRICULTURE',
};

// List of all available courses with their full names and departments
export const availableCourses = [
  // CCS
  { code: 'BSIT', name: 'Bachelor of Science in Information Technology', dept: 'CCS' },
  { code: 'BSCS', name: 'Bachelor of Science in Computer Science', dept: 'CCS' },
  { code: 'BSIS', name: 'Bachelor of Science in Information Systems', dept: 'CCS' },
  
  // Nursing
  { code: 'BS Nursing', name: 'Bachelor of Science in Nursing', dept: 'NURSING' },
  { code: 'Midwifery', name: 'Midwifery', dept: 'NURSING' },
  { code: 'Health Care Services', name: 'Health Care Services', dept: 'NURSING' },
  
  // Psychology
  { code: 'BS Psychology', name: 'Bachelor of Science in Psychology', dept: 'PSYCHOLOGY' },
  { code: 'Behavioral Science', name: 'Behavioral Science', dept: 'PSYCHOLOGY' },
  
  // Engineering
  { code: 'BSCE', name: 'Bachelor of Science in Civil Engineering', dept: 'ENGINEERING' },
  { code: 'BSCpE', name: 'Bachelor of Science in Computer Engineering', dept: 'ENGINEERING' },
  { code: 'BSME', name: 'Bachelor of Science in Mechanical Engineering', dept: 'ENGINEERING' },
  { code: 'BSEE', name: 'Bachelor of Science in Electrical Engineering', dept: 'ENGINEERING' },
  
  // Arts & Sciences
  { code: 'AB English', name: 'Bachelor of Arts in English', dept: 'CAS' },
  { code: 'AB Communication', name: 'Bachelor of Arts in Communication', dept: 'CAS' },
  { code: 'BS Biology', name: 'Bachelor of Science in Biology', dept: 'CAS' },
  { code: 'BS Math', name: 'Bachelor of Science in Mathematics', dept: 'CAS' },
  
  // Business Administration
  { code: 'BSBA Marketing', name: 'Bachelor of Science in Business Administration - Marketing', dept: 'CBA' },
  { code: 'BSBA Finance', name: 'Bachelor of Science in Business Administration - Finance', dept: 'CBA' },
  { code: 'BSBA HRM', name: 'Bachelor of Science in Business Administration - HRM', dept: 'CBA' },
  { code: 'BS Accountancy', name: 'Bachelor of Science in Accountancy', dept: 'CBA' },
  { code: 'BS Entrepreneurship', name: 'Bachelor of Science in Entrepreneurship', dept: 'CBA' },
  
  // Tourism & Hospitality
  { code: 'BSHM', name: 'Bachelor of Science in Hospitality Management', dept: 'CTHM' },
  { code: 'BSTM', name: 'Bachelor of Science in Tourism Management', dept: 'CTHM' },
  
  // Criminology
  { code: 'BS Criminology', name: 'Bachelor of Science in Criminology', dept: 'CRIMINOLOGY' },
  { code: 'BS Forensic Science', name: 'Bachelor of Science in Forensic Science', dept: 'CRIMINOLOGY' },
  
  // Education
  { code: 'BEEd', name: 'Bachelor of Elementary Education', dept: 'EDUCATION' },
  { code: 'BSEd', name: 'Bachelor of Secondary Education', dept: 'EDUCATION' },
  
  // Agriculture
  { code: 'BS Agriculture', name: 'Bachelor of Science in Agriculture', dept: 'AGRICULTURE' },
  { code: 'BS Agribusiness', name: 'Bachelor of Science in Agribusiness', dept: 'AGRICULTURE' },
];

export const mapCourseToDepartment = (courseCode: string): string | null => {
  return courseMapping[courseCode] || null;
};
