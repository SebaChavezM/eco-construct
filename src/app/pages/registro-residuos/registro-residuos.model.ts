export interface Carrier {
  id: number;
  carrier: string;
}

export interface Item {
  id: number;
  name: string;
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
}
