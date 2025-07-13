export interface Carrier {
  id: number;
  carrier: string;
}

export interface Item {
  id: number;
  name: string;
  unit: string;
}

export interface WorkSite {
  id: number;
  name: string;
}

export interface InventoryItemPayload {
  item: { id: number };
  quantity: number;
}

export interface RegistroResiduos {
  workSiteId:        number;
  inventoryStatusId: number;
  carrierId:         number;
  comments:          string;
  items:             InventoryItemPayload[];
  photos?:           File[];
  transporteId?:     number;
}

export interface Transporte {
  id: number;
  driver: string;
  destiny: string;
  estadoTexto: string;
  fechaLlegada: string;
  fechaSalida: string;
  trackingNumber: string;
  origen: string;
  patent: string;
  residuo: string;
  carrier: string;
  cantidad: number;
  items: {
    item: {
      id: number;
      name: string;
      reference: string;
    };
    quantity: number;
    unit: string;
  }[];
}

