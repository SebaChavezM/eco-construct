import "./chunk-4GGTZY57.js";
import {
  FormsModule,
  init_forms
} from "./chunk-RXE7CZMX.js";
import {
  ActivatedRoute,
  Router,
  RouterModule,
  init_router
} from "./chunk-KRNNV56Y.js";
import {
  CommonModule,
  Location,
  init_common
} from "./chunk-6UT3FXKQ.js";
import "./chunk-4APSURWT.js";
import {
  BehaviorSubject,
  Component,
  DOCUMENT,
  EMPTY,
  FactoryTarget,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  NgModule,
  Optional,
  ReplaySubject,
  Subject,
  TestBed,
  __decorate,
  catchError,
  concatMap,
  core_exports,
  filter,
  from,
  init_core,
  init_esm,
  init_operators,
  init_testing,
  init_tslib_es6,
  map,
  of,
  switchMap,
  take,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-JRJ6XPFD.js";
import {
  __async,
  __commonJS,
  __esm,
  __export,
  __spreadProps,
  __spreadValues,
  __superGet
} from "./chunk-SR4DERTU.js";

// angular:jit:template:src\app\pages\perfil\perfil.html
var perfil_default;
var init_perfil = __esm({
  "angular:jit:template:src\\app\\pages\\perfil\\perfil.html"() {
    perfil_default = '<div class="d-flex vh-100 overflow-hidden">\r\n\r\n<aside class="sidebar text-white flex-shrink-0 p-3" style="width:240px">\r\n  <div class="d-flex align-items-center mb-4">\r\n    <i class="bi bi-leaf-fill fs-4 me-2"></i>\r\n    <span class="h5 mb-0">EcoConstruct</span>\r\n  </div>\r\n\r\n  <nav class="nav flex-column">\r\n\r\n    <small class="text-uppercase text-white-50 mb-2">Principal</small>\r\n\r\n    <a\r\n      routerLink="/dashboard"\r\n      routerLinkActive="active"\r\n      [routerLinkActiveOptions]="{ exact: true }"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-speedometer2 me-2"></i>\r\n      Dashboard\r\n    </a>\r\n\r\n    <a\r\n      routerLink="/gestion-obras"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-building me-2"></i>\r\n      Gesti\xF3n de Obras\r\n    </a>\r\n\r\n    <a\r\n      routerLink="/registro-residuos"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-card-checklist me-2"></i>\r\n      Registro de Residuos\r\n    </a>\r\n\r\n    <a\r\n      routerLink="/transporte"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-truck me-2"></i>\r\n      Transporte\r\n    </a>\r\n\r\n    <a\r\n      routerLink="/inventario"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-box-seam me-2"></i>\r\n      Inventario\r\n    </a>\r\n\r\n    <a\r\n      routerLink="/historial-trazabilidad"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-clock-history me-2"></i>\r\n      Historial y Trazabilidad\r\n    </a>\r\n\r\n    <a\r\n      routerLink="/reportes"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-bar-chart me-2"></i>\r\n      Reportes\r\n    </a>\r\n\r\n    <hr class="border-light">\r\n\r\n    <small class="text-uppercase text-white-50 mb-2">Sistema</small>\r\n    <a\r\n      routerLink="/perfil"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-person-circle me-2"></i>\r\n      Perfil\r\n    </a>\r\n          <a routerLink="/usuarios"\r\n         routerLinkActive="active"\r\n         class="nav-link text-white mt-2">\r\n        <i class="bi bi-people me-2"></i>Usuarios\r\n    </a>\r\n    <a\r\n      href="#"\r\n      (click)="logout()"\r\n      class="nav-link text-white mt-2"\r\n    >\r\n      <i class="bi bi-box-arrow-right me-2"></i>\r\n      Cerrar Sesi\xF3n\r\n    </a>\r\n  </nav>\r\n</aside>\r\n\r\n  <main class="flex-grow-1 overflow-auto p-4">\r\n    <!-- Header -->\r\n    <div class="d-flex justify-content-between align-items-center mb-4">\r\n      <div>\r\n        <h2 class="h3 mb-1">Perfil de Usuario</h2>\r\n        <small class="text-muted">Gestiona tu informaci\xF3n personal y configuraci\xF3n de cuenta</small>\r\n      </div>\r\n      <button class="btn btn-success">\r\n        <i class="bi bi-pencil me-1"></i>Editar Perfil\r\n      </button>\r\n    </div>\r\n\r\n    <div class="row gx-4 gy-4">\r\n\r\n      <div class="col-12 col-lg-8">\r\n        <div class="card mb-4 shadow-sm">\r\n          <div class="card-body">\r\n            <h5 class="mb-3">\r\n              <i class="bi bi-person-circle me-2"></i>Informaci\xF3n Personal\r\n            </h5>\r\n            <small class="text-muted">\r\n              Datos b\xE1sicos de tu cuenta en EcoConstruct\r\n            </small>\r\n\r\n            <div class="d-flex align-items-center mt-4 mb-3">\r\n              <img\r\n                [src]="user.avatarUrl"\r\n                alt="Avatar"\r\n                class="rounded-circle border me-4"\r\n                width="80"\r\n                height="80"\r\n              />\r\n              <div>\r\n                <div class="fw-bold fs-5">{{ user.fullName }}</div>\r\n                <div class="text-muted small mb-2">{{ user.email }}</div>\r\n                <span class="badge bg-success bg-opacity-10 text-success">\r\n                  {{ user.role }}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <hr/>\r\n\r\n            <form class="row g-3">\r\n              <div class="col-6">\r\n                <label class="form-label">Nombre Completo</label>\r\n                <input\r\n                  type="text"\r\n                  class="form-control"\r\n                  [value]="user.fullName"\r\n                  readonly\r\n                />\r\n              </div>\r\n              <div class="col-6">\r\n                <label class="form-label">Email</label>\r\n                <input\r\n                  type="email"\r\n                  class="form-control"\r\n                  [value]="user.email"\r\n                  readonly\r\n                />\r\n              </div>\r\n              <div class="col-6">\r\n                <label class="form-label">Tel\xE9fono</label>\r\n                <input\r\n                  type="text"\r\n                  class="form-control"\r\n                  [value]="user.phone"\r\n                  readonly\r\n                />\r\n              </div>\r\n              <div class="col-6">\r\n                <label class="form-label">Cargo</label>\r\n                <input\r\n                  type="text"\r\n                  class="form-control"\r\n                  [value]="user.position"\r\n                  readonly\r\n                />\r\n              </div>\r\n              <div class="col-6">\r\n                <label class="form-label">Empresa</label>\r\n                <input\r\n                  type="text"\r\n                  class="form-control"\r\n                  [value]="user.company"\r\n                  readonly\r\n                />\r\n              </div>\r\n              <div class="col-6">\r\n                <label class="form-label">Ubicaci\xF3n</label>\r\n                <input\r\n                  type="text"\r\n                  class="form-control"\r\n                  [value]="user.location"\r\n                  readonly\r\n                />\r\n              </div>\r\n              <div class="col-12">\r\n                <label class="form-label">Biograf\xEDa</label>\r\n                <textarea\r\n                  class="form-control"\r\n                  rows="3"\r\n                  readonly\r\n                ></textarea>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="col-12 col-lg-4">\r\n\r\n        <div class="card mb-4 shadow-sm">\r\n          <div class="card-body">\r\n            <h5 class="mb-3">\r\n              <i class="bi bi-bar-chart-line me-2"></i>Estad\xEDsticas\r\n            </h5>\r\n            <ul class="list-unstyled mb-0">\r\n              <li *ngFor="let s of stats" class="d-flex justify-content-between">\r\n                <span>{{ s.label }}</span>\r\n                <strong>{{ s.value }}</strong>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="card mb-4 shadow-sm">\r\n          <div class="card-body">\r\n            <h5 class="mb-3">\r\n              <i class="bi bi-clock-history me-2"></i>Actividad Reciente\r\n            </h5>\r\n            <ul class="list-unstyled mb-0">\r\n              <li *ngFor="let a of activities" class="mb-3">\r\n                <div class="fw-semibold">{{ a.title }}</div>\r\n                <small class="text-muted d-block">{{ a.description }}</small>\r\n                <small class="text-muted">{{ a.date }}</small>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="card mb-4 shadow-sm">\r\n          <div class="card-body">\r\n            <h5 class="mb-3">\r\n              <i class="bi bi-envelope me-2"></i>Informaci\xF3n de Contacto\r\n            </h5>\r\n            <p class="mb-2"><i class="bi bi-envelope me-1"></i>{{ user.email }}</p>\r\n            <p class="mb-2"><i class="bi bi-telephone me-1"></i>{{ user.phone }}</p>\r\n            <p class="mb-2"><i class="bi bi-geo-alt me-1"></i>{{ user.location }}</p>\r\n            <p class="mb-0"><i class="bi bi-building me-1"></i>{{ user.company }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </main>\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\pages\perfil\perfil.css
var perfil_default2;
var init_perfil2 = __esm({
  "angular:jit:style:src\\app\\pages\\perfil\\perfil.css"() {
    perfil_default2 = "/* src/app/pages/perfil/perfil.css */\n.sidebar {\n  width: 240px;\n  background-color: #16a249;\n  color: white;\n  padding: 2rem 1rem;\n  display: flex;\n  flex-direction: column;\n}\n.logo-icon {\n  font-size: 1.5rem;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 2rem;\n}\n.brand-name {\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.nav-section {\n  flex: 1;\n}\n.nav-section-title {\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  opacity: 0.7;\n  margin: 1rem 0 0.5rem;\n}\n.nav-link {\n  color: white;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.25rem 0;\n  text-decoration: none;\n  transition: opacity .2s;\n}\n.nav-link.active,\n.nav-link:hover {\n  opacity: 0.8;\n}\n.card-body h5 {\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding: .375rem .75rem;\n  margin-bottom: 0;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: .25rem;\n}\n.avatar-placeholder,\n.rounded-circle {\n  object-fit: cover;\n}\nh2.h3 {\n  font-size: 1.75rem;\n  font-weight: 600;\n}\n/*# sourceMappingURL=perfil.css.map */\n";
  }
});

// node_modules/@azure/msal-common/dist/utils/Constants.mjs
var Constants, OIDC_DEFAULT_SCOPES, OIDC_SCOPES, AADAuthorityConstants, AUTHORITY_METADATA_CONSTANTS;
var init_Constants = __esm({
  "node_modules/@azure/msal-common/dist/utils/Constants.mjs"() {
    "use strict";
    Constants = {
      LIBRARY_NAME: "MSAL.JS",
      SKU: "msal.js.common",
      // Prefix for all library cache entries
      CACHE_PREFIX: "msal",
      // default authority
      DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/",
      DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com",
      DEFAULT_COMMON_TENANT: "common",
      // ADFS String
      ADFS: "adfs",
      DSTS: "dstsv2",
      // Default AAD Instance Discovery Endpoint
      AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=",
      // CIAM URL
      CIAM_AUTH_URL: ".ciamlogin.com",
      AAD_TENANT_DOMAIN_SUFFIX: ".onmicrosoft.com",
      // Resource delimiter - used for certain cache entries
      RESOURCE_DELIM: "|",
      // Placeholder for non-existent account ids/objects
      NO_ACCOUNT: "NO_ACCOUNT",
      // Claims
      CLAIMS: "claims",
      // Consumer UTID
      CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad",
      // Default scopes
      OPENID_SCOPE: "openid",
      PROFILE_SCOPE: "profile",
      OFFLINE_ACCESS_SCOPE: "offline_access",
      EMAIL_SCOPE: "email",
      CODE_GRANT_TYPE: "authorization_code",
      RT_GRANT_TYPE: "refresh_token",
      S256_CODE_CHALLENGE_METHOD: "S256",
      URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8",
      AUTHORIZATION_PENDING: "authorization_pending",
      NOT_DEFINED: "not_defined",
      EMPTY_STRING: "",
      NOT_APPLICABLE: "N/A",
      NOT_AVAILABLE: "Not Available",
      FORWARD_SLASH: "/",
      IMDS_ENDPOINT: "http://169.254.169.254/metadata/instance/compute/location",
      IMDS_VERSION: "2020-06-01",
      IMDS_TIMEOUT: 2e3,
      AZURE_REGION_AUTO_DISCOVER_FLAG: "TryAutoDetect",
      REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX: "login.microsoft.com",
      KNOWN_PUBLIC_CLOUDS: [
        "login.microsoftonline.com",
        "login.windows.net",
        "login.microsoft.com",
        "sts.windows.net"
      ],
      SHR_NONCE_VALIDITY: 240,
      INVALID_INSTANCE: "invalid_instance"
    };
    OIDC_DEFAULT_SCOPES = [
      Constants.OPENID_SCOPE,
      Constants.PROFILE_SCOPE,
      Constants.OFFLINE_ACCESS_SCOPE
    ];
    OIDC_SCOPES = [...OIDC_DEFAULT_SCOPES, Constants.EMAIL_SCOPE];
    AADAuthorityConstants = {
      COMMON: "common",
      ORGANIZATIONS: "organizations",
      CONSUMERS: "consumers"
    };
    AUTHORITY_METADATA_CONSTANTS = {
      CACHE_KEY: "authority-metadata",
      REFRESH_TIME_SECONDS: 3600 * 24
      // 24 Hours
    };
  }
});

// node_modules/@azure/msal-common/dist/error/AuthErrorCodes.mjs
var unexpectedError, postRequestFailed;
var init_AuthErrorCodes = __esm({
  "node_modules/@azure/msal-common/dist/error/AuthErrorCodes.mjs"() {
    "use strict";
    unexpectedError = "unexpected_error";
    postRequestFailed = "post_request_failed";
  }
});

// node_modules/@azure/msal-common/dist/error/AuthError.mjs
var AuthErrorMessages, AuthErrorMessage, AuthError;
var init_AuthError = __esm({
  "node_modules/@azure/msal-common/dist/error/AuthError.mjs"() {
    "use strict";
    init_Constants();
    init_AuthErrorCodes();
    AuthErrorMessages = {
      [unexpectedError]: "Unexpected error in authentication.",
      [postRequestFailed]: "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details."
    };
    AuthErrorMessage = {
      unexpectedError: {
        code: unexpectedError,
        desc: AuthErrorMessages[unexpectedError]
      },
      postRequestFailed: {
        code: postRequestFailed,
        desc: AuthErrorMessages[postRequestFailed]
      }
    };
    AuthError = class _AuthError extends Error {
      constructor(errorCode, errorMessage, suberror) {
        const errorString = errorMessage ? `${errorCode}: ${errorMessage}` : errorCode;
        super(errorString);
        Object.setPrototypeOf(this, _AuthError.prototype);
        this.errorCode = errorCode || Constants.EMPTY_STRING;
        this.errorMessage = errorMessage || Constants.EMPTY_STRING;
        this.subError = suberror || Constants.EMPTY_STRING;
        this.name = "AuthError";
      }
      setCorrelationId(correlationId) {
        this.correlationId = correlationId;
      }
    };
  }
});

// node_modules/@azure/msal-common/dist/error/ClientAuthErrorCodes.mjs
var clientInfoDecodingError, clientInfoEmptyError, tokenParsingError, nullOrEmptyToken, endpointResolutionError, networkError, openIdConfigError, hashNotDeserialized, invalidState, stateMismatch, stateNotFound, nonceMismatch, authTimeNotFound, maxAgeTranspired, multipleMatchingTokens, multipleMatchingAccounts, multipleMatchingAppMetadata, requestCannotBeMade, cannotRemoveEmptyScope, cannotAppendScopeSet, emptyInputScopeSet, deviceCodePollingCancelled, deviceCodeExpired, deviceCodeUnknownError, noAccountInSilentRequest, invalidCacheRecord, invalidCacheEnvironment, noAccountFound, noCryptoObject, unexpectedCredentialType, invalidAssertion, invalidClientCredential, tokenRefreshRequired, userTimeoutReached, tokenClaimsCnfRequiredForSignedJwt, authorizationCodeMissingFromServerResponse, bindingKeyNotRemoved, endSessionEndpointNotSupported, keyIdMissing, noNetworkConnectivity, userCanceled, missingTenantIdError, methodNotImplemented, nestedAppAuthBridgeDisabled;
var init_ClientAuthErrorCodes = __esm({
  "node_modules/@azure/msal-common/dist/error/ClientAuthErrorCodes.mjs"() {
    "use strict";
    clientInfoDecodingError = "client_info_decoding_error";
    clientInfoEmptyError = "client_info_empty_error";
    tokenParsingError = "token_parsing_error";
    nullOrEmptyToken = "null_or_empty_token";
    endpointResolutionError = "endpoints_resolution_error";
    networkError = "network_error";
    openIdConfigError = "openid_config_error";
    hashNotDeserialized = "hash_not_deserialized";
    invalidState = "invalid_state";
    stateMismatch = "state_mismatch";
    stateNotFound = "state_not_found";
    nonceMismatch = "nonce_mismatch";
    authTimeNotFound = "auth_time_not_found";
    maxAgeTranspired = "max_age_transpired";
    multipleMatchingTokens = "multiple_matching_tokens";
    multipleMatchingAccounts = "multiple_matching_accounts";
    multipleMatchingAppMetadata = "multiple_matching_appMetadata";
    requestCannotBeMade = "request_cannot_be_made";
    cannotRemoveEmptyScope = "cannot_remove_empty_scope";
    cannotAppendScopeSet = "cannot_append_scopeset";
    emptyInputScopeSet = "empty_input_scopeset";
    deviceCodePollingCancelled = "device_code_polling_cancelled";
    deviceCodeExpired = "device_code_expired";
    deviceCodeUnknownError = "device_code_unknown_error";
    noAccountInSilentRequest = "no_account_in_silent_request";
    invalidCacheRecord = "invalid_cache_record";
    invalidCacheEnvironment = "invalid_cache_environment";
    noAccountFound = "no_account_found";
    noCryptoObject = "no_crypto_object";
    unexpectedCredentialType = "unexpected_credential_type";
    invalidAssertion = "invalid_assertion";
    invalidClientCredential = "invalid_client_credential";
    tokenRefreshRequired = "token_refresh_required";
    userTimeoutReached = "user_timeout_reached";
    tokenClaimsCnfRequiredForSignedJwt = "token_claims_cnf_required_for_signedjwt";
    authorizationCodeMissingFromServerResponse = "authorization_code_missing_from_server_response";
    bindingKeyNotRemoved = "binding_key_not_removed";
    endSessionEndpointNotSupported = "end_session_endpoint_not_supported";
    keyIdMissing = "key_id_missing";
    noNetworkConnectivity = "no_network_connectivity";
    userCanceled = "user_canceled";
    missingTenantIdError = "missing_tenant_id_error";
    methodNotImplemented = "method_not_implemented";
    nestedAppAuthBridgeDisabled = "nested_app_auth_bridge_disabled";
  }
});

// node_modules/@azure/msal-common/dist/error/ClientAuthError.mjs
function createClientAuthError(errorCode, additionalMessage) {
  return new ClientAuthError(errorCode, additionalMessage);
}
var ClientAuthErrorMessages, ClientAuthErrorMessage, ClientAuthError;
var init_ClientAuthError = __esm({
  "node_modules/@azure/msal-common/dist/error/ClientAuthError.mjs"() {
    "use strict";
    init_AuthError();
    init_ClientAuthErrorCodes();
    ClientAuthErrorMessages = {
      [clientInfoDecodingError]: "The client info could not be parsed/decoded correctly",
      [clientInfoEmptyError]: "The client info was empty",
      [tokenParsingError]: "Token cannot be parsed",
      [nullOrEmptyToken]: "The token is null or empty",
      [endpointResolutionError]: "Endpoints cannot be resolved",
      [networkError]: "Network request failed",
      [openIdConfigError]: "Could not retrieve endpoints. Check your authority and verify the .well-known/openid-configuration endpoint returns the required endpoints.",
      [hashNotDeserialized]: "The hash parameters could not be deserialized",
      [invalidState]: "State was not the expected format",
      [stateMismatch]: "State mismatch error",
      [stateNotFound]: "State not found",
      [nonceMismatch]: "Nonce mismatch error",
      [authTimeNotFound]: "Max Age was requested and the ID token is missing the auth_time variable. auth_time is an optional claim and is not enabled by default - it must be enabled. See https://aka.ms/msaljs/optional-claims for more information.",
      [maxAgeTranspired]: "Max Age is set to 0, or too much time has elapsed since the last end-user authentication.",
      [multipleMatchingTokens]: "The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements such as authority or account.",
      [multipleMatchingAccounts]: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account",
      [multipleMatchingAppMetadata]: "The cache contains multiple appMetadata satisfying the given parameters. Please pass more info to obtain the correct appMetadata",
      [requestCannotBeMade]: "Token request cannot be made without authorization code or refresh token.",
      [cannotRemoveEmptyScope]: "Cannot remove null or empty scope from ScopeSet",
      [cannotAppendScopeSet]: "Cannot append ScopeSet",
      [emptyInputScopeSet]: "Empty input ScopeSet cannot be processed",
      [deviceCodePollingCancelled]: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true.",
      [deviceCodeExpired]: "Device code is expired.",
      [deviceCodeUnknownError]: "Device code stopped polling for unknown reasons.",
      [noAccountInSilentRequest]: "Please pass an account object, silent flow is not supported without account information",
      [invalidCacheRecord]: "Cache record object was null or undefined.",
      [invalidCacheEnvironment]: "Invalid environment when attempting to create cache entry",
      [noAccountFound]: "No account found in cache for given key.",
      [noCryptoObject]: "No crypto object detected.",
      [unexpectedCredentialType]: "Unexpected credential type.",
      [invalidAssertion]: "Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515",
      [invalidClientCredential]: "Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential",
      [tokenRefreshRequired]: "Cannot return token from cache because it must be refreshed. This may be due to one of the following reasons: forceRefresh parameter is set to true, claims have been requested, there is no cached access token or it is expired.",
      [userTimeoutReached]: "User defined timeout for device code polling reached",
      [tokenClaimsCnfRequiredForSignedJwt]: "Cannot generate a POP jwt if the token_claims are not populated",
      [authorizationCodeMissingFromServerResponse]: "Server response does not contain an authorization code to proceed",
      [bindingKeyNotRemoved]: "Could not remove the credential's binding key from storage.",
      [endSessionEndpointNotSupported]: "The provided authority does not support logout",
      [keyIdMissing]: "A keyId value is missing from the requested bound token's cache record and is required to match the token to it's stored binding key.",
      [noNetworkConnectivity]: "No network connectivity. Check your internet connection.",
      [userCanceled]: "User cancelled the flow.",
      [missingTenantIdError]: "A tenant id - not common, organizations, or consumers - must be specified when using the client_credentials flow.",
      [methodNotImplemented]: "This method has not been implemented",
      [nestedAppAuthBridgeDisabled]: "The nested app auth bridge is disabled"
    };
    ClientAuthErrorMessage = {
      clientInfoDecodingError: {
        code: clientInfoDecodingError,
        desc: ClientAuthErrorMessages[clientInfoDecodingError]
      },
      clientInfoEmptyError: {
        code: clientInfoEmptyError,
        desc: ClientAuthErrorMessages[clientInfoEmptyError]
      },
      tokenParsingError: {
        code: tokenParsingError,
        desc: ClientAuthErrorMessages[tokenParsingError]
      },
      nullOrEmptyToken: {
        code: nullOrEmptyToken,
        desc: ClientAuthErrorMessages[nullOrEmptyToken]
      },
      endpointResolutionError: {
        code: endpointResolutionError,
        desc: ClientAuthErrorMessages[endpointResolutionError]
      },
      networkError: {
        code: networkError,
        desc: ClientAuthErrorMessages[networkError]
      },
      unableToGetOpenidConfigError: {
        code: openIdConfigError,
        desc: ClientAuthErrorMessages[openIdConfigError]
      },
      hashNotDeserialized: {
        code: hashNotDeserialized,
        desc: ClientAuthErrorMessages[hashNotDeserialized]
      },
      invalidStateError: {
        code: invalidState,
        desc: ClientAuthErrorMessages[invalidState]
      },
      stateMismatchError: {
        code: stateMismatch,
        desc: ClientAuthErrorMessages[stateMismatch]
      },
      stateNotFoundError: {
        code: stateNotFound,
        desc: ClientAuthErrorMessages[stateNotFound]
      },
      nonceMismatchError: {
        code: nonceMismatch,
        desc: ClientAuthErrorMessages[nonceMismatch]
      },
      authTimeNotFoundError: {
        code: authTimeNotFound,
        desc: ClientAuthErrorMessages[authTimeNotFound]
      },
      maxAgeTranspired: {
        code: maxAgeTranspired,
        desc: ClientAuthErrorMessages[maxAgeTranspired]
      },
      multipleMatchingTokens: {
        code: multipleMatchingTokens,
        desc: ClientAuthErrorMessages[multipleMatchingTokens]
      },
      multipleMatchingAccounts: {
        code: multipleMatchingAccounts,
        desc: ClientAuthErrorMessages[multipleMatchingAccounts]
      },
      multipleMatchingAppMetadata: {
        code: multipleMatchingAppMetadata,
        desc: ClientAuthErrorMessages[multipleMatchingAppMetadata]
      },
      tokenRequestCannotBeMade: {
        code: requestCannotBeMade,
        desc: ClientAuthErrorMessages[requestCannotBeMade]
      },
      removeEmptyScopeError: {
        code: cannotRemoveEmptyScope,
        desc: ClientAuthErrorMessages[cannotRemoveEmptyScope]
      },
      appendScopeSetError: {
        code: cannotAppendScopeSet,
        desc: ClientAuthErrorMessages[cannotAppendScopeSet]
      },
      emptyInputScopeSetError: {
        code: emptyInputScopeSet,
        desc: ClientAuthErrorMessages[emptyInputScopeSet]
      },
      DeviceCodePollingCancelled: {
        code: deviceCodePollingCancelled,
        desc: ClientAuthErrorMessages[deviceCodePollingCancelled]
      },
      DeviceCodeExpired: {
        code: deviceCodeExpired,
        desc: ClientAuthErrorMessages[deviceCodeExpired]
      },
      DeviceCodeUnknownError: {
        code: deviceCodeUnknownError,
        desc: ClientAuthErrorMessages[deviceCodeUnknownError]
      },
      NoAccountInSilentRequest: {
        code: noAccountInSilentRequest,
        desc: ClientAuthErrorMessages[noAccountInSilentRequest]
      },
      invalidCacheRecord: {
        code: invalidCacheRecord,
        desc: ClientAuthErrorMessages[invalidCacheRecord]
      },
      invalidCacheEnvironment: {
        code: invalidCacheEnvironment,
        desc: ClientAuthErrorMessages[invalidCacheEnvironment]
      },
      noAccountFound: {
        code: noAccountFound,
        desc: ClientAuthErrorMessages[noAccountFound]
      },
      noCryptoObj: {
        code: noCryptoObject,
        desc: ClientAuthErrorMessages[noCryptoObject]
      },
      unexpectedCredentialType: {
        code: unexpectedCredentialType,
        desc: ClientAuthErrorMessages[unexpectedCredentialType]
      },
      invalidAssertion: {
        code: invalidAssertion,
        desc: ClientAuthErrorMessages[invalidAssertion]
      },
      invalidClientCredential: {
        code: invalidClientCredential,
        desc: ClientAuthErrorMessages[invalidClientCredential]
      },
      tokenRefreshRequired: {
        code: tokenRefreshRequired,
        desc: ClientAuthErrorMessages[tokenRefreshRequired]
      },
      userTimeoutReached: {
        code: userTimeoutReached,
        desc: ClientAuthErrorMessages[userTimeoutReached]
      },
      tokenClaimsRequired: {
        code: tokenClaimsCnfRequiredForSignedJwt,
        desc: ClientAuthErrorMessages[tokenClaimsCnfRequiredForSignedJwt]
      },
      noAuthorizationCodeFromServer: {
        code: authorizationCodeMissingFromServerResponse,
        desc: ClientAuthErrorMessages[authorizationCodeMissingFromServerResponse]
      },
      bindingKeyNotRemovedError: {
        code: bindingKeyNotRemoved,
        desc: ClientAuthErrorMessages[bindingKeyNotRemoved]
      },
      logoutNotSupported: {
        code: endSessionEndpointNotSupported,
        desc: ClientAuthErrorMessages[endSessionEndpointNotSupported]
      },
      keyIdMissing: {
        code: keyIdMissing,
        desc: ClientAuthErrorMessages[keyIdMissing]
      },
      noNetworkConnectivity: {
        code: noNetworkConnectivity,
        desc: ClientAuthErrorMessages[noNetworkConnectivity]
      },
      userCanceledError: {
        code: userCanceled,
        desc: ClientAuthErrorMessages[userCanceled]
      },
      missingTenantIdError: {
        code: missingTenantIdError,
        desc: ClientAuthErrorMessages[missingTenantIdError]
      },
      nestedAppAuthBridgeDisabled: {
        code: nestedAppAuthBridgeDisabled,
        desc: ClientAuthErrorMessages[nestedAppAuthBridgeDisabled]
      }
    };
    ClientAuthError = class _ClientAuthError extends AuthError {
      constructor(errorCode, additionalMessage) {
        super(errorCode, additionalMessage ? `${ClientAuthErrorMessages[errorCode]}: ${additionalMessage}` : ClientAuthErrorMessages[errorCode]);
        this.name = "ClientAuthError";
        Object.setPrototypeOf(this, _ClientAuthError.prototype);
      }
    };
  }
});

// node_modules/@azure/msal-common/dist/error/ClientConfigurationErrorCodes.mjs
var redirectUriEmpty, claimsRequestParsingError, authorityUriInsecure, urlParseError, urlEmptyError, emptyInputScopesError, invalidPromptValue, invalidClaims, tokenRequestEmpty, logoutRequestEmpty, invalidCodeChallengeMethod, pkceParamsMissing, invalidCloudDiscoveryMetadata, invalidAuthorityMetadata, untrustedAuthority, missingSshJwk, missingSshKid, missingNonceAuthenticationHeader, invalidAuthenticationHeader, cannotSetOIDCOptions, cannotAllowPlatformBroker, authorityMismatch;
var init_ClientConfigurationErrorCodes = __esm({
  "node_modules/@azure/msal-common/dist/error/ClientConfigurationErrorCodes.mjs"() {
    "use strict";
    redirectUriEmpty = "redirect_uri_empty";
    claimsRequestParsingError = "claims_request_parsing_error";
    authorityUriInsecure = "authority_uri_insecure";
    urlParseError = "url_parse_error";
    urlEmptyError = "empty_url_error";
    emptyInputScopesError = "empty_input_scopes_error";
    invalidPromptValue = "invalid_prompt_value";
    invalidClaims = "invalid_claims";
    tokenRequestEmpty = "token_request_empty";
    logoutRequestEmpty = "logout_request_empty";
    invalidCodeChallengeMethod = "invalid_code_challenge_method";
    pkceParamsMissing = "pkce_params_missing";
    invalidCloudDiscoveryMetadata = "invalid_cloud_discovery_metadata";
    invalidAuthorityMetadata = "invalid_authority_metadata";
    untrustedAuthority = "untrusted_authority";
    missingSshJwk = "missing_ssh_jwk";
    missingSshKid = "missing_ssh_kid";
    missingNonceAuthenticationHeader = "missing_nonce_authentication_header";
    invalidAuthenticationHeader = "invalid_authentication_header";
    cannotSetOIDCOptions = "cannot_set_OIDCOptions";
    cannotAllowPlatformBroker = "cannot_allow_platform_broker";
    authorityMismatch = "authority_mismatch";
  }
});

// node_modules/@azure/msal-common/dist/error/ClientConfigurationError.mjs
function createClientConfigurationError(errorCode) {
  return new ClientConfigurationError(errorCode);
}
var ClientConfigurationErrorMessages, ClientConfigurationErrorMessage, ClientConfigurationError;
var init_ClientConfigurationError = __esm({
  "node_modules/@azure/msal-common/dist/error/ClientConfigurationError.mjs"() {
    "use strict";
    init_AuthError();
    init_ClientConfigurationErrorCodes();
    ClientConfigurationErrorMessages = {
      [redirectUriEmpty]: "A redirect URI is required for all calls, and none has been set.",
      [claimsRequestParsingError]: "Could not parse the given claims request object.",
      [authorityUriInsecure]: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options",
      [urlParseError]: "URL could not be parsed into appropriate segments.",
      [urlEmptyError]: "URL was empty or null.",
      [emptyInputScopesError]: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token.",
      [invalidPromptValue]: "Please see here for valid configuration options: https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_common.html#commonauthorizationurlrequest",
      [invalidClaims]: "Given claims parameter must be a stringified JSON object.",
      [tokenRequestEmpty]: "Token request was empty and not found in cache.",
      [logoutRequestEmpty]: "The logout request was null or undefined.",
      [invalidCodeChallengeMethod]: 'code_challenge_method passed is invalid. Valid values are "plain" and "S256".',
      [pkceParamsMissing]: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request",
      [invalidCloudDiscoveryMetadata]: "Invalid cloudDiscoveryMetadata provided. Must be a stringified JSON object containing tenant_discovery_endpoint and metadata fields",
      [invalidAuthorityMetadata]: "Invalid authorityMetadata provided. Must by a stringified JSON object containing authorization_endpoint, token_endpoint, issuer fields.",
      [untrustedAuthority]: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter.",
      [missingSshJwk]: "Missing sshJwk in SSH certificate request. A stringified JSON Web Key is required when using the SSH authentication scheme.",
      [missingSshKid]: "Missing sshKid in SSH certificate request. A string that uniquely identifies the public SSH key is required when using the SSH authentication scheme.",
      [missingNonceAuthenticationHeader]: "Unable to find an authentication header containing server nonce. Either the Authentication-Info or WWW-Authenticate headers must be present in order to obtain a server nonce.",
      [invalidAuthenticationHeader]: "Invalid authentication header provided",
      [cannotSetOIDCOptions]: "Cannot set OIDCOptions parameter. Please change the protocol mode to OIDC or use a non-Microsoft authority.",
      [cannotAllowPlatformBroker]: "Cannot set allowPlatformBroker parameter to true when not in AAD protocol mode.",
      [authorityMismatch]: "Authority mismatch error. Authority provided in login request or PublicClientApplication config does not match the environment of the provided account. Please use a matching account or make an interactive request to login to this authority."
    };
    ClientConfigurationErrorMessage = {
      redirectUriNotSet: {
        code: redirectUriEmpty,
        desc: ClientConfigurationErrorMessages[redirectUriEmpty]
      },
      claimsRequestParsingError: {
        code: claimsRequestParsingError,
        desc: ClientConfigurationErrorMessages[claimsRequestParsingError]
      },
      authorityUriInsecure: {
        code: authorityUriInsecure,
        desc: ClientConfigurationErrorMessages[authorityUriInsecure]
      },
      urlParseError: {
        code: urlParseError,
        desc: ClientConfigurationErrorMessages[urlParseError]
      },
      urlEmptyError: {
        code: urlEmptyError,
        desc: ClientConfigurationErrorMessages[urlEmptyError]
      },
      emptyScopesError: {
        code: emptyInputScopesError,
        desc: ClientConfigurationErrorMessages[emptyInputScopesError]
      },
      invalidPrompt: {
        code: invalidPromptValue,
        desc: ClientConfigurationErrorMessages[invalidPromptValue]
      },
      invalidClaimsRequest: {
        code: invalidClaims,
        desc: ClientConfigurationErrorMessages[invalidClaims]
      },
      tokenRequestEmptyError: {
        code: tokenRequestEmpty,
        desc: ClientConfigurationErrorMessages[tokenRequestEmpty]
      },
      logoutRequestEmptyError: {
        code: logoutRequestEmpty,
        desc: ClientConfigurationErrorMessages[logoutRequestEmpty]
      },
      invalidCodeChallengeMethod: {
        code: invalidCodeChallengeMethod,
        desc: ClientConfigurationErrorMessages[invalidCodeChallengeMethod]
      },
      invalidCodeChallengeParams: {
        code: pkceParamsMissing,
        desc: ClientConfigurationErrorMessages[pkceParamsMissing]
      },
      invalidCloudDiscoveryMetadata: {
        code: invalidCloudDiscoveryMetadata,
        desc: ClientConfigurationErrorMessages[invalidCloudDiscoveryMetadata]
      },
      invalidAuthorityMetadata: {
        code: invalidAuthorityMetadata,
        desc: ClientConfigurationErrorMessages[invalidAuthorityMetadata]
      },
      untrustedAuthority: {
        code: untrustedAuthority,
        desc: ClientConfigurationErrorMessages[untrustedAuthority]
      },
      missingSshJwk: {
        code: missingSshJwk,
        desc: ClientConfigurationErrorMessages[missingSshJwk]
      },
      missingSshKid: {
        code: missingSshKid,
        desc: ClientConfigurationErrorMessages[missingSshKid]
      },
      missingNonceAuthenticationHeader: {
        code: missingNonceAuthenticationHeader,
        desc: ClientConfigurationErrorMessages[missingNonceAuthenticationHeader]
      },
      invalidAuthenticationHeader: {
        code: invalidAuthenticationHeader,
        desc: ClientConfigurationErrorMessages[invalidAuthenticationHeader]
      },
      cannotSetOIDCOptions: {
        code: cannotSetOIDCOptions,
        desc: ClientConfigurationErrorMessages[cannotSetOIDCOptions]
      },
      cannotAllowPlatformBroker: {
        code: cannotAllowPlatformBroker,
        desc: ClientConfigurationErrorMessages[cannotAllowPlatformBroker]
      },
      authorityMismatch: {
        code: authorityMismatch,
        desc: ClientConfigurationErrorMessages[authorityMismatch]
      }
    };
    ClientConfigurationError = class _ClientConfigurationError extends AuthError {
      constructor(errorCode) {
        super(errorCode, ClientConfigurationErrorMessages[errorCode]);
        this.name = "ClientConfigurationError";
        Object.setPrototypeOf(this, _ClientConfigurationError.prototype);
      }
    };
  }
});

// node_modules/@azure/msal-common/dist/utils/StringUtils.mjs
var StringUtils;
var init_StringUtils = __esm({
  "node_modules/@azure/msal-common/dist/utils/StringUtils.mjs"() {
    "use strict";
    StringUtils = class {
      /**
       * Check if stringified object is empty
       * @param strObj
       */
      static isEmptyObj(strObj) {
        if (strObj) {
          try {
            const obj = JSON.parse(strObj);
            return Object.keys(obj).length === 0;
          } catch (e) {
          }
        }
        return true;
      }
      static startsWith(str, search) {
        return str.indexOf(search) === 0;
      }
      static endsWith(str, search) {
        return str.length >= search.length && str.lastIndexOf(search) === str.length - search.length;
      }
      /**
       * Parses string into an object.
       *
       * @param query
       */
      static queryStringToObject(query) {
        const obj = {};
        const params = query.split("&");
        const decode = (s) => decodeURIComponent(s.replace(/\+/g, " "));
        params.forEach((pair) => {
          if (pair.trim()) {
            const [key, value] = pair.split(/=(.+)/g, 2);
            if (key && value) {
              obj[decode(key)] = decode(value);
            }
          }
        });
        return obj;
      }
      /**
       * Trims entries in an array.
       *
       * @param arr
       */
      static trimArrayEntries(arr) {
        return arr.map((entry) => entry.trim());
      }
      /**
       * Removes empty strings from array
       * @param arr
       */
      static removeEmptyStringsFromArray(arr) {
        return arr.filter((entry) => {
          return !!entry;
        });
      }
      /**
       * Attempts to parse a string into JSON
       * @param str
       */
      static jsonParseHelper(str) {
        try {
          return JSON.parse(str);
        } catch (e) {
          return null;
        }
      }
      /**
       * Tests if a given string matches a given pattern, with support for wildcards and queries.
       * @param pattern Wildcard pattern to string match. Supports "*" for wildcards and "?" for queries
       * @param input String to match against
       */
      static matchPattern(pattern, input) {
        const regex = new RegExp(pattern.replace(/\\/g, "\\\\").replace(/\*/g, "[^ ]*").replace(/\?/g, "\\?"));
        return regex.test(input);
      }
    };
  }
});

// node_modules/@azure/msal-common/dist/utils/UrlUtils.mjs
function stripLeadingHashOrQuery(responseString) {
  if (responseString.startsWith("#/")) {
    return responseString.substring(2);
  } else if (responseString.startsWith("#") || responseString.startsWith("?")) {
    return responseString.substring(1);
  }
  return responseString;
}
function getDeserializedResponse(responseString) {
  if (!responseString || responseString.indexOf("=") < 0) {
    return null;
  }
  try {
    const normalizedResponse = stripLeadingHashOrQuery(responseString);
    const deserializedHash = Object.fromEntries(new URLSearchParams(normalizedResponse));
    if (deserializedHash.code || deserializedHash.ear_jwe || deserializedHash.error || deserializedHash.error_description || deserializedHash.state) {
      return deserializedHash;
    }
  } catch (e) {
    throw createClientAuthError(hashNotDeserialized);
  }
  return null;
}
var init_UrlUtils = __esm({
  "node_modules/@azure/msal-common/dist/utils/UrlUtils.mjs"() {
    "use strict";
    init_ClientAuthError();
    init_ClientAuthErrorCodes();
  }
});

// node_modules/@azure/msal-common/dist/url/UrlString.mjs
var UrlString;
var init_UrlString = __esm({
  "node_modules/@azure/msal-common/dist/url/UrlString.mjs"() {
    "use strict";
    init_ClientConfigurationError();
    init_StringUtils();
    init_Constants();
    init_UrlUtils();
    init_ClientConfigurationErrorCodes();
    UrlString = class _UrlString {
      get urlString() {
        return this._urlString;
      }
      constructor(url) {
        this._urlString = url;
        if (!this._urlString) {
          throw createClientConfigurationError(urlEmptyError);
        }
        if (!url.includes("#")) {
          this._urlString = _UrlString.canonicalizeUri(url);
        }
      }
      /**
       * Ensure urls are lower case and end with a / character.
       * @param url
       */
      static canonicalizeUri(url) {
        if (url) {
          let lowerCaseUrl = url.toLowerCase();
          if (StringUtils.endsWith(lowerCaseUrl, "?")) {
            lowerCaseUrl = lowerCaseUrl.slice(0, -1);
          } else if (StringUtils.endsWith(lowerCaseUrl, "?/")) {
            lowerCaseUrl = lowerCaseUrl.slice(0, -2);
          }
          if (!StringUtils.endsWith(lowerCaseUrl, "/")) {
            lowerCaseUrl += "/";
          }
          return lowerCaseUrl;
        }
        return url;
      }
      /**
       * Throws if urlString passed is not a valid authority URI string.
       */
      validateAsUri() {
        let components;
        try {
          components = this.getUrlComponents();
        } catch (e) {
          throw createClientConfigurationError(urlParseError);
        }
        if (!components.HostNameAndPort || !components.PathSegments) {
          throw createClientConfigurationError(urlParseError);
        }
        if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
          throw createClientConfigurationError(authorityUriInsecure);
        }
      }
      /**
       * Given a url and a query string return the url with provided query string appended
       * @param url
       * @param queryString
       */
      static appendQueryString(url, queryString) {
        if (!queryString) {
          return url;
        }
        return url.indexOf("?") < 0 ? `${url}?${queryString}` : `${url}&${queryString}`;
      }
      /**
       * Returns a url with the hash removed
       * @param url
       */
      static removeHashFromUrl(url) {
        return _UrlString.canonicalizeUri(url.split("#")[0]);
      }
      /**
       * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
       * @param href The url
       * @param tenantId The tenant id to replace
       */
      replaceTenantPath(tenantId) {
        const urlObject = this.getUrlComponents();
        const pathArray = urlObject.PathSegments;
        if (tenantId && pathArray.length !== 0 && (pathArray[0] === AADAuthorityConstants.COMMON || pathArray[0] === AADAuthorityConstants.ORGANIZATIONS)) {
          pathArray[0] = tenantId;
        }
        return _UrlString.constructAuthorityUriFromObject(urlObject);
      }
      /**
       * Parses out the components from a url string.
       * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
       */
      getUrlComponents() {
        const regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
        const match = this.urlString.match(regEx);
        if (!match) {
          throw createClientConfigurationError(urlParseError);
        }
        const urlComponents = {
          Protocol: match[1],
          HostNameAndPort: match[4],
          AbsolutePath: match[5],
          QueryString: match[7]
        };
        let pathSegments = urlComponents.AbsolutePath.split("/");
        pathSegments = pathSegments.filter((val) => val && val.length > 0);
        urlComponents.PathSegments = pathSegments;
        if (urlComponents.QueryString && urlComponents.QueryString.endsWith("/")) {
          urlComponents.QueryString = urlComponents.QueryString.substring(0, urlComponents.QueryString.length - 1);
        }
        return urlComponents;
      }
      static getDomainFromUrl(url) {
        const regEx = RegExp("^([^:/?#]+://)?([^/?#]*)");
        const match = url.match(regEx);
        if (!match) {
          throw createClientConfigurationError(urlParseError);
        }
        return match[2];
      }
      static getAbsoluteUrl(relativeUrl, baseUrl) {
        if (relativeUrl[0] === Constants.FORWARD_SLASH) {
          const url = new _UrlString(baseUrl);
          const baseComponents = url.getUrlComponents();
          return baseComponents.Protocol + "//" + baseComponents.HostNameAndPort + relativeUrl;
        }
        return relativeUrl;
      }
      static constructAuthorityUriFromObject(urlObject) {
        return new _UrlString(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + urlObject.PathSegments.join("/"));
      }
      /**
       * Check if the hash of the URL string contains known properties
       * @deprecated This API will be removed in a future version
       */
      static hashContainsKnownProperties(response) {
        return !!getDeserializedResponse(response);
      }
    };
  }
});

// node_modules/@azure/msal-common/dist/utils/FunctionWrappers.mjs
var invoke, invokeAsync;
var init_FunctionWrappers = __esm({
  "node_modules/@azure/msal-common/dist/utils/FunctionWrappers.mjs"() {
    "use strict";
    invoke = (callback, eventName, logger, telemetryClient, correlationId) => {
      return (...args) => {
        logger.trace(`Executing function ${eventName}`);
        const inProgressEvent = telemetryClient?.startMeasurement(eventName, correlationId);
        if (correlationId) {
          const eventCount = eventName + "CallCount";
          telemetryClient?.incrementFields({ [eventCount]: 1 }, correlationId);
        }
        try {
          const result = callback(...args);
          inProgressEvent?.end({
            success: true
          });
          logger.trace(`Returning result from ${eventName}`);
          return result;
        } catch (e) {
          logger.trace(`Error occurred in ${eventName}`);
          try {
            logger.trace(JSON.stringify(e));
          } catch (e2) {
            logger.trace("Unable to print error message.");
          }
          inProgressEvent?.end({
            success: false
          }, e);
          throw e;
        }
      };
    };
    invokeAsync = (callback, eventName, logger, telemetryClient, correlationId) => {
      return (...args) => {
        logger.trace(`Executing function ${eventName}`);
        const inProgressEvent = telemetryClient?.startMeasurement(eventName, correlationId);
        if (correlationId) {
          const eventCount = eventName + "CallCount";
          telemetryClient?.incrementFields({ [eventCount]: 1 }, correlationId);
        }
        telemetryClient?.setPreQueueTime(eventName, correlationId);
        return callback(...args).then((response) => {
          logger.trace(`Returning result from ${eventName}`);
          inProgressEvent?.end({
            success: true
          });
          return response;
        }).catch((e) => {
          logger.trace(`Error occurred in ${eventName}`);
          try {
            logger.trace(JSON.stringify(e));
          } catch (e2) {
            logger.trace("Unable to print error message.");
          }
          inProgressEvent?.end({
            success: false
          }, e);
          throw e;
        });
      };
    };
  }
});

// node_modules/@azure/msal-common/dist/index-browser.mjs
var init_index_browser = __esm({
  "node_modules/@azure/msal-common/dist/index-browser.mjs"() {
    "use strict";
    init_UrlString();
    init_AuthError();
    init_StringUtils();
    init_FunctionWrappers();
  }
});

// node_modules/@azure/msal-browser/dist/error/BrowserAuthErrorCodes.mjs
var pkceNotCreated, earJwkEmpty, earJweEmpty, cryptoNonExistent, emptyNavigateUri, hashEmptyError, noStateInHash, hashDoesNotContainKnownProperties, unableToParseState, stateInteractionTypeMismatch, interactionInProgress, popupWindowError, emptyWindowError, userCancelled, monitorPopupTimeout, monitorWindowTimeout, redirectInIframe, blockIframeReload, blockNestedPopups, iframeClosedPrematurely, silentLogoutUnsupported, noAccountError, silentPromptValueError, noTokenRequestCacheError, unableToParseTokenRequestCacheError, authRequestNotSetError, invalidCacheType, nonBrowserEnvironment, databaseNotOpen, noNetworkConnectivity2, postRequestFailed2, getRequestFailed, failedToParseResponse, unableToLoadToken, cryptoKeyNotFound, authCodeRequired, authCodeOrNativeAccountIdRequired, spaCodeAndNativeAccountIdPresent, databaseUnavailable, unableToAcquireTokenFromNativePlatform, nativeHandshakeTimeout, nativeExtensionNotInstalled, nativeConnectionNotEstablished, uninitializedPublicClientApplication, nativePromptNotSupported, invalidBase64String, invalidPopTokenRequest, failedToBuildHeaders, failedToParseHeaders, failedToDecryptEarResponse, timedOut;
var init_BrowserAuthErrorCodes = __esm({
  "node_modules/@azure/msal-browser/dist/error/BrowserAuthErrorCodes.mjs"() {
    "use strict";
    pkceNotCreated = "pkce_not_created";
    earJwkEmpty = "ear_jwk_empty";
    earJweEmpty = "ear_jwe_empty";
    cryptoNonExistent = "crypto_nonexistent";
    emptyNavigateUri = "empty_navigate_uri";
    hashEmptyError = "hash_empty_error";
    noStateInHash = "no_state_in_hash";
    hashDoesNotContainKnownProperties = "hash_does_not_contain_known_properties";
    unableToParseState = "unable_to_parse_state";
    stateInteractionTypeMismatch = "state_interaction_type_mismatch";
    interactionInProgress = "interaction_in_progress";
    popupWindowError = "popup_window_error";
    emptyWindowError = "empty_window_error";
    userCancelled = "user_cancelled";
    monitorPopupTimeout = "monitor_popup_timeout";
    monitorWindowTimeout = "monitor_window_timeout";
    redirectInIframe = "redirect_in_iframe";
    blockIframeReload = "block_iframe_reload";
    blockNestedPopups = "block_nested_popups";
    iframeClosedPrematurely = "iframe_closed_prematurely";
    silentLogoutUnsupported = "silent_logout_unsupported";
    noAccountError = "no_account_error";
    silentPromptValueError = "silent_prompt_value_error";
    noTokenRequestCacheError = "no_token_request_cache_error";
    unableToParseTokenRequestCacheError = "unable_to_parse_token_request_cache_error";
    authRequestNotSetError = "auth_request_not_set_error";
    invalidCacheType = "invalid_cache_type";
    nonBrowserEnvironment = "non_browser_environment";
    databaseNotOpen = "database_not_open";
    noNetworkConnectivity2 = "no_network_connectivity";
    postRequestFailed2 = "post_request_failed";
    getRequestFailed = "get_request_failed";
    failedToParseResponse = "failed_to_parse_response";
    unableToLoadToken = "unable_to_load_token";
    cryptoKeyNotFound = "crypto_key_not_found";
    authCodeRequired = "auth_code_required";
    authCodeOrNativeAccountIdRequired = "auth_code_or_nativeAccountId_required";
    spaCodeAndNativeAccountIdPresent = "spa_code_and_nativeAccountId_present";
    databaseUnavailable = "database_unavailable";
    unableToAcquireTokenFromNativePlatform = "unable_to_acquire_token_from_native_platform";
    nativeHandshakeTimeout = "native_handshake_timeout";
    nativeExtensionNotInstalled = "native_extension_not_installed";
    nativeConnectionNotEstablished = "native_connection_not_established";
    uninitializedPublicClientApplication = "uninitialized_public_client_application";
    nativePromptNotSupported = "native_prompt_not_supported";
    invalidBase64String = "invalid_base64_string";
    invalidPopTokenRequest = "invalid_pop_token_request";
    failedToBuildHeaders = "failed_to_build_headers";
    failedToParseHeaders = "failed_to_parse_headers";
    failedToDecryptEarResponse = "failed_to_decrypt_ear_response";
    timedOut = "timed_out";
  }
});

// node_modules/@azure/msal-browser/dist/error/BrowserAuthError.mjs
function createBrowserAuthError(errorCode, subError) {
  return new BrowserAuthError(errorCode, subError);
}
var ErrorLink, BrowserAuthErrorMessages, BrowserAuthErrorMessage, BrowserAuthError;
var init_BrowserAuthError = __esm({
  "node_modules/@azure/msal-browser/dist/error/BrowserAuthError.mjs"() {
    "use strict";
    init_index_browser();
    init_BrowserAuthErrorCodes();
    ErrorLink = "For more visit: aka.ms/msaljs/browser-errors";
    BrowserAuthErrorMessages = {
      [pkceNotCreated]: "The PKCE code challenge and verifier could not be generated.",
      [earJwkEmpty]: "No EAR encryption key provided. This is unexpected.",
      [earJweEmpty]: "Server response does not contain ear_jwe property. This is unexpected.",
      [cryptoNonExistent]: "The crypto object or function is not available.",
      [emptyNavigateUri]: "Navigation URI is empty. Please check stack trace for more info.",
      [hashEmptyError]: `Hash value cannot be processed because it is empty. Please verify that your redirectUri is not clearing the hash. ${ErrorLink}`,
      [noStateInHash]: "Hash does not contain state. Please verify that the request originated from msal.",
      [hashDoesNotContainKnownProperties]: `Hash does not contain known properites. Please verify that your redirectUri is not changing the hash.  ${ErrorLink}`,
      [unableToParseState]: "Unable to parse state. Please verify that the request originated from msal.",
      [stateInteractionTypeMismatch]: "Hash contains state but the interaction type does not match the caller.",
      [interactionInProgress]: `Interaction is currently in progress. Please ensure that this interaction has been completed before calling an interactive API.   ${ErrorLink}`,
      [popupWindowError]: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser.",
      [emptyWindowError]: "window.open returned null or undefined window object.",
      [userCancelled]: "User cancelled the flow.",
      [monitorPopupTimeout]: `Token acquisition in popup failed due to timeout.  ${ErrorLink}`,
      [monitorWindowTimeout]: `Token acquisition in iframe failed due to timeout.  ${ErrorLink}`,
      [redirectInIframe]: "Redirects are not supported for iframed or brokered applications. Please ensure you are using MSAL.js in a top frame of the window if using the redirect APIs, or use the popup APIs.",
      [blockIframeReload]: `Request was blocked inside an iframe because MSAL detected an authentication response.  ${ErrorLink}`,
      [blockNestedPopups]: "Request was blocked inside a popup because MSAL detected it was running in a popup.",
      [iframeClosedPrematurely]: "The iframe being monitored was closed prematurely.",
      [silentLogoutUnsupported]: "Silent logout not supported. Please call logoutRedirect or logoutPopup instead.",
      [noAccountError]: "No account object provided to acquireTokenSilent and no active account has been set. Please call setActiveAccount or provide an account on the request.",
      [silentPromptValueError]: "The value given for the prompt value is not valid for silent requests - must be set to 'none' or 'no_session'.",
      [noTokenRequestCacheError]: "No token request found in cache.",
      [unableToParseTokenRequestCacheError]: "The cached token request could not be parsed.",
      [authRequestNotSetError]: "Auth Request not set. Please ensure initiateAuthRequest was called from the InteractionHandler",
      [invalidCacheType]: "Invalid cache type",
      [nonBrowserEnvironment]: "Login and token requests are not supported in non-browser environments.",
      [databaseNotOpen]: "Database is not open!",
      [noNetworkConnectivity2]: "No network connectivity. Check your internet connection.",
      [postRequestFailed2]: "Network request failed: If the browser threw a CORS error, check that the redirectUri is registered in the Azure App Portal as type 'SPA'",
      [getRequestFailed]: "Network request failed. Please check the network trace to determine root cause.",
      [failedToParseResponse]: "Failed to parse network response. Check network trace.",
      [unableToLoadToken]: "Error loading token to cache.",
      [cryptoKeyNotFound]: "Cryptographic Key or Keypair not found in browser storage.",
      [authCodeRequired]: "An authorization code must be provided (as the `code` property on the request) to this flow.",
      [authCodeOrNativeAccountIdRequired]: "An authorization code or nativeAccountId must be provided to this flow.",
      [spaCodeAndNativeAccountIdPresent]: "Request cannot contain both spa code and native account id.",
      [databaseUnavailable]: "IndexedDB, which is required for persistent cryptographic key storage, is unavailable. This may be caused by browser privacy features which block persistent storage in third-party contexts.",
      [unableToAcquireTokenFromNativePlatform]: `Unable to acquire token from native platform.  ${ErrorLink}`,
      [nativeHandshakeTimeout]: "Timed out while attempting to establish connection to browser extension",
      [nativeExtensionNotInstalled]: "Native extension is not installed. If you think this is a mistake call the initialize function.",
      [nativeConnectionNotEstablished]: `Connection to native platform has not been established. Please install a compatible browser extension and run initialize().  ${ErrorLink}`,
      [uninitializedPublicClientApplication]: `You must call and await the initialize function before attempting to call any other MSAL API.  ${ErrorLink}`,
      [nativePromptNotSupported]: "The provided prompt is not supported by the native platform. This request should be routed to the web based flow.",
      [invalidBase64String]: "Invalid base64 encoded string.",
      [invalidPopTokenRequest]: "Invalid PoP token request. The request should not have both a popKid value and signPopToken set to true.",
      [failedToBuildHeaders]: "Failed to build request headers object.",
      [failedToParseHeaders]: "Failed to parse response headers",
      [failedToDecryptEarResponse]: "Failed to decrypt ear response",
      [timedOut]: "The request timed out."
    };
    BrowserAuthErrorMessage = {
      pkceNotGenerated: {
        code: pkceNotCreated,
        desc: BrowserAuthErrorMessages[pkceNotCreated]
      },
      cryptoDoesNotExist: {
        code: cryptoNonExistent,
        desc: BrowserAuthErrorMessages[cryptoNonExistent]
      },
      emptyNavigateUriError: {
        code: emptyNavigateUri,
        desc: BrowserAuthErrorMessages[emptyNavigateUri]
      },
      hashEmptyError: {
        code: hashEmptyError,
        desc: BrowserAuthErrorMessages[hashEmptyError]
      },
      hashDoesNotContainStateError: {
        code: noStateInHash,
        desc: BrowserAuthErrorMessages[noStateInHash]
      },
      hashDoesNotContainKnownPropertiesError: {
        code: hashDoesNotContainKnownProperties,
        desc: BrowserAuthErrorMessages[hashDoesNotContainKnownProperties]
      },
      unableToParseStateError: {
        code: unableToParseState,
        desc: BrowserAuthErrorMessages[unableToParseState]
      },
      stateInteractionTypeMismatchError: {
        code: stateInteractionTypeMismatch,
        desc: BrowserAuthErrorMessages[stateInteractionTypeMismatch]
      },
      interactionInProgress: {
        code: interactionInProgress,
        desc: BrowserAuthErrorMessages[interactionInProgress]
      },
      popupWindowError: {
        code: popupWindowError,
        desc: BrowserAuthErrorMessages[popupWindowError]
      },
      emptyWindowError: {
        code: emptyWindowError,
        desc: BrowserAuthErrorMessages[emptyWindowError]
      },
      userCancelledError: {
        code: userCancelled,
        desc: BrowserAuthErrorMessages[userCancelled]
      },
      monitorPopupTimeoutError: {
        code: monitorPopupTimeout,
        desc: BrowserAuthErrorMessages[monitorPopupTimeout]
      },
      monitorIframeTimeoutError: {
        code: monitorWindowTimeout,
        desc: BrowserAuthErrorMessages[monitorWindowTimeout]
      },
      redirectInIframeError: {
        code: redirectInIframe,
        desc: BrowserAuthErrorMessages[redirectInIframe]
      },
      blockTokenRequestsInHiddenIframeError: {
        code: blockIframeReload,
        desc: BrowserAuthErrorMessages[blockIframeReload]
      },
      blockAcquireTokenInPopupsError: {
        code: blockNestedPopups,
        desc: BrowserAuthErrorMessages[blockNestedPopups]
      },
      iframeClosedPrematurelyError: {
        code: iframeClosedPrematurely,
        desc: BrowserAuthErrorMessages[iframeClosedPrematurely]
      },
      silentLogoutUnsupportedError: {
        code: silentLogoutUnsupported,
        desc: BrowserAuthErrorMessages[silentLogoutUnsupported]
      },
      noAccountError: {
        code: noAccountError,
        desc: BrowserAuthErrorMessages[noAccountError]
      },
      silentPromptValueError: {
        code: silentPromptValueError,
        desc: BrowserAuthErrorMessages[silentPromptValueError]
      },
      noTokenRequestCacheError: {
        code: noTokenRequestCacheError,
        desc: BrowserAuthErrorMessages[noTokenRequestCacheError]
      },
      unableToParseTokenRequestCacheError: {
        code: unableToParseTokenRequestCacheError,
        desc: BrowserAuthErrorMessages[unableToParseTokenRequestCacheError]
      },
      authRequestNotSet: {
        code: authRequestNotSetError,
        desc: BrowserAuthErrorMessages[authRequestNotSetError]
      },
      invalidCacheType: {
        code: invalidCacheType,
        desc: BrowserAuthErrorMessages[invalidCacheType]
      },
      notInBrowserEnvironment: {
        code: nonBrowserEnvironment,
        desc: BrowserAuthErrorMessages[nonBrowserEnvironment]
      },
      databaseNotOpen: {
        code: databaseNotOpen,
        desc: BrowserAuthErrorMessages[databaseNotOpen]
      },
      noNetworkConnectivity: {
        code: noNetworkConnectivity2,
        desc: BrowserAuthErrorMessages[noNetworkConnectivity2]
      },
      postRequestFailed: {
        code: postRequestFailed2,
        desc: BrowserAuthErrorMessages[postRequestFailed2]
      },
      getRequestFailed: {
        code: getRequestFailed,
        desc: BrowserAuthErrorMessages[getRequestFailed]
      },
      failedToParseNetworkResponse: {
        code: failedToParseResponse,
        desc: BrowserAuthErrorMessages[failedToParseResponse]
      },
      unableToLoadTokenError: {
        code: unableToLoadToken,
        desc: BrowserAuthErrorMessages[unableToLoadToken]
      },
      signingKeyNotFoundInStorage: {
        code: cryptoKeyNotFound,
        desc: BrowserAuthErrorMessages[cryptoKeyNotFound]
      },
      authCodeRequired: {
        code: authCodeRequired,
        desc: BrowserAuthErrorMessages[authCodeRequired]
      },
      authCodeOrNativeAccountRequired: {
        code: authCodeOrNativeAccountIdRequired,
        desc: BrowserAuthErrorMessages[authCodeOrNativeAccountIdRequired]
      },
      spaCodeAndNativeAccountPresent: {
        code: spaCodeAndNativeAccountIdPresent,
        desc: BrowserAuthErrorMessages[spaCodeAndNativeAccountIdPresent]
      },
      databaseUnavailable: {
        code: databaseUnavailable,
        desc: BrowserAuthErrorMessages[databaseUnavailable]
      },
      unableToAcquireTokenFromNativePlatform: {
        code: unableToAcquireTokenFromNativePlatform,
        desc: BrowserAuthErrorMessages[unableToAcquireTokenFromNativePlatform]
      },
      nativeHandshakeTimeout: {
        code: nativeHandshakeTimeout,
        desc: BrowserAuthErrorMessages[nativeHandshakeTimeout]
      },
      nativeExtensionNotInstalled: {
        code: nativeExtensionNotInstalled,
        desc: BrowserAuthErrorMessages[nativeExtensionNotInstalled]
      },
      nativeConnectionNotEstablished: {
        code: nativeConnectionNotEstablished,
        desc: BrowserAuthErrorMessages[nativeConnectionNotEstablished]
      },
      uninitializedPublicClientApplication: {
        code: uninitializedPublicClientApplication,
        desc: BrowserAuthErrorMessages[uninitializedPublicClientApplication]
      },
      nativePromptNotSupported: {
        code: nativePromptNotSupported,
        desc: BrowserAuthErrorMessages[nativePromptNotSupported]
      },
      invalidBase64StringError: {
        code: invalidBase64String,
        desc: BrowserAuthErrorMessages[invalidBase64String]
      },
      invalidPopTokenRequest: {
        code: invalidPopTokenRequest,
        desc: BrowserAuthErrorMessages[invalidPopTokenRequest]
      }
    };
    BrowserAuthError = class _BrowserAuthError extends AuthError {
      constructor(errorCode, subError) {
        super(errorCode, BrowserAuthErrorMessages[errorCode], subError);
        Object.setPrototypeOf(this, _BrowserAuthError.prototype);
        this.name = "BrowserAuthError";
      }
    };
  }
});

// node_modules/@azure/msal-browser/dist/utils/BrowserConstants.mjs
var BrowserConstants, BrowserCacheLocation, InteractionType, InteractionStatus, WrapperSKU, DB_NAME, DB_TABLE_NAME, CacheLookupPolicy, iFrameRenewalPolicies;
var init_BrowserConstants = __esm({
  "node_modules/@azure/msal-browser/dist/utils/BrowserConstants.mjs"() {
    "use strict";
    BrowserConstants = {
      /**
       * Invalid grant error code
       */
      INVALID_GRANT_ERROR: "invalid_grant",
      /**
       * Default popup window width
       */
      POPUP_WIDTH: 483,
      /**
       * Default popup window height
       */
      POPUP_HEIGHT: 600,
      /**
       * Name of the popup window starts with
       */
      POPUP_NAME_PREFIX: "msal",
      /**
       * Default popup monitor poll interval in milliseconds
       */
      DEFAULT_POLL_INTERVAL_MS: 30,
      /**
       * Msal-browser SKU
       */
      MSAL_SKU: "msal.js.browser"
    };
    BrowserCacheLocation = {
      LocalStorage: "localStorage",
      SessionStorage: "sessionStorage",
      MemoryStorage: "memoryStorage"
    };
    (function(InteractionType2) {
      InteractionType2["Redirect"] = "redirect";
      InteractionType2["Popup"] = "popup";
      InteractionType2["Silent"] = "silent";
      InteractionType2["None"] = "none";
    })(InteractionType || (InteractionType = {}));
    InteractionStatus = {
      /**
       * Initial status before interaction occurs
       */
      Startup: "startup",
      /**
       * Status set when all login calls occuring
       */
      Login: "login",
      /**
       * Status set when logout call occuring
       */
      Logout: "logout",
      /**
       * Status set for acquireToken calls
       */
      AcquireToken: "acquireToken",
      /**
       * Status set for ssoSilent calls
       */
      SsoSilent: "ssoSilent",
      /**
       * Status set when handleRedirect in progress
       */
      HandleRedirect: "handleRedirect",
      /**
       * Status set when interaction is complete
       */
      None: "none"
    };
    WrapperSKU = {
      React: "@azure/msal-react",
      Angular: "@azure/msal-angular"
    };
    DB_NAME = "msal.db";
    DB_TABLE_NAME = `${DB_NAME}.keys`;
    CacheLookupPolicy = {
      /*
       * acquireTokenSilent will attempt to retrieve an access token from the cache. If the access token is expired
       * or cannot be found the refresh token will be used to acquire a new one. Finally, if the refresh token
       * is expired acquireTokenSilent will attempt to acquire new access and refresh tokens.
       */
      Default: 0,
      /*
       * acquireTokenSilent will only look for access tokens in the cache. It will not attempt to renew access or
       * refresh tokens.
       */
      AccessToken: 1,
      /*
       * acquireTokenSilent will attempt to retrieve an access token from the cache. If the access token is expired or
       * cannot be found, the refresh token will be used to acquire a new one. If the refresh token is expired, it
       * will not be renewed and acquireTokenSilent will fail.
       */
      AccessTokenAndRefreshToken: 2,
      /*
       * acquireTokenSilent will not attempt to retrieve access tokens from the cache and will instead attempt to
       * exchange the cached refresh token for a new access token. If the refresh token is expired, it will not be
       * renewed and acquireTokenSilent will fail.
       */
      RefreshToken: 3,
      /*
       * acquireTokenSilent will not look in the cache for the access token. It will go directly to network with the
       * cached refresh token. If the refresh token is expired an attempt will be made to renew it. This is equivalent to
       * setting "forceRefresh: true".
       */
      RefreshTokenAndNetwork: 4,
      /*
       * acquireTokenSilent will attempt to renew both access and refresh tokens. It will not look in the cache. This will
       * always fail if 3rd party cookies are blocked by the browser.
       */
      Skip: 5
    };
    iFrameRenewalPolicies = [
      CacheLookupPolicy.Default,
      CacheLookupPolicy.Skip,
      CacheLookupPolicy.RefreshTokenAndNetwork
    ];
  }
});

// node_modules/@azure/msal-browser/dist/crypto/BrowserCrypto.mjs
function getRandomUint32() {
  window.crypto.getRandomValues(UINT32_ARR);
  return UINT32_ARR[0];
}
function createNewGuid() {
  const currentTimestamp = Date.now();
  const baseRand = getRandomUint32() * 1024 + (getRandomUint32() & 1023);
  const bytes = new Uint8Array(16);
  const randA = Math.trunc(baseRand / 2 ** 30);
  const randBHi = baseRand & 2 ** 30 - 1;
  const randBLo = getRandomUint32();
  bytes[0] = currentTimestamp / 2 ** 40;
  bytes[1] = currentTimestamp / 2 ** 32;
  bytes[2] = currentTimestamp / 2 ** 24;
  bytes[3] = currentTimestamp / 2 ** 16;
  bytes[4] = currentTimestamp / 2 ** 8;
  bytes[5] = currentTimestamp;
  bytes[6] = 112 | randA >>> 8;
  bytes[7] = randA;
  bytes[8] = 128 | randBHi >>> 24;
  bytes[9] = randBHi >>> 16;
  bytes[10] = randBHi >>> 8;
  bytes[11] = randBHi;
  bytes[12] = randBLo >>> 24;
  bytes[13] = randBLo >>> 16;
  bytes[14] = randBLo >>> 8;
  bytes[15] = randBLo;
  let text = "";
  for (let i = 0; i < bytes.length; i++) {
    text += UUID_CHARS.charAt(bytes[i] >>> 4);
    text += UUID_CHARS.charAt(bytes[i] & 15);
    if (i === 3 || i === 5 || i === 7 || i === 9) {
      text += "-";
    }
  }
  return text;
}
var PUBLIC_EXPONENT, UUID_CHARS, UINT32_ARR;
var init_BrowserCrypto = __esm({
  "node_modules/@azure/msal-browser/dist/crypto/BrowserCrypto.mjs"() {
    "use strict";
    PUBLIC_EXPONENT = new Uint8Array([1, 0, 1]);
    UUID_CHARS = "0123456789abcdef";
    UINT32_ARR = new Uint32Array(1);
  }
});

// node_modules/@azure/msal-browser/dist/error/BrowserConfigurationAuthErrorCodes.mjs
var storageNotSupported, stubbedPublicClientApplicationCalled, inMemRedirectUnavailable;
var init_BrowserConfigurationAuthErrorCodes = __esm({
  "node_modules/@azure/msal-browser/dist/error/BrowserConfigurationAuthErrorCodes.mjs"() {
    "use strict";
    storageNotSupported = "storage_not_supported";
    stubbedPublicClientApplicationCalled = "stubbed_public_client_application_called";
    inMemRedirectUnavailable = "in_mem_redirect_unavailable";
  }
});

// node_modules/@azure/msal-browser/dist/error/BrowserConfigurationAuthError.mjs
function createBrowserConfigurationAuthError(errorCode) {
  return new BrowserConfigurationAuthError(errorCode, BrowserConfigurationAuthErrorMessages[errorCode]);
}
var BrowserConfigurationAuthErrorMessages, BrowserConfigurationAuthErrorMessage, BrowserConfigurationAuthError;
var init_BrowserConfigurationAuthError = __esm({
  "node_modules/@azure/msal-browser/dist/error/BrowserConfigurationAuthError.mjs"() {
    "use strict";
    init_index_browser();
    init_BrowserConfigurationAuthErrorCodes();
    BrowserConfigurationAuthErrorMessages = {
      [storageNotSupported]: "Given storage configuration option was not supported.",
      [stubbedPublicClientApplicationCalled]: "Stub instance of Public Client Application was called. If using msal-react, please ensure context is not used without a provider. For more visit: aka.ms/msaljs/browser-errors",
      [inMemRedirectUnavailable]: "Redirect cannot be supported. In-memory storage was selected and storeAuthStateInCookie=false, which would cause the library to be unable to handle the incoming hash. If you would like to use the redirect API, please use session/localStorage or set storeAuthStateInCookie=true."
    };
    BrowserConfigurationAuthErrorMessage = {
      storageNotSupportedError: {
        code: storageNotSupported,
        desc: BrowserConfigurationAuthErrorMessages[storageNotSupported]
      },
      stubPcaInstanceCalled: {
        code: stubbedPublicClientApplicationCalled,
        desc: BrowserConfigurationAuthErrorMessages[stubbedPublicClientApplicationCalled]
      },
      inMemRedirectUnavailable: {
        code: inMemRedirectUnavailable,
        desc: BrowserConfigurationAuthErrorMessages[inMemRedirectUnavailable]
      }
    };
    BrowserConfigurationAuthError = class _BrowserConfigurationAuthError extends AuthError {
      constructor(errorCode, errorMessage) {
        super(errorCode, errorMessage);
        this.name = "BrowserConfigurationAuthError";
        Object.setPrototypeOf(this, _BrowserConfigurationAuthError.prototype);
      }
    };
  }
});

// node_modules/@azure/msal-browser/dist/utils/BrowserUtils.mjs
var BrowserUtils_exports = {};
__export(BrowserUtils_exports, {
  blockAPICallsBeforeInitialize: () => blockAPICallsBeforeInitialize,
  blockAcquireTokenInPopups: () => blockAcquireTokenInPopups,
  blockNonBrowserEnvironment: () => blockNonBrowserEnvironment,
  blockRedirectInIframe: () => blockRedirectInIframe,
  blockReloadInHiddenIframes: () => blockReloadInHiddenIframes,
  clearHash: () => clearHash,
  createGuid: () => createGuid,
  getCurrentUri: () => getCurrentUri,
  getHomepage: () => getHomepage,
  invoke: () => invoke,
  invokeAsync: () => invokeAsync,
  isInIframe: () => isInIframe,
  isInPopup: () => isInPopup,
  preconnect: () => preconnect,
  preflightCheck: () => preflightCheck,
  redirectPreflightCheck: () => redirectPreflightCheck,
  replaceHash: () => replaceHash
});
function clearHash(contentWindow) {
  contentWindow.location.hash = "";
  if (typeof contentWindow.history.replaceState === "function") {
    contentWindow.history.replaceState(null, "", `${contentWindow.location.origin}${contentWindow.location.pathname}${contentWindow.location.search}`);
  }
}
function replaceHash(url) {
  const urlParts = url.split("#");
  urlParts.shift();
  window.location.hash = urlParts.length > 0 ? urlParts.join("#") : "";
}
function isInIframe() {
  return window.parent !== window;
}
function isInPopup() {
  return typeof window !== "undefined" && !!window.opener && window.opener !== window && typeof window.name === "string" && window.name.indexOf(`${BrowserConstants.POPUP_NAME_PREFIX}.`) === 0;
}
function getCurrentUri() {
  return typeof window !== "undefined" && window.location ? window.location.href.split("?")[0].split("#")[0] : "";
}
function getHomepage() {
  const currentUrl = new UrlString(window.location.href);
  const urlComponents = currentUrl.getUrlComponents();
  return `${urlComponents.Protocol}//${urlComponents.HostNameAndPort}/`;
}
function blockReloadInHiddenIframes() {
  const isResponseHash = UrlString.hashContainsKnownProperties(window.location.hash);
  if (isResponseHash && isInIframe()) {
    throw createBrowserAuthError(blockIframeReload);
  }
}
function blockRedirectInIframe(allowRedirectInIframe) {
  if (isInIframe() && !allowRedirectInIframe) {
    throw createBrowserAuthError(redirectInIframe);
  }
}
function blockAcquireTokenInPopups() {
  if (isInPopup()) {
    throw createBrowserAuthError(blockNestedPopups);
  }
}
function blockNonBrowserEnvironment() {
  if (typeof window === "undefined") {
    throw createBrowserAuthError(nonBrowserEnvironment);
  }
}
function blockAPICallsBeforeInitialize(initialized) {
  if (!initialized) {
    throw createBrowserAuthError(uninitializedPublicClientApplication);
  }
}
function preflightCheck(initialized) {
  blockNonBrowserEnvironment();
  blockReloadInHiddenIframes();
  blockAcquireTokenInPopups();
  blockAPICallsBeforeInitialize(initialized);
}
function redirectPreflightCheck(initialized, config) {
  preflightCheck(initialized);
  blockRedirectInIframe(config.system.allowRedirectInIframe);
  if (config.cache.cacheLocation === BrowserCacheLocation.MemoryStorage && !config.cache.storeAuthStateInCookie) {
    throw createBrowserConfigurationAuthError(inMemRedirectUnavailable);
  }
}
function preconnect(authority) {
  const link = document.createElement("link");
  link.rel = "preconnect";
  link.href = new URL(authority).origin;
  link.crossOrigin = "anonymous";
  document.head.appendChild(link);
  window.setTimeout(() => {
    try {
      document.head.removeChild(link);
    } catch {
    }
  }, 1e4);
}
function createGuid() {
  return createNewGuid();
}
var init_BrowserUtils = __esm({
  "node_modules/@azure/msal-browser/dist/utils/BrowserUtils.mjs"() {
    "use strict";
    init_index_browser();
    init_index_browser();
    init_BrowserAuthError();
    init_BrowserConstants();
    init_BrowserCrypto();
    init_BrowserConfigurationAuthError();
    init_BrowserAuthErrorCodes();
    init_BrowserConfigurationAuthErrorCodes();
  }
});

// node_modules/@azure/msal-browser/dist/navigation/NavigationClient.mjs
var NavigationClient;
var init_NavigationClient = __esm({
  "node_modules/@azure/msal-browser/dist/navigation/NavigationClient.mjs"() {
    "use strict";
    init_BrowserAuthError();
    init_BrowserAuthErrorCodes();
    NavigationClient = class _NavigationClient {
      /**
       * Navigates to other pages within the same web application
       * @param url
       * @param options
       */
      navigateInternal(url, options) {
        return _NavigationClient.defaultNavigateWindow(url, options);
      }
      /**
       * Navigates to other pages outside the web application i.e. the Identity Provider
       * @param url
       * @param options
       */
      navigateExternal(url, options) {
        return _NavigationClient.defaultNavigateWindow(url, options);
      }
      /**
       * Default navigation implementation invoked by the internal and external functions
       * @param url
       * @param options
       */
      static defaultNavigateWindow(url, options) {
        if (options.noHistory) {
          window.location.replace(url);
        } else {
          window.location.assign(url);
        }
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            reject(createBrowserAuthError(timedOut, "failed_to_redirect"));
          }, options.timeout);
        });
      }
    };
  }
});

