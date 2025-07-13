import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventory } from './inventory.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class InventoryService {
  private readonly baseUrl = `${environment.apiUrl}/inventories`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.baseUrl);
  }

  getById(id: number): Observable<Inventory> {
    return this.http.get<Inventory>(`${this.baseUrl}/${id}`);
  }

  create(inventory: Inventory): Observable<Inventory> {
    return this.http.post<Inventory>(this.baseUrl, inventory);
  }

  update(id: number, inventory: Inventory): Observable<Inventory> {
    return this.http.put<Inventory>(`${this.baseUrl}/${id}`, inventory);
  }

  updateStatus(id: number, statusId: number): Observable<Inventory> {
    return this.http.patch<Inventory>(`${this.baseUrl}/${id}/status/${statusId}`, {});
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
