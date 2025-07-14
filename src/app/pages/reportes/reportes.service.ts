import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ReportStats, MonthlyReport, TipoResiduoDistribucion } from './report.model';

@Injectable({ providedIn: 'root' })
export class ReportesService {
  private invUrl = `${environment.apiUrl}/inventories`;
  private wsUrl = `${environment.apiUrl}/worksites`;
  private carUrl = `${environment.apiUrl}/carriers`;
  private itemUrl = `${environment.apiUrl}/items`;

  constructor(private http: HttpClient) {}

  getResumenStats(): Observable<ReportStats> {
    return forkJoin({
      inventarios: this.http.get<any[]>(this.invUrl),
      obras: this.http.get<any[]>(this.wsUrl),
    }).pipe(
      map(({ inventarios, obras }) => {
        const totalGenerado = inventarios.reduce((sum, inv) => sum + (inv.totalGenerado || 0), 0);
        const reciclado = inventarios.reduce((sum, inv) => sum + (inv.totalReciclado || 0), 0);
        const eficienciaGlobal = totalGenerado ? (reciclado / totalGenerado) * 100 : 0;
        const obrasActivas = obras.length;

        return {
          totalGenerado,
          reciclado,
          eficienciaGlobal: parseFloat(eficienciaGlobal.toFixed(2)),
          obrasActivas
        };
      })
    );
  }

  getDistribucionTipos(): Observable<TipoResiduoDistribucion[]> {
    return this.http.get<any[]>(this.itemUrl).pipe(
      map(items => {
        const agrupados: { [tipo: string]: number } = {};
        items.forEach(item => {
          agrupados[item.tipoResiduo] = (agrupados[item.tipoResiduo] || 0) + item.cantidad;
        });
        return Object.entries(agrupados).map(([tipo, cantidad]) => ({ tipo, cantidad }));
      })
    );
  }

  getDatosMensuales(): Observable<MonthlyReport[]> {
    return this.http.get<any[]>(this.invUrl).pipe(
      map(inventarios => {
        const mensual = new Map<string, MonthlyReport>();

        inventarios.forEach(inv => {
          const fecha = new Date(inv.fechaRegistro);
          const mes = fecha.toLocaleString('default', { month: 'short' });

          const generado = inv.totalGenerado || 0;
          const reciclado = inv.totalReciclado || 0;
          const tratado = inv.totalTratado || 0;

          if (!mensual.has(mes)) {
            mensual.set(mes, { mes, generado: 0, reciclado: 0, tratado: 0 });
          }

          const entry = mensual.get(mes)!;
          entry.generado += generado;
          entry.reciclado += reciclado;
          entry.tratado += tratado;
        });

        return Array.from(mensual.values());
      })
    );
  }
}
