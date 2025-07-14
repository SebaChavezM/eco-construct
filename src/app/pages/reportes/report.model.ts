export interface ReportStats {
  totalGenerado: number;
  reciclado: number;
  eficienciaGlobal: number;
  obrasActivas: number;
}

export interface MonthlyReport {
  mes: string;
  generado: number;
  reciclado: number;
  tratado: number;
}

export interface TipoResiduoDistribucion {
  tipo: string;
  cantidad: number;
}
