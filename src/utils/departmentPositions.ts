export const DEPARTMENT_POSITIONS: Record<string, string[]> = {
  'CCS': [
    'President',
    'Vice President',
    'Technical Director',
    'Systems Coordinator',
    'Programming Lead',
    'Database Administrator',
    'Network Manager',
    'Cybersecurity Officer',
    'UI/UX Designer Representative',
    'Research and Innovation Head'
  ],
  'BS Nursing': [
    'President',
    'Vice President',
    'Clinical Coordinator',
    'Ward Supervisor',
    'Community Outreach Head',
    'Health Education Officer',
    'Skills Lab Representative',
    'Patient Care Advocate',
    'Research and Training Head',
    'Safety and Sanitation Officer'
  ],
  'College of Psychology': [
    'President',
    'Vice President',
    'Research and Assessment Head',
    'Mental Health Advocate',
    'Counseling Coordinator',
    'Psychometrics Representative',
    'Community Program Director',
    'Laboratory Supervisor',
    'Organizational Behavior Officer',
    'Seminar and Events Coordinator'
  ],
  'College of Engineering': [
    'President',
    'Vice President',
    'Project Design Manager',
    'Structural Development Head',
    'CAD Specialist Representative',
    'Laboratory and Equipment Officer',
    'Safety and Compliance Head',
    'Innovation and Robotics Lead',
    'Field Operations Coordinator',
    'Technical Documentation Officer'
  ],
  'CAS': [
    'President',
    'Vice President',
    'Creative Director',
    'Publication Head',
    'Research and Humanities Officer',
    'Cultural Affairs Coordinator',
    'Science and Innovation Representative',
    'Debate and Literary Leader',
    'Performing Arts Officer',
    'Academic Affairs Head'
  ],
  'CBA': [
    'President',
    'Vice President',
    'Marketing Head',
    'Finance Officer',
    'Entrepreneurship Coordinator',
    'Public Relations Officer',
    'Logistics and Operations Manager',
    'Product Development Lead',
    'Corporate Affairs Representative',
    'Audit and Compliance Officer'
  ],
  'CTHM': [
    'President',
    'Vice President',
    'Events and Planning Head',
    'Food and Beverage Coordinator',
    'Travel Operations Supervisor',
    'Hotel Management Officer',
    'Tourism Promotion Head',
    'Front Office Representative',
    'Customer Relations Officer',
    'Cultural Affairs Coordinator'
  ],
  'College of Criminology': [
    'President',
    'Vice President',
    'Forensic Science Coordinator',
    'Law Enforcement Head',
    'Investigation Officer',
    'Security and Safety Supervisor',
    'Community Policing Advocate',
    'Crime Prevention Officer',
    'Evidence Management Head',
    'Physical Training Leader'
  ],
  'College of Education': [
    'President',
    'Vice President',
    'Academic Affairs Head',
    'Curriculum Development Officer',
    'Student Teaching Coordinator',
    'Research and Extension Head',
    'Guidance and Counseling Representative',
    'Literacy Advocate',
    'Co-Curricular Activities Leader',
    'Evaluation and Assessment Officer'
  ],
  'College of Agriculture': [
    'President',
    'Vice President',
    'Crop Management Head',
    'Animal Science Coordinator',
    'Research and Extension Officer',
    'Farm Operations Manager',
    'Sustainability and Environment Advocate',
    'Agricultural Technology Specialist',
    'Community Development Officer',
    'Marketing and Production Coordinator'
  ]
};

// Helper function to get positions for a department
export const getPositionsForDepartment = (department: string): string[] => {
  return DEPARTMENT_POSITIONS[department] || [];
};
