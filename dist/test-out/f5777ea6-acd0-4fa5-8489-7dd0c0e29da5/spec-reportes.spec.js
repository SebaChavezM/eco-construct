import {
  Chart,
  init_chart,
  registerables
} from "./chunk-OWFJCNXR.js";
import {
  environment,
  init_environment
} from "./chunk-PVUBLKFE.js";
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
import {
  HttpClient,
  init_http
} from "./chunk-KRHRSQJI.js";
import {
  Component,
  Injectable,
  TestBed,
  ViewChild,
  __decorate,
  fakeAsync,
  forkJoin,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  map,
  of,
  tick
} from "./chunk-VPLQVZLL.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-SR4DERTU.js";

// angular:jit:template:src\app\pages\reportes\reportes.html
var reportes_default;
var init_reportes = __esm({
  "angular:jit:template:src\\app\\pages\\reportes\\reportes.html"() {
    reportes_default = `<div class="d-flex vh-100 overflow-hidden">\r
  <aside class="sidebar text-white flex-shrink-0 p-3" style="width:240px">\r
    <div class="d-flex align-items-center mb-4">\r
      <i class="bi bi-leaf-fill fs-4 me-2"></i>\r
      <span class="h5 mb-0">EcoConstruct</span>\r
    </div>\r
\r
    <nav class="nav flex-column">\r
      <small class="text-uppercase text-white-50 mb-2">Principal</small>\r
\r
      <a routerLink="/dashboard" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" class="nav-link text-white">\r
        <i class="bi bi-speedometer2 me-2"></i> Dashboard\r
      </a>\r
\r
      <a routerLink="/gestion-obras" routerLinkActive="active" class="nav-link text-white">\r
        <i class="bi bi-building me-2"></i> Gesti\xF3n de Obras\r
      </a>\r
\r
      <a routerLink="/registro-residuos" routerLinkActive="active" class="nav-link text-white">\r
        <i class="bi bi-card-checklist me-2"></i> Registro de Residuos\r
      </a>\r
\r
      <a routerLink="/transporte" routerLinkActive="active" class="nav-link text-white">\r
        <i class="bi bi-truck me-2"></i> Transporte\r
      </a>\r
\r
      <a routerLink="/inventario" routerLinkActive="active" class="nav-link text-white">\r
        <i class="bi bi-box-seam me-2"></i> Inventario\r
      </a>\r
\r
      <a routerLink="/historial-trazabilidad" routerLinkActive="active" class="nav-link text-white">\r
        <i class="bi bi-clock-history me-2"></i> Historial y Trazabilidad\r
      </a>\r
\r
      <a routerLink="/reportes" routerLinkActive="active" class="nav-link text-white">\r
        <i class="bi bi-bar-chart me-2"></i> Reportes\r
      </a>\r
\r
      <hr class="border-light">\r
\r
      <small class="text-uppercase text-white-50 mb-2">Sistema</small>\r
\r
      <a routerLink="/perfil" routerLinkActive="active" class="nav-link text-white">\r
        <i class="bi bi-person-circle me-2"></i> Perfil\r
      </a>\r
\r
      <a routerLink="/usuarios" routerLinkActive="active" class="nav-link text-white mt-2">\r
        <i class="bi bi-people me-2"></i> Usuarios\r
      </a>\r
\r
      <a href="#" (click)="logout()" class="nav-link text-white mt-2">\r
        <i class="bi bi-box-arrow-right me-2"></i> Cerrar Sesi\xF3n\r
      </a>\r
    </nav>\r
  </aside>\r
\r
  <main class="flex-grow-1 overflow-auto p-4">\r
    <div class="d-flex justify-content-between align-items-center mb-4">\r
      <div>\r
        <h2 class="h3 mb-1">Reportes y An\xE1lisis</h2>\r
        <small class="text-muted">Genera y visualiza reportes detallados sobre la gesti\xF3n de residuos</small>\r
      </div>\r
      <button class="btn btn-success">\r
        <i class="bi bi-file-earmark-text me-1"></i> Nuevo Reporte\r
      </button>\r
    </div>\r
\r
    <!-- Cards resumen -->\r
    <div class="row gx-3 gy-3 mb-4">\r
      <div class="col-12 col-md-3" *ngFor="let s of stats">\r
        <div class="card h-100 shadow-sm">\r
          <div class="card-body position-relative">\r
            <small class="text-muted">{{ s.label }}</small>\r
            <h2 class="fw-bold mt-1">{{ s.value }}</h2>\r
            <div *ngIf="s.sub" class="small text-success">{{ s.sub }}</div>\r
            <i class="bi {{ s.icon }} position-absolute" style="top:1rem; right:1rem; color:#6b7280;"></i>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Gr\xE1ficos -->\r
    <div class="row gx-4 gy-4 mb-4">\r
      <div class="col-12 col-lg-6">\r
        <div class="card shadow-sm p-3">\r
          <h5 class="card-title mb-3">Evoluci\xF3n Mensual de Residuos</h5>\r
          <canvas #lineCanvas></canvas>\r
        </div>\r
      </div>\r
      <div class="col-12 col-lg-6">\r
        <div class="card shadow-sm p-3">\r
          <h5 class="card-title mb-3">Distribuci\xF3n por Tipo de Residuo</h5>\r
          <canvas #pieCanvas></canvas>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Tabla de reportes -->\r
    <div class="card shadow-sm p-3">\r
      <h5 class="mb-3">Reportes Generados</h5>\r
      <ul class="list-group list-group-flush">\r
        <li class="list-group-item d-flex justify-content-between align-items-center" *ngFor="let r of reports">\r
          <div>\r
            <div class="fw-bold">{{ r.title }}</div>\r
            <small class="text-muted">{{ r.date }} \xB7 Tipo: {{ r.type }}</small>\r
          </div>\r
          <div class="d-flex align-items-center">\r
            <span class="badge"\r
                  [class.bg-success]="r.status === 'Completado'"\r
                  [class.bg-secondary]="r.status === 'En proceso'"\r
                  [class.bg-danger]="r.status === 'Fallido'">\r
              {{ r.status }}\r
            </span>\r
            <button class="btn btn-outline-secondary btn-sm ms-3">\r
              <i class="bi bi-download"></i> Descargar\r
            </button>\r
          </div>\r
        </li>\r
      </ul>\r
    </div>\r
  </main>\r
</div>\r
`;
  }
});

