import { PublicClientApplication, InteractionType } from '@azure/msal-browser';
import { MsalGuardConfiguration, MsalInterceptorConfiguration } from '@azure/msal-angular';
import { environment } from '../environments/environment'; 

export const msalInstance = new PublicClientApplication({
  auth: {
    clientId: '89954608-cf12-4719-8792-5468ad42cbfd',
    authority: 'https://pinoliso.b2clogin.com/pinoliso.onmicrosoft.com/B2C_1_login',
    redirectUri: `${environment.baseUrl}/dashboard/`,
    knownAuthorities: ['pinoliso.b2clogin.com'],
  },
});

export const msalGuardConfig: MsalGuardConfiguration = {
  interactionType: InteractionType.Redirect,
  authRequest: {
    scopes: ['openid', 'profile', 'https://pinoliso.onmicrosoft.com/api/user.read'],
  },
};

export const msalInterceptorConfig: MsalInterceptorConfiguration = {
  interactionType: InteractionType.Redirect,
  protectedResourceMap: new Map([
    [`${environment.apiUrl}/api`, ['https://pinoliso.onmicrosoft.com/api/user.read']],
  ]),
};
