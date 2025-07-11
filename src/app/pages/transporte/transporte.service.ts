import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Transporte } from './transporte.model';
import { environment } from '../../../environments/environment';

interface CarrierDto {
  carrier:        string;
  destiny:        string;
  driver:         string;
  patent:         string;
  departureTime:  string;
  arrivalTime:    string;
  trackingNumber: string;
  status:         { id: number; name: string };
}

@Injectable({ providedIn: 'root' })
export class TransporteService {
  private readonly baseUrl = `${environment.apiUrl}/carriers`;

  constructor(private http: HttpClient) {}

  getTransportes(): Observable<Transporte[]> {
    return this.http.get<CarrierDto[]>(this.baseUrl).pipe(
      map(lst => lst.map((c, i): Transporte => ({
        residuo:       c.carrier,
        cantidad:      0,
        origen:        'Torre Residencial Norte',
        destino:       c.destiny,
        patente:       c.patent,
        fechaSalida:   c.departureTime,
        fechaLlegada:  c.arrivalTime,
        transportista: c.carrier,
        conductor:     c.driver,
        guia:          c.trackingNumber,
        estadoTexto:   c.status.name
      })))
    );
  }

  createTransporte(t: Transporte): Observable<Transporte> {
    const payload = {
      user:           { id: 1 },
      status:         { id: 1 },
      carrier:        t.transportista,
      destiny:        t.destino,
      driver:         t.conductor,
      patent:         t.patente,
      departureTime:  t.fechaSalida,
      arrivalTime:    t.fechaLlegada,
      trackingNumber: t.guia
    };
    return this.http.post<CarrierDto>(this.baseUrl, payload).pipe(
      map(c => ({
        residuo:       c.carrier,
        cantidad:      0,
        origen:        'Torre Residencial Norte',
        destino:       c.destiny,
        patente:       c.patent,
        fechaSalida:   c.departureTime,
        fechaLlegada:  c.arrivalTime,
        transportista: c.carrier,
        conductor:     c.driver,
        guia:          c.trackingNumber,
        estadoTexto:   c.status.name
      }))
    );
  }
}
