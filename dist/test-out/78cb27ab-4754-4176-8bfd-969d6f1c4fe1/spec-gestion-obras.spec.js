import {
  Router,
  RouterModule,
  init_router
} from "./chunk-I2KOT444.js";
import {
  CommonModule,
  init_common
} from "./chunk-6LR7LCV7.js";
import "./chunk-KRHRSQJI.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-VPLQVZLL.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-SR4DERTU.js";

// angular:jit:template:src\app\pages\gestion-obras\gestion-obras.html
var gestion_obras_default;
var init_gestion_obras = __esm({
  "angular:jit:template:src\\app\\pages\\gestion-obras\\gestion-obras.html"() {
    gestion_obras_default = `<div class="d-flex vh-100 overflow-hidden">\r
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
\r
    <div class="d-flex justify-content-between align-items-center mb-4">\r
      <div>\r
        <h2 class="h4 mb-1">Gesti\xF3n de Obras</h2>\r
        <small class="text-muted">\r
          Administra y supervisa todas las obras de construcci\xF3n\r
        </small>\r
      </div>\r
    <button\r
      class="btn btn-success"\r
      routerLink="/gestion-obras/nueva"\r
    >\r
    <i class="bi bi-plus-lg me-1"></i> Nueva Obra\r
    </button>\r
    </div>\r
\r
    <div class="row gy-4">\r
      <div class="col-12" *ngFor="let obra of obras">\r
        <div class="card obra-card p-4 shadow-sm">\r
          <div class="d-flex justify-content-between align-items-start">\r
            <div>\r
              <h5 class="mb-1">\r
                <i class="bi bi-building me-2"></i>{{ obra.titulo }}\r
              </h5>\r
              <div class="text-muted small">\r
                <i class="bi bi-geo-alt me-1"></i>{{ obra.ubicacion }}\r
                <span class="mx-2">|</span>\r
                <i class="bi bi-people me-1"></i>{{ obra.constructora }}\r
                <span class="mx-2">|</span>\r
                <i class="bi bi-calendar-event me-1"></i>\r
                {{ obra.fechaInicio }} \u2013 {{ obra.fechaFin }}\r
              </div>\r
            </div>\r
            <span class="badge"\r
                  [class.bg-success]="obra.estado==='En progreso'"\r
                  [class.bg-secondary]="obra.estado==='Finalizando'">\r
              {{ obra.estado }}\r
            </span>\r
          </div>\r
\r
          <hr class="my-3">\r
\r
          <div class="d-flex justify-content-between align-items-center flex-wrap">\r
            <div>\r
              <small class="text-muted">Encargado Ambiental</small>\r
              <div>{{ obra.encargado }}</div>\r
            </div>\r
            <div class="btn-group">\r
              <button class="btn btn-outline-secondary btn-sm">\r
                <i class="bi bi-eye me-1"></i> Ver Detalles\r
              </button>\r
              <button class="btn btn-outline-secondary btn-sm">\r
                <i class="bi bi-pencil me-1"></i> Editar\r
              </button>\r
            </div>\r
            <div class="d-flex align-items-center">\r
              <div class="progress me-2" style="width:180px; height:.6rem;">\r
                <div class="progress-bar bg-success" role="progressbar"\r
                     [style.width.%]="obra.progreso">\r
                </div>\r
              </div>\r
              <small>{{ obra.progreso }}%</small>\r
            </div>\r
            <div class="text-end">\r
              <small class="text-muted">Total Residuos</small>\r
              <div>{{ obra.totalResiduos }} m\xB3</div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </main>\r
</div>\r
`;
  }
});

