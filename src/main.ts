// src/main.ts
import { bootstrapApplication }      from '@angular/platform-browser';
import { provideAnimations }         from '@angular/platform-browser/animations';
import { importProvidersFrom }       from '@angular/core';
import { BrowserModule }             from '@angular/platform-browser';
import { BrowserAnimationsModule }   from '@angular/platform-browser/animations';
import { ToastrModule }              from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideRouter }             from '@angular/router';

import { App }        from './app/app';
import { routes }     from './app/app.routes';
import { AuthInterceptor } from './app/auth-interceptor';

import {
  MSAL_INSTANCE,
  MSAL_GUARD_CONFIG,
  MSAL_INTERCEPTOR_CONFIG,
  MsalService,
  MsalGuard,
  MsalInterceptor,
  MsalBroadcastService
} from '@azure/msal-angular';
import {
  msalInstance,
  msalGuardConfig,
  msalInterceptorConfig
} from './app/msal.config';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

msalInstance.initialize().then(() => {
  bootstrapApplication(App, {
    providers: [
      provideHttpClient(withInterceptorsFromDi()),
      provideRouter(routes),
      provideAnimations(),
      importProvidersFrom(
        BrowserAnimationsModule,
        ToastrModule.forRoot({
          positionClass: 'toast-top-right',
          timeOut: 3000,
          closeButton: true,
          progressBar: true,
          tapToDismiss: false,
          easeTime: 300
        })
      ),
      // MSAL y demás:
      {
        provide: MSAL_INSTANCE,
        useValue: msalInstance,
      },
      {
        provide: MSAL_GUARD_CONFIG,
        useValue: msalGuardConfig,
      },
      {
        provide: MSAL_INTERCEPTOR_CONFIG,
        useValue: msalInterceptorConfig,
      },
      { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true },
      MsalService,
      MsalGuard,
      MsalBroadcastService,
    ]
  }).catch(err => console.error(err));
});
