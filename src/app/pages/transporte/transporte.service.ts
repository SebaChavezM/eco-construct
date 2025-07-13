import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Transporte } from './transporte.model';
import { Residuo } from './residuo.model';
import { environment } from '../../../environments/environment';

interface CarrierDto {
  id: number;
  carrier: string;
  destiny: string;
  driver: string;
  patent: string;
  departureTime: string;
  arrivalTime: string;
  trackingNumber: string;
  status: { id: number; name: string };
  items: {
    item: { id: number; name: string; reference: string; removalThreshold: number };
    quantity: number;
    unit: string;
  }[];
}

@Injectable({ providedIn: 'root' })
export class TransporteService {
  private readonly baseUrl = `${environment.apiUrl}/carriers`;

  constructor(private http: HttpClient) {}

  private toTransporte(c: CarrierDto): Transporte {
    const firstItem = c.items?.[0];

    return {
      id: c.id,
      residuo: firstItem?.item.name ?? 'Desconocido',
      cantidad: firstItem?.quantity ?? 0,
      origen: 'Bodegas EcoConstruct',
      destino: c.destiny,
      patente: c.patent,
      fechaSalida: c.departureTime,
      fechaLlegada: c.arrivalTime,
      transportista: c.carrier,
      conductor: c.driver,
      guia: c.trackingNumber,
      estadoTexto: c.status.name,
      items: c.items ?? []
    };
  }

  getTransportes(): Observable<Transporte[]> {
    return this.http.get<CarrierDto[]>(this.baseUrl)
      .pipe(map(list => list.map(this.toTransporte)));
  }

  createTransporte(t: Transporte): Observable<Transporte> {
    const payload = {
      user: { id: 1 },
      status: { id: 1 },
      carrier: t.transportista,
      destiny: t.destino,
      driver: t.conductor,
      patent: t.patente,
      departureTime: t.fechaSalida,
      arrivalTime: t.fechaLlegada,
      trackingNumber: t.guia,
      items: t.items ?? []
    };

    console.log('Payload enviado al backend (servicio):', payload);

    return this.http.post<CarrierDto>(this.baseUrl, payload)
      .pipe(map(this.toTransporte));
  }

  updateTransporte(t: Transporte): Observable<Transporte> {
    const url = `${this.baseUrl}/${t.id}`;
    const payload = {
      user: { id: 1 },
      status: { id: 1 },
      carrier:  t.transportista,
      destiny: t.destino,
      driver: t.conductor,
      patent: t.patente,
      departureTime: t.fechaSalida,
      arrivalTime: t.fechaLlegada,
      trackingNumber: t.guia
    };
    return this.http.put<CarrierDto>(url, payload)
      .pipe(map(this.toTransporte));
  }

  getResiduos(): Observable<Residuo[]> {
    return this.http.get<Residuo[]>(`${environment.apiUrl}/items`);
  }

}
