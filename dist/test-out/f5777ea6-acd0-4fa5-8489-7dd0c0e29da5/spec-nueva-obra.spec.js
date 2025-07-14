import {
  FormsModule,
  init_forms
} from "./chunk-LWUI33G6.js";
import {
  Router,
  RouterModule,
  init_router
} from "./chunk-ZHFWKCYD.js";
import {
  CommonModule,
  init_common
} from "./chunk-LISOCWOP.js";
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

// angular:jit:template:src\app\pages\gestion-obras\nueva-obra\nueva-obra.html
var nueva_obra_default;
var init_nueva_obra = __esm({
  "angular:jit:template:src\\app\\pages\\gestion-obras\\nueva-obra\\nueva-obra.html"() {
    nueva_obra_default = '<div class="d-flex vh-100 overflow-hidden">\r\n\r\n<aside class="sidebar text-white flex-shrink-0 p-3" style="width:240px">\r\n  <div class="d-flex align-items-center mb-4">\r\n    <i class="bi bi-leaf-fill fs-4 me-2"></i>\r\n    <span class="h5 mb-0">EcoConstruct</span>\r\n  </div>\r\n\r\n  <nav class="nav flex-column">\r\n\r\n    <small class="text-uppercase text-white-50 mb-2">Principal</small>\r\n\r\n    <a\r\n      routerLink="/dashboard"\r\n      routerLinkActive="active"\r\n      [routerLinkActiveOptions]="{ exact: true }"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-speedometer2 me-2"></i>\r\n      Dashboard\r\n    </a>\r\n\r\n    <a\r\n      routerLink="/gestion-obras"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-building me-2"></i>\r\n      Gesti\xF3n de Obras\r\n    </a>\r\n\r\n    <a\r\n      routerLink="/registro-residuos"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-card-checklist me-2"></i>\r\n      Registro de Residuos\r\n    </a>\r\n\r\n    <a\r\n      routerLink="/transporte"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-truck me-2"></i>\r\n      Transporte\r\n    </a>\r\n\r\n    <a\r\n      routerLink="/historial-trazabilidad"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-clock-history me-2"></i>\r\n      Historial y Trazabilidad\r\n    </a>\r\n\r\n    <a\r\n      routerLink="/reportes"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-bar-chart me-2"></i>\r\n      Reportes\r\n    </a>\r\n\r\n    <hr class="border-light">\r\n\r\n    <small class="text-uppercase text-white-50 mb-2">Sistema</small>\r\n    <a\r\n      routerLink="/perfil"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-person-circle me-2"></i>\r\n      Perfil\r\n    </a>\r\n    <a\r\n      routerLink="/configuracion"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-gear me-2"></i>\r\n      Configuraci\xF3n\r\n    </a>\r\n          <a routerLink="/usuarios"\r\n         routerLinkActive="active"\r\n         class="nav-link text-white mt-2">\r\n        <i class="bi bi-people me-2"></i>Usuarios\r\n      </a>\r\n  </nav>\r\n</aside>\r\n\r\n  <main class="flex-grow-1 p-4 overflow-auto">\r\n    <button class="btn btn-outline-secondary mb-3" (click)="cancelar()">\r\n      \u2190 Volver\r\n    </button>\r\n\r\n    <h2>Nueva Obra</h2>\r\n    <small class="text-muted d-block mb-4">\r\n      Registra una nueva obra de construcci\xF3n en el sistema\r\n    </small>\r\n\r\n    <div class="card shadow-sm">\r\n      <div class="card-body">\r\n        <h5 class="card-title mb-4">Informaci\xF3n de la Obra</h5>\r\n\r\n        <form (ngSubmit)="crearObra()" #f="ngForm">\r\n          <div class="row g-3">\r\n            <div class="col-md-6">\r\n              <label class="form-label">Nombre de la Obra *</label>\r\n              <input type="text" class="form-control" required\r\n                     [(ngModel)]="obra.nombre" name="nombre"\r\n                     placeholder="Ej: Torre Residencial Norte">\r\n            </div>\r\n            <div class="col-md-6">\r\n              <label class="form-label">Ubicaci\xF3n *</label>\r\n              <input type="text" class="form-control" required\r\n                     [(ngModel)]="obra.ubicacion" name="ubicacion"\r\n                     placeholder="Ej: Las Condes, Santiago">\r\n            </div>\r\n\r\n            <div class="col-md-6">\r\n              <label class="form-label">Constructora *</label>\r\n              <input type="text" class="form-control" required\r\n                     [(ngModel)]="obra.constructora" name="constructora"\r\n                     placeholder="Ej: Constructora ABC">\r\n            </div>\r\n            <div class="col-md-6">\r\n              <label class="form-label">Encargado Ambiental *</label>\r\n              <input type="text" class="form-control" required\r\n                     [(ngModel)]="obra.encargado" name="encargado"\r\n                     placeholder="Ej: Juan P\xE9rez">\r\n            </div>\r\n\r\n            <div class="col-md-6">\r\n              <label class="form-label">Fecha de Inicio *</label>\r\n              <input type="date" class="form-control" required\r\n                     [(ngModel)]="obra.fechaInicio" name="fechaInicio">\r\n            </div>\r\n            <div class="col-md-6">\r\n              <label class="form-label">Fecha de Finalizaci\xF3n Estimada *</label>\r\n              <input type="date" class="form-control" required\r\n                     [(ngModel)]="obra.fechaFin" name="fechaFin">\r\n            </div>\r\n\r\n            <div class="col-md-6">\r\n              <label class="form-label">Tipo de Obra *</label>\r\n              <select class="form-select" required\r\n                      [(ngModel)]="obra.tipo" name="tipo">\r\n                <option value="" disabled selected>Seleccionar tipo</option>\r\n                <option *ngFor="let t of tipos" [value]="t">{{ t }}</option>\r\n              </select>\r\n            </div>\r\n            <div class="col-md-6">\r\n              <label class="form-label">Estado Inicial</label>\r\n              <select class="form-select"\r\n                      [(ngModel)]="obra.estado" name="estado">\r\n                <option value="" disabled selected>Seleccionar estado</option>\r\n                <option *ngFor="let s of estados" [value]="s">{{ s }}</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class="col-12">\r\n              <label class="form-label">Descripci\xF3n</label>\r\n              <textarea class="form-control" rows="4"\r\n                        [(ngModel)]="obra.descripcion" name="descripcion"\r\n                        placeholder="Descripci\xF3n detallada de la obra (opcional)"></textarea>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="mt-4 d-flex gap-2">\r\n            <button type="submit" class="btn btn-success" [disabled]="f.invalid">\r\n              <i class="bi bi-save me-1"></i>Crear Obra\r\n            </button>\r\n            <button type="button" class="btn btn-outline-secondary" (click)="cancelar()">Cancelar</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </main>\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\pages\gestion-obras\nueva-obra\nueva-obra.css
var nueva_obra_default2;
var init_nueva_obra2 = __esm({
  "angular:jit:style:src\\app\\pages\\gestion-obras\\nueva-obra\\nueva-obra.css"() {
    nueva_obra_default2 = "/* src/app/pages/gestion-obras/nueva-obra/nueva-obra.css */\n:host {\n  display: flex;\n  height: 100vh;\n}\n.sidebar {\n  width: 240px;\n  background-color: #16a249;\n  color: white;\n  padding: 2rem 1rem;\n  display: flex;\n  flex-direction: column;\n}\n.logo-icon {\n  font-size: 1.5rem;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 2rem;\n}\n.brand-name {\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.nav-section {\n  flex: 1;\n}\n.nav-section-title {\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  opacity: 0.7;\n  margin: 1rem 0 0.5rem;\n}\n.nav-link {\n  color: white;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.25rem 0;\n  text-decoration: none;\n  transition: opacity .2s;\n}\n.nav-link.active,\n.nav-link:hover {\n  opacity: 0.8;\n}\n.obra-card {\n  border-radius: .75rem;\n}\n.obra-card h5 {\n  font-weight: 600;\n}\n.obra-card .badge {\n  font-size: .75rem;\n  text-transform: none;\n  padding: .4em .8em;\n}\n.progress {\n  background-color: #e9ecef;\n}\n.progress-bar {\n  transition: width .6s ease;\n}\nmain {\n  flex-grow: 1;\n  background: #f8f9fa;\n}\n.card {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.btn-outline-secondary {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=nueva-obra.css.map */\n";
  }
});

// src/app/pages/gestion-obras/nueva-obra/nueva-obra.ts
var NuevaObraComponent;
var init_nueva_obra3 = __esm({
  "src/app/pages/gestion-obras/nueva-obra/nueva-obra.ts"() {
    "use strict";
    init_tslib_es6();
    init_nueva_obra();
    init_nueva_obra2();
    init_core();
    init_common();
    init_router();
    init_forms();
    NuevaObraComponent = class NuevaObraComponent2 {
      router;
      obra = {
        nombre: "",
        ubicacion: "",
        constructora: "",
        encargado: "",
        fechaInicio: "",
        fechaFin: "",
        tipo: "",
        estado: "",
        descripcion: ""
      };
      tipos = ["Residencial", "Comercial", "Industrial", "Infraestructura"];
      estados = ["Planificada", "En progreso", "Suspendida", "Finalizada"];
      constructor(router) {
        this.router = router;
      }
      crearObra() {
        console.log("Obra a crear:", this.obra);
        this.router.navigate(["/gestion-obras"]);
      }
      cancelar() {
        this.router.navigate(["/gestion-obras"]);
      }
      static ctorParameters = () => [
        { type: Router }
      ];
    };
    NuevaObraComponent = __decorate([
      Component({
        selector: "app-nueva-obra",
        standalone: true,
        imports: [CommonModule, RouterModule, FormsModule],
        template: nueva_obra_default,
        styles: [nueva_obra_default2]
      })
    ], NuevaObraComponent);
  }
});

// src/app/pages/gestion-obras/nueva-obra/nueva-obra.spec.ts
var require_nueva_obra_spec = __commonJS({
  "src/app/pages/gestion-obras/nueva-obra/nueva-obra.spec.ts"(exports) {
    init_testing();
    init_nueva_obra3();
    init_router();
    init_forms();
    init_common();
    init_router();
    describe("NuevaObraComponent", () => {
      let component;
      let fixture;
      let mockRouter;
      beforeEach(() => __async(null, null, function* () {
        mockRouter = jasmine.createSpyObj("Router", ["navigate"]);
        yield TestBed.configureTestingModule({
          imports: [NuevaObraComponent, FormsModule, CommonModule, RouterModule],
          providers: [
            { provide: Router, useValue: mockRouter }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(NuevaObraComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("deber\xEDa crearse correctamente", () => {
        expect(component).toBeTruthy();
      });
      it("deber\xEDa inicializar la obra con campos vac\xEDos", () => {
        expect(component.obra.nombre).toBe("");
        expect(component.obra.descripcion).toBe("");
        expect(component.obra.fechaInicio).toBe("");
      });
      it("crearObra deber\xEDa redirigir a /gestion-obras", () => {
        component.crearObra();
        expect(mockRouter.navigate).toHaveBeenCalledWith(["/gestion-obras"]);
      });
      it("cancelar deber\xEDa redirigir a /gestion-obras", () => {
        component.cancelar();
        expect(mockRouter.navigate).toHaveBeenCalledWith(["/gestion-obras"]);
      });
      it("deber\xEDa contener 4 tipos de obra", () => {
        expect(component.tipos.length).toBe(4);
        expect(component.tipos).toContain("Residencial");
      });
      it("deber\xEDa contener 4 estados de obra", () => {
        expect(component.estados.length).toBe(4);
        expect(component.estados).toContain("Finalizada");
      });
    });
  }
});
export default require_nueva_obra_spec();
//# sourceMappingURL=spec-nueva-obra.spec.js.map
