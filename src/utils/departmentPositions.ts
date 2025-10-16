// Standard 10 positions for all departments
const STANDARD_POSITIONS = [
  'President',
  'Vice President',
  'Secretary',
  'Treasurer',
  'Auditor',
  'PIO',
  'Business Manager',
  'Representative',
  'Senator',
  'Governor'
];

export const DEPARTMENT_POSITIONS: Record<string, string[]> = {
  'CCS': STANDARD_POSITIONS,
  'BS Nursing': STANDARD_POSITIONS,
  'College of Psychology': STANDARD_POSITIONS,
  'College of Engineering': STANDARD_POSITIONS,
  'CAS': STANDARD_POSITIONS,
  'CBA': STANDARD_POSITIONS,
  'CTHM': STANDARD_POSITIONS,
  'College of Criminology': STANDARD_POSITIONS,
  'College of Education': STANDARD_POSITIONS,
  'College of Agriculture': STANDARD_POSITIONS,
};

// Helper function to get positions for a department
export const getPositionsForDepartment = (department: string): string[] => {
  return DEPARTMENT_POSITIONS[department] || STANDARD_POSITIONS;
};