// angular:jit:style:src\app\pages\reportes\reportes.css
var reportes_default2;
var init_reportes2 = __esm({
  "angular:jit:style:src\\app\\pages\\reportes\\reportes.css"() {
    reportes_default2 = "/* src/app/pages/reportes/reportes.css */\n.sidebar {\n  width: 240px;\n  background-color: #16a249;\n  color: white;\n  padding: 2rem 1rem;\n  display: flex;\n  flex-direction: column;\n}\n.logo-icon {\n  font-size: 1.5rem;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 2rem;\n}\n.brand-name {\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.nav-section {\n  flex: 1;\n}\n.nav-section-title {\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  opacity: 0.7;\n  margin: 1rem 0 0.5rem;\n}\n.nav-link {\n  color: white;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.25rem 0;\n  text-decoration: none;\n  transition: opacity .2s;\n}\n.nav-link.active,\n.nav-link:hover {\n  opacity: 0.8;\n}\n.obra-card {\n  border-radius: .75rem;\n}\n.obra-card h5 {\n  font-weight: 600;\n}\n.obra-card .badge {\n  font-size: .75rem;\n  text-transform: none;\n  padding: .4em .8em;\n}\n.progress {\n  background-color: #e9ecef;\n}\n.progress-bar {\n  transition: width .6s ease;\n}\n.card-title {\n  font-size: 1rem;\n  font-weight: 600;\n}\ncanvas {\n  width: 100% !important;\n  height: 300px !important;\n}\n.list-group-item {\n  border: none;\n  border-bottom: 1px solid #e9ecef;\n}\n.list-group-item:last-child {\n  border-bottom: none;\n}\n/*# sourceMappingURL=reportes.css.map */\n";
  }
});

