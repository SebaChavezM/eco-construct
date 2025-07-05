// src/app/auth.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // aquí recuperas tu token (puede que lo guardes en localStorage)
    const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE3NTE2Nzc2NzUsIm5iZiI6MTc1MTY3NDA3NSwidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly9waW5vbGlzby5iMmNsb2dpbi5jb20vNTRiNjQ3MDMtNWNhZS00NWNmLTg4NTItZWU2MWNiNmQyNWY4L3YyLjAvIiwic3ViIjoiNWIyOTc5YmQtNGQ2Zi00ZTI2LWE5ZTYtMDliZDI5NDQ1NTI5IiwiYXVkIjoiODk5NTQ2MDgtY2YxMi00NzE5LTg3OTItNTQ2OGFkNDJjYmZkIiwibm9uY2UiOiJkZWZhdWx0Tm9uY2UiLCJpYXQiOjE3NTE2NzQwNzUsImF1dGhfdGltZSI6MTc1MTY3NDA3NSwiZ2l2ZW5fbmFtZSI6IlNlYmFzdGlhbiIsImZhbWlseV9uYW1lIjoiTXVzcmUiLCJ0ZnAiOiJCMkNfMV9sb2dpbiJ9.dnKaRU3krOtVMlLbqXKcMfJRc3hHZCXXPdvzI5tTY19MF9kFH03qHA-p1ezX8IKuZDzuvcu2MDaL-Qn5DeMqoJWN38JRd6AqLawQBQkHhWqBUC7IvILVQwsJS0Qs8InyszSTZXIJ-LcMLoztUqU_jHsPlDAfNeiN6QYofFz7Kv4ShRo_jS1Edc48Iru7tjHPZP24gIuSakoIwxhESuv8iCrFUit958sHgYdSoHIIypRWpGytF3y2h0rBNVK69qxt06P9lrZGF4o7pk7DAJClLM93r2fjaNjJDKAZ9vLsh7kPL-M0m2bUR-daLmE0Hb9OgxUGqIw2PEFwY1EURuX3yQ'; // o localStorage.getItem('jwtToken')!

    // clonar la petición para añadir el header
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next.handle(authReq);
  }
}
