// Course to Department mapping
export const courseMapping: Record<string, string> = {
  // ARCH - Architecture & Design
  'BS Architecture': 'ARCH',
  'BS Interior Design': 'ARCH',
  
  // ARTS - Arts & Sciences
  'BA Communication': 'ARTS',
  'BA Political Science': 'ARTS',
  'BS Psychology (Non-Health)': 'ARTS',
  
  // BUS - Business Administration
  'BS Business Administration': 'BUS',
  'BS Accountancy': 'BUS',
  'BS Management Accounting': 'BUS',
  
  // CCS - College of Computer Studies
  'BS Information Technology': 'CCS',
  'BS Computer Science': 'CCS',
  'BS Information Systems': 'CCS',
  
  // EDUC - Education Department
  'BSEd English': 'EDUC',
  'BSEd Mathematics': 'EDUC',
  'BEEd General Education': 'EDUC',
  
  // ENG - Engineering Department
  'BS Civil Engineering': 'ENG',
  'BS Electrical Engineering': 'ENG',
  'BS Mechanical Engineering': 'ENG',
  
  // NURS - Nursing / Health Sciences
  'BS Nursing': 'NURS',
  'BS Medical Technology': 'NURS',
  
  // PSYCH - Psychology Department
  'BS Psychology': 'PSYCH',
};

// Available courses with full names
export const availableCourses = [
  // ARCH - Architecture & Design
  { code: 'BS Architecture', name: 'Architecture', dept: 'ARCH' },
  { code: 'BS Interior Design', name: 'Interior Design', dept: 'ARCH' },
  
  // ARTS - Arts & Sciences
  { code: 'BA Communication', name: 'Communication', dept: 'ARTS' },
  { code: 'BA Political Science', name: 'Political Science', dept: 'ARTS' },
  { code: 'BS Psychology (Non-Health)', name: 'Psychology (Non-Health)', dept: 'ARTS' },
  
  // BUS - Business Administration
  { code: 'BS Business Administration', name: 'Business Administration (Marketing/HR/Finance)', dept: 'BUS' },
  { code: 'BS Accountancy', name: 'Accountancy', dept: 'BUS' },
  { code: 'BS Management Accounting', name: 'Management Accounting', dept: 'BUS' },
  
  // CCS - College of Computer Studies
  { code: 'BS Information Technology', name: 'Information Technology', dept: 'CCS' },
  { code: 'BS Computer Science', name: 'Computer Science', dept: 'CCS' },
  { code: 'BS Information Systems', name: 'Information Systems', dept: 'CCS' },
  
  // EDUC - Education Department
  { code: 'BSEd English', name: 'Secondary Education - English', dept: 'EDUC' },
  { code: 'BSEd Mathematics', name: 'Secondary Education - Mathematics', dept: 'EDUC' },
  { code: 'BEEd General Education', name: 'Elementary Education - General', dept: 'EDUC' },
  
  // ENG - Engineering Department
  { code: 'BS Civil Engineering', name: 'Civil Engineering', dept: 'ENG' },
  { code: 'BS Electrical Engineering', name: 'Electrical Engineering', dept: 'ENG' },
  { code: 'BS Mechanical Engineering', name: 'Mechanical Engineering', dept: 'ENG' },
  
  // NURS - Nursing / Health Sciences
  { code: 'BS Nursing', name: 'Nursing', dept: 'NURS' },
  { code: 'BS Medical Technology', name: 'Medical Technology', dept: 'NURS' },
  
  // PSYCH - Psychology Department
  { code: 'BS Psychology', name: 'Psychology', dept: 'PSYCH' },
];

export const mapCourseToDepartment = (courseCode: string): string | null => {
  return courseMapping[courseCode] || null;
};
