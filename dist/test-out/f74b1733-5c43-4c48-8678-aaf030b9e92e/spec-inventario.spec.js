import {
  environment,
  init_environment
} from "./chunk-6TN3AQ2K.js";
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
  init_http
} from "./chunk-DBD3S2RT.js";
import {
  Component,
  Injectable,
  TestBed,
  __decorate,
  fakeAsync,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  of,
  tick
} from "./chunk-IH5F2UGT.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\pages\inventario\inventario.html
var inventario_default;
var init_inventario = __esm({
  "angular:jit:template:src\\app\\pages\\inventario\\inventario.html"() {
    inventario_default = '<div class="d-flex vh-100 overflow-hidden">\r\n\r\n  <aside class="sidebar text-white flex-shrink-0 p-3" style="width:240px">\r\n  <div class="d-flex align-items-center mb-4">\r\n    <i class="bi bi-leaf-fill fs-4 me-2"></i>\r\n    <span class="h5 mb-0">EcoConstruct</span>\r\n  </div>\r\n\r\n  <nav class="nav flex-column">\r\n\r\n    <small class="text-uppercase text-white-50 mb-2">Principal</small>\r\n\r\n    <a\r\n      routerLink="/dashboard"\r\n      routerLinkActive="active"\r\n      [routerLinkActiveOptions]="{ exact: true }"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-speedometer2 me-2"></i>\r\n      Dashboard\r\n    </a>\r\n\r\n    <a\r\n      routerLink="/gestion-obras"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-building me-2"></i>\r\n      Gesti\xF3n de Obras\r\n    </a>\r\n\r\n    <a\r\n      routerLink="/registro-residuos"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-card-checklist me-2"></i>\r\n      Registro de Residuos\r\n    </a>\r\n\r\n    <a\r\n      routerLink="/transporte"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-truck me-2"></i>\r\n      Transporte\r\n    </a>\r\n\r\n    <a\r\n      routerLink="/inventario"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-box-seam me-2"></i>\r\n      Inventario\r\n    </a>\r\n\r\n    <a\r\n      routerLink="/historial-trazabilidad"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-clock-history me-2"></i>\r\n      Historial y Trazabilidad\r\n    </a>\r\n\r\n    <a\r\n      routerLink="/reportes"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-bar-chart me-2"></i>\r\n      Reportes\r\n    </a>\r\n\r\n    <hr class="border-light">\r\n\r\n    <small class="text-uppercase text-white-50 mb-2">Sistema</small>\r\n    <a\r\n      routerLink="/perfil"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-person-circle me-2"></i>\r\n      Perfil\r\n    </a>\r\n          <a routerLink="/usuarios"\r\n         routerLinkActive="active"\r\n         class="nav-link text-white mt-2">\r\n        <i class="bi bi-people me-2"></i>Usuarios\r\n    </a>\r\n    <a\r\n      href="#"\r\n      (click)="logout()"\r\n      class="nav-link text-white mt-2"\r\n    >\r\n      <i class="bi bi-box-arrow-right me-2"></i>\r\n      Cerrar Sesi\xF3n\r\n    </a>\r\n  </nav>\r\n</aside>\r\n\r\n  <!-- Contenido principal -->\r\n  <main class="contenido flex-grow-1 overflow-auto">\r\n    <h2>Inventario de Residuos</h2>\r\n    <p class="subtitulo">Listado de residuos recolectados</p>\r\n\r\n    <!-- Inventario -->\r\n    <div class="caja">\r\n      <h3>Inventario</h3>\r\n      <table class="tabla-inventario">\r\n        <thead>\r\n          <tr>\r\n            <th>Obra</th>\r\n            <th>Cantidad</th>\r\n            <th>Tipo</th>\r\n            <th>Estado</th>\r\n            <th>Valor</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor="let item of inventarioAgrupado">\r\n            <td>{{ item.nombre }}</td>\r\n            <td>{{ item.cantidad }}</td>\r\n            <td>{{ item.unidad }}</td>\r\n            <td>Usado</td>\r\n            <td>$</td>\r\n            </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n    <!-- Materiales Reciclados -->\r\n    <div class="caja">\r\n      <h3>Materiales Reciclados</h3>\r\n      <table class="tabla-inventario">\r\n        <thead>\r\n          <tr>\r\n            <th>Material</th>\r\n            <th>Cantidad</th>\r\n            <th>Estado</th>\r\n            <th>Calidad</th>\r\n            <th>Valor</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td><strong>Concreto Reciclado</strong></td>\r\n            <td>12.3 m\xB3</td>\r\n            <td><span class="estado estado-disponible">Disponible</span></td>\r\n            <td>Grado A</td>\r\n            <td class="valor">$1.800</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Acero Recuperado</strong></td>\r\n            <td>2.5 Ton</td>\r\n            <td><span class="estado estado-vendido">Vendido</span></td>\r\n            <td>Grado B</td>\r\n            <td class="valor">$3.200</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Madera Tratada</strong></td>\r\n            <td>5.7 m\xB3</td>\r\n            <td><span class="estado estado-disponible">Disponible</span></td>\r\n            <td>Grado A</td>\r\n            <td class="valor">$950</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </main>\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\pages\inventario\inventario.css
var inventario_default2;
var init_inventario2 = __esm({
  "angular:jit:style:src\\app\\pages\\inventario\\inventario.css"() {
    inventario_default2 = "/* src/app/pages/inventario/inventario.css */\n.sidebar {\n  width: 240px;\n  background-color: #16a249;\n  color: white;\n  padding: 2rem 1rem;\n  display: flex;\n  flex-direction: column;\n}\n.logo-icon {\n  font-size: 1.5rem;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 2rem;\n}\n.brand-name {\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.nav-section {\n  flex: 1;\n}\n.nav-section-title {\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  opacity: 0.7;\n  margin: 1rem 0 0.5rem;\n}\n.nav-link {\n  color: white;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.25rem 0;\n  text-decoration: none;\n  transition: opacity .2s;\n}\n.nav-link.active,\n.nav-link:hover {\n  opacity: 0.8;\n}\n.obra-card {\n  border-radius: .75rem;\n}\n.obra-card h5 {\n  font-weight: 600;\n}\n.obra-card .badge {\n  font-size: .75rem;\n  text-transform: none;\n  padding: .4em .8em;\n}\n.progress {\n  background-color: #e9ecef;\n}\n.progress-bar {\n  transition: width .6s ease;\n}\n.upload-dropzone {\n  border: 2px dashed #ced4da;\n  border-radius: .5rem;\n  padding: 2rem;\n  text-align: center;\n  cursor: pointer;\n  color: #6c757d;\n}\n.upload-dropzone:hover {\n  background-color: #f8f9fa;\n}\n.nav-link.active {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.snack-success {\n  background-color: #4caf50 !important;\n  color: #fff !important;\n}\n.snack-error {\n  background-color: #f44336 !important;\n  color: #fff !important;\n}\n.contenido {\n  padding: 2rem;\n}\n.caja {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 1.5rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);\n}\n.tabla-inventario {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.tabla-inventario th,\n.tabla-inventario td {\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid #e5e7eb;\n  text-align: left;\n}\n.tabla-inventario thead {\n  background-color: #f9fafb;\n}\n.estado {\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  display: inline-block;\n}\n.estado-procesado {\n  background-color: #d1fae5;\n  color: #065f46;\n}\n.estado-stock {\n  background-color: #e0f2fe;\n  color: #0369a1;\n}\n.estado-vendido {\n  background-color: #f3e8ff;\n  color: #6b21a8;\n}\n.estado-disponible {\n  background-color: #e0f2fe;\n  color: #0369a1;\n}\n.valor {\n  color: #16a34a;\n  font-weight: 600;\n}\n/*# sourceMappingURL=inventario.css.map */\n";
  }
});

// src/app/pages/inventario/inventory.service.ts
var InventoryService;
var init_inventory_service = __esm({
  "src/app/pages/inventario/inventory.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    init_environment();
    InventoryService = class InventoryService2 {
      http;
      baseUrl = `${environment.apiUrl}/inventories`;
      constructor(http) {
        this.http = http;
      }
      getAll() {
        return this.http.get(this.baseUrl);
      }
      getById(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
      }
      create(inventory) {
        return this.http.post(this.baseUrl, inventory);
      }
      update(id, inventory) {
        return this.http.put(`${this.baseUrl}/${id}`, inventory);
      }
      updateStatus(id, statusId) {
        return this.http.patch(`${this.baseUrl}/${id}/status/${statusId}`, {});
      }
      delete(id) {
        return this.http.delete(`${this.baseUrl}/${id}`);
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    InventoryService = __decorate([
      Injectable({ providedIn: "root" })
    ], InventoryService);
  }
});

// src/app/pages/inventario/inventario.ts
var InventarioComponent;
var init_inventario3 = __esm({
  "src/app/pages/inventario/inventario.ts"() {
    "use strict";
    init_tslib_es6();
    init_inventario();
    init_inventario2();
    init_core();
    init_common();
    init_router();
    init_inventory_service();
    InventarioComponent = class InventarioComponent2 {
      inventoryService;
      router;
      inventarioOriginal = [];
      inventarioAgrupado = [];
      constructor(inventoryService, router) {
        this.inventoryService = inventoryService;
        this.router = router;
      }
      ngOnInit() {
        this.inventoryService.getAll().subscribe((data) => {
          this.inventarioOriginal = data;
          this.inventarioAgrupado = this.agruparInventario(data);
        });
      }
      agruparInventario(data) {
        const agrupado = {};
        for (const registro of data) {
          for (const item of registro.items || []) {
            const nombre = item.item.name;
            const cantidad = item.quantity;
            const unidad = item.unit;
            if (!agrupado[nombre]) {
              agrupado[nombre] = { cantidad: 0, unidad };
            }
            agrupado[nombre].cantidad += cantidad;
          }
        }
        return Object.entries(agrupado).map(([nombre, datos]) => ({
          nombre,
          cantidad: datos.cantidad,
          unidad: datos.unidad
        }));
      }
      getFecha(fecha) {
        const date = new Date(fecha);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
      }
      getEstadoClass(estado) {
        switch (estado.toLowerCase()) {
          case "procesado":
            return "estado estado-procesado";
          case "en stock":
            return "estado estado-stock";
          case "vendido":
            return "estado estado-vendido";
          default:
            return "estado";
        }
      }
      getValorEstimado(valor) {
        return `$${valor.toLocaleString("en-US")}`;
      }
      logout() {
        localStorage.clear();
        sessionStorage.clear();
        this.router.navigate(["/login"]);
      }
      static ctorParameters = () => [
        { type: InventoryService },
        { type: Router }
      ];
    };
    InventarioComponent = __decorate([
      Component({
        selector: "app-inventario",
        standalone: true,
        imports: [CommonModule, RouterModule],
        template: inventario_default,
        styles: [inventario_default2]
      })
    ], InventarioComponent);
  }
});

// src/app/pages/inventario/inventario.spec.ts
var require_inventario_spec = __commonJS({
  "src/app/pages/inventario/inventario.spec.ts"(exports) {
    init_testing();
    init_inventario3();
    init_router();
    init_esm();
    init_inventory_service();
    describe("InventarioComponent", () => {
      let component;
      let fixture;
      let mockInventoryService;
      let mockRouter;
      const mockData = [
        {
          id: 1,
          workSite: { id: 1, name: "Obra 1" },
          carrier: { id: 1, name: "Transportista 1" },
          inventoryStatus: { id: 1, name: "Procesado" },
          createdAt: "2024-07-01T00:00:00Z",
          items: [
            { item: { id: 1, name: "Ladrillos" }, quantity: 100, unit: "unidades" },
            { item: { id: 2, name: "Cemento" }, quantity: 50, unit: "kg" },
            { item: { id: 1, name: "Ladrillos" }, quantity: 25, unit: "unidades" }
          ]
        },
        {
          id: 2,
          workSite: { id: 2, name: "Obra 2" },
          carrier: { id: 2, name: "Transportista 2" },
          inventoryStatus: { id: 2, name: "En stock" },
          createdAt: "2024-07-02T00:00:00Z",
          items: [
            { item: { id: 3, name: "Arena" }, quantity: 70, unit: "kg" }
          ]
        }
      ];
      beforeEach(() => __async(null, null, function* () {
        mockInventoryService = jasmine.createSpyObj("InventoryService", ["getAll"]);
        mockRouter = jasmine.createSpyObj("Router", ["navigate"]);
        yield TestBed.configureTestingModule({
          imports: [InventarioComponent],
          providers: [
            { provide: InventoryService, useValue: mockInventoryService },
            { provide: Router, useValue: mockRouter }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(InventarioComponent);
        component = fixture.componentInstance;
      }));
      it("deber\xEDa crearse correctamente", () => {
        expect(component).toBeTruthy();
      });
      it("deber\xEDa cargar y agrupar inventario al inicializar", fakeAsync(() => {
        mockInventoryService.getAll.and.returnValue(of(mockData));
        fixture.detectChanges();
        tick();
        expect(component.inventarioOriginal.length).toBe(2);
        expect(component.inventarioAgrupado.length).toBe(3);
        const ladrillos = component.inventarioAgrupado.find((i) => i.nombre === "Ladrillos");
        expect(ladrillos?.cantidad).toBe(125);
        expect(ladrillos?.unidad).toBe("unidades");
      }));
      it("deber\xEDa formatear correctamente la fecha", () => {
        const formatted = component.getFecha("2024-07-01T00:00:00Z");
        expect(formatted).toBe("1/7/2024");
      });
      it("deber\xEDa devolver clases CSS seg\xFAn estado", () => {
        expect(component.getEstadoClass("Procesado")).toBe("estado estado-procesado");
        expect(component.getEstadoClass("En Stock")).toBe("estado estado-stock");
        expect(component.getEstadoClass("Vendido")).toBe("estado estado-vendido");
        expect(component.getEstadoClass("Otro")).toBe("estado");
      });
      it("deber\xEDa formatear valor estimado correctamente", () => {
        const valor = component.getValorEstimado(123456);
        expect(valor).toBe("$123,456");
      });
      it("logout deber\xEDa limpiar storage y navegar a login", () => {
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
export default require_inventario_spec();
//# sourceMappingURL=spec-inventario.spec.js.map