// node_modules/@azure/msal-browser/dist/event/EventType.mjs
var EventType;
var init_EventType = __esm({
  "node_modules/@azure/msal-browser/dist/event/EventType.mjs"() {
    "use strict";
    EventType = {
      INITIALIZE_START: "msal:initializeStart",
      INITIALIZE_END: "msal:initializeEnd",
      ACCOUNT_ADDED: "msal:accountAdded",
      ACCOUNT_REMOVED: "msal:accountRemoved",
      ACTIVE_ACCOUNT_CHANGED: "msal:activeAccountChanged",
      LOGIN_START: "msal:loginStart",
      LOGIN_SUCCESS: "msal:loginSuccess",
      LOGIN_FAILURE: "msal:loginFailure",
      ACQUIRE_TOKEN_START: "msal:acquireTokenStart",
      ACQUIRE_TOKEN_SUCCESS: "msal:acquireTokenSuccess",
      ACQUIRE_TOKEN_FAILURE: "msal:acquireTokenFailure",
      ACQUIRE_TOKEN_NETWORK_START: "msal:acquireTokenFromNetworkStart",
      SSO_SILENT_START: "msal:ssoSilentStart",
      SSO_SILENT_SUCCESS: "msal:ssoSilentSuccess",
      SSO_SILENT_FAILURE: "msal:ssoSilentFailure",
      ACQUIRE_TOKEN_BY_CODE_START: "msal:acquireTokenByCodeStart",
      ACQUIRE_TOKEN_BY_CODE_SUCCESS: "msal:acquireTokenByCodeSuccess",
      ACQUIRE_TOKEN_BY_CODE_FAILURE: "msal:acquireTokenByCodeFailure",
      HANDLE_REDIRECT_START: "msal:handleRedirectStart",
      HANDLE_REDIRECT_END: "msal:handleRedirectEnd",
      POPUP_OPENED: "msal:popupOpened",
      LOGOUT_START: "msal:logoutStart",
      LOGOUT_SUCCESS: "msal:logoutSuccess",
      LOGOUT_FAILURE: "msal:logoutFailure",
      LOGOUT_END: "msal:logoutEnd",
      RESTORE_FROM_BFCACHE: "msal:restoreFromBFCache",
      BROKER_CONNECTION_ESTABLISHED: "msal:brokerConnectionEstablished"
    };
  }
});

