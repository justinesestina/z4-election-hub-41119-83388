// Course to Department mapping
export const courseMapping: Record<string, string> = {
  // CCS - College of Computer Studies
  'BSIT': 'CCS',
  'BSCS': 'CCS',
  'BSIS': 'CCS',
  'BSEMC': 'CCS',
  
  // COE - College of Engineering
  'BSCpE': 'ENG',
  'BSEE': 'ENG',
  'BSCvE': 'ENG',
  'BSME': 'ENG',
  
  // CBA - College of Business and Accountancy
  'BSBA': 'BUS',
  'BSBA-FM': 'BUS',
  'BSBA-MM': 'BUS',
  'BSA': 'BUS',
  'BSMA': 'BUS',
  
  // CAS - College of Arts and Sciences
  'BAComm': 'ARTS',
  'BSPsych': 'ARTS',
  'BSBio': 'ARTS',
  'BSPolSci': 'ARTS',
  
  // CONHS - College of Nursing and Health Sciences
  'BSN': 'NURS',
  'BSPT': 'NURS',
  'BSPHAR': 'NURS',
  'BSMLS': 'NURS',
  
  // COED - College of Education
  'BSEd': 'EDUC',
  'BEEd': 'EDUC',
  'BPEd': 'EDUC',
  'BTLEd': 'EDUC',
};

// Available courses with full names
export const availableCourses = [
  // CCS
  { code: 'BSIT', name: 'Bachelor of Science in Information Technology', dept: 'CCS' },
  { code: 'BSCS', name: 'Bachelor of Science in Computer Science', dept: 'CCS' },
  { code: 'BSIS', name: 'Bachelor of Science in Information Systems', dept: 'CCS' },
  { code: 'BSEMC', name: 'Bachelor of Science in Entertainment and Multimedia Computing', dept: 'CCS' },
  
  // COE
  { code: 'BSCpE', name: 'Bachelor of Science in Computer Engineering', dept: 'COE' },
  { code: 'BSEE', name: 'Bachelor of Science in Electrical Engineering', dept: 'COE' },
  { code: 'BSCvE', name: 'Bachelor of Science in Civil Engineering', dept: 'COE' },
  { code: 'BSME', name: 'Bachelor of Science in Mechanical Engineering', dept: 'COE' },
  
  // CBA
  { code: 'BSBA', name: 'Bachelor of Science in Business Administration', dept: 'CBA' },
  { code: 'BSBA-FM', name: 'BSBA - Financial Management', dept: 'CBA' },
  { code: 'BSBA-MM', name: 'BSBA - Marketing Management', dept: 'CBA' },
  { code: 'BSA', name: 'Bachelor of Science in Accountancy', dept: 'CBA' },
  { code: 'BSMA', name: 'Bachelor of Science in Management Accounting', dept: 'CBA' },
  
  // CAS
  { code: 'BAComm', name: 'Bachelor of Arts in Communication', dept: 'CAS' },
  { code: 'BSPsych', name: 'Bachelor of Science in Psychology', dept: 'CAS' },
  { code: 'BSBio', name: 'Bachelor of Science in Biology', dept: 'CAS' },
  { code: 'BSPolSci', name: 'Bachelor of Science in Political Science', dept: 'CAS' },
  
  // CONHS
  { code: 'BSN', name: 'Bachelor of Science in Nursing', dept: 'CONHS' },
  { code: 'BSPT', name: 'Bachelor of Science in Physical Therapy', dept: 'CONHS' },
  { code: 'BSPHAR', name: 'Bachelor of Science in Pharmacy', dept: 'CONHS' },
  { code: 'BSMLS', name: 'Bachelor of Science in Medical Laboratory Science', dept: 'CONHS' },
  
  // COED
  { code: 'BSEd', name: 'Bachelor of Secondary Education', dept: 'COED' },
  { code: 'BEEd', name: 'Bachelor of Elementary Education', dept: 'COED' },
  { code: 'BPEd', name: 'Bachelor of Physical Education', dept: 'COED' },
  { code: 'BTLEd', name: 'Bachelor of Technology and Livelihood Education', dept: 'COED' },
];

export const mapCourseToDepartment = (courseCode: string): string | null => {
  return courseMapping[courseCode] || null;
};
