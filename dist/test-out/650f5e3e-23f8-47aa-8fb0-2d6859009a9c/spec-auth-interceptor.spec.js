import {
  HTTP_INTERCEPTORS,
  HttpRequest,
  init_http
} from "./chunk-DBD3S2RT.js";
import {
  Injectable,
  TestBed,
  __decorate,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  of
} from "./chunk-IH5F2UGT.js";
import "./chunk-TTULUY32.js";

// src/app/auth-interceptor.spec.ts
init_testing();
init_http();

// src/app/auth-interceptor.ts
init_tslib_es6();
init_core();
var AuthInterceptor = class AuthInterceptor2 {
  intercept(req, next) {
    const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE3NTE2Nzc2NzUsIm5iZiI6MTc1MTY3NDA3NSwidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly9waW5vbGlzby5iMmNsb2dpbi5jb20vNTRiNjQ3MDMtNWNhZS00NWNmLTg4NTItZWU2MWNiNmQyNWY4L3YyLjAvIiwic3ViIjoiNWIyOTc5YmQtNGQ2Zi00ZTI2LWE5ZTYtMDliZDI5NDQ1NTI5IiwiYXVkIjoiODk5NTQ2MDgtY2YxMi00NzE5LTg3OTItNTQ2OGFkNDJjYmZkIiwibm9uY2UiOiJkZWZhdWx0Tm9uY2UiLCJpYXQiOjE3NTE2NzQwNzUsImF1dGhfdGltZSI6MTc1MTY3NDA3NSwiZ2l2ZW5fbmFtZSI6IlNlYmFzdGlhbiIsImZhbWlseV9uYW1lIjoiTXVzcmUiLCJ0ZnAiOiJCMkNfMV9sb2dpbiJ9.dnKaRU3krOtVMlLbqXKcMfJRc3hHZCXXPdvzI5tTY19MF9kFH03qHA-p1ezX8IKuZDzuvcu2MDaL-Qn5DeMqoJWN38JRd6AqLawQBQkHhWqBUC7IvILVQwsJS0Qs8InyszSTZXIJ-LcMLoztUqU_jHsPlDAfNeiN6QYofFz7Kv4ShRo_jS1Edc48Iru7tjHPZP24gIuSakoIwxhESuv8iCrFUit958sHgYdSoHIIypRWpGytF3y2h0rBNVK69qxt06P9lrZGF4o7pk7DAJClLM93r2fjaNjJDKAZ9vLsh7kPL-M0m2bUR-daLmE0Hb9OgxUGqIw2PEFwY1EURuX3yQ";
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(authReq);
  }
};
AuthInterceptor = __decorate([
  Injectable()
], AuthInterceptor);

// src/app/auth-interceptor.spec.ts
init_esm();
describe("AuthInterceptor", () => {
  let interceptor;
  const dummyToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE3NTE2Nzc2NzUsIm5iZiI6MTc1MTY3NDA3NSwidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly9waW5vbGlzby5iMmNsb2dpbi5jb20vNTRiNjQ3MDMtNWNhZS00NWNmLTg4NTItZWU2MWNiNmQyNWY4L3YyLjAvIiwic3ViIjoiNWIyOTc5YmQtNGQ2Zi00ZTI2LWE5ZTYtMDliZDI5NDQ1NTI5IiwiYXVkIjoiODk5NTQ2MDgtY2YxMi00NzE5LTg3OTItNTQ2OGFkNDJjYmZkIiwibm9uY2UiOiJkZWZhdWx0Tm9uY2UiLCJpYXQiOjE3NTE2NzQwNzUsImF1dGhfdGltZSI6MTc1MTY3NDA3NSwiZ2l2ZW5fbmFtZSI6IlNlYmFzdGlhbiIsImZhbWlseV9uYW1lIjoiTXVzcmUiLCJ0ZnAiOiJCMkNfMV9sb2dpbiJ9.dnKaRU3krOtVMlLbqXKcMfJRc3hHZCXXPdvzI5tTY19MF9kFH03qHA-p1ezX8IKuZDzuvcu2MDaL-Qn5DeMqoJWN38JRd6AqLawQBQkHhWqBUC7IvILVQwsJS0Qs8InyszSTZXIJ-LcMLoztUqU_jHsPlDAfNeiN6QYofFz7Kv4ShRo_jS1Edc48Iru7tjHPZP24gIuSakoIwxhESuv8iCrFUit958sHgYdSoHIIypRWpGytF3y2h0rBNVK69qxt06P9lrZGF4o7pk7DAJClLM93r2fjaNjJDKAZ9vLsh7kPL-M0m2bUR-daLmE0Hb9OgxUGqIw2PEFwY1EURuX3yQ";
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        }
      ]
    });
    interceptor = TestBed.inject(AuthInterceptor);
  });
  it("deber\xEDa agregar el token de autorizaci\xF3n al header", (done) => {
    const mockRequest = new HttpRequest("GET", "/api/test");
    const mockHandler = {
      handle: (req) => {
        expect(req.headers.has("Authorization")).toBeTrue();
        expect(req.headers.get("Authorization")).toBe(`Bearer ${dummyToken}`);
        done();
        return of({});
      }
    };
    interceptor.intercept(mockRequest, mockHandler).subscribe();
  });
  it("deber\xEDa clonar correctamente la solicitud original", (done) => {
    const request = new HttpRequest("POST", "/api/submit", { data: "test" });
    const mockHandler = {
      handle: (req) => {
        expect(req.method).toBe("POST");
        expect(req.url).toBe("/api/submit");
        expect(req.body).toEqual({ data: "test" });
        expect(req.headers.get("Authorization")).toBe(`Bearer ${dummyToken}`);
        done();
        return of({});
      }
    };
    interceptor.intercept(request, mockHandler).subscribe();
  });
});
//# sourceMappingURL=spec-auth-interceptor.spec.js.map