// node_modules/@azure/msal-browser/dist/event/EventMessage.mjs
var EventMessageUtils;
var init_EventMessage = __esm({
  "node_modules/@azure/msal-browser/dist/event/EventMessage.mjs"() {
    "use strict";
    init_EventType();
    init_BrowserConstants();
    EventMessageUtils = class {
      /**
       * Gets interaction status from event message
       * @param message
       * @param currentStatus
       */
      static getInteractionStatusFromEvent(message, currentStatus) {
        switch (message.eventType) {
          case EventType.LOGIN_START:
            return InteractionStatus.Login;
          case EventType.SSO_SILENT_START:
            return InteractionStatus.SsoSilent;
          case EventType.ACQUIRE_TOKEN_START:
            if (message.interactionType === InteractionType.Redirect || message.interactionType === InteractionType.Popup) {
              return InteractionStatus.AcquireToken;
            }
            break;
          case EventType.HANDLE_REDIRECT_START:
            return InteractionStatus.HandleRedirect;
          case EventType.LOGOUT_START:
            return InteractionStatus.Logout;
          case EventType.SSO_SILENT_SUCCESS:
          case EventType.SSO_SILENT_FAILURE:
            if (currentStatus && currentStatus !== InteractionStatus.SsoSilent) {
              break;
            }
            return InteractionStatus.None;
          case EventType.LOGOUT_END:
            if (currentStatus && currentStatus !== InteractionStatus.Logout) {
              break;
            }
            return InteractionStatus.None;
          case EventType.HANDLE_REDIRECT_END:
            if (currentStatus && currentStatus !== InteractionStatus.HandleRedirect) {
              break;
            }
            return InteractionStatus.None;
          case EventType.LOGIN_SUCCESS:
          case EventType.LOGIN_FAILURE:
          case EventType.ACQUIRE_TOKEN_SUCCESS:
          case EventType.ACQUIRE_TOKEN_FAILURE:
          case EventType.RESTORE_FROM_BFCACHE:
            if (message.interactionType === InteractionType.Redirect || message.interactionType === InteractionType.Popup) {
              if (currentStatus && currentStatus !== InteractionStatus.Login && currentStatus !== InteractionStatus.AcquireToken) {
                break;
              }
              return InteractionStatus.None;
            }
            break;
        }
        return null;
      }
    };
  }
});

