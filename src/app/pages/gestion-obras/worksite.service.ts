import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateWorkSite, WorkSite } from './obra.model';

@Injectable({ providedIn: 'root' })
export class WorkSiteService {
  private readonly apiUrl = 'http://74.249.29.180:8080/api/worksites';

  constructor(private http: HttpClient) {}

  getAll(): Observable<WorkSite[]> {
    return this.http.get<WorkSite[]>(this.apiUrl);
  }

  getById(id: number): Observable<WorkSite> {
    return this.http.get<WorkSite>(`${this.apiUrl}/${id}`);
  }

  create(obra: CreateWorkSite): Observable<WorkSite> {
    return this.http.post<WorkSite>(this.apiUrl, obra);
  }

  update(id: number, obra: WorkSite): Observable<WorkSite> {
    return this.http.put<WorkSite>(`${this.apiUrl}/${id}`, obra);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
