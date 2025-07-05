// src/main.ts
import { bootstrapApplication }      from '@angular/platform-browser';
import { provideAnimations }         from '@angular/platform-browser/animations';
import { importProvidersFrom }       from '@angular/core';
import { BrowserModule }             from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideRouter }             from '@angular/router';

import { App }        from './app/app';
import { routes }     from './app/app.routes';
import { AuthInterceptor } from './app/auth-interceptor';

bootstrapApplication(App, {
  providers: [
    provideAnimations(),
    provideRouter(routes),

    // módulos angular "clásicos"
    importProvidersFrom(
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
    ),

    // aquí metemos el interceptor
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
.catch(err => console.error(err));