// node_modules/@azure/msal-browser/dist/index.mjs
var init_dist = __esm({
  "node_modules/@azure/msal-browser/dist/index.mjs"() {
    "use strict";
    init_BrowserUtils();
    init_BrowserConstants();
    init_BrowserConfigurationAuthError();
    init_NavigationClient();
    init_EventMessage();
    init_index_browser();
  }
});

// node_modules/@azure/msal-angular/fesm2020/azure-msal-angular.mjs
var name, version, MSAL_INSTANCE, MSAL_GUARD_CONFIG, MSAL_INTERCEPTOR_CONFIG, MSAL_BROADCAST_CONFIG, MsalBroadcastService, MsalService, MsalGuard, MsalInterceptor, MsalRedirectComponent, MsalModule, MsalCustomNavigationClient;
var init_azure_msal_angular = __esm({
  "node_modules/@azure/msal-angular/fesm2020/azure-msal-angular.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_esm();
    init_common();
    init_common();
    init_operators();
    init_router();
    name = "@azure/msal-angular";
    version = "4.0.14";
    MSAL_INSTANCE = new InjectionToken("MSAL_INSTANCE");
    MSAL_GUARD_CONFIG = new InjectionToken("MSAL_GUARD_CONFIG");
    MSAL_INTERCEPTOR_CONFIG = new InjectionToken("MSAL_INTERCEPTOR_CONFIG");
    MSAL_BROADCAST_CONFIG = new InjectionToken("MSAL_BROADCAST_CONFIG");
    MsalBroadcastService = class {
      constructor(msalInstance, msalBroadcastConfig) {
        this.msalInstance = msalInstance;
        this.msalBroadcastConfig = msalBroadcastConfig;
        if (this.msalBroadcastConfig && this.msalBroadcastConfig.eventsToReplay > 0) {
          this.msalInstance.getLogger().clone(name, version).verbose(`BroadcastService - eventsToReplay set on BroadcastConfig, replaying the last ${this.msalBroadcastConfig.eventsToReplay} events`);
          this._msalSubject = new ReplaySubject(this.msalBroadcastConfig.eventsToReplay);
        } else {
          this._msalSubject = new Subject();
        }
        this.msalSubject$ = this._msalSubject.asObservable();
        this._inProgress = new BehaviorSubject(InteractionStatus.Startup);
        this.inProgress$ = this._inProgress.asObservable();
        this.msalInstance.addEventCallback((message) => {
          this._msalSubject.next(message);
          const status = EventMessageUtils.getInteractionStatusFromEvent(message, this._inProgress.value);
          if (status !== null) {
            this.msalInstance.getLogger().clone(name, version).verbose(`BroadcastService - ${message.eventType} results in setting inProgress from ${this._inProgress.value} to ${status}`);
            this._inProgress.next(status);
          }
        });
      }
      /**
       * Resets inProgress state to None
       */
      resetInProgressEvent() {
        if (this._inProgress.value === InteractionStatus.Startup) {
          this._inProgress.next(InteractionStatus.None);
        }
      }
    };
    MsalBroadcastService.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: core_exports, type: MsalBroadcastService, deps: [{ token: MSAL_INSTANCE }, { token: MSAL_BROADCAST_CONFIG, optional: true }], target: FactoryTarget.Injectable });
    MsalBroadcastService.\u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: core_exports, type: MsalBroadcastService });
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: core_exports, type: MsalBroadcastService, decorators: [{
      type: Injectable
    }], ctorParameters: function() {
      return [{ type: void 0, decorators: [{
        type: Inject,
        args: [MSAL_INSTANCE]
      }] }, { type: void 0, decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [MSAL_BROADCAST_CONFIG]
      }] }];
    } });
    MsalService = class {
      constructor(instance, location, injector) {
        this.instance = instance;
        this.location = location;
        this.injector = injector;
        const hash = this.location.path(true).split("#").pop();
        if (hash) {
          this.redirectHash = `#${hash}`;
        }
        this.instance.initializeWrapperLibrary(WrapperSKU.Angular, version);
      }
      initialize() {
        return from(this.instance.initialize());
      }
      acquireTokenPopup(request) {
        return from(this.instance.acquireTokenPopup(request));
      }
      acquireTokenRedirect(request) {
        return from(this.instance.acquireTokenRedirect(request));
      }
      acquireTokenSilent(silentRequest) {
        return from(this.instance.acquireTokenSilent(silentRequest));
      }
      handleRedirectObservable(hash) {
        return from(this.instance.initialize().then(() => this.instance.handleRedirectPromise(hash || this.redirectHash)).finally(() => {
          this.injector.get(MsalBroadcastService).resetInProgressEvent();
        }));
      }
      loginPopup(request) {
        return from(this.instance.loginPopup(request));
      }
      loginRedirect(request) {
        return from(this.instance.loginRedirect(request));
      }
      // @deprecated: Use logoutRedirect or logoutPopup
      logout(logoutRequest) {
        return from(this.instance.logout(logoutRequest));
      }
      logoutRedirect(logoutRequest) {
        return from(this.instance.logoutRedirect(logoutRequest));
      }
      logoutPopup(logoutRequest) {
        return from(this.instance.logoutPopup(logoutRequest));
      }
      ssoSilent(request) {
        return from(this.instance.ssoSilent(request));
      }
      /**
       * Gets logger for msal-angular.
       * If no logger set, returns logger instance created with same options as msal-browser
       */
      getLogger() {
        if (!this.logger) {
          this.logger = this.instance.getLogger().clone(name, version);
        }
        return this.logger;
      }
      // Create a logger instance for msal-angular with the same options as msal-browser
      setLogger(logger) {
        this.logger = logger.clone(name, version);
        this.instance.setLogger(logger);
      }
    };
    MsalService.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: core_exports, type: MsalService, deps: [{ token: MSAL_INSTANCE }, { token: Location }, { token: Injector }], target: FactoryTarget.Injectable });
    MsalService.\u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: core_exports, type: MsalService });
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: core_exports, type: MsalService, decorators: [{
      type: Injectable
    }], ctorParameters: function() {
      return [{ type: void 0, decorators: [{
        type: Inject,
        args: [MSAL_INSTANCE]
      }] }, { type: Location }, { type: Injector }];
    } });
    MsalGuard = class {
      constructor(msalGuardConfig, msalBroadcastService, authService, location, router) {
        this.msalGuardConfig = msalGuardConfig;
        this.msalBroadcastService = msalBroadcastService;
        this.authService = authService;
        this.location = location;
        this.router = router;
        this.msalBroadcastService.inProgress$.subscribe();
      }
      /**
       * Parses url string to UrlTree
       * @param url
       */
      parseUrl(url) {
        return this.router.parseUrl(url);
      }
      /**
       * Builds the absolute url for the destination page
       * @param path Relative path of requested page
       * @returns Full destination url
       */
      getDestinationUrl(path) {
        this.authService.getLogger().verbose("Guard - getting destination url");
        const baseElements = document.getElementsByTagName("base");
        const baseUrl = this.location.normalize(baseElements.length ? baseElements[0].href : window.location.origin);
        const pathUrl = this.location.prepareExternalUrl(path);
        if (pathUrl.startsWith("#")) {
          this.authService.getLogger().verbose("Guard - destination by hash routing");
          return `${baseUrl}/${pathUrl}`;
        }
        return `${baseUrl}${path}`;
      }
      /**
       * Interactively prompt the user to login
       * @param url Path of the requested page
       */
      loginInteractively(state) {
        const authRequest = typeof this.msalGuardConfig.authRequest === "function" ? this.msalGuardConfig.authRequest(this.authService, state) : __spreadValues({}, this.msalGuardConfig.authRequest);
        if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
          this.authService.getLogger().verbose("Guard - logging in by popup");
          return this.authService.loginPopup(authRequest).pipe(map((response) => {
            this.authService.getLogger().verbose("Guard - login by popup successful, can activate, setting active account");
            this.authService.instance.setActiveAccount(response.account);
            return true;
          }));
        }
        this.authService.getLogger().verbose("Guard - logging in by redirect");
        const redirectStartPage = this.getDestinationUrl(state.url);
        return this.authService.loginRedirect(__spreadValues({
          redirectStartPage
        }, authRequest)).pipe(map(() => false));
      }
      /**
       * Helper which checks for the correct interaction type, prevents page with Guard to be set as redirect, and calls handleRedirectObservable
       * @param state
       */
      activateHelper(state) {
        if (this.msalGuardConfig.interactionType !== InteractionType.Popup && this.msalGuardConfig.interactionType !== InteractionType.Redirect) {
          throw new BrowserConfigurationAuthError("invalid_interaction_type", "Invalid interaction type provided to MSAL Guard. InteractionType.Popup or InteractionType.Redirect must be provided in the MsalGuardConfiguration");
        }
        this.authService.getLogger().verbose("MSAL Guard activated");
        if (typeof window !== "undefined") {
          if (UrlString.hashContainsKnownProperties(window.location.hash) && BrowserUtils_exports.isInIframe() && !this.authService.instance.getConfiguration().system.allowRedirectInIframe) {
            this.authService.getLogger().warning("Guard - redirectUri set to page with MSAL Guard. It is recommended to not set redirectUri to a page that requires authentication.");
            return of(false);
          }
        } else {
          this.authService.getLogger().info("Guard - window is undefined, MSAL does not support server-side token acquisition");
          return of(true);
        }
        if (this.msalGuardConfig.loginFailedRoute) {
          this.loginFailedRoute = this.parseUrl(this.msalGuardConfig.loginFailedRoute);
        }
        const currentPath = this.location.path(true);
        return this.authService.initialize().pipe(concatMap(() => {
          return this.authService.handleRedirectObservable();
        }), concatMap(() => {
          if (!this.authService.instance.getAllAccounts().length) {
            if (state) {
              this.authService.getLogger().verbose("Guard - no accounts retrieved, log in required to activate");
              return this.loginInteractively(state);
            }
            this.authService.getLogger().verbose("Guard - no accounts retrieved, no state, cannot load");
            return of(false);
          }
          this.authService.getLogger().verbose("Guard - at least 1 account exists, can activate or load");
          if (state) {
            const urlContainsCode = this.includesCode(state.url);
            const fragmentContainsCode = !!state.root && !!state.root.fragment && this.includesCode(`#${state.root.fragment}`);
            const hashRouting = this.location.prepareExternalUrl(state.url).indexOf("#") === 0;
            if (urlContainsCode && (fragmentContainsCode || hashRouting)) {
              this.authService.getLogger().info("Guard - Hash contains known code response, stopping navigation.");
              if (currentPath.indexOf("#") > -1) {
                return of(this.parseUrl(this.location.path()));
              }
              return of(this.parseUrl(""));
            }
          }
          return of(true);
        }), catchError((error) => {
          this.authService.getLogger().error("Guard - error while logging in, unable to activate");
          this.authService.getLogger().errorPii(`Guard - error: ${error.message}`);
          if (this.loginFailedRoute && state) {
            this.authService.getLogger().verbose("Guard - loginFailedRoute set, redirecting");
            return of(this.loginFailedRoute);
          }
          return of(false);
        }));
      }
      includesCode(path) {
        return path.lastIndexOf("/code") > -1 && path.lastIndexOf("/code") === path.length - "/code".length || // path.endsWith("/code")
        path.indexOf("#code=") > -1 || path.indexOf("&code=") > -1;
      }
      canActivate(route, state) {
        this.authService.getLogger().verbose("Guard - canActivate");
        return this.activateHelper(state);
      }
      canActivateChild(route, state) {
        this.authService.getLogger().verbose("Guard - canActivateChild");
        return this.activateHelper(state);
      }
      canMatch() {
        this.authService.getLogger().verbose("Guard - canLoad");
        return this.activateHelper();
      }
    };
    MsalGuard.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: core_exports, type: MsalGuard, deps: [{ token: MSAL_GUARD_CONFIG }, { token: MsalBroadcastService }, { token: MsalService }, { token: Location }, { token: Router }], target: FactoryTarget.Injectable });
    MsalGuard.\u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: core_exports, type: MsalGuard });
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: core_exports, type: MsalGuard, decorators: [{
      type: Injectable
    }], ctorParameters: function() {
      return [{ type: void 0, decorators: [{
        type: Inject,
        args: [MSAL_GUARD_CONFIG]
      }] }, { type: MsalBroadcastService }, { type: MsalService }, { type: Location }, { type: Router }];
    } });
    MsalInterceptor = class {
      constructor(msalInterceptorConfig, authService, location, msalBroadcastService, document2) {
        this.msalInterceptorConfig = msalInterceptorConfig;
        this.authService = authService;
        this.location = location;
        this.msalBroadcastService = msalBroadcastService;
        this._document = document2;
      }
      intercept(req, next) {
        if (this.msalInterceptorConfig.interactionType !== InteractionType.Popup && this.msalInterceptorConfig.interactionType !== InteractionType.Redirect) {
          throw new BrowserConfigurationAuthError("invalid_interaction_type", "Invalid interaction type provided to MSAL Interceptor. InteractionType.Popup, InteractionType.Redirect must be provided in the msalInterceptorConfiguration");
        }
        this.authService.getLogger().verbose("MSAL Interceptor activated");
        const scopes = this.getScopesForEndpoint(req.url, req.method);
        if (!scopes || scopes.length === 0) {
          this.authService.getLogger().verbose("Interceptor - no scopes for endpoint");
          return next.handle(req);
        }
        let account;
        if (!!this.authService.instance.getActiveAccount()) {
          this.authService.getLogger().verbose("Interceptor - active account selected");
          account = this.authService.instance.getActiveAccount();
        } else {
          this.authService.getLogger().verbose("Interceptor - no active account, fallback to first account");
          account = this.authService.instance.getAllAccounts()[0];
        }
        const authRequest = typeof this.msalInterceptorConfig.authRequest === "function" ? this.msalInterceptorConfig.authRequest(this.authService, req, {
          account
        }) : __spreadProps(__spreadValues({}, this.msalInterceptorConfig.authRequest), { account });
        this.authService.getLogger().info(`Interceptor - ${scopes.length} scopes found for endpoint`);
        this.authService.getLogger().infoPii(`Interceptor - [${scopes}] scopes found for ${req.url}`);
        return this.acquireToken(authRequest, scopes, account).pipe(switchMap((result) => {
          this.authService.getLogger().verbose("Interceptor - setting authorization headers");
          const headers = req.headers.set("Authorization", `Bearer ${result.accessToken}`);
          const requestClone = req.clone({ headers });
          return next.handle(requestClone);
        }));
      }
      /**
       * Try to acquire token silently. Invoke interaction if acquireTokenSilent rejected with error or resolved with null access token
       * @param authRequest Request
       * @param scopes Array of scopes for the request
       * @param account Account
       * @returns Authentication result
       */
      acquireToken(authRequest, scopes, account) {
        return this.authService.acquireTokenSilent(__spreadProps(__spreadValues({}, authRequest), { scopes, account })).pipe(catchError(() => {
          this.authService.getLogger().error("Interceptor - acquireTokenSilent rejected with error. Invoking interaction to resolve.");
          return this.msalBroadcastService.inProgress$.pipe(take(1), switchMap((status) => {
            if (status === InteractionStatus.None) {
              return this.acquireTokenInteractively(authRequest, scopes);
            }
            return this.msalBroadcastService.inProgress$.pipe(filter((status2) => status2 === InteractionStatus.None), take(1), switchMap(() => this.acquireToken(authRequest, scopes, account)));
          }));
        }), switchMap((result) => {
          if (!result.accessToken) {
            this.authService.getLogger().error("Interceptor - acquireTokenSilent resolved with null access token. Known issue with B2C tenants, invoking interaction to resolve.");
            return this.msalBroadcastService.inProgress$.pipe(filter((status) => status === InteractionStatus.None), take(1), switchMap(() => this.acquireTokenInteractively(authRequest, scopes)));
          }
          return of(result);
        }));
      }
      /**
       * Invoke interaction for the given set of scopes
       * @param authRequest Request
       * @param scopes Array of scopes for the request
       * @returns Result from the interactive request
       */
      acquireTokenInteractively(authRequest, scopes) {
        if (this.msalInterceptorConfig.interactionType === InteractionType.Popup) {
          this.authService.getLogger().verbose("Interceptor - error acquiring token silently, acquiring by popup");
          return this.authService.acquireTokenPopup(__spreadProps(__spreadValues({}, authRequest), { scopes }));
        }
        this.authService.getLogger().verbose("Interceptor - error acquiring token silently, acquiring by redirect");
        const redirectStartPage = window.location.href;
        this.authService.acquireTokenRedirect(__spreadProps(__spreadValues({}, authRequest), {
          scopes,
          redirectStartPage
        }));
        return EMPTY;
      }
      /**
       * Looks up the scopes for the given endpoint from the protectedResourceMap
       * @param endpoint Url of the request
       * @param httpMethod Http method of the request
       * @returns Array of scopes, or null if not found
       *
       */
      getScopesForEndpoint(endpoint, httpMethod) {
        this.authService.getLogger().verbose("Interceptor - getting scopes for endpoint");
        const normalizedEndpoint = this.location.normalize(endpoint);
        const protectedResourcesArray = Array.from(this.msalInterceptorConfig.protectedResourceMap.keys());
        const matchingProtectedResources = this.matchResourcesToEndpoint(protectedResourcesArray, normalizedEndpoint);
        if (matchingProtectedResources.length > 0) {
          return this.matchScopesToEndpoint(this.msalInterceptorConfig.protectedResourceMap, matchingProtectedResources, httpMethod);
        }
        return null;
      }
      /**
       * Finds resource endpoints that match request endpoint
       * @param protectedResourcesEndpoints
       * @param endpoint
       * @returns
       */
      matchResourcesToEndpoint(protectedResourcesEndpoints, endpoint) {
        const matchingResources = [];
        protectedResourcesEndpoints.forEach((key) => {
          const normalizedKey = this.location.normalize(key);
          const absoluteKey = this.getAbsoluteUrl(normalizedKey);
          const keyComponents = new URL(absoluteKey);
          const absoluteEndpoint = this.getAbsoluteUrl(endpoint);
          const endpointComponents = new URL(absoluteEndpoint);
          if (this.checkUrlComponents(keyComponents, endpointComponents)) {
            matchingResources.push(key);
          }
        });
        return matchingResources;
      }
      /**
       * Compares URL segments between key and endpoint
       * @param key
       * @param endpoint
       * @returns
       */
      checkUrlComponents(keyComponents, endpointComponents) {
        const urlProperties = ["protocol", "host", "pathname", "search", "hash"];
        for (const property of urlProperties) {
          if (keyComponents[property]) {
            const decodedInput = decodeURIComponent(keyComponents[property]);
            if (!StringUtils.matchPattern(decodedInput, endpointComponents[property])) {
              return false;
            }
          }
        }
        return true;
      }
      /**
       * Transforms relative urls to absolute urls
       * @param url
       * @returns
       */
      getAbsoluteUrl(url) {
        const link = this._document.createElement("a");
        link.href = url;
        return link.href;
      }
      /**
       * Finds scopes from first matching endpoint with HTTP method that matches request
       * @param protectedResourceMap Protected resource map
       * @param endpointArray Array of resources that match request endpoint
       * @param httpMethod Http method of the request
       * @returns
       */
      matchScopesToEndpoint(protectedResourceMap, endpointArray, httpMethod) {
        const allMatchedScopes = [];
        endpointArray.forEach((matchedEndpoint) => {
          const scopesForEndpoint = [];
          const methodAndScopesArray = protectedResourceMap.get(matchedEndpoint);
          if (methodAndScopesArray === null) {
            allMatchedScopes.push(null);
            return;
          }
          methodAndScopesArray.forEach((entry) => {
            if (typeof entry === "string") {
              scopesForEndpoint.push(entry);
            } else {
              const normalizedRequestMethod = httpMethod.toLowerCase();
              const normalizedResourceMethod = entry.httpMethod.toLowerCase();
              if (normalizedResourceMethod === normalizedRequestMethod) {
                if (entry.scopes === null) {
                  allMatchedScopes.push(null);
                } else {
                  entry.scopes.forEach((scope) => {
                    scopesForEndpoint.push(scope);
                  });
                }
              }
            }
          });
          if (scopesForEndpoint.length > 0) {
            allMatchedScopes.push(scopesForEndpoint);
          }
        });
        if (allMatchedScopes.length > 0) {
          if (allMatchedScopes.length > 1) {
            this.authService.getLogger().warning("Interceptor - More than 1 matching scopes for endpoint found.");
          }
          return allMatchedScopes[0];
        }
        return null;
      }
    };
    MsalInterceptor.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: core_exports, type: MsalInterceptor, deps: [{ token: MSAL_INTERCEPTOR_CONFIG }, { token: MsalService }, { token: Location }, { token: MsalBroadcastService }, { token: DOCUMENT }], target: FactoryTarget.Injectable });
    MsalInterceptor.\u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: core_exports, type: MsalInterceptor });
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: core_exports, type: MsalInterceptor, decorators: [{
      type: Injectable
    }], ctorParameters: function() {
      return [{ type: void 0, decorators: [{
        type: Inject,
        args: [MSAL_INTERCEPTOR_CONFIG]
      }] }, { type: MsalService }, { type: Location }, { type: MsalBroadcastService }, { type: void 0, decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }] }];
    } });
    MsalRedirectComponent = class {
      constructor(authService) {
        this.authService = authService;
      }
      ngOnInit() {
        this.authService.getLogger().verbose("MsalRedirectComponent activated");
        this.authService.handleRedirectObservable().subscribe();
      }
    };
    MsalRedirectComponent.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: core_exports, type: MsalRedirectComponent, deps: [{ token: MsalService }], target: FactoryTarget.Component });
    MsalRedirectComponent.\u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: MsalRedirectComponent, selector: "app-redirect", ngImport: core_exports, template: "", isInline: true });
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: core_exports, type: MsalRedirectComponent, decorators: [{
      type: Component,
      args: [{
        selector: "app-redirect",
        template: ""
      }]
    }], ctorParameters: function() {
      return [{ type: MsalService }];
    } });
    MsalModule = class _MsalModule {
      static forRoot(msalInstance, guardConfig, interceptorConfig) {
        return {
          ngModule: _MsalModule,
          providers: [
            {
              provide: MSAL_INSTANCE,
              useValue: msalInstance
            },
            {
              provide: MSAL_GUARD_CONFIG,
              useValue: guardConfig
            },
            {
              provide: MSAL_INTERCEPTOR_CONFIG,
              useValue: interceptorConfig
            },
            MsalService
          ]
        };
      }
    };
    MsalModule.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: core_exports, type: MsalModule, deps: [], target: FactoryTarget.NgModule });
    MsalModule.\u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: core_exports, type: MsalModule, declarations: [MsalRedirectComponent], imports: [CommonModule] });
    MsalModule.\u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: core_exports, type: MsalModule, providers: [MsalGuard, MsalBroadcastService], imports: [CommonModule] });
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: core_exports, type: MsalModule, decorators: [{
      type: NgModule,
      args: [{
        declarations: [MsalRedirectComponent],
        imports: [CommonModule],
        providers: [MsalGuard, MsalBroadcastService]
      }]
    }] });
    MsalCustomNavigationClient = class _MsalCustomNavigationClient extends NavigationClient {
      constructor(authService, router, location) {
        super();
        this.authService = authService;
        this.router = router;
        this.location = location;
      }
      navigateInternal(url, options) {
        return __async(this, null, function* () {
          this.authService.getLogger().trace("MsalCustomNavigationClient called");
          this.authService.getLogger().verbose("MsalCustomNavigationClient - navigating");
          this.authService.getLogger().verbosePii(`MsalCustomNavigationClient - navigating to url: ${url}`);
          if (options.noHistory) {
            return __superGet(_MsalCustomNavigationClient.prototype, this, "navigateInternal").call(this, url, options);
          } else {
            const urlComponents = new UrlString(url).getUrlComponents();
            const newUrl = urlComponents.QueryString ? `${urlComponents.AbsolutePath}?${urlComponents.QueryString}` : this.location.normalize(urlComponents.AbsolutePath);
            yield this.router.navigateByUrl(newUrl, {
              replaceUrl: options.noHistory
            });
          }
          return Promise.resolve(options.noHistory);
        });
      }
    };
    MsalCustomNavigationClient.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: core_exports, type: MsalCustomNavigationClient, deps: [{ token: MsalService }, { token: Router }, { token: Location }], target: FactoryTarget.Injectable });
    MsalCustomNavigationClient.\u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: core_exports, type: MsalCustomNavigationClient });
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: core_exports, type: MsalCustomNavigationClient, decorators: [{
      type: Injectable
    }], ctorParameters: function() {
      return [{ type: MsalService }, { type: Router }, { type: Location }];
    } });
  }
});

