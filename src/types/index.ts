export interface Department {
  id: string;
  short_code: string;
  name: string;
  icon_name: string;
  color_hex: string;
}

export interface Candidate {
  id: string;
  department: string;
  position: string;
  candidate_name: string;
  year_level?: string;
}

export interface Verification {
  student_id: string;
  name: string;
  course: string;
  department: string;
  device_id?: string;
}

export interface Vote {
  department: string;
  position: string;
  candidate_name: string;
  student_id: string;
  device_id?: string;
}

export const POSITIONS = [
  'President',
  'Vice President',
  'Secretary',
  'Treasurer',
  'Auditor',
  'PIO',
  'Business Manager',
  'Representative',
] as const;

export type Position = typeof POSITIONS[number];
