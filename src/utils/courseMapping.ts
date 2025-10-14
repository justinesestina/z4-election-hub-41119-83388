// Course to Department mapping for VoteNet25
export const courseMapping: Record<string, string> = {
  // CCS - College of Computer Studies
  'BSIT': 'CCS',
  'BSCS': 'CCS',
  'BSIS': 'CCS',
  
  // BSED - Bachelor of Secondary Education
  'BSEd': 'BSED',
  'BSEd English': 'BSED',
  'BSEd Math': 'BSED',
  'BSEd Science': 'BSED',
  
  // BEED - Bachelor of Elementary Education
  'BEEd': 'BEED',
  
  // BSBA - Business Administration
  'BSBA': 'BSBA',
  'BSA': 'BSBA',
  'BSEntrep': 'BSBA',
  'BSMktg': 'BSBA',
  
  // BSIT - Information Technology (Different from CCS)
  'BS IT': 'BSIT',
  
  // BSCRIM - Criminology
  'BS Criminology': 'BSCRIM',
  'BSCRIM': 'BSCRIM',
  
  // BSHM - Hospitality Management
  'BSHM': 'BSHM',
  
  // BSTM - Tourism Management
  'BSTM': 'BSTM',
};

// Available courses grouped by department
export const availableCourses = [
  // CCS - College of Computer Studies
  { code: 'BSIT', name: 'Information Technology', dept: 'CCS' },
  { code: 'BSCS', name: 'Computer Science', dept: 'CCS' },
  { code: 'BSIS', name: 'Information Systems', dept: 'CCS' },
  
  // BSED - Bachelor of Secondary Education
  { code: 'BSEd', name: 'Secondary Education', dept: 'BSED' },
  { code: 'BSEd English', name: 'Secondary Education - English', dept: 'BSED' },
  { code: 'BSEd Math', name: 'Secondary Education - Mathematics', dept: 'BSED' },
  { code: 'BSEd Science', name: 'Secondary Education - Science', dept: 'BSED' },
  
  // BEED - Bachelor of Elementary Education
  { code: 'BEEd', name: 'Elementary Education', dept: 'BEED' },
  
  // BSBA - Business Administration
  { code: 'BSBA', name: 'Business Administration', dept: 'BSBA' },
  { code: 'BSA', name: 'Accountancy', dept: 'BSBA' },
  { code: 'BSEntrep', name: 'Entrepreneurship', dept: 'BSBA' },
  { code: 'BSMktg', name: 'Marketing', dept: 'BSBA' },
  
  // BSIT - Information Technology (Separate Dept)
  { code: 'BS IT', name: 'Information Technology', dept: 'BSIT' },
  
  // BSCRIM - Criminology
  { code: 'BS Criminology', name: 'Criminology', dept: 'BSCRIM' },
  
  // BSHM - Hospitality Management
  { code: 'BSHM', name: 'Hospitality Management', dept: 'BSHM' },
  
  // BSTM - Tourism Management
  { code: 'BSTM', name: 'Tourism Management', dept: 'BSTM' },
];

export const mapCourseToDepartment = (courseCode: string): string | null => {
  return courseMapping[courseCode] || null;
};