// src/app/guards/auth.service.ts
var AuthService;
var init_auth_service = __esm({
  "src/app/guards/auth.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_azure_msal_angular();
    AuthService = class AuthService2 {
      msalService;
      constructor(msalService) {
        this.msalService = msalService;
      }
      getActiveAccount() {
        return this.msalService.instance.getActiveAccount();
      }
      getUserProfile() {
        const account = this.getActiveAccount();
        if (account && account.idTokenClaims) {
          const claims = account.idTokenClaims;
          return {
            id: -1,
            fullName: claims["name"] ?? "",
            email: claims["emails"]?.[0] ?? claims["email"] ?? "",
            role: claims["role"] ?? "Operador",
            phone: claims["phone_number"] ?? "",
            position: claims["position"] ?? "",
            company: claims["company"] ?? "",
            location: claims["location"] ?? "Chile",
            biography: claims["bio"] ?? "",
            avatarUrl: claims["picture"] ?? "https://via.placeholder.com/120",
            username: claims["preferred_username"] ?? claims["unique_name"] ?? ""
          };
        }
        return null;
      }
      static ctorParameters = () => [
        { type: MsalService }
      ];
    };
    AuthService = __decorate([
      Injectable({ providedIn: "root" })
    ], AuthService);
  }
});

// src/app/pages/perfil/perfil.ts
var PerfilComponent;
var init_perfil3 = __esm({
  "src/app/pages/perfil/perfil.ts"() {
    "use strict";
    init_tslib_es6();
    init_perfil();
    init_perfil2();
    init_core();
    init_common();
    init_router();
    init_forms();
    init_auth_service();
    PerfilComponent = class PerfilComponent2 {
      router;
      authService;
      user = {
        id: -1,
        username: "",
        fullName: "",
        email: "",
        role: "",
        phone: "",
        position: "",
        company: "",
        location: "",
        biography: "",
        avatarUrl: "https://via.placeholder.com/120"
      };
      constructor(router, authService) {
        this.router = router;
        this.authService = authService;
      }
      ngOnInit() {
        const profile = this.authService.getUserProfile();
        if (profile) {
          this.user = profile;
        }
      }
      stats = [
        { label: "Obras gestionadas", value: 12 },
        { label: "Registros creados", value: 347 },
        { label: "Reportes generados", value: 28 },
        { label: "D\xEDas activo", value: 156 }
      ];
      activities = [
        {
          title: "Registro de residuos",
          description: "Registr\xF3 15 m\xB3 de escombros en Torre Norte",
          date: "2024-06-15 14:30"
        },
        {
          title: "Reporte generado",
          description: "Gener\xF3 reporte mensual de eficiencia",
          date: "2024-06-14 09:15"
        },
        {
          title: "Nueva obra creada",
          description: 'Registr\xF3 "Edificio Corporativo" en el sistema',
          date: "2024-06-13 16:45"
        }
      ];
      logout() {
        localStorage.clear();
        sessionStorage.clear();
        this.router.navigate(["/login"]);
      }
      static ctorParameters = () => [
        { type: Router },
        { type: AuthService }
      ];
    };
    PerfilComponent = __decorate([
      Component({
        selector: "app-perfil",
        standalone: true,
        imports: [CommonModule, RouterModule, FormsModule],
        template: perfil_default,
        styles: [perfil_default2]
      })
    ], PerfilComponent);
  }
});