// src/app/pages/reportes/reportes.service.ts
var ReportesService;
var init_reportes_service = __esm({
  "src/app/pages/reportes/reportes.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    init_esm();
    init_environment();
    ReportesService = class ReportesService2 {
      http;
      invUrl = `${environment.apiUrl}/inventories`;
      wsUrl = `${environment.apiUrl}/worksites`;
      carUrl = `${environment.apiUrl}/carriers`;
      itemUrl = `${environment.apiUrl}/items`;
      constructor(http) {
        this.http = http;
      }
      getResumenStats() {
        return forkJoin({
          inventarios: this.http.get(this.invUrl),
          obras: this.http.get(this.wsUrl)
        }).pipe(map(({ inventarios, obras }) => {
          const totalGenerado = inventarios.reduce((sum, inv) => sum + (inv.totalGenerado || 0), 0);
          const reciclado = inventarios.reduce((sum, inv) => sum + (inv.totalReciclado || 0), 0);
          const eficienciaGlobal = totalGenerado ? reciclado / totalGenerado * 100 : 0;
          const obrasActivas = obras.length;
          return {
            totalGenerado,
            reciclado,
            eficienciaGlobal: parseFloat(eficienciaGlobal.toFixed(2)),
            obrasActivas
          };
        }));
      }
      getDistribucionTipos() {
        return this.http.get(this.itemUrl).pipe(map((items) => {
          const agrupados = {};
          items.forEach((item) => {
            agrupados[item.tipoResiduo] = (agrupados[item.tipoResiduo] || 0) + item.cantidad;
          });
          return Object.entries(agrupados).map(([tipo, cantidad]) => ({ tipo, cantidad }));
        }));
      }
      getDatosMensuales() {
        return this.http.get(this.invUrl).pipe(map((inventarios) => {
          const mensual = /* @__PURE__ */ new Map();
          inventarios.forEach((inv) => {
            const fecha = new Date(inv.fechaRegistro);
            const mes = fecha.toLocaleString("default", { month: "short" });
            const generado = inv.totalGenerado || 0;
            const reciclado = inv.totalReciclado || 0;
            const tratado = inv.totalTratado || 0;
            if (!mensual.has(mes)) {
              mensual.set(mes, { mes, generado: 0, reciclado: 0, tratado: 0 });
            }
            const entry = mensual.get(mes);
            entry.generado += generado;
            entry.reciclado += reciclado;
            entry.tratado += tratado;
          });
          return Array.from(mensual.values());
        }));
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    ReportesService = __decorate([
      Injectable({ providedIn: "root" })
    ], ReportesService);
  }
});

// node_modules/chart.js/auto/auto.js
var auto_default;
var init_auto = __esm({
  "node_modules/chart.js/auto/auto.js"() {
    "use strict";
    init_chart();
    init_chart();
    Chart.register(...registerables);
    auto_default = Chart;
  }
});

// src/app/pages/reportes/reportes.ts
var ReportesComponent;
var init_reportes3 = __esm({
  "src/app/pages/reportes/reportes.ts"() {
    "use strict";
    init_tslib_es6();
    init_reportes();
    init_reportes2();
    init_core();
    init_common();
    init_router();
    init_forms();
    init_reportes_service();
    init_auto();
    ReportesComponent = class ReportesComponent2 {
      router;
      reportesService;
      stats = [];
      monthly = [];
      reports = [];
      distribution = [];
      lineCanvas;
      pieCanvas;
      lineChart;
      pieChart;
      constructor(router, reportesService) {
        this.router = router;
        this.reportesService = reportesService;
      }
      ngOnInit() {
        this.reportesService.getResumenStats().subscribe((stats) => {
          this.stats = [
            {
              label: "Total Generado",
              value: `${stats.totalGenerado} m\xB3`,
              sub: "",
              icon: "bi-box-seam"
            },
            {
              label: "Reciclado",
              value: `${stats.reciclado} m\xB3`,
              sub: stats.totalGenerado > 0 ? `${(stats.reciclado / stats.totalGenerado * 100).toFixed(1)}% del total` : "0% del total",
              icon: "bi-arrow-repeat"
            },
            {
              label: "Eficiencia Global",
              value: `${stats.eficienciaGlobal}%`,
              sub: "",
              icon: "bi-graph-up"
            },
            {
              label: "Obras Monitoreadas",
              value: `${stats.obrasActivas}`,
              sub: "Activas este mes",
              icon: "bi-building"
            }
          ];
        });
        this.reportesService.getDistribucionTipos().subscribe((data) => {
          this.distribution = data.map((d) => ({ label: d.tipo, value: d.cantidad }));
          this.renderPieChart();
        });
        this.reportesService.getDatosMensuales().subscribe((data) => {
          this.monthly = data;
          this.renderLineChart();
        });
      }
      ngAfterViewInit() {
        this.renderLineChart();
        this.renderPieChart();
      }
      renderLineChart() {
        if (!this.lineCanvas?.nativeElement)
          return;
        const ctx = this.lineCanvas.nativeElement.getContext("2d");
        if (!ctx)
          return;
        if (this.lineChart) {
          this.lineChart.destroy();
        }
        this.lineChart = new auto_default(ctx, {
          type: "line",
          data: {
            labels: this.monthly.map((m) => m.mes),
            datasets: [
              {
                label: "Generado",
                data: this.monthly.map((m) => m.generado),
                fill: false,
                borderColor: "#4CAF50"
              },
              {
                label: "Reciclado",
                data: this.monthly.map((m) => m.reciclado),
                fill: false,
                borderColor: "#2196F3"
              },
              {
                label: "Tratado",
                data: this.monthly.map((m) => m.tratado),
                fill: false,
                borderColor: "#FFC107"
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              legend: { position: "bottom" }
            }
          }
        });
      }
      renderPieChart() {
        if (!this.pieCanvas?.nativeElement)
          return;
        const ctx = this.pieCanvas.nativeElement.getContext("2d");
        if (!ctx)
          return;
        if (this.pieChart) {
          this.pieChart.destroy();
        }
        const config = {
          type: "pie",
          data: {
            labels: this.distribution.map((d) => d.label),
            datasets: [
              {
                data: this.distribution.map((d) => d.value),
                backgroundColor: ["#4CAF50", "#2196F3", "#FFC107", "#FF5722"]
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              legend: { position: "bottom" }
            }
          }
        };
        this.pieChart = new auto_default(ctx, config);
      }
      logout() {
        localStorage.clear();
        sessionStorage.clear();
        this.router.navigate(["/login"]);
      }
      static ctorParameters = () => [
        { type: Router },
        { type: ReportesService }
      ];
      static propDecorators = {
        lineCanvas: [{ type: ViewChild, args: ["lineCanvas"] }],
        pieCanvas: [{ type: ViewChild, args: ["pieCanvas"] }]
      };
    };
    ReportesComponent = __decorate([
      Component({
        selector: "app-reportes",
        standalone: true,
        imports: [CommonModule, RouterModule, FormsModule],
        template: reportes_default,
        styles: [reportes_default2]
      })
    ], ReportesComponent);
  }
});

// src/app/pages/reportes/reportes.spec.ts
var require_reportes_spec = __commonJS({
  "src/app/pages/reportes/reportes.spec.ts"(exports) {
    init_testing();
    init_reportes3();
    init_reportes_service();
    init_router();
    init_esm();
    describe("ReportesComponent", () => {
      let component;
      let fixture;
      let mockService;
      let mockRouter;
      beforeEach(() => __async(null, null, function* () {
        mockService = jasmine.createSpyObj("ReportesService", [
          "getResumenStats",
          "getDistribucionTipos",
          "getDatosMensuales"
        ]);
        mockRouter = jasmine.createSpyObj("Router", ["navigate"]);
        yield TestBed.configureTestingModule({
          imports: [ReportesComponent],
          providers: [
            { provide: ReportesService, useValue: mockService },
            { provide: Router, useValue: mockRouter }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(ReportesComponent);
        component = fixture.componentInstance;
      }));
      it("deber\xEDa crearse correctamente", () => {
        expect(component).toBeTruthy();
      });
      it("deber\xEDa cargar y procesar datos en ngOnInit", fakeAsync(() => {
        mockService.getResumenStats.and.returnValue(of({
          totalGenerado: 100,
          reciclado: 40,
          eficienciaGlobal: 85,
          obrasActivas: 3
        }));
        mockService.getDistribucionTipos.and.returnValue(of([
          { tipo: "Metal", cantidad: 20 },
          { tipo: "Pl\xE1stico", cantidad: 10 }
        ]));
        mockService.getDatosMensuales.and.returnValue(of([
          { mes: "Enero", generado: 50, reciclado: 20, tratado: 10 },
          { mes: "Febrero", generado: 50, reciclado: 20, tratado: 10 }
        ]));
        fixture.detectChanges();
        tick();
        expect(component.stats.length).toBe(4);
        expect(component.distribution.length).toBe(2);
        expect(component.monthly.length).toBe(2);
      }));
      it("deber\xEDa ejecutar logout correctamente", () => {
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
export default require_reportes_spec();
//# sourceMappingURL=spec-reportes.spec.js.map
