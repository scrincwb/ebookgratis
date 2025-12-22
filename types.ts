
export interface ShoppingTip {
  title: string;
  description: string;
  icon: string;
}

export enum AppState {
  LANDING = 'LANDING',
  CHAT = 'CHAT'
}

/**
 * Interface representing the lead information collected from the user.
 * This is used in LeadForm.tsx.
 */
export interface UserLead {
  name: string;
  email: string;
  whatsapp: string;
}