// src/app/pages/perfil/perfil.spec.ts
var require_perfil_spec = __commonJS({
  "src/app/pages/perfil/perfil.spec.ts"(exports) {
    init_testing();
    init_perfil3();
    init_router();
    init_auth_service();
    init_router();
    init_esm();
    describe("PerfilComponent", () => {
      let component;
      let fixture;
      let mockRouter;
      let mockAuthService;
      const mockUser = {
        id: 1,
        username: "admin",
        fullName: "Administrador General",
        email: "admin@ecoconstruct.com",
        role: "Admin",
        phone: "123456789",
        position: "Gerente de Proyecto",
        company: "EcoConstruct",
        location: "Santiago, Chile",
        biography: "Responsable de supervisar la operaci\xF3n general.",
        avatarUrl: "https://via.placeholder.com/120"
      };
      beforeEach(() => __async(null, null, function* () {
        mockRouter = jasmine.createSpyObj("Router", ["navigate"]);
        mockAuthService = jasmine.createSpyObj("AuthService", ["getUserProfile"]);
        yield TestBed.configureTestingModule({
          imports: [PerfilComponent],
          providers: [
            { provide: Router, useValue: mockRouter },
            { provide: AuthService, useValue: mockAuthService },
            {
              provide: ActivatedRoute,
              useValue: {
                snapshot: {
                  paramMap: {
                    get: (key) => "mock-id"
                  }
                },
                params: of({ id: "mock-id" })
              }
            }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(PerfilComponent);
        component = fixture.componentInstance;
      }));
      it("deber\xEDa crearse correctamente", () => {
        expect(component).toBeTruthy();
      });
      it("deber\xEDa cargar perfil de usuario en ngOnInit si existe", () => {
        mockAuthService.getUserProfile.and.returnValue(mockUser);
        component.ngOnInit();
        expect(component.user).toEqual(mockUser);
        expect(mockAuthService.getUserProfile).toHaveBeenCalled();
      });
      it("no deber\xEDa modificar el usuario si no hay perfil en AuthService", () => {
        mockAuthService.getUserProfile.and.returnValue(null);
        component.ngOnInit();
        expect(component.user.id).toBe(-1);
        expect(mockAuthService.getUserProfile).toHaveBeenCalled();
      });
      it("deber\xEDa contener estad\xEDsticas predefinidas", () => {
        expect(component.stats.length).toBe(4);
        expect(component.stats[0].label).toBe("Obras gestionadas");
      });
      it("deber\xEDa contener actividades recientes", () => {
        expect(component.activities.length).toBe(3);
        expect(component.activities[0].title).toBe("Registro de residuos");
      });
      it("logout deber\xEDa limpiar el storage y redirigir al login", () => {
        spyOn(localStorage, "clear");
        spyOn(sessionStorage, "clear");
        component.logout();
        expect(localStorage.clear).toHaveBeenCalled();
        expect(sessionStorage.clear).toHaveBeenCalled();
        expect(mockRouter.navigate).toHaveBeenCalledWith(["/login"]);
      });
    });
  }
});
export default require_perfil_spec();
/*! Bundled license information:

@azure/msal-common/dist/utils/Constants.mjs:
@azure/msal-common/dist/error/AuthErrorCodes.mjs:
@azure/msal-common/dist/error/AuthError.mjs:
@azure/msal-common/dist/error/ClientAuthErrorCodes.mjs:
@azure/msal-common/dist/error/ClientAuthError.mjs:
@azure/msal-common/dist/error/ClientConfigurationErrorCodes.mjs:
@azure/msal-common/dist/error/ClientConfigurationError.mjs:
@azure/msal-common/dist/utils/StringUtils.mjs:
@azure/msal-common/dist/utils/UrlUtils.mjs:
@azure/msal-common/dist/url/UrlString.mjs:
@azure/msal-common/dist/utils/FunctionWrappers.mjs:
@azure/msal-common/dist/index-browser.mjs:
  (*! @azure/msal-common v15.8.0 2025-07-01 *)

@azure/msal-browser/dist/error/BrowserAuthErrorCodes.mjs:
@azure/msal-browser/dist/error/BrowserAuthError.mjs:
@azure/msal-browser/dist/utils/BrowserConstants.mjs:
@azure/msal-browser/dist/crypto/BrowserCrypto.mjs:
@azure/msal-browser/dist/error/BrowserConfigurationAuthErrorCodes.mjs:
@azure/msal-browser/dist/error/BrowserConfigurationAuthError.mjs:
@azure/msal-browser/dist/utils/BrowserUtils.mjs:
@azure/msal-browser/dist/navigation/NavigationClient.mjs:
@azure/msal-browser/dist/event/EventType.mjs:
@azure/msal-browser/dist/event/EventMessage.mjs:
@azure/msal-browser/dist/index.mjs:
  (*! @azure/msal-browser v4.14.0 2025-07-01 *)
*/
//# sourceMappingURL=spec-perfil.spec.js.map
