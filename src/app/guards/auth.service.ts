import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { UserProfile } from '../pages/perfil/user-profile.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private msalService: MsalService) {}

  getActiveAccount() {
    return this.msalService.instance.getActiveAccount();
  }

getUserProfile(): UserProfile | null {
  const account = this.getActiveAccount();
  if (account && account.idTokenClaims) {
    const claims = account.idTokenClaims as any;

    return {
      id: -1,
      fullName: claims['name'] ?? '',
      email: claims['emails']?.[0] ?? claims['email'] ?? '',
      role: claims['role'] ?? 'Operador',
      phone: claims['phone_number'] ?? '',
      position: claims['position'] ?? '',
      company: claims['company'] ?? '',
      location: claims['location'] ?? 'Chile',
      biography: claims['bio'] ?? '',
      avatarUrl: claims['picture'] ?? 'https://via.placeholder.com/120',
      username: claims['preferred_username'] ?? claims['unique_name'] ?? ''
    };
  }
  return null;
}

}
