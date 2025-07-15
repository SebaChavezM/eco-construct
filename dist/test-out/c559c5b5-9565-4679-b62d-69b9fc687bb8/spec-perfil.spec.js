import {
  RouterTestingModule,
  init_testing as init_testing2
} from "./chunk-UYDCWK2M.js";
import "./chunk-3TYAAIUR.js";
import {
  FormsModule,
  init_forms
} from "./chunk-F2W3QBU3.js";
import {
  Router,
  RouterModule,
  init_router
} from "./chunk-ERWER4IP.js";
import {
  CommonModule,
  init_common
} from "./chunk-WITBNL6W.js";
import {
  HttpClient,
  HttpHeaders,
  init_http
} from "./chunk-DBD3S2RT.js";
import {
  Component,
  Injectable,
  TestBed,
  __decorate,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  map,
  of,
  throwError
} from "./chunk-IH5F2UGT.js";
import {
  __async,
  __commonJS,
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\pages\perfil\perfil.html
var perfil_default;
var init_perfil = __esm({
  "angular:jit:template:src\\app\\pages\\perfil\\perfil.html"() {
    perfil_default = `<div class="d-flex vh-100 overflow-hidden">\r
\r
  <aside class="sidebar text-white flex-shrink-0 p-3" style="width:240px">\r
  <div class="d-flex align-items-center mb-4">\r
    <i class="bi bi-leaf-fill fs-4 me-2"></i>\r
    <span class="h5 mb-0">EcoConstruct</span>\r
  </div>\r
\r
  <nav class="nav flex-column">\r
\r
    <small class="text-uppercase text-white-50 mb-2">Principal</small>\r
\r
    <a\r
      routerLink="/dashboard"\r
      routerLinkActive="active"\r
      [routerLinkActiveOptions]="{ exact: true }"\r
      class="nav-link text-white"\r
    >\r
      <i class="bi bi-speedometer2 me-2"></i>\r
      Dashboard\r
    </a>\r
\r
    <a\r
      routerLink="/gestion-obras"\r
      routerLinkActive="active"\r
      class="nav-link text-white"\r
    >\r
      <i class="bi bi-building me-2"></i>\r
      Gesti\xF3n de Obras\r
    </a>\r
\r
    <a\r
      routerLink="/registro-residuos"\r
      routerLinkActive="active"\r
      class="nav-link text-white"\r
    >\r
      <i class="bi bi-card-checklist me-2"></i>\r
      Registro de Residuos\r
    </a>\r
\r
    <a\r
      routerLink="/transporte"\r
      routerLinkActive="active"\r
      class="nav-link text-white"\r
    >\r
      <i class="bi bi-truck me-2"></i>\r
      Transporte\r
    </a>\r
\r
    <a\r
      routerLink="/inventario"\r
      routerLinkActive="active"\r
      class="nav-link text-white"\r
    >\r
      <i class="bi bi-box-seam me-2"></i>\r
      Inventario\r
    </a>\r
\r
    <a\r
      routerLink="/historial-trazabilidad"\r
      routerLinkActive="active"\r
      class="nav-link text-white"\r
    >\r
      <i class="bi bi-clock-history me-2"></i>\r
      Historial y Trazabilidad\r
    </a>\r
\r
    <a\r
      routerLink="/reportes"\r
      routerLinkActive="active"\r
      class="nav-link text-white"\r
    >\r
      <i class="bi bi-bar-chart me-2"></i>\r
      Reportes\r
    </a>\r
\r
    <hr class="border-light">\r
\r
    <small class="text-uppercase text-white-50 mb-2">Sistema</small>\r
    <a\r
      routerLink="/perfil"\r
      routerLinkActive="active"\r
      class="nav-link text-white"\r
    >\r
      <i class="bi bi-person-circle me-2"></i>\r
      Perfil\r
    </a>\r
          <a routerLink="/usuarios"\r
         routerLinkActive="active"\r
         class="nav-link text-white mt-2">\r
        <i class="bi bi-people me-2"></i>Usuarios\r
    </a>\r
    <a\r
      href="#"\r
      (click)="logout()"\r
      class="nav-link text-white mt-2"\r
    >\r
      <i class="bi bi-box-arrow-right me-2"></i>\r
      Cerrar Sesi\xF3n\r
    </a>\r
  </nav>\r
</aside>\r
\r
  <main class="flex-grow-1 overflow-auto p-4">\r
    <div class="d-flex justify-content-between align-items-center mb-4">\r
      <div>\r
        <h2 class="h3 mb-1">Perfil de Usuario</h2>\r
        <small class="text-muted">Gestiona tu informaci\xF3n personal y configuraci\xF3n de cuenta</small>\r
      </div>\r
      <button class="btn btn-success">\r
        <i class="bi bi-pencil me-1"></i>Editar Perfil\r
      </button>\r
    </div>\r
\r
    <div class="row gx-4 gy-4">\r
      <div class="col-12 col-lg-8">\r
        <div class="card mb-4 shadow-sm">\r
          <div class="card-body">\r
            <h5 class="mb-3">\r
              <i class="bi bi-person-circle me-2"></i>Informaci\xF3n Personal\r
            </h5>\r
            <small class="text-muted">\r
              Datos b\xE1sicos de tu cuenta en EcoConstruct\r
            </small>\r
\r
            <div class="d-flex align-items-center mt-4 mb-3">\r
              <img\r
                [src]="user?.avatarUrl"\r
                alt="Avatar"\r
                class="rounded-circle border me-4"\r
                width="80"\r
                height="80"\r
              />\r
              <div>\r
                <div class="fw-bold fs-5">{{ user?.fullName }}</div>\r
                <div class="text-muted small mb-2">{{ user?.email }}</div>\r
                <span class="badge bg-success bg-opacity-10 text-success">\r
                  {{ user?.role }}\r
                </span>\r
              </div>\r
            </div>\r
\r
            <hr />\r
\r
            <form class="row g-3">\r
              <div class="col-6">\r
                <label class="form-label">Nombre Completo</label>\r
                <input type="text" class="form-control" [value]="user?.fullName" readonly />\r
              </div>\r
              <div class="col-6">\r
                <label class="form-label">Email</label>\r
                <input type="email" class="form-control" [value]="user?.email" readonly />\r
              </div>\r
              <div class="col-6">\r
                <label class="form-label">Tel\xE9fono</label>\r
                <input type="text" class="form-control" [value]="''" readonly />\r
              </div>\r
              <div class="col-6">\r
                <label class="form-label">Cargo</label>\r
                <input type="text" class="form-control" [value]="user?.position" readonly />\r
              </div>\r
              <div class="col-6">\r
                <label class="form-label">Empresa</label>\r
                <input type="text" class="form-control" [value]="user?.company" readonly />\r
              </div>\r
              <div class="col-6">\r
                <label class="form-label">Ubicaci\xF3n</label>\r
                <input type="text" class="form-control" [value]="user?.location" readonly />\r
              </div>\r
              <div class="col-12">\r
                <label class="form-label">Biograf\xEDa</label>\r
                <textarea class="form-control" rows="3" readonly>{{ user?.biography }}</textarea>\r
              </div>\r
            </form>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="col-12 col-lg-4">\r
        <div class="card mb-4 shadow-sm">\r
          <div class="card-body">\r
            <h5 class="mb-3">\r
              <i class="bi bi-envelope me-2"></i>Informaci\xF3n de Contacto\r
            </h5>\r
            <p class="mb-2"><i class="bi bi-envelope me-1"></i>{{ user?.email }}</p>\r
            <p class="mb-2"><i class="bi bi-telephone me-1"></i>{{ '' }}</p>\r
            <p class="mb-2"><i class="bi bi-geo-alt me-1"></i>{{ user?.location }}</p>\r
            <p class="mb-0"><i class="bi bi-building me-1"></i>{{ user?.company }}</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </main>\r
</div>\r
`;
  }
});

// angular:jit:style:src\app\pages\perfil\perfil.css
var perfil_default2;
var init_perfil2 = __esm({
  "angular:jit:style:src\\app\\pages\\perfil\\perfil.css"() {
    perfil_default2 = "/* src/app/pages/perfil/perfil.css */\n.sidebar {\n  width: 240px;\n  background-color: #16a249;\n  color: white;\n  padding: 2rem 1rem;\n  display: flex;\n  flex-direction: column;\n}\n.logo-icon {\n  font-size: 1.5rem;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 2rem;\n}\n.brand-name {\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.nav-section {\n  flex: 1;\n}\n.nav-section-title {\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  opacity: 0.7;\n  margin: 1rem 0 0.5rem;\n}\n.nav-link {\n  color: white;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.25rem 0;\n  text-decoration: none;\n  transition: opacity .2s;\n}\n.nav-link.active,\n.nav-link:hover {\n  opacity: 0.8;\n}\n.card-body h5 {\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding: .375rem .75rem;\n  margin-bottom: 0;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: .25rem;\n}\n.avatar-placeholder,\n.rounded-circle {\n  object-fit: cover;\n}\nh2.h3 {\n  font-size: 1.75rem;\n  font-weight: 600;\n}\n/*# sourceMappingURL=perfil.css.map */\n";
  }
});

// src/app/guards/auth.service.ts
var AuthService;
var init_auth_service = __esm({
  "src/app/guards/auth.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    init_esm();
    AuthService = class AuthService2 {
      http;
      apiUrl = "http://74.249.29.180:8080/api/users/me";
      constructor(http) {
        this.http = http;
      }
      getUserProfile() {
        const token = localStorage.getItem("access_token");
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`
        });
        return this.http.get(this.apiUrl, { headers }).pipe(map((data) => {
          return {
            id: data.id,
            username: data.username,
            fullName: data.name,
            email: data.email,
            role: data.role,
            phone: "",
            // si no viene desde backend
            position: data.position,
            company: data.company,
            location: data.address,
            biography: data.biography,
            avatarUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            // tu imagen por defecto
          };
        }));
      }
      static ctorParameters = () => [
        { type: HttpClient }
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
      user = null;
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
      constructor(router, authService) {
        this.router = router;
        this.authService = authService;
      }
      ngOnInit() {
        this.authService.getUserProfile().subscribe({
          next: (profile) => {
            this.user = __spreadProps(__spreadValues({}, profile), {
              avatarUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            });
          },
          error: (err) => {
            console.error("Error al cargar perfil:", err);
          }
        });
      }
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
    init_esm();
    init_auth_service();
    init_testing2();
    describe("PerfilComponent", () => {
      let component;
      let fixture;
      let authServiceSpy;
      let routerSpy;
      beforeEach(() => __async(null, null, function* () {
        authServiceSpy = jasmine.createSpyObj("AuthService", ["getUserProfile"]);
        routerSpy = jasmine.createSpyObj("Router", ["navigate"]);
        yield TestBed.configureTestingModule({
          imports: [PerfilComponent, RouterTestingModule],
          providers: [
            { provide: AuthService, useValue: authServiceSpy },
            { provide: Router, useValue: routerSpy }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(PerfilComponent);
        component = fixture.componentInstance;
      }));
      it("should create the component", () => {
        expect(component).toBeTruthy();
      });
      it("should set user on ngOnInit success", () => {
        const mockUser = {
          id: 1,
          username: "sebastian",
          password: "",
          role: "admin",
          fullName: "Sebasti\xE1n Ch\xE1vez",
          email: "sebastian@example.com",
          position: "Ingeniero",
          company: "Praxa",
          address: "Concepci\xF3n",
          phone: "123456789",
          location: "Chile",
          biography: "Desarrollador de software",
          createdAt: "",
          updatedAt: "",
          avatarUrl: ""
        };
        authServiceSpy.getUserProfile.and.returnValue(of(mockUser));
        fixture.detectChanges();
        expect(component.user).toBeTruthy();
        expect(component.user.fullName).toBe("Sebasti\xE1n Ch\xE1vez");
        expect(component.user.avatarUrl).toContain("cdn-icons-png");
      });
      it("should handle error on ngOnInit failure", () => {
        spyOn(console, "error");
        authServiceSpy.getUserProfile.and.returnValue(throwError(() => new Error("Error")));
        fixture.detectChanges();
        expect(component.user).toBeNull();
        expect(console.error).toHaveBeenCalled();
      });
      it("should clear storage and navigate on logout", () => {
        localStorage.setItem("key", "value");
        sessionStorage.setItem("key", "value");
        component.logout();
        expect(localStorage.getItem("key")).toBeNull();
        expect(sessionStorage.getItem("key")).toBeNull();
        expect(routerSpy.navigate).toHaveBeenCalledWith(["/login"]);
      });
    });
  }
});
export default require_perfil_spec();
//# sourceMappingURL=spec-perfil.spec.js.map
