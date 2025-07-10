import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';
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

  createRegistro(registro: RegistroResiduos): Observable<any> {
    const payload = {
      workSite:        { id: registro.workSiteId },
      inventoryStatus: { id: registro.inventoryStatusId },
      carrier:         { id: registro.carrierId },
      comments:        registro.comments,
      items:           registro.items
    };
    return this.http.post(this.inventoriesUrl, payload);
  }
}
