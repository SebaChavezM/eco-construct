import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { UserProfile } from '../pages/perfil/user-profile.model';
import { MsalService } from '@azure/msal-angular';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly apiUrl = `${environment.apiUrl}/users/me`;

  constructor(private http: HttpClient, private msalService: MsalService ) {}

  getUserProfile(): Observable<UserProfile> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<any>(this.apiUrl, { headers }).pipe(
      map((data) => {
        return {
          id: data.id,
          username: data.username,
          fullName: data.name,
          email: data.email,
          role: data.role,
          phone: '',
          position: data.position,
          company: data.company,
          location: data.address,
          biography: data.biography,
          avatarUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' // tu imagen por defecto
        } as UserProfile;
      })
    );
  }

  logout(): void {
    const activeAccount = this.msalService.instance.getActiveAccount();
    this.msalService.logoutRedirect({
      account: activeAccount!,
      postLogoutRedirectUri: '/login'
    });
  }

}