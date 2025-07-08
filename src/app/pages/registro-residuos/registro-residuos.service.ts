import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';

import {
  Carrier,
  Item,
  WorkSite,
  RegistroResiduos
} from './registro-residuos.model';

@Injectable({ providedIn: 'root' })
export class RegistroResiduosService {
  private readonly carriersUrl     = 'http://74.249.29.180:8080/api/carriers';
  private readonly itemsUrl        = 'http://74.249.29.180:8080/api/items';
  private readonly workSitesUrl    = 'http://74.249.29.180:8080/api/worksites';
  private readonly inventoriesUrl  = 'http://74.249.29.180:8080/api/inventories';

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
