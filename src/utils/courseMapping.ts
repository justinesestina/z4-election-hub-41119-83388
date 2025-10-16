// Map course codes to their respective departments
export const courseMapping: Record<string, string> = {
  // CCS
  'BSIT': 'CCS',
  'BSCS': 'CCS',
  'BSIS': 'CCS',
  
  // Nursing
  'BS Nursing': 'BS Nursing',
  'Midwifery': 'BS Nursing',
  'Health Care Services': 'BS Nursing',
  
  // Psychology
  'BS Psychology': 'College of Psychology',
  'Behavioral Science': 'College of Psychology',
  
  // Engineering
  'BSCE': 'College of Engineering',
  'BSCpE': 'College of Engineering',
  'BSME': 'College of Engineering',
  'BSEE': 'College of Engineering',
  
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
  'BS Criminology': 'College of Criminology',
  'BS Forensic Science': 'College of Criminology',
  
  // Education
  'BEEd': 'College of Education',
  'BSEd': 'College of Education',
  
  // Agriculture
  'BS Agriculture': 'College of Agriculture',
  'BS Agribusiness': 'College of Agriculture',
};

// List of all available courses with their full names and departments
export const availableCourses = [
  // CCS
  { code: 'BSIT', name: 'Bachelor of Science in Information Technology', dept: 'CCS' },
  { code: 'BSCS', name: 'Bachelor of Science in Computer Science', dept: 'CCS' },
  { code: 'BSIS', name: 'Bachelor of Science in Information Systems', dept: 'CCS' },
  
  // Nursing
  { code: 'BS Nursing', name: 'Bachelor of Science in Nursing', dept: 'BS Nursing' },
  { code: 'Midwifery', name: 'Midwifery', dept: 'BS Nursing' },
  { code: 'Health Care Services', name: 'Health Care Services', dept: 'BS Nursing' },
  
  // Psychology
  { code: 'BS Psychology', name: 'Bachelor of Science in Psychology', dept: 'College of Psychology' },
  { code: 'Behavioral Science', name: 'Behavioral Science', dept: 'College of Psychology' },
  
  // Engineering
  { code: 'BSCE', name: 'Bachelor of Science in Civil Engineering', dept: 'College of Engineering' },
  { code: 'BSCpE', name: 'Bachelor of Science in Computer Engineering', dept: 'College of Engineering' },
  { code: 'BSME', name: 'Bachelor of Science in Mechanical Engineering', dept: 'College of Engineering' },
  { code: 'BSEE', name: 'Bachelor of Science in Electrical Engineering', dept: 'College of Engineering' },
  
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
  { code: 'BS Criminology', name: 'Bachelor of Science in Criminology', dept: 'College of Criminology' },
  { code: 'BS Forensic Science', name: 'Bachelor of Science in Forensic Science', dept: 'College of Criminology' },
  
  // Education
  { code: 'BEEd', name: 'Bachelor of Elementary Education', dept: 'College of Education' },
  { code: 'BSEd', name: 'Bachelor of Secondary Education', dept: 'College of Education' },
  
  // Agriculture
  { code: 'BS Agriculture', name: 'Bachelor of Science in Agriculture', dept: 'College of Agriculture' },
  { code: 'BS Agribusiness', name: 'Bachelor of Science in Agribusiness', dept: 'College of Agriculture' },
];

export const mapCourseToDepartment = (courseCode: string): string | null => {
  return courseMapping[courseCode] || null;
};
