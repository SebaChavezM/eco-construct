export interface CreateInventory {
  quantity: number;
  unit: string;
  value: number;
  item: { id: number };
  workSite: { id: number };
}
