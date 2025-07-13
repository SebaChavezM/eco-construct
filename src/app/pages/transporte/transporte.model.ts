export interface Transporte {
  id: number;
  residuo: string;
  cantidad: number;
  origen: string;
  destino: string;
  patente: string;
  fechaSalida: string;
  fechaLlegada: string;
  transportista: string;
  conductor: string;
  guia: string;
  estadoTexto: string;

  items?: {
    item: { id: number };
    quantity: number;
    unit: string;
  }[];
}
