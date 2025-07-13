export interface Inventory {
  id?: number;
  workSite: {
    id: number;
    name?: string;
  };
  carrier: {
    id: number;
    carrier?: string;
  };
  inventoryStatus: {
    id: number;
    name?: string;
  };
  conductor?: string;
  responsable?: string;
  patente?: string;
  guia?: string;
  transporte?: {
    id: number;
  };
  items: {
    item: {
      id: number;
      name?: string;
      reference?: string;
    };
    quantity: number;
    unit: string;
  }[];
  comments?: string;
  createdAt?: string;
  updatedAt?: string;
}
