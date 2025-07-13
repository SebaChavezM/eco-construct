import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';
import { Transporte } from './registro-residuos.model';
import { environment } from '../../../environments/environment';

import {
  Carrier,
  Item,
  WorkSite,
  RegistroResiduos
} from './registro-residuos.model';

@Injectable({ providedIn: 'root' })
export class RegistroResiduosService {
  private readonly carriersUrl     = `${environment.apiUrl}/carriers`;
  private readonly itemsUrl        = `${environment.apiUrl}/items`;
  private readonly workSitesUrl    = `${environment.apiUrl}/worksites`;
  private readonly inventoriesUrl  = `${environment.apiUrl}/inventories`;

  constructor(private http: HttpClient) {}

  getCarriers(): Observable<Carrier[]> {
    return this.http.get<Carrier[]>(this.carriersUrl);
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl);
  }

  getWorkSites(): Observable<WorkSite[]> {
    return this.http.get<WorkSite[]>(this.workSitesUrl);
  }

  getTransportes(): Observable<Transporte[]> {
    return this.http.get<Transporte[]>(`${environment.apiUrl}/carriers`);
  }

  createRegistro(registro: RegistroResiduos,
                conductor: string,
                responsable: string,
                patente: string,
                guia: string,
                unidad: string): Observable<any> {
    const payload = {
      workSite:        { id: registro.workSiteId },
      inventoryStatus: { id: registro.inventoryStatusId },
      carrier:         { id: registro.carrierId },
      transporte:      registro.transporteId ? { id: registro.transporteId } : undefined,
      comments:        registro.comments,
      conductor,
      responsable,
      patente,
      guia,
      items: registro.items.map(i => ({
        item: { id: i.item.id },
        quantity: i.quantity,
        unit: unidad
      }))
    };

    console.log('Payload enviado al backend:', payload);

    return this.http.post(this.inventoriesUrl, payload);
  }

  getRegistros(): Observable<RegistroResiduos[]> {
    return this.http.get<RegistroResiduos[]>(this.inventoriesUrl);
  }

}
