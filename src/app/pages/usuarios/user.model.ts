export interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  position?: string;
  company?: string;
  address?: string;
  biography?: string;
  fullName?: string;
  name: string; 
  state?: string;
  projects?: number;
  lastAccess?: string;
  password?: string;
}