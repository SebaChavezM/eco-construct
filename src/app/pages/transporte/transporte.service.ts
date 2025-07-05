import { Injectable }      from '@angular/core';
import { HttpClient }      from '@angular/common/http';
import { Observable }      from 'rxjs';
import { Transporte }      from './transporte';

@Injectable({ providedIn: 'root' })
export class TransporteService {
  private base = 'http://74.249.29.180:8080/api/carriers';

  constructor(private http: HttpClient) {}

  getTransportes(): Observable<Transporte[]> {
    return this.http.get<Transporte[]>(this.base);
  }

  createTransporte(t: Transporte): Observable<Transporte> {
    const payload = {
      user: { id: 1 },
      status: { id: 1 },
      carrier: t.transportista,
      destiny: t.obra,
      driver: t.conductor,
      patent: t.patente,
      departureTime: t.fechaSalida,
      arrivalTime: t.fechaLlegada,
      trackingNumber: t.guia
    };
    return this.http.post<Transporte>(this.base, payload);
  }
}