// angular:jit:style:src\app\pages\gestion-obras\gestion-obras.css
var gestion_obras_default2;
var init_gestion_obras2 = __esm({
  "angular:jit:style:src\\app\\pages\\gestion-obras\\gestion-obras.css"() {
    gestion_obras_default2 = "/* src/app/pages/gestion-obras/gestion-obras.css */\n.sidebar {\n  width: 240px;\n  background-color: #16a249;\n  color: white;\n  padding: 2rem 1rem;\n  display: flex;\n  flex-direction: column;\n}\n.logo-icon {\n  font-size: 1.5rem;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 2rem;\n}\n.brand-name {\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.nav-section {\n  flex: 1;\n}\n.nav-section-title {\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  opacity: 0.7;\n  margin: 1rem 0 0.5rem;\n}\n.nav-link {\n  color: white;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.25rem 0;\n  text-decoration: none;\n  transition: opacity .2s;\n}\n.nav-link.active,\n.nav-link:hover {\n  opacity: 0.8;\n}\n.obra-card {\n  border-radius: .75rem;\n}\n.obra-card h5 {\n  font-weight: 600;\n}\n.obra-card .badge {\n  font-size: .75rem;\n  text-transform: none;\n  padding: .4em .8em;\n}\n.progress {\n  background-color: #e9ecef;\n}\n.progress-bar {\n  transition: width .6s ease;\n}\n@media (max-width: 576px) {\n  .obra-card .d-flex.flex-wrap {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .obra-card .progress {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=gestion-obras.css.map */\n";
  }
});

// src/app/pages/gestion-obras/gestion-obras.ts
var GestionObrasComponent;
var init_gestion_obras3 = __esm({
  "src/app/pages/gestion-obras/gestion-obras.ts"() {
    "use strict";
    init_tslib_es6();
    init_gestion_obras();
    init_gestion_obras2();
    init_core();
    init_common();
    init_router();
    GestionObrasComponent = class GestionObrasComponent2 {
      router;
      constructor(router) {
        this.router = router;
      }
      obras = [
        {
          id: 1,
          titulo: "Torre Residencial Norte",
          ubicacion: "Las Condes, Santiago",
          constructora: "Constructora ABC",
          fechaInicio: "2024-01-15",
          fechaFin: "2024-12-30",
          encargado: "Juan P\xE9rez",
          progreso: 78,
          totalResiduos: 245,
          estado: "En progreso"
        },
        {
          id: 2,
          titulo: "Centro Comercial Plaza",
          ubicacion: "Providencia, Santiago",
          constructora: "Ingenier\xEDa XYZ",
          fechaInicio: "2024-02-01",
          fechaFin: "2025-01-15",
          encargado: "Mar\xEDa Garc\xEDa",
          progreso: 45,
          totalResiduos: 158,
          estado: "En progreso"
        },
        {
          id: 3,
          titulo: "Edificio Corporativo",
          ubicacion: "Vitacura, Santiago",
          constructora: "Construcciones DEF",
          fechaInicio: "2023-10-01",
          fechaFin: "2024-03-30",
          encargado: "Carlos L\xF3pez",
          progreso: 92,
          totalResiduos: 89,
          estado: "Finalizando"
        }
      ];
      logout() {
        localStorage.clear();
        sessionStorage.clear();
        this.router.navigate(["/login"]);
      }
      static ctorParameters = () => [
        { type: Router }
      ];
    };
    GestionObrasComponent = __decorate([
      Component({
        selector: "app-gestion-obras",
        standalone: true,
        imports: [CommonModule, RouterModule],
        template: gestion_obras_default,
        styles: [gestion_obras_default2]
      })
    ], GestionObrasComponent);
  }
});

// src/app/pages/gestion-obras/gestion-obras.spec.ts
var require_gestion_obras_spec = __commonJS({
  "src/app/pages/gestion-obras/gestion-obras.spec.ts"(exports) {
    init_testing();
    init_gestion_obras3();
    init_router();
    describe("GestionObrasComponent", () => {
      let component;
      let fixture;
      let mockRouter;
      beforeEach(() => __async(null, null, function* () {
        mockRouter = jasmine.createSpyObj("Router", ["navigate"]);
        yield TestBed.configureTestingModule({
          imports: [GestionObrasComponent],
          providers: [
            { provide: Router, useValue: mockRouter }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(GestionObrasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("deber\xEDa crearse correctamente", () => {
        expect(component).toBeTruthy();
      });
      it("deber\xEDa tener 3 obras inicializadas", () => {
        expect(component.obras.length).toBe(3);
      });
      it('deber\xEDa contener una obra con t\xEDtulo "Torre Residencial Norte"', () => {
        const obra = component.obras.find((o) => o.titulo === "Torre Residencial Norte");
        expect(obra).toBeDefined();
        expect(obra?.ubicacion).toBe("Las Condes, Santiago");
      });
      it("logout deber\xEDa limpiar sesi\xF3n y redirigir al login", () => {
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
export default require_gestion_obras_spec();
//# sourceMappingURL=spec-gestion-obras.spec.js.map
