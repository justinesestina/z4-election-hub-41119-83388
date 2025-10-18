// Department positions mapped by short_code from database
export const DEPARTMENT_POSITIONS: Record<string, string[]> = {
  'CCS': [
    'President',
    'Vice President',
    'Programming Head',
    'Network Lead',
    'Systems Analyst',
    'IT Coordinator',
    'Project Manager',
    'Security Lead'
  ],
  'NURSING': [
    'President',
    'Vice President',
    'Head Nurse',
    'Clinical Coordinator',
    'Ward Supervisor',
    'Training Officer',
    'Patient Care Lead',
    'Shift Manager'
  ],
  'PSYCHOLOGY': [
    'President',
    'Vice President',
    'Research Coordinator',
    'Clinical Affairs Head',
    'Counseling Lead',
    'Assessment Officer',
    'Mental Health Advocate',
    'Behavioral Studies Head'
  ],
  'ENGINEERING': [
    'President',
    'Vice President',
    'Chief Engineer',
    'Design Lead',
    'Project Supervisor',
    'Technical Coordinator',
    'Quality Assurance Head',
    'Safety Officer'
  ],
  'CAS': [
    'President',
    'Vice President',
    'Academic Affairs Head',
    'Research Coordinator',
    'Cultural Affairs Lead',
    'Publications Officer',
    'Science Division Head',
    'Humanities Lead'
  ],
  'CBA': [
    'President',
    'Vice President',
    'Finance Head',
    'Marketing Lead',
    'Operations Manager',
    'Business Development Officer',
    'Accounting Supervisor',
    'Entrepreneurship Coordinator'
  ],
  'CTHM': [
    'President',
    'Vice President',
    'Tourism Affairs Head',
    'Hospitality Coordinator',
    'Events Manager',
    'Culinary Arts Lead',
    'Front Office Supervisor',
    'Travel Operations Head'
  ],
  'CRIMINOLOGY': [
    'President',
    'Vice President',
    'Investigation Head',
    'Security Coordinator',
    'Legal Affairs Officer',
    'Forensics Lead',
    'Law Enforcement Liaison',
    'Public Safety Head'
  ],
  'EDUCATION': [
    'President',
    'Vice President',
    'Teaching Methods Head',
    'Curriculum Coordinator',
    'Student Affairs Lead',
    'Educational Technology Officer',
    'Practicum Supervisor',
    'Literacy Program Head'
  ],
  'AGRICULTURE': [
    'President',
    'Vice President',
    'Crop Production Head',
    'Livestock Coordinator',
    'Agricultural Research Lead',
    'Farm Operations Manager',
    'Agribusiness Officer',
    'Sustainability Head'
  ],
};

// Helper function to get positions for a department
export const getPositionsForDepartment = (department: string): string[] => {
  return DEPARTMENT_POSITIONS[department] || [];
};
