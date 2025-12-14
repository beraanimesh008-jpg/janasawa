export enum CardType {
  AADHAAR = 'Aadhaar Card',
  VOTER = 'Voter ID',
  PAN = 'PAN Card',
  RATION = 'Ration Card'
}

export enum RequestStatus {
  PENDING = 'Pending',
  IN_PROGRESS = 'In Progress',
  APPROVED = 'Approved',
  REJECTED = 'Rejected'
}

export interface CustomerDetails {
  fullName: string;
  mobile: string;
  village: string;
  address: string;
}

export interface ServiceRequest {
  id: string;
  cardType: CardType;
  problemType: string;
  customer: CustomerDetails;
  additionalDetails: Record<string, string>; // Stores card-specific fields like Father Name, Guardian, etc.
  status: RequestStatus;
  createdAt: string; // ISO Date string
  updatedAt: string;
}

export interface FormFieldConfig {
  key: string;
  label: string;
  type: 'text' | 'date' | 'select' | 'textarea';
  options?: string[];
  placeholder?: string;
}

// Problem types available for each card
export const CARD_PROBLEM_TYPES: Record<CardType, string[]> = {
  [CardType.AADHAAR]: [
    'Name Correction',
    'Date of Birth Update',
    'Address Change',
    'Father’s Name Correction',
    'Update Biometric',
    'Transfer'
  ],
  [CardType.VOTER]: [
    'Name Correction',
    'Date of Birth Update',
    'Address Change',
    'Guardian Name Update',
    'Photo Update',
    'Mobile Link'
  ],
  [CardType.PAN]: [
    'Name Correction',
    'Father Name Correction',
    'Address Update',
    'Photo and Signature Update',
    'Lost PAN Card Recovery'
  ],
  [CardType.RATION]: [
    'Name Correction',
    'Date of Birth Update',
    'Address Change',
    'Father Name Correction',
    'Head of Family Change',
    'New Ration Card Apply'
  ]
};

// Specific fields required per card type (in addition to common fields)
export const CARD_SPECIFIC_FIELDS: Record<CardType, FormFieldConfig[]> = {
  [CardType.AADHAAR]: [
    { key: 'fatherName', label: "Father's Name", type: 'text', placeholder: "Enter father's name" },
    { key: 'dob', label: "Date of Birth", type: 'date' },
  ],
  [CardType.VOTER]: [
    { key: 'guardianName', label: "Guardian Name", type: 'text', placeholder: "Enter guardian name" },
    { key: 'dob', label: "Date of Birth", type: 'date' },
    { key: 'epicNumber', label: "EPIC/Voter Number", type: 'text', placeholder: "XYZ1234567" },
  ],
  [CardType.PAN]: [
    { key: 'fatherName', label: "Father's Name", type: 'text', placeholder: "Enter father's name" },
    { key: 'panNumber', label: "Existing PAN Number (if any)", type: 'text', placeholder: "ABCDE1234F" },
  ],
  [CardType.RATION]: [
    { key: 'fatherName', label: "Father's Name", type: 'text', placeholder: "Enter father's name" },
    { key: 'dob', label: "Date of Birth", type: 'date' },
    { key: 'headOfFamily', label: "Head of Family Name", type: 'text', placeholder: "Current Head of Family" },
  ]
};