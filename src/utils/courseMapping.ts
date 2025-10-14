// Course to Department mapping for VoteNet25
export const courseMapping: Record<string, string> = {
  // CCS - College of Computer Studies
  'BSIT': 'CCS',
  'BSCS': 'CCS',
  'BSIS': 'CCS',
  
  // Nursing
  'BS Nursing': 'NURSING',
  
  // Psychology
  'BS Psychology': 'PSYCHOLOGY',
  
  // Engineering
  'BSME': 'ENGINEERING',
  'BSCpE': 'ENGINEERING',
  'BSEE': 'ENGINEERING',
  'BSCE': 'ENGINEERING',
  
  // Arts & Sciences
  'AB English': 'CAS',
  'AB Communication': 'CAS',
  'BS Biology': 'CAS',
  'BS Math': 'CAS',
  
  // Business Administration
  'BSBA': 'CBA',
  'BSA': 'CBA',
  'BSEntrep': 'CBA',
  'BSMktg': 'CBA',
  
  // Tourism and Hospitality
  'BSHM': 'CTHM',
  'BSTM': 'CTHM',
  
  // Criminology
  'BS Criminology': 'CRIMINOLOGY',
  'BSCRIM': 'CRIMINOLOGY',
  
  // Education
  'BEEd': 'EDUCATION',
  'BSEd': 'EDUCATION',
  'BPEd': 'EDUCATION',
  
  // Agriculture
  'BS Agriculture': 'AGRICULTURE',
  'Agribusiness': 'AGRICULTURE',
  'AgriTech': 'AGRICULTURE',
};

// Available courses grouped by department
export const availableCourses = [
  // CCS - College of Computer Studies
  { code: 'BSIT', name: 'Information Technology', dept: 'CCS' },
  { code: 'BSCS', name: 'Computer Science', dept: 'CCS' },
  { code: 'BSIS', name: 'Information Systems', dept: 'CCS' },
  
  // Nursing
  { code: 'BS Nursing', name: 'Nursing', dept: 'NURSING' },
  
  // Psychology
  { code: 'BS Psychology', name: 'Psychology', dept: 'PSYCHOLOGY' },
  
  // Engineering
  { code: 'BSME', name: 'Mechanical Engineering', dept: 'ENGINEERING' },
  { code: 'BSCpE', name: 'Computer Engineering', dept: 'ENGINEERING' },
  { code: 'BSEE', name: 'Electrical Engineering', dept: 'ENGINEERING' },
  { code: 'BSCE', name: 'Civil Engineering', dept: 'ENGINEERING' },
  
  // Arts & Sciences
  { code: 'AB English', name: 'English', dept: 'CAS' },
  { code: 'AB Communication', name: 'Communication', dept: 'CAS' },
  { code: 'BS Biology', name: 'Biology', dept: 'CAS' },
  { code: 'BS Math', name: 'Mathematics', dept: 'CAS' },
  
  // Business Administration
  { code: 'BSBA', name: 'Business Administration', dept: 'CBA' },
  { code: 'BSA', name: 'Accountancy', dept: 'CBA' },
  { code: 'BSEntrep', name: 'Entrepreneurship', dept: 'CBA' },
  { code: 'BSMktg', name: 'Marketing', dept: 'CBA' },
  
  // Tourism and Hospitality
  { code: 'BSHM', name: 'Hospitality Management', dept: 'CTHM' },
  { code: 'BSTM', name: 'Tourism Management', dept: 'CTHM' },
  
  // Criminology
  { code: 'BS Criminology', name: 'Criminology', dept: 'CRIMINOLOGY' },
  
  // Education
  { code: 'BEEd', name: 'Elementary Education', dept: 'EDUCATION' },
  { code: 'BSEd', name: 'Secondary Education', dept: 'EDUCATION' },
  { code: 'BPEd', name: 'Physical Education', dept: 'EDUCATION' },
  
  // Agriculture
  { code: 'BS Agriculture', name: 'Agriculture', dept: 'AGRICULTURE' },
  { code: 'Agribusiness', name: 'Agribusiness', dept: 'AGRICULTURE' },
  { code: 'AgriTech', name: 'Agricultural Technology', dept: 'AGRICULTURE' },
];

export const mapCourseToDepartment = (courseCode: string): string | null => {
  return courseMapping[courseCode] || null;
};
