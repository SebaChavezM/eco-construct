export interface WorkSite {
  id: number;
  name: string;
  address: string;
  user: {
    id: number;
    name: string;
    company: string;
    biography: string;
  };
  workSiteType: {
    id: number;
    name: string;
  };
  workSiteStatus: {
    id: number;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface CreateWorkSite {
  name: string;
  address: string;
  user: { id: number };
  workSiteType: { id: 1 };
  workSiteStatus: { id: 1 };
}