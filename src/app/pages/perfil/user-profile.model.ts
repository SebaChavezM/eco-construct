export interface UserProfile {
  id: number;
  username: string;
  fullName: string;
  email: string;
  phone?: string;
  position?: string;
  company?: string;
  location?: string;
  biography?: string;
  avatarUrl?: string;
  role: string;
}
