import {
  environment,
  init_environment
} from "./chunk-PVUBLKFE.js";
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-FMZD3MY3.js";
import {
  DomSanitizer,
  Router,
  RouterModule,
  init_platform_browser,
  init_router
} from "./chunk-6OS43OYY.js";
import {
  CommonModule,
  DatePipe,
  NgIf,
  init_common
} from "./chunk-6LR7LCV7.js";
import {
  HttpClient,
  init_http
} from "./chunk-KRHRSQJI.js";
import {
  ANIMATION_MODULE_TYPE,
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver$1,
  DOCUMENT,
  Directive,
  ElementRef,
  FactoryTarget,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  NgModule,
  NgZone,
  RendererFactory2,
  RuntimeError,
  SecurityContext,
  Subject,
  TestBed,
  ViewEncapsulation,
  __decorate,
  core_exports,
  fakeAsync,
  init_core,
  init_esm,
  init_operators,
  init_testing,
  init_tslib_es6,
  inject,
  makeEnvironmentProviders,
  map,
  of,
  signal,
  tick,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-VPLQVZLL.js";
import {
  __async,
  __commonJS,
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-SR4DERTU.js";

// angular:jit:template:src\app\pages\transporte\transporte.html
var transporte_default;
var init_transporte = __esm({
  "angular:jit:template:src\\app\\pages\\transporte\\transporte.html"() {
    transporte_default = `<div class="d-flex vh-100 overflow-hidden">\r
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
        <h2 class="h3 mb-1">Gesti\xF3n de Transporte</h2>\r
        <small class="text-muted">Registra y rastrea el transporte de residuos</small>\r
      </div>\r
    </div>\r
\r
    <div class="card mb-5 shadow-sm">\r
      <div class="card-body">\r
        <h5 class="card-title">\r
          <i class="bi bi-truck me-2"></i>Nuevo Transporte\r
        </h5>\r
        <small class="text-muted d-block mb-4">\r
          Registra el transporte de residuos desde la obra hasta su destino final\r
        </small>\r
\r
        <form [formGroup]="form" (ngSubmit)="register()">\r
          <div class="row g-3">\r
\r
            <div class="col-md-6">\r
              <label class="form-label">N\xB0 de Servicio</label>\r
              <input\r
                type="text"\r
                class="form-control"\r
                [value]="numeroServicio"\r
                readonly\r
              />\r
            </div>\r
\r
            <div class="col-md-6">\r
              <label class="form-label">Transportista</label>\r
              <input\r
                type="text"\r
                class="form-control"\r
                placeholder="Nombre del transportista"\r
                formControlName="transportista"\r
                [class.is-invalid]="\r
                  form.get('transportista')!.touched &&\r
                  form.get('transportista')!.invalid\r
                "\r
              />\r
              <div\r
                *ngIf="\r
                  form.get('transportista')!.touched &&\r
                  form.get('transportista')!.hasError('required')\r
                "\r
                class="invalid-feedback"\r
              >\r
                Debes ingresar un transportista\r
              </div>\r
            </div>\r
            \r
          <div class="col-md-6">\r
            <label class="form-label">Residuo a Transportar</label>\r
            <select\r
              class="form-select"\r
              formControlName="residuoId"\r
              [class.is-invalid]="form.get('residuoId')!.touched && form.get('residuoId')!.invalid"\r
            >\r
              <option value="" disabled selected>Seleccione un residuo</option>\r
              <option *ngFor="let r of residuos" [value]="r.id">\r
                {{ r.name }}\r
              </option>\r
            </select>\r
            <div *ngIf="form.get('residuoId')!.touched && form.get('residuoId')!.hasError('required')" class="invalid-feedback">\r
              Debes seleccionar un residuo\r
            </div>\r
          </div>\r
\r
            <div class="col-md-6">\r
              <label class="form-label">Lugar de Retiro</label>\r
              <input\r
                type="text"\r
                class="form-control"\r
                placeholder="Ubicaci\xF3n de retiro"\r
                formControlName="obra"\r
                [class.is-invalid]="\r
                  form.get('obra')!.touched && form.get('obra')!.invalid\r
                "\r
              />\r
              <div\r
                *ngIf="\r
                  form.get('obra')!.touched && form.get('obra')!.hasError('required')\r
                "\r
                class="invalid-feedback"\r
              >\r
                Debes ingresar el lugar de retiro\r
              </div>\r
            </div>\r
\r
            <div class="col-md-6">\r
              <label class="form-label">Conductor</label>\r
              <input\r
                type="text"\r
                class="form-control"\r
                placeholder="Nombre del conductor"\r
                formControlName="conductor"\r
                [class.is-invalid]="form.get('conductor')!.touched && form.get('conductor')!.invalid"\r
              />\r
              <div\r
                *ngIf="form.get('conductor')!.touched"\r
                class="invalid-feedback"\r
              >\r
                <span *ngIf="form.get('conductor')!.hasError('required')">\r
                  Debes ingresar el nombre del conductor\r
                </span>\r
                <span *ngIf="form.get('conductor')!.hasError('minlength')">\r
                  M\xEDnimo 3 caracteres\r
                </span>\r
              </div>\r
            </div>\r
\r
            <div class="col-md-6">\r
              <label class="form-label">Patente del Veh\xEDculo</label>\r
              <input\r
                type="text"\r
                class="form-control"\r
                placeholder="ABC-1234"\r
                formControlName="patente"\r
                [class.is-invalid]="form.get('patente')!.touched && form.get('patente')!.invalid"\r
              />\r
              <div\r
                *ngIf="form.get('patente')!.touched"\r
                class="invalid-feedback"\r
              >\r
                <span *ngIf="form.get('patente')!.hasError('required')">\r
                  Debes ingresar la patente\r
                </span>\r
                <span *ngIf="form.get('patente')!.hasError('pattern')">\r
                  Formato inv\xE1lido (letras, d\xEDgitos y guiones)\r
                </span>\r
              </div>\r
            </div>\r
\r
            <div class="col-md-6">\r
              <label class="form-label">Fecha y Hora de Salida</label>\r
              <input\r
                type="datetime-local"\r
                class="form-control"\r
                formControlName="fechaSalida"\r
                [class.is-invalid]="form.get('fechaSalida')!.touched && form.get('fechaSalida')!.invalid"\r
              />\r
              <div\r
                *ngIf="form.get('fechaSalida')!.touched && form.get('fechaSalida')!.hasError('required')"\r
                class="invalid-feedback"\r
              >\r
                Debes seleccionar la fecha de salida\r
              </div>\r
            </div>\r
\r
            <div class="col-md-6">\r
              <label class="form-label">Fecha y Hora Estimada de Llegada</label>\r
              <input\r
                type="datetime-local"\r
                class="form-control"\r
                formControlName="fechaLlegada"\r
                [class.is-invalid]="form.get('fechaLlegada')!.touched && form.get('fechaLlegada')!.invalid"\r
              />\r
              <div\r
                *ngIf="form.get('fechaLlegada')!.touched && form.get('fechaLlegada')!.hasError('required')"\r
                class="invalid-feedback"\r
              >\r
                Debes seleccionar la fecha de llegada\r
              </div>\r
            </div>\r
\r
            <div class="col-md-6">\r
              <label class="form-label">N\xFAmero de Gu\xEDa</label>\r
              <input\r
                type="text"\r
                class="form-control"\r
                placeholder="Ingresa n\xFAmero de gu\xEDa"\r
                formControlName="guia"\r
                [class.is-invalid]="form.get('guia')!.touched && form.get('guia')!.invalid"\r
              />\r
              <div\r
                *ngIf="form.get('guia')!.touched && form.get('guia')!.hasError('required')"\r
                class="invalid-feedback"\r
              >\r
                Debes ingresar el n\xFAmero de gu\xEDa\r
              </div>\r
            </div>\r
\r
            <div class="col-12 text-end mt-3">\r
              <button\r
                type="submit"\r
                class="btn btn-success me-2"\r
                [disabled]="form.invalid"\r
              >\r
                <i class="bi bi-plus-lg me-1"></i>Registrar Transporte\r
              </button>\r
              <button type="button" class="btn btn-outline-secondary" (click)="form.reset()">\r
                Cancelar\r
              </button>\r
            </div>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
\r
    <div class="transportes-en-curso p-4">\r
    <h5 class="heading mb-1">Transportes en Curso</h5>\r
    <p class="subheading text-muted mb-4">Estado actual de los transportes registrados</p>\r
\r
    <div *ngFor="let t of enCurso" class="card transporte-card mb-4">\r
      <div class="card-header d-flex justify-content-between align-items-center bg-white">\r
        <strong class="transporte-title">{{ t.residuo }} \u2013 {{ t.patente }}</strong>\r
        <span class="badge status-badge">{{ t.estadoTexto }}</span>\r
      </div>\r
      <div class="card-body">\r
        <div class="row info-row align-items-center mb-3">\r
          <div class="col info-item d-flex align-items-center">\r
            <i class="bi bi-geo-alt-fill me-2 fs-5 text-success"></i>\r
            <div>\r
              <small class="label text-uppercase text-secondary">Destino</small><br>\r
              <span class="info-text">{{ t.destino }}</span>\r
            </div>\r
          </div>\r
          <div class="col info-item d-flex align-items-center">\r
            <i class="bi bi-truck-front-fill me-2 fs-5 text-success"></i>\r
            <div>\r
              <small class="label text-uppercase text-secondary">Transportista</small><br>\r
              <span class="info-text">{{ t.transportista }}</span>\r
            </div>\r
          </div>\r
          <div class="col info-item d-flex align-items-center">\r
            <i class="bi bi-person-fill me-2 fs-5 text-success"></i>\r
            <div>\r
              <small class="label text-uppercase text-secondary">Conductor</small><br>\r
              <span class="info-text">{{ t.conductor }}</span>\r
            </div>\r
          </div>\r
          <div class="col-auto info-item text-center">\r
            <i class="bi bi-clock me-1 fs-5 text-success"></i><br>\r
            <small class="label text-uppercase text-secondary">Salida</small><br>\r
            <span class="info-text">{{ t.fechaSalida | date:'HH:mm' }}</span>\r
          </div>\r
          <div class="col-auto info-item text-center">\r
            <i class="bi bi-clock-history me-1 fs-5 text-success"></i><br>\r
            <small class="label text-uppercase text-secondary">Llegada</small><br>\r
            <span class="info-text">{{ t.fechaLlegada | date:'HH:mm' }}</span>\r
          </div>\r
        </div>\r
\r
        <div class="actions text-end mt-2">\r
          <button class="btn btn-success" (click)="openDetalle(t)">\r
            Ver Detalle\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div\r
    class="modal fade"\r
    [class.show]="showDetalleModal"\r
    [style.display]="showDetalleModal ? 'block' : 'none'"\r
    tabindex="-1"\r
    role="dialog"\r
  >\r
    <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">\r
      <div class="modal-content">\r
\r
        <!-- Cabecera -->\r
        <div class="modal-header border-0">\r
          <h5 class="modal-title">\r
            <i class="bi bi-truck-front-fill me-2 text-success fs-4"></i>\r
            Servicio N\xB0{{ selectedTransport?.id }}\r
          </h5>\r
          <button type="button" class="btn-close" (click)="closeDetalle()"></button>\r
        </div>\r
\r
        <!-- Estado Actual -->\r
        <div class="estado-container px-4 mb-2 d-flex justify-content-between align-items-center">\r
          <h6 class="fw-semibold mb-0">Estado Actual</h6>\r
          <span class="badge status-badge">{{ selectedTransport?.estadoTexto }}</span>\r
        </div>\r
        <hr class="mx-4 my-2">\r
\r
        <!-- CUERPO: MODO VISTA -->\r
        <div *ngIf="!editMode" class="modal-body px-4 pb-4">\r
\r
          <h6 class="fw-semibold mb-2">Informaci\xF3n del Residuo</h6>\r
          <strong>\r
            {{\r
              getResiduoNombrePorId(selectedTransport?.items?.[0]?.item?.id || 0)\r
            }} \u2013 {{ selectedTransport?.items?.[0]?.quantity || 0 }} m\xB3\r
          </strong>\r
          <hr>\r
\r
          <h6 class="fw-semibold mb-2">Ruta de Transporte</h6>\r
          <p class="mb-1">\r
            <i class="bi bi-geo-alt-fill text-success me-1 fs-5"></i>\r
            <strong>Origen:</strong> {{ selectedTransport?.origen }}\r
          </p>\r
          <p class="mb-0">\r
            <i class="bi bi-geo-alt text-danger me-1 fs-5"></i>\r
            <strong>Destino:</strong> {{ selectedTransport?.destino }}\r
          </p>\r
          <hr>\r
\r
          <h6 class="fw-semibold mb-2">Informaci\xF3n del Veh\xEDculo</h6>\r
          <div class="row g-3 mb-3">\r
            <div class="col-md-6">\r
              <p class="mb-0">\r
                <i class="bi bi-person-fill text-success me-1 fs-5"></i>\r
                <strong>Transportista:</strong> {{ selectedTransport?.transportista }}\r
              </p>\r
            </div>\r
            <div class="col-md-6">\r
              <p class="mb-0">\r
                <i class="bi bi-person-fill text-success me-1 fs-5"></i>\r
                <strong>Conductor:</strong> {{ selectedTransport?.conductor }}\r
              </p>\r
            </div>\r
            <div class="col-md-6">\r
              <p class="mb-0">\r
                <i class="bi bi-card-text text-success me-1 fs-5"></i>\r
                <strong>Patente:</strong> {{ selectedTransport?.patente }}\r
              </p>\r
            </div>\r
            <div class="col-md-6">\r
              <p class="mb-0">\r
                <i class="bi bi-hash text-success me-1 fs-5"></i>\r
                <strong>Gu\xEDa:</strong> {{ selectedTransport?.guia }}\r
              </p>\r
            </div>\r
          </div>\r
          <hr>\r
\r
          <h6 class="fw-semibold mb-2">Horarios</h6>\r
          <div class="row g-3">\r
            <div class="col-md-6">\r
              <p class="mb-0">\r
                <i class="bi bi-clock text-success me-1 fs-5"></i>\r
                <strong>Hora de Salida:</strong>\r
                {{ selectedTransport?.fechaSalida | date:'HH:mm' }}\r
              </p>\r
            </div>\r
            <div class="col-md-6">\r
              <p class="mb-0">\r
                <i class="bi bi-clock-history text-success me-1 fs-5"></i>\r
                <strong>ETA:</strong>\r
                {{ selectedTransport?.fechaLlegada | date:'HH:mm' }}\r
              </p>\r
            </div>\r
          </div>\r
\r
        </div>\r
\r
        <!-- CUERPO: MODO EDICI\xD3N -->\r
        <form *ngIf="editMode" [formGroup]="form" class="modal-body px-4 pb-4">\r
\r
          <div class="row g-3">\r
            <!-- Transportista -->\r
            <div class="col-md-6">\r
              <label class="form-label">Transportista</label>\r
              <input type="text" class="form-control" formControlName="transportista">\r
            </div>\r
            <!-- Residuo -->\r
            <div class="col-md-6">\r
              <label class="form-label">Residuo</label>\r
              <input type="text" class="form-control" formControlName="residuo">\r
            </div>\r
            <!-- Obra / Destino -->\r
            <div class="col-md-6">\r
              <label class="form-label">Destino</label>\r
              <input type="text" class="form-control" formControlName="obra">\r
            </div>\r
            <!-- Conductor -->\r
            <div class="col-md-6">\r
              <label class="form-label">Conductor</label>\r
              <input type="text" class="form-control" formControlName="conductor">\r
            </div>\r
            <!-- Patente -->\r
            <div class="col-md-6">\r
              <label class="form-label">Patente</label>\r
              <input type="text" class="form-control" formControlName="patente">\r
            </div>\r
            <!-- Gu\xEDa -->\r
            <div class="col-md-6">\r
              <label class="form-label">Gu\xEDa</label>\r
              <input type="text" class="form-control" formControlName="guia">\r
            </div>\r
            <!-- Fecha Salida -->\r
            <div class="col-md-6">\r
              <label class="form-label">Fecha Salida</label>\r
              <input type="datetime-local" class="form-control" formControlName="fechaSalida">\r
            </div>\r
            <!-- Fecha Llegada -->\r
            <div class="col-md-6">\r
              <label class="form-label">Fecha Llegada</label>\r
              <input type="datetime-local" class="form-control" formControlName="fechaLlegada">\r
            </div>\r
          </div>\r
\r
        </form>\r
\r
        <!-- Pie de modal -->\r
        <div class="modal-footer border-0 px-4 pb-3">\r
          <!-- Bot\xF3n Editar (solo vista) -->\r
          <button\r
            *ngIf="!editMode"\r
            type="button"\r
            class="btn btn-warning"\r
            (click)="onEdit()"\r
          >\r
            Editar\r
          </button>\r
\r
          <!-- Bot\xF3n Guardar (solo edici\xF3n) -->\r
          <button\r
            *ngIf="editMode"\r
            type="button"\r
            class="btn btn-primary"\r
            [disabled]="form.invalid"\r
            (click)="onSave()"\r
          >\r
            Guardar\r
          </button>\r
\r
          <!-- Siempre: Cerrar -->\r
          <button\r
            type="button"\r
            class="btn btn-secondary"\r
            (click)="closeDetalle()"\r
          >\r
            Cerrar\r
          </button>\r
        </div>\r
\r
      </div>\r
    </div>\r
  </div>\r
`;
  }
});

// angular:jit:style:src\app\pages\transporte\transporte.css
var transporte_default2;
var init_transporte2 = __esm({
  "angular:jit:style:src\\app\\pages\\transporte\\transporte.css"() {
    transporte_default2 = "/* src/app/pages/transporte/transporte.css */\n.sidebar {\n  width: 240px;\n  background-color: #16a249;\n  color: white;\n  padding: 2rem 1rem;\n  display: flex;\n  flex-direction: column;\n}\n.logo-icon {\n  font-size: 1.5rem;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 2rem;\n}\n.brand-name {\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.nav-section {\n  flex: 1;\n}\n.nav-section-title {\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  opacity: 0.7;\n  margin: 1rem 0 0.5rem;\n}\n.nav-link {\n  color: white;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.25rem 0;\n  text-decoration: none;\n  transition: opacity .2s;\n}\n.nav-link:hover,\n.nav-link.active {\n  opacity: 0.8;\n}\n.nav-link.active {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.obra-card {\n  border-radius: .75rem;\n}\n.obra-card h5 {\n  font-weight: 600;\n}\n.obra-card .badge {\n  font-size: .75rem;\n  text-transform: none;\n  padding: .4em .8em;\n}\n.progress {\n  background-color: #e9ecef;\n}\n.progress-bar {\n  transition: width .6s ease;\n}\n.snack-success {\n  background-color: #4caf50 !important;\n  color: white;\n}\n.snack-error {\n  background-color: #f44336 !important;\n  color: white;\n}\n.card-title i {\n  color: #1fa63b;\n}\n.transportes-en-curso {\n  margin: 2rem auto;\n  padding: 0 1rem;\n  background-color: #f8f9fa;\n  border-radius: 0.75rem;\n}\n.transportes-en-curso .heading {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n}\n.transportes-en-curso .subheading {\n  color: #6c757d;\n  margin-bottom: 1.5rem;\n  font-size: 0.9rem;\n}\n.transporte-card {\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n}\n.transporte-card .card-header {\n  background: #fff;\n  border-bottom: none;\n  padding: 1rem 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.transporte-title {\n  font-size: 1.125rem;\n  color: #212529;\n}\n.status-badge {\n  background: #28a745;\n  color: #fff;\n  padding: 0.35em 0.75em;\n  border-radius: 1rem;\n  font-size: 0.8rem;\n  text-transform: none;\n}\n.transporte-card .card-body {\n  padding: 1rem 1.5rem 1.5rem;\n}\n.info-row {\n  display: flex;\n  flex-wrap: wrap;\n  margin: -0.5rem;\n}\n.info-item {\n  flex: 1 1 200px;\n  display: flex;\n  align-items: flex-start;\n  padding: 0.5rem;\n}\n.info-item i {\n  font-size: 1.2rem;\n  color: #0d6efd;\n  margin-right: 0.5rem;\n}\n.info-item .label {\n  color: #6c757d;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n}\n.info-item .info-text {\n  font-size: 0.95rem;\n  color: #212529;\n  display: block;\n  margin-top: 0.1rem;\n}\n.actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 1rem;\n}\n.actions .btn {\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  min-width: 100px;\n}\n.transporte-card .card-body {\n  padding: 0.75rem 1rem 1rem;\n}\n.info-row {\n  margin: -0.25rem;\n}\n.info-item {\n  padding: 0.25rem;\n}\n.info-item + .info-item {\n  margin-left: 7rem;\n}\n.info-item i {\n  color: #28a745 !important;\n  margin-right: 0.4rem;\n}\n.col-auto.info-item {\n  flex: 0 0 auto;\n  width: auto;\n}\n.modal-header {\n  padding-bottom: 0.5rem;\n}\n.modal-header .modal-title {\n  font-weight: 600;\n}\n.modal-header .modal-title i {\n  color: #28a745;\n}\n.modal-body h6 {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n}\n.modal-body p {\n  margin-bottom: 0.25rem;\n}\n.modal-body hr {\n  margin: 0.75rem 0;\n  border-color: #e9ecef;\n}\n.bi.text-success {\n  color: #28a745 !important;\n}\n.status-badge {\n  background: #28a745;\n  color: #fff;\n  padding: 0.35em 0.75em;\n  border-radius: 1rem;\n  font-size: 0.8rem;\n  margin-bottom: 1rem;\n  display: inline-block;\n}\n.modal-footer {\n  padding-top: 0.5rem;\n  padding-bottom: 0;\n}\n.modal-footer .btn-success {\n  min-width: 100px;\n}\n/*# sourceMappingURL=transporte.css.map */\n";
  }
});

// node_modules/@angular/animations/fesm2022/private_export.mjs
function trigger(name, definitions) {
  return { type: AnimationMetadataType.Trigger, name, definitions, options: {} };
}
function animate(timings, styles = null) {
  return { type: AnimationMetadataType.Animate, styles, timings };
}
function sequence(steps, options = null) {
  return { type: AnimationMetadataType.Sequence, steps, options };
}
function style(tokens) {
  return { type: AnimationMetadataType.Style, styles: tokens, offset: null };
}
function state(name, styles, options) {
  return { type: AnimationMetadataType.State, name, styles, options };
}
function transition(stateChangeExpr, steps, options = null) {
  return { type: AnimationMetadataType.Transition, expr: stateChangeExpr, animation: steps, options };
}
var AnimationMetadataType;
var init_private_export = __esm({
  "node_modules/@angular/animations/fesm2022/private_export.mjs"() {
    "use strict";
    (function(AnimationMetadataType2) {
      AnimationMetadataType2[AnimationMetadataType2["State"] = 0] = "State";
      AnimationMetadataType2[AnimationMetadataType2["Transition"] = 1] = "Transition";
      AnimationMetadataType2[AnimationMetadataType2["Sequence"] = 2] = "Sequence";
      AnimationMetadataType2[AnimationMetadataType2["Group"] = 3] = "Group";
      AnimationMetadataType2[AnimationMetadataType2["Animate"] = 4] = "Animate";
      AnimationMetadataType2[AnimationMetadataType2["Keyframes"] = 5] = "Keyframes";
      AnimationMetadataType2[AnimationMetadataType2["Style"] = 6] = "Style";
      AnimationMetadataType2[AnimationMetadataType2["Trigger"] = 7] = "Trigger";
      AnimationMetadataType2[AnimationMetadataType2["Reference"] = 8] = "Reference";
      AnimationMetadataType2[AnimationMetadataType2["AnimateChild"] = 9] = "AnimateChild";
      AnimationMetadataType2[AnimationMetadataType2["AnimateRef"] = 10] = "AnimateRef";
      AnimationMetadataType2[AnimationMetadataType2["Query"] = 11] = "Query";
      AnimationMetadataType2[AnimationMetadataType2["Stagger"] = 12] = "Stagger";
    })(AnimationMetadataType || (AnimationMetadataType = {}));
  }
});

// node_modules/@angular/animations/fesm2022/animations.mjs
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, `@@${id}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  return type === 0 || type === 1;
}
var AnimationBuilder, AnimationFactory, BrowserAnimationBuilder, BrowserAnimationFactory, RendererAnimationPlayer;
var init_animations = __esm({
  "node_modules/@angular/animations/fesm2022/animations.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    init_private_export();
    init_private_export();
    AnimationBuilder = class _AnimationBuilder {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _AnimationBuilder, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _AnimationBuilder, providedIn: "root", useFactory: () => inject(BrowserAnimationBuilder) });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: AnimationBuilder, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root", useFactory: () => inject(BrowserAnimationBuilder) }]
    }] });
    AnimationFactory = class {
    };
    BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
      animationModuleType = inject(ANIMATION_MODULE_TYPE, { optional: true });
      _nextAnimationId = 0;
      _renderer;
      constructor(rootRenderer, doc) {
        super();
        const typeData = {
          id: "0",
          encapsulation: ViewEncapsulation.None,
          styles: [],
          data: { animation: [] }
        };
        this._renderer = rootRenderer.createRenderer(doc.body, typeData);
        if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
          throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
        }
      }
      build(animation2) {
        const id = this._nextAnimationId;
        this._nextAnimationId++;
        const entry = Array.isArray(animation2) ? sequence(animation2) : animation2;
        issueAnimationCommand(this._renderer, null, id, "register", [entry]);
        return new BrowserAnimationFactory(id, this._renderer);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _BrowserAnimationBuilder, deps: [{ token: RendererFactory2 }, { token: DOCUMENT }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: _BrowserAnimationBuilder, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.0", ngImport: core_exports, type: BrowserAnimationBuilder, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [{ type: RendererFactory2 }, { type: Document, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }] });
    BrowserAnimationFactory = class extends AnimationFactory {
      _id;
      _renderer;
      constructor(_id, _renderer) {
        super();
        this._id = _id;
        this._renderer = _renderer;
      }
      create(element, options) {
        return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
      }
    };
    RendererAnimationPlayer = class {
      id;
      element;
      _renderer;
      parentPlayer = null;
      _started = false;
      constructor(id, element, options, _renderer) {
        this.id = id;
        this.element = element;
        this._renderer = _renderer;
        this._command("create", options);
      }
      _listen(eventName, callback) {
        return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
      }
      _command(command, ...args) {
        issueAnimationCommand(this._renderer, this.element, this.id, command, args);
      }
      onDone(fn) {
        this._listen("done", fn);
      }
      onStart(fn) {
        this._listen("start", fn);
      }
      onDestroy(fn) {
        this._listen("destroy", fn);
      }
      init() {
        this._command("init");
      }
      hasStarted() {
        return this._started;
      }
      play() {
        this._command("play");
        this._started = true;
      }
      pause() {
        this._command("pause");
      }
      restart() {
        this._command("restart");
      }
      finish() {
        this._command("finish");
      }
      destroy() {
        this._command("destroy");
      }
      reset() {
        this._command("reset");
        this._started = false;
      }
      setPosition(p) {
        this._command("setPosition", p);
      }
      getPosition() {
        return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
      }
      totalTime = 0;
    };
  }
});

// node_modules/ngx-toastr/fesm2022/ngx-toastr.mjs
var ToastContainerDirective, ComponentPortal, BasePortalHost, ToastRef, ToastPackage, DefaultNoComponentGlobalConfig, TOAST_CONFIG, DomPortalHost, OverlayContainer, OverlayRef, Overlay, ToastrService, Toast, DefaultGlobalConfig, provideToastr, ToastrModule, ToastrComponentlessModule, ToastNoAnimation, DefaultNoAnimationsGlobalConfig, ToastNoAnimationModule;
var init_ngx_toastr = __esm({
  "node_modules/ngx-toastr/fesm2022/ngx-toastr.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_animations();
    init_common();
    init_esm();
    init_platform_browser();
    ToastContainerDirective = class _ToastContainerDirective {
      el;
      constructor(el) {
        this.el = el;
      }
      getContainerElement() {
        return this.el.nativeElement;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: core_exports, type: _ToastContainerDirective, deps: [{ token: ElementRef }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "18.0.0", type: _ToastContainerDirective, isStandalone: true, selector: "[toastContainer]", exportAs: ["toastContainer"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: core_exports, type: ToastContainerDirective, decorators: [{
      type: Directive,
      args: [{
        selector: "[toastContainer]",
        exportAs: "toastContainer",
        standalone: true
      }]
    }], ctorParameters: () => [{ type: ElementRef }] });
    ComponentPortal = class {
      _attachedHost;
      /** The type of the component that will be instantiated for attachment. */
      component;
      /**
       * [Optional] Where the attached component should live in Angular's *logical* component tree.
       * This is different from where the component *renders*, which is determined by the PortalHost.
       * The origin necessary when the host is outside of the Angular application context.
       */
      viewContainerRef;
      /** Injector used for the instantiation of the component. */
      injector;
      constructor(component, injector) {
        this.component = component;
        this.injector = injector;
      }
      /** Attach this portal to a host. */
      attach(host, newestOnTop) {
        this._attachedHost = host;
        return host.attach(this, newestOnTop);
      }
      /** Detach this portal from its host */
      detach() {
        const host = this._attachedHost;
        if (host) {
          this._attachedHost = void 0;
          return host.detach();
        }
      }
      /** Whether this portal is attached to a host. */
      get isAttached() {
        return this._attachedHost != null;
      }
      /**
       * Sets the PortalHost reference without performing `attach()`. This is used directly by
       * the PortalHost when it is performing an `attach()` or `detach()`.
       */
      setAttachedHost(host) {
        this._attachedHost = host;
      }
    };
    BasePortalHost = class {
      /** The portal currently attached to the host. */
      _attachedPortal;
      /** A function that will permanently dispose this host. */
      _disposeFn;
      attach(portal, newestOnTop) {
        this._attachedPortal = portal;
        return this.attachComponentPortal(portal, newestOnTop);
      }
      detach() {
        if (this._attachedPortal) {
          this._attachedPortal.setAttachedHost();
        }
        this._attachedPortal = void 0;
        if (this._disposeFn) {
          this._disposeFn();
          this._disposeFn = void 0;
        }
      }
      setDisposeFn(fn) {
        this._disposeFn = fn;
      }
    };
    ToastRef = class {
      _overlayRef;
      /** The instance of component opened into the toast. */
      componentInstance;
      /** Count of duplicates of this toast */
      duplicatesCount = 0;
      /** Subject for notifying the user that the toast has finished closing. */
      _afterClosed = new Subject();
      /** triggered when toast is activated */
      _activate = new Subject();
      /** notifies the toast that it should close before the timeout */
      _manualClose = new Subject();
      /** notifies the toast that it should reset the timeouts */
      _resetTimeout = new Subject();
      /** notifies the toast that it should count a duplicate toast */
      _countDuplicate = new Subject();
      constructor(_overlayRef) {
        this._overlayRef = _overlayRef;
      }
      manualClose() {
        this._manualClose.next();
        this._manualClose.complete();
      }
      manualClosed() {
        return this._manualClose.asObservable();
      }
      timeoutReset() {
        return this._resetTimeout.asObservable();
      }
      countDuplicate() {
        return this._countDuplicate.asObservable();
      }
      /**
       * Close the toast.
       */
      close() {
        this._overlayRef.detach();
        this._afterClosed.next();
        this._manualClose.next();
        this._afterClosed.complete();
        this._manualClose.complete();
        this._activate.complete();
        this._resetTimeout.complete();
        this._countDuplicate.complete();
      }
      /** Gets an observable that is notified when the toast is finished closing. */
      afterClosed() {
        return this._afterClosed.asObservable();
      }
      isInactive() {
        return this._activate.isStopped;
      }
      activate() {
        this._activate.next();
        this._activate.complete();
      }
      /** Gets an observable that is notified when the toast has started opening. */
      afterActivate() {
        return this._activate.asObservable();
      }
      /** Reset the toast timouts and count duplicates */
      onDuplicate(resetTimeout, countDuplicate) {
        if (resetTimeout) {
          this._resetTimeout.next();
        }
        if (countDuplicate) {
          this._countDuplicate.next(++this.duplicatesCount);
        }
      }
    };
    ToastPackage = class {
      toastId;
      config;
      message;
      title;
      toastType;
      toastRef;
      _onTap = new Subject();
      _onAction = new Subject();
      constructor(toastId, config, message, title, toastType, toastRef) {
        this.toastId = toastId;
        this.config = config;
        this.message = message;
        this.title = title;
        this.toastType = toastType;
        this.toastRef = toastRef;
        this.toastRef.afterClosed().subscribe(() => {
          this._onAction.complete();
          this._onTap.complete();
        });
      }
      /** Fired on click */
      triggerTap() {
        this._onTap.next();
        if (this.config.tapToDismiss) {
          this._onTap.complete();
        }
      }
      onTap() {
        return this._onTap.asObservable();
      }
      /** available for use in custom toast */
      triggerAction(action) {
        this._onAction.next(action);
      }
      onAction() {
        return this._onAction.asObservable();
      }
    };
    DefaultNoComponentGlobalConfig = {
      maxOpened: 0,
      autoDismiss: false,
      newestOnTop: true,
      preventDuplicates: false,
      countDuplicates: false,
      resetTimeoutOnDuplicate: false,
      includeTitleDuplicates: false,
      iconClasses: {
        error: "toast-error",
        info: "toast-info",
        success: "toast-success",
        warning: "toast-warning"
      },
      // Individual
      closeButton: false,
      disableTimeOut: false,
      timeOut: 5e3,
      extendedTimeOut: 1e3,
      enableHtml: false,
      progressBar: false,
      toastClass: "ngx-toastr",
      positionClass: "toast-top-right",
      titleClass: "toast-title",
      messageClass: "toast-message",
      easing: "ease-in",
      easeTime: 300,
      tapToDismiss: true,
      onActivateTick: false,
      progressAnimation: "decreasing"
    };
    TOAST_CONFIG = new InjectionToken("ToastConfig");
    DomPortalHost = class extends BasePortalHost {
      _hostDomElement;
      _componentFactoryResolver;
      _appRef;
      constructor(_hostDomElement, _componentFactoryResolver, _appRef) {
        super();
        this._hostDomElement = _hostDomElement;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
      }
      /**
       * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
       * @param portal Portal to be attached
       */
      attachComponentPortal(portal, newestOnTop) {
        const componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        let componentRef;
        componentRef = componentFactory.create(portal.injector);
        this._appRef.attachView(componentRef.hostView);
        this.setDisposeFn(() => {
          this._appRef.detachView(componentRef.hostView);
          componentRef.destroy();
        });
        if (newestOnTop) {
          this._hostDomElement.insertBefore(this._getComponentRootNode(componentRef), this._hostDomElement.firstChild);
        } else {
          this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
        }
        return componentRef;
      }
      /** Gets the root HTMLElement for an instantiated component. */
      _getComponentRootNode(componentRef) {
        return componentRef.hostView.rootNodes[0];
      }
    };
    OverlayContainer = class _OverlayContainer {
      _document = inject(DOCUMENT);
      _containerElement;
      ngOnDestroy() {
        if (this._containerElement && this._containerElement.parentNode) {
          this._containerElement.parentNode.removeChild(this._containerElement);
        }
      }
      /**
       * This method returns the overlay container element. It will lazily
       * create the element the first time  it is called to facilitate using
       * the container in non-browser environments.
       * @returns the container element
       */
      getContainerElement() {
        if (!this._containerElement) {
          this._createContainer();
        }
        return this._containerElement;
      }
      /**
       * Create the overlay container element, which is simply a div
       * with the 'cdk-overlay-container' class on the document body
       * and 'aria-live="polite"'
       */
      _createContainer() {
        const container = this._document.createElement("div");
        container.classList.add("overlay-container");
        container.setAttribute("aria-live", "polite");
        this._document.body.appendChild(container);
        this._containerElement = container;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: core_exports, type: _OverlayContainer, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.0", ngImport: core_exports, type: _OverlayContainer, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: core_exports, type: OverlayContainer, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    OverlayRef = class {
      _portalHost;
      constructor(_portalHost) {
        this._portalHost = _portalHost;
      }
      attach(portal, newestOnTop = true) {
        return this._portalHost.attach(portal, newestOnTop);
      }
      /**
       * Detaches an overlay from a portal.
       * @returns Resolves when the overlay has been detached.
       */
      detach() {
        return this._portalHost.detach();
      }
    };
    Overlay = class _Overlay {
      _overlayContainer = inject(OverlayContainer);
      _componentFactoryResolver = inject(ComponentFactoryResolver$1);
      _appRef = inject(ApplicationRef);
      _document = inject(DOCUMENT);
      // Namespace panes by overlay container
      _paneElements = /* @__PURE__ */ new Map();
      /**
       * Creates an overlay.
       * @returns A reference to the created overlay.
       */
      create(positionClass, overlayContainer) {
        return this._createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
      }
      getPaneElement(positionClass = "", overlayContainer) {
        if (!this._paneElements.get(overlayContainer)) {
          this._paneElements.set(overlayContainer, {});
        }
        if (!this._paneElements.get(overlayContainer)[positionClass]) {
          this._paneElements.get(overlayContainer)[positionClass] = this._createPaneElement(positionClass, overlayContainer);
        }
        return this._paneElements.get(overlayContainer)[positionClass];
      }
      /**
       * Creates the DOM element for an overlay and appends it to the overlay container.
       * @returns Newly-created pane element
       */
      _createPaneElement(positionClass, overlayContainer) {
        const pane = this._document.createElement("div");
        pane.id = "toast-container";
        pane.classList.add(positionClass);
        pane.classList.add("toast-container");
        if (!overlayContainer) {
          this._overlayContainer.getContainerElement().appendChild(pane);
        } else {
          overlayContainer.getContainerElement().appendChild(pane);
        }
        return pane;
      }
      /**
       * Create a DomPortalHost into which the overlay content can be loaded.
       * @param pane The DOM element to turn into a portal host.
       * @returns A portal host for the given DOM element.
       */
      _createPortalHost(pane) {
        return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef);
      }
      /**
       * Creates an OverlayRef for an overlay in the given DOM element.
       * @param pane DOM element for the overlay
       */
      _createOverlayRef(pane) {
        return new OverlayRef(this._createPortalHost(pane));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: core_exports, type: _Overlay, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.0", ngImport: core_exports, type: _Overlay, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: core_exports, type: Overlay, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    ToastrService = class _ToastrService {
      overlay;
      _injector;
      sanitizer;
      ngZone;
      toastrConfig;
      currentlyActive = 0;
      toasts = [];
      overlayContainer;
      previousToastMessage;
      index = 0;
      constructor(token, overlay, _injector, sanitizer, ngZone) {
        this.overlay = overlay;
        this._injector = _injector;
        this.sanitizer = sanitizer;
        this.ngZone = ngZone;
        this.toastrConfig = __spreadValues(__spreadValues({}, token.default), token.config);
        if (token.config.iconClasses) {
          this.toastrConfig.iconClasses = __spreadValues(__spreadValues({}, token.default.iconClasses), token.config.iconClasses);
        }
      }
      /** show toast */
      show(message, title, override = {}, type = "") {
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
      }
      /** show successful toast */
      success(message, title, override = {}) {
        const type = this.toastrConfig.iconClasses.success || "";
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
      }
      /** show error toast */
      error(message, title, override = {}) {
        const type = this.toastrConfig.iconClasses.error || "";
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
      }
      /** show info toast */
      info(message, title, override = {}) {
        const type = this.toastrConfig.iconClasses.info || "";
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
      }
      /** show warning toast */
      warning(message, title, override = {}) {
        const type = this.toastrConfig.iconClasses.warning || "";
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
      }
      /**
       * Remove all or a single toast by id
       */
      clear(toastId) {
        for (const toast of this.toasts) {
          if (toastId !== void 0) {
            if (toast.toastId === toastId) {
              toast.toastRef.manualClose();
              return;
            }
          } else {
            toast.toastRef.manualClose();
          }
        }
      }
      /**
       * Remove and destroy a single toast by id
       */
      remove(toastId) {
        const found = this._findToast(toastId);
        if (!found) {
          return false;
        }
        found.activeToast.toastRef.close();
        this.toasts.splice(found.index, 1);
        this.currentlyActive = this.currentlyActive - 1;
        if (!this.toastrConfig.maxOpened || !this.toasts.length) {
          return false;
        }
        if (this.currentlyActive < this.toastrConfig.maxOpened && this.toasts[this.currentlyActive]) {
          const p = this.toasts[this.currentlyActive].toastRef;
          if (!p.isInactive()) {
            this.currentlyActive = this.currentlyActive + 1;
            p.activate();
          }
        }
        return true;
      }
      /**
       * Determines if toast message is already shown
       */
      findDuplicate(title = "", message = "", resetOnDuplicate, countDuplicates) {
        const { includeTitleDuplicates } = this.toastrConfig;
        for (const toast of this.toasts) {
          const hasDuplicateTitle = includeTitleDuplicates && toast.title === title;
          if ((!includeTitleDuplicates || hasDuplicateTitle) && toast.message === message) {
            toast.toastRef.onDuplicate(resetOnDuplicate, countDuplicates);
            return toast;
          }
        }
        return null;
      }
      /** create a clone of global config and apply individual settings */
      applyConfig(override = {}) {
        return __spreadValues(__spreadValues({}, this.toastrConfig), override);
      }
      /**
       * Find toast object by id
       */
      _findToast(toastId) {
        for (let i = 0; i < this.toasts.length; i++) {
          if (this.toasts[i].toastId === toastId) {
            return { index: i, activeToast: this.toasts[i] };
          }
        }
        return null;
      }
      /**
       * Determines the need to run inside angular's zone then builds the toast
       */
      _preBuildNotification(toastType, message, title, config) {
        if (config.onActivateTick) {
          return this.ngZone.run(() => this._buildNotification(toastType, message, title, config));
        }
        return this._buildNotification(toastType, message, title, config);
      }
      /**
       * Creates and attaches toast data to component
       * returns the active toast, or in case preventDuplicates is enabled the original/non-duplicate active toast.
       */
      _buildNotification(toastType, message, title, config) {
        if (!config.toastComponent) {
          throw new Error("toastComponent required");
        }
        const duplicate = this.findDuplicate(title, message, this.toastrConfig.resetTimeoutOnDuplicate && config.timeOut > 0, this.toastrConfig.countDuplicates);
        if ((this.toastrConfig.includeTitleDuplicates && title || message) && this.toastrConfig.preventDuplicates && duplicate !== null) {
          return duplicate;
        }
        this.previousToastMessage = message;
        let keepInactive = false;
        if (this.toastrConfig.maxOpened && this.currentlyActive >= this.toastrConfig.maxOpened) {
          keepInactive = true;
          if (this.toastrConfig.autoDismiss) {
            this.clear(this.toasts[0].toastId);
          }
        }
        const overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
        this.index = this.index + 1;
        let sanitizedMessage = message;
        if (message && config.enableHtml) {
          sanitizedMessage = this.sanitizer.sanitize(SecurityContext.HTML, message);
        }
        const toastRef = new ToastRef(overlayRef);
        const toastPackage = new ToastPackage(this.index, config, sanitizedMessage, title, toastType, toastRef);
        const providers = [{ provide: ToastPackage, useValue: toastPackage }];
        const toastInjector = Injector.create({ providers, parent: this._injector });
        const component = new ComponentPortal(config.toastComponent, toastInjector);
        const portal = overlayRef.attach(component, config.newestOnTop);
        toastRef.componentInstance = portal.instance;
        const ins = {
          toastId: this.index,
          title: title || "",
          message: message || "",
          toastRef,
          onShown: toastRef.afterActivate(),
          onHidden: toastRef.afterClosed(),
          onTap: toastPackage.onTap(),
          onAction: toastPackage.onAction(),
          portal
        };
        if (!keepInactive) {
          this.currentlyActive = this.currentlyActive + 1;
          setTimeout(() => {
            ins.toastRef.activate();
          });
        }
        this.toasts.push(ins);
        return ins;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: core_exports, type: _ToastrService, deps: [{ token: TOAST_CONFIG }, { token: Overlay }, { token: Injector }, { token: DomSanitizer }, { token: NgZone }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.0", ngImport: core_exports, type: _ToastrService, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: core_exports, type: ToastrService, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Inject,
      args: [TOAST_CONFIG]
    }] }, { type: Overlay }, { type: Injector }, { type: DomSanitizer }, { type: NgZone }] });
    Toast = class _Toast {
      toastrService;
      toastPackage;
      ngZone;
      message;
      title;
      options;
      duplicatesCount;
      originalTimeout;
      /** width of progress bar */
      width = signal(-1);
      /** a combination of toast type and options.toastClass */
      toastClasses = "";
      state;
      /** controls animation */
      get _state() {
        return this.state();
      }
      /** hides component when waiting to be displayed */
      get displayStyle() {
        if (this.state().value === "inactive") {
          return "none";
        }
        return;
      }
      timeout;
      intervalId;
      hideTime;
      sub;
      sub1;
      sub2;
      sub3;
      constructor(toastrService, toastPackage, ngZone) {
        this.toastrService = toastrService;
        this.toastPackage = toastPackage;
        this.ngZone = ngZone;
        this.message = toastPackage.message;
        this.title = toastPackage.title;
        this.options = toastPackage.config;
        this.originalTimeout = toastPackage.config.timeOut;
        this.toastClasses = `${toastPackage.toastType} ${toastPackage.config.toastClass}`;
        this.sub = toastPackage.toastRef.afterActivate().subscribe(() => {
          this.activateToast();
        });
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe(() => {
          this.remove();
        });
        this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(() => {
          this.resetTimeout();
        });
        this.sub3 = toastPackage.toastRef.countDuplicate().subscribe((count) => {
          this.duplicatesCount = count;
        });
        this.state = signal({
          value: "inactive",
          params: {
            easeTime: this.toastPackage.config.easeTime,
            easing: "ease-in"
          }
        });
      }
      ngOnDestroy() {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
        this.sub3.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
      }
      /**
       * activates toast and sets timeout
       */
      activateToast() {
        this.state.update((state2) => __spreadProps(__spreadValues({}, state2), { value: "active" }));
        if (!(this.options.disableTimeOut === true || this.options.disableTimeOut === "timeOut") && this.options.timeOut) {
          this.outsideTimeout(() => this.remove(), this.options.timeOut);
          this.hideTime = (/* @__PURE__ */ new Date()).getTime() + this.options.timeOut;
          if (this.options.progressBar) {
            this.outsideInterval(() => this.updateProgress(), 10);
          }
        }
      }
      /**
       * updates progress bar width
       */
      updateProgress() {
        if (this.width() === 0 || this.width() === 100 || !this.options.timeOut) {
          return;
        }
        const now = (/* @__PURE__ */ new Date()).getTime();
        const remaining = this.hideTime - now;
        this.width.set(remaining / this.options.timeOut * 100);
        if (this.options.progressAnimation === "increasing") {
          this.width.update((width) => 100 - width);
        }
        if (this.width() <= 0) {
          this.width.set(0);
        }
        if (this.width() >= 100) {
          this.width.set(100);
        }
      }
      resetTimeout() {
        clearTimeout(this.timeout);
        clearInterval(this.intervalId);
        this.state.update((state2) => __spreadProps(__spreadValues({}, state2), { value: "active" }));
        this.outsideTimeout(() => this.remove(), this.originalTimeout);
        this.options.timeOut = this.originalTimeout;
        this.hideTime = (/* @__PURE__ */ new Date()).getTime() + (this.options.timeOut || 0);
        this.width.set(-1);
        if (this.options.progressBar) {
          this.outsideInterval(() => this.updateProgress(), 10);
        }
      }
      /**
       * tells toastrService to remove this toast after animation time
       */
      remove() {
        if (this.state().value === "removed") {
          return;
        }
        clearTimeout(this.timeout);
        this.state.update((state2) => __spreadProps(__spreadValues({}, state2), { value: "removed" }));
        this.outsideTimeout(() => this.toastrService.remove(this.toastPackage.toastId), +this.toastPackage.config.easeTime);
      }
      tapToast() {
        if (this.state().value === "removed") {
          return;
        }
        this.toastPackage.triggerTap();
        if (this.options.tapToDismiss) {
          this.remove();
        }
      }
      stickAround() {
        if (this.state().value === "removed") {
          return;
        }
        if (this.options.disableTimeOut !== "extendedTimeOut") {
          clearTimeout(this.timeout);
          this.options.timeOut = 0;
          this.hideTime = 0;
          clearInterval(this.intervalId);
          this.width.set(0);
        }
      }
      delayedHideToast() {
        if (this.options.disableTimeOut === true || this.options.disableTimeOut === "extendedTimeOut" || this.options.extendedTimeOut === 0 || this.state().value === "removed") {
          return;
        }
        this.outsideTimeout(() => this.remove(), this.options.extendedTimeOut);
        this.options.timeOut = this.options.extendedTimeOut;
        this.hideTime = (/* @__PURE__ */ new Date()).getTime() + (this.options.timeOut || 0);
        this.width.set(-1);
        if (this.options.progressBar) {
          this.outsideInterval(() => this.updateProgress(), 10);
        }
      }
      outsideTimeout(func, timeout) {
        if (this.ngZone) {
          this.ngZone.runOutsideAngular(() => this.timeout = setTimeout(() => this.runInsideAngular(func), timeout));
        } else {
          this.timeout = setTimeout(() => func(), timeout);
        }
      }
      outsideInterval(func, timeout) {
        if (this.ngZone) {
          this.ngZone.runOutsideAngular(() => this.intervalId = setInterval(() => this.runInsideAngular(func), timeout));
        } else {
          this.intervalId = setInterval(() => func(), timeout);
        }
      }
      runInsideAngular(func) {
        if (this.ngZone) {
          this.ngZone.run(() => func());
        } else {
          func();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: core_exports, type: _Toast, deps: [{ token: ToastrService }, { token: ToastPackage }, { token: NgZone }], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0", type: _Toast, isStandalone: true, selector: "[toast-component]", host: { listeners: { "click": "tapToast()", "mouseenter": "stickAround()", "mouseleave": "delayedHideToast()" }, properties: { "class": "this.toastClasses", "@flyInOut": "this._state", "style.display": "this.displayStyle" } }, ngImport: core_exports, template: `
  <button *ngIf="options.closeButton" (click)="remove()" type="button" class="toast-close-button" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <div *ngIf="title" [class]="options.titleClass" [attr.aria-label]="title">
    {{ title }} <ng-container *ngIf="duplicatesCount">[{{ duplicatesCount + 1 }}]</ng-container>
  </div>
  <div *ngIf="message && options.enableHtml" role="alert"
    [class]="options.messageClass" [innerHTML]="message">
  </div>
  <div *ngIf="message && !options.enableHtml" role="alert"
    [class]="options.messageClass" [attr.aria-label]="message">
    {{ message }}
  </div>
  <div *ngIf="options.progressBar">
    <div class="toast-progress" [style.width]="width() + '%'"></div>
  </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], animations: [
        trigger("flyInOut", [
          state("inactive", style({ opacity: 0 })),
          state("active", style({ opacity: 1 })),
          state("removed", style({ opacity: 0 })),
          transition("inactive => active", animate("{{ easeTime }}ms {{ easing }}")),
          transition("active => removed", animate("{{ easeTime }}ms {{ easing }}"))
        ])
      ], changeDetection: ChangeDetectionStrategy.OnPush });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: core_exports, type: Toast, decorators: [{
      type: Component,
      args: [{
        selector: "[toast-component]",
        template: `
  <button *ngIf="options.closeButton" (click)="remove()" type="button" class="toast-close-button" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <div *ngIf="title" [class]="options.titleClass" [attr.aria-label]="title">
    {{ title }} <ng-container *ngIf="duplicatesCount">[{{ duplicatesCount + 1 }}]</ng-container>
  </div>
  <div *ngIf="message && options.enableHtml" role="alert"
    [class]="options.messageClass" [innerHTML]="message">
  </div>
  <div *ngIf="message && !options.enableHtml" role="alert"
    [class]="options.messageClass" [attr.aria-label]="message">
    {{ message }}
  </div>
  <div *ngIf="options.progressBar">
    <div class="toast-progress" [style.width]="width() + '%'"></div>
  </div>
  `,
        animations: [
          trigger("flyInOut", [
            state("inactive", style({ opacity: 0 })),
            state("active", style({ opacity: 1 })),
            state("removed", style({ opacity: 0 })),
            transition("inactive => active", animate("{{ easeTime }}ms {{ easing }}")),
            transition("active => removed", animate("{{ easeTime }}ms {{ easing }}"))
          ])
        ],
        preserveWhitespaces: false,
        standalone: true,
        imports: [NgIf],
        changeDetection: ChangeDetectionStrategy.OnPush
      }]
    }], ctorParameters: () => [{ type: ToastrService }, { type: ToastPackage }, { type: NgZone }], propDecorators: { toastClasses: [{
      type: HostBinding,
      args: ["class"]
    }], _state: [{
      type: HostBinding,
      args: ["@flyInOut"]
    }], displayStyle: [{
      type: HostBinding,
      args: ["style.display"]
    }], tapToast: [{
      type: HostListener,
      args: ["click"]
    }], stickAround: [{
      type: HostListener,
      args: ["mouseenter"]
    }], delayedHideToast: [{
      type: HostListener,
      args: ["mouseleave"]
    }] } });
    DefaultGlobalConfig = __spreadProps(__spreadValues({}, DefaultNoComponentGlobalConfig), {
      toastComponent: Toast
    });
    provideToastr = (config = {}) => {
      const providers = [
        {
          provide: TOAST_CONFIG,
          useValue: {
            default: DefaultGlobalConfig,
            config
          }
        }
      ];
      return makeEnvironmentProviders(providers);
    };
    ToastrModule = class _ToastrModule {
      static forRoot(config = {}) {
        return {
          ngModule: _ToastrModule,
          providers: [provideToastr(config)]
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: core_exports, type: _ToastrModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.0", ngImport: core_exports, type: _ToastrModule, imports: [Toast], exports: [Toast] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "18.0.0", ngImport: core_exports, type: _ToastrModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: core_exports, type: ToastrModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Toast],
        exports: [Toast]
      }]
    }] });
    ToastrComponentlessModule = class _ToastrComponentlessModule {
      static forRoot(config = {}) {
        return {
          ngModule: ToastrModule,
          providers: [
            {
              provide: TOAST_CONFIG,
              useValue: {
                default: DefaultNoComponentGlobalConfig,
                config
              }
            }
          ]
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: core_exports, type: _ToastrComponentlessModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.0", ngImport: core_exports, type: _ToastrComponentlessModule });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "18.0.0", ngImport: core_exports, type: _ToastrComponentlessModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: core_exports, type: ToastrComponentlessModule, decorators: [{
      type: NgModule,
      args: [{}]
    }] });
    ToastNoAnimation = class _ToastNoAnimation {
      toastrService;
      toastPackage;
      appRef;
      message;
      title;
      options;
      duplicatesCount;
      originalTimeout;
      /** width of progress bar */
      width = signal(-1);
      /** a combination of toast type and options.toastClass */
      toastClasses = "";
      /** hides component when waiting to be displayed */
      get displayStyle() {
        if (this.state() === "inactive") {
          return "none";
        }
        return null;
      }
      /** controls animation */
      state = signal("inactive");
      timeout;
      intervalId;
      hideTime;
      sub;
      sub1;
      sub2;
      sub3;
      constructor(toastrService, toastPackage, appRef) {
        this.toastrService = toastrService;
        this.toastPackage = toastPackage;
        this.appRef = appRef;
        this.message = toastPackage.message;
        this.title = toastPackage.title;
        this.options = toastPackage.config;
        this.originalTimeout = toastPackage.config.timeOut;
        this.toastClasses = `${toastPackage.toastType} ${toastPackage.config.toastClass}`;
        this.sub = toastPackage.toastRef.afterActivate().subscribe(() => {
          this.activateToast();
        });
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe(() => {
          this.remove();
        });
        this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(() => {
          this.resetTimeout();
        });
        this.sub3 = toastPackage.toastRef.countDuplicate().subscribe((count) => {
          this.duplicatesCount = count;
        });
      }
      ngOnDestroy() {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
        this.sub3.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
      }
      /**
       * activates toast and sets timeout
       */
      activateToast() {
        this.state.set("active");
        if (!(this.options.disableTimeOut === true || this.options.disableTimeOut === "timeOut") && this.options.timeOut) {
          this.timeout = setTimeout(() => {
            this.remove();
          }, this.options.timeOut);
          this.hideTime = (/* @__PURE__ */ new Date()).getTime() + this.options.timeOut;
          if (this.options.progressBar) {
            this.intervalId = setInterval(() => this.updateProgress(), 10);
          }
        }
        if (this.options.onActivateTick) {
          this.appRef.tick();
        }
      }
      /**
       * updates progress bar width
       */
      updateProgress() {
        if (this.width() === 0 || this.width() === 100 || !this.options.timeOut) {
          return;
        }
        const now = (/* @__PURE__ */ new Date()).getTime();
        const remaining = this.hideTime - now;
        this.width.set(remaining / this.options.timeOut * 100);
        if (this.options.progressAnimation === "increasing") {
          this.width.update((width) => 100 - width);
        }
        if (this.width() <= 0) {
          this.width.set(0);
        }
        if (this.width() >= 100) {
          this.width.set(100);
        }
      }
      resetTimeout() {
        clearTimeout(this.timeout);
        clearInterval(this.intervalId);
        this.state.set("active");
        this.options.timeOut = this.originalTimeout;
        this.timeout = setTimeout(() => this.remove(), this.originalTimeout);
        this.hideTime = (/* @__PURE__ */ new Date()).getTime() + (this.originalTimeout || 0);
        this.width.set(-1);
        if (this.options.progressBar) {
          this.intervalId = setInterval(() => this.updateProgress(), 10);
        }
      }
      /**
       * tells toastrService to remove this toast after animation time
       */
      remove() {
        if (this.state() === "removed") {
          return;
        }
        clearTimeout(this.timeout);
        this.state.set("removed");
        this.timeout = setTimeout(() => this.toastrService.remove(this.toastPackage.toastId));
      }
      tapToast() {
        if (this.state() === "removed") {
          return;
        }
        this.toastPackage.triggerTap();
        if (this.options.tapToDismiss) {
          this.remove();
        }
      }
      stickAround() {
        if (this.state() === "removed") {
          return;
        }
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        clearInterval(this.intervalId);
        this.width.set(0);
      }
      delayedHideToast() {
        if (this.options.disableTimeOut === true || this.options.disableTimeOut === "extendedTimeOut" || this.options.extendedTimeOut === 0 || this.state() === "removed") {
          return;
        }
        this.timeout = setTimeout(() => this.remove(), this.options.extendedTimeOut);
        this.options.timeOut = this.options.extendedTimeOut;
        this.hideTime = (/* @__PURE__ */ new Date()).getTime() + (this.options.timeOut || 0);
        this.width.set(-1);
        if (this.options.progressBar) {
          this.intervalId = setInterval(() => this.updateProgress(), 10);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: core_exports, type: _ToastNoAnimation, deps: [{ token: ToastrService }, { token: ToastPackage }, { token: ApplicationRef }], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0", type: _ToastNoAnimation, isStandalone: true, selector: "[toast-component]", host: { listeners: { "click": "tapToast()", "mouseenter": "stickAround()", "mouseleave": "delayedHideToast()" }, properties: { "class": "this.toastClasses", "style.display": "this.displayStyle" } }, ngImport: core_exports, template: `
  <button *ngIf="options.closeButton" (click)="remove()" type="button" class="toast-close-button" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <div *ngIf="title" [class]="options.titleClass" [attr.aria-label]="title">
    {{ title }} <ng-container *ngIf="duplicatesCount">[{{ duplicatesCount + 1 }}]</ng-container>
  </div>
  <div *ngIf="message && options.enableHtml" role="alert"
    [class]="options.messageClass" [innerHTML]="message">
  </div>
  <div *ngIf="message && !options.enableHtml" role="alert"
    [class]="options.messageClass" [attr.aria-label]="message">
    {{ message }}
  </div>
  <div *ngIf="options.progressBar">
    <div class="toast-progress" [style.width]="width() + '%'"></div>
  </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: ChangeDetectionStrategy.OnPush });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: core_exports, type: ToastNoAnimation, decorators: [{
      type: Component,
      args: [{
        selector: "[toast-component]",
        template: `
  <button *ngIf="options.closeButton" (click)="remove()" type="button" class="toast-close-button" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <div *ngIf="title" [class]="options.titleClass" [attr.aria-label]="title">
    {{ title }} <ng-container *ngIf="duplicatesCount">[{{ duplicatesCount + 1 }}]</ng-container>
  </div>
  <div *ngIf="message && options.enableHtml" role="alert"
    [class]="options.messageClass" [innerHTML]="message">
  </div>
  <div *ngIf="message && !options.enableHtml" role="alert"
    [class]="options.messageClass" [attr.aria-label]="message">
    {{ message }}
  </div>
  <div *ngIf="options.progressBar">
    <div class="toast-progress" [style.width]="width() + '%'"></div>
  </div>
  `,
        standalone: true,
        imports: [NgIf],
        changeDetection: ChangeDetectionStrategy.OnPush
      }]
    }], ctorParameters: () => [{ type: ToastrService }, { type: ToastPackage }, { type: ApplicationRef }], propDecorators: { toastClasses: [{
      type: HostBinding,
      args: ["class"]
    }], displayStyle: [{
      type: HostBinding,
      args: ["style.display"]
    }], tapToast: [{
      type: HostListener,
      args: ["click"]
    }], stickAround: [{
      type: HostListener,
      args: ["mouseenter"]
    }], delayedHideToast: [{
      type: HostListener,
      args: ["mouseleave"]
    }] } });
    DefaultNoAnimationsGlobalConfig = __spreadProps(__spreadValues({}, DefaultNoComponentGlobalConfig), {
      toastComponent: ToastNoAnimation
    });
    ToastNoAnimationModule = class _ToastNoAnimationModule {
      static forRoot(config = {}) {
        return {
          ngModule: _ToastNoAnimationModule,
          providers: [
            {
              provide: TOAST_CONFIG,
              useValue: {
                default: DefaultNoAnimationsGlobalConfig,
                config
              }
            }
          ]
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: core_exports, type: _ToastNoAnimationModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.0", ngImport: core_exports, type: _ToastNoAnimationModule, imports: [ToastNoAnimation], exports: [ToastNoAnimation] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "18.0.0", ngImport: core_exports, type: _ToastNoAnimationModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: core_exports, type: ToastNoAnimationModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [ToastNoAnimation],
        exports: [ToastNoAnimation]
      }]
    }] });
  }
});

// src/app/pages/transporte/transporte.service.ts
var TransporteService;
var init_transporte_service = __esm({
  "src/app/pages/transporte/transporte.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    init_operators();
    init_environment();
    TransporteService = class TransporteService2 {
      http;
      baseUrl = `${environment.apiUrl}/carriers`;
      constructor(http) {
        this.http = http;
      }
      toTransporte(c) {
        const firstItem = c.items?.[0];
        return {
          id: c.id,
          residuo: firstItem?.item.name ?? "Desconocido",
          cantidad: firstItem?.quantity ?? 0,
          origen: "Bodegas EcoConstruct",
          destino: c.destiny,
          patente: c.patent,
          fechaSalida: c.departureTime,
          fechaLlegada: c.arrivalTime,
          transportista: c.carrier,
          conductor: c.driver,
          guia: c.trackingNumber,
          estadoTexto: c.status.name,
          items: c.items ?? []
        };
      }
      getTransportes() {
        return this.http.get(this.baseUrl).pipe(map((list) => list.map(this.toTransporte)));
      }
      createTransporte(t) {
        const payload = {
          user: { id: 1 },
          status: { id: 1 },
          carrier: t.transportista,
          destiny: t.destino,
          driver: t.conductor,
          patent: t.patente,
          departureTime: t.fechaSalida,
          arrivalTime: t.fechaLlegada,
          trackingNumber: t.guia,
          items: t.items ?? []
        };
        console.log("Payload enviado al backend (servicio):", payload);
        return this.http.post(this.baseUrl, payload).pipe(map(this.toTransporte));
      }
      updateTransporte(t) {
        const url = `${this.baseUrl}/${t.id}`;
        const payload = {
          user: { id: 1 },
          status: { id: 1 },
          carrier: t.transportista,
          destiny: t.destino,
          driver: t.conductor,
          patent: t.patente,
          departureTime: t.fechaSalida,
          arrivalTime: t.fechaLlegada,
          trackingNumber: t.guia
        };
        return this.http.put(url, payload).pipe(map(this.toTransporte));
      }
      getResiduos() {
        return this.http.get(`${environment.apiUrl}/items`);
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    TransporteService = __decorate([
      Injectable({ providedIn: "root" })
    ], TransporteService);
  }
});

// src/app/pages/transporte/transporte.ts
var TransporteComponent;
var init_transporte3 = __esm({
  "src/app/pages/transporte/transporte.ts"() {
    "use strict";
    init_tslib_es6();
    init_transporte();
    init_transporte2();
    init_core();
    init_common();
    init_forms();
    init_router();
    init_ngx_toastr();
    init_transporte_service();
    TransporteComponent = class TransporteComponent2 {
      fb;
      svc;
      toastr;
      router;
      form;
      enCurso = [];
      numeroServicio = this.enCurso.length + 1;
      residuos = [];
      showDetalleModal = false;
      selectedTransport;
      editMode = false;
      constructor(fb, svc, toastr, router) {
        this.fb = fb;
        this.svc = svc;
        this.toastr = toastr;
        this.router = router;
        this.form = this.fb.group({
          transportista: ["", Validators.required],
          residuoId: ["", Validators.required],
          obra: ["", Validators.required],
          conductor: ["", [Validators.required, Validators.minLength(3)]],
          patente: ["", [Validators.required, Validators.pattern(/^[A-Z0-9\-]{4,10}$/)]],
          fechaSalida: ["", Validators.required],
          fechaLlegada: ["", Validators.required],
          guia: ["", Validators.required]
        });
      }
      ngOnInit() {
        this.load();
        this.loadResiduos();
      }
      load() {
        this.svc.getTransportes().subscribe({
          next: (transports) => {
            this.enCurso = transports;
            this.numeroServicio = this.enCurso.length + 1;
          },
          error: () => {
            this.toastr.error("Error cargando transportes", "Error");
          }
        });
      }
      loadResiduos() {
        this.svc.getResiduos().subscribe({
          next: (data) => this.residuos = data,
          error: () => this.toastr.error("Error cargando residuos")
        });
      }
      register() {
        if (this.form.invalid) {
          this.toastr.error("Revisa los campos obligatorios", "Validaci\xF3n");
          this.form.markAllAsTouched();
          return;
        }
        const payload = __spreadProps(__spreadValues({}, this.form.value), {
          cantidad: 0,
          origen: "Bodegas EcoConstruct",
          destino: this.form.value.obra,
          estadoTexto: "En tr\xE1nsito",
          items: [
            {
              item: { id: this.form.value.residuoId },
              quantity: 0,
              unit: "No especifica"
            }
          ]
        });
        delete payload.residuoId;
        console.log("Payload enviado al backend:", payload);
        this.svc.createTransporte(payload).subscribe({
          next: (nuevo) => {
            this.enCurso.unshift(nuevo);
            this.numeroServicio = this.enCurso.length + 1;
            this.toastr.success("Transporte registrado", "\xA1Listo!");
            this.form.reset();
          },
          error: () => {
            this.toastr.error("Error al registrar transporte", "Error");
          }
        });
      }
      openDetalle(t) {
        this.selectedTransport = __spreadValues({}, t);
        console.log("Transporte seleccionado:", this.selectedTransport);
        console.log("Items:", this.selectedTransport.items);
        this.editMode = false;
        this.showDetalleModal = true;
      }
      onEdit() {
        this.editMode = true;
        this.form.patchValue({
          transportista: this.selectedTransport.transportista,
          residuo: this.selectedTransport.residuo,
          obra: this.selectedTransport.destino,
          conductor: this.selectedTransport.conductor,
          patente: this.selectedTransport.patente,
          fechaSalida: this.selectedTransport.fechaSalida,
          fechaLlegada: this.selectedTransport.fechaLlegada,
          guia: this.selectedTransport.guia
        });
      }
      onSave() {
        if (this.form.invalid || !this.selectedTransport)
          return;
        const updated = __spreadProps(__spreadValues(__spreadValues({}, this.selectedTransport), this.form.value), {
          destino: this.form.value.obra
        });
        this.svc.updateTransporte(updated).subscribe({
          next: (t) => {
            const i = this.enCurso.findIndex((x) => x.id === t.id);
            if (i > -1)
              this.enCurso[i] = t;
            this.toastr.success("Transporte actualizado", "\xA1Listo!");
            this.closeDetalle();
          },
          error: () => this.toastr.error("Error actualizando", "Error")
        });
      }
      getResiduoNombrePorId(id) {
        const res = this.residuos.find((r) => r.id === id);
        return res ? res.name : "(Desconocido)";
      }
      closeDetalle() {
        this.showDetalleModal = false;
        this.editMode = false;
        this.form.reset();
      }
      logout() {
        localStorage.clear();
        sessionStorage.clear();
        this.router.navigate(["/login"]);
      }
      static ctorParameters = () => [
        { type: FormBuilder },
        { type: TransporteService },
        { type: ToastrService },
        { type: Router }
      ];
    };
    TransporteComponent = __decorate([
      Component({
        selector: "app-transporte",
        standalone: true,
        imports: [
          CommonModule,
          DatePipe,
          ReactiveFormsModule,
          RouterModule
        ],
        template: transporte_default,
        styles: [transporte_default2]
      })
    ], TransporteComponent);
  }
});

// src/app/pages/transporte/residuos.spec.ts
var require_residuos_spec = __commonJS({
  "src/app/pages/transporte/residuos.spec.ts"(exports) {
    init_testing();
    init_transporte3();
    init_forms();
    init_router();
    init_ngx_toastr();
    init_esm();
    init_transporte_service();
    describe("TransporteComponent", () => {
      let component;
      let fixture;
      let mockSvc;
      let mockToastr;
      let mockRouter;
      beforeEach(() => __async(null, null, function* () {
        mockSvc = jasmine.createSpyObj("TransporteService", ["getTransportes", "getResiduos", "createTransporte", "updateTransporte"]);
        mockToastr = jasmine.createSpyObj("ToastrService", ["success", "error"]);
        mockRouter = jasmine.createSpyObj("Router", ["navigate"]);
        yield TestBed.configureTestingModule({
          imports: [ReactiveFormsModule, TransporteComponent],
          providers: [
            { provide: TransporteService, useValue: mockSvc },
            { provide: ToastrService, useValue: mockToastr },
            { provide: Router, useValue: mockRouter }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(TransporteComponent);
        component = fixture.componentInstance;
      }));
      it("deber\xEDa crearse correctamente", () => {
        expect(component).toBeTruthy();
      });
      it("deber\xEDa cargar transportes y residuos en ngOnInit", fakeAsync(() => {
        mockSvc.getTransportes.and.returnValue(of([]));
        mockSvc.getResiduos.and.returnValue(of([{ id: 1, name: "Escombro" }]));
        fixture.detectChanges();
        tick();
        expect(component.residuos.length).toBe(1);
        expect(component.numeroServicio).toBe(1);
      }));
      it("deber\xEDa mostrar error si el formulario es inv\xE1lido al registrar", () => {
        component.form.controls["transportista"].setValue("");
        component.register();
        expect(mockToastr.error).toHaveBeenCalledWith("Revisa los campos obligatorios", "Validaci\xF3n");
      });
      it("deber\xEDa registrar transporte correctamente", () => {
        const transporteMock = {
          id: 1,
          residuo: "Escombro",
          cantidad: 0,
          origen: "Bodegas EcoConstruct",
          destino: "Obra Norte",
          patente: "ABCD1234",
          fechaSalida: "2024-07-10",
          fechaLlegada: "2024-07-12",
          transportista: "Juan",
          conductor: "Pedro",
          guia: "G123",
          estadoTexto: "En tr\xE1nsito",
          items: [{
            item: { id: 1 },
            quantity: 0,
            unit: "No especifica"
          }]
        };
        mockSvc.createTransporte.and.returnValue(of(transporteMock));
        component.form.setValue({
          transportista: "Juan",
          residuoId: 1,
          obra: "Obra Norte",
          conductor: "Pedro",
          patente: "ABCD1234",
          fechaSalida: "2024-07-10",
          fechaLlegada: "2024-07-12",
          guia: "G123"
        });
        component.register();
        expect(mockSvc.createTransporte).toHaveBeenCalled();
        expect(mockToastr.success).toHaveBeenCalledWith("Transporte registrado", "\xA1Listo!");
      });
      it("deber\xEDa abrir el modal de detalle correctamente", () => {
        const mockTransporte = {
          id: 1,
          residuo: "Escombro",
          cantidad: 5,
          origen: "Bodegas EcoConstruct",
          destino: "Obra Norte",
          patente: "XYZ1234",
          fechaSalida: "2024-07-10",
          fechaLlegada: "2024-07-12",
          transportista: "Juan",
          conductor: "Pedro",
          guia: "G123",
          estadoTexto: "En tr\xE1nsito",
          items: []
        };
        component.openDetalle(mockTransporte);
        expect(component.selectedTransport).toBeTruthy();
        expect(component.showDetalleModal).toBeTrue();
      });
      it("deber\xEDa cerrar el modal y resetear el formulario", () => {
        component.form.patchValue({ transportista: "test" });
        component.showDetalleModal = true;
        component.closeDetalle();
        expect(component.showDetalleModal).toBeFalse();
        expect(component.form.get("transportista")?.value).toBeNull();
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
export default require_residuos_spec();
/*! Bundled license information:

@angular/animations/fesm2022/private_export.mjs:
@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v20.1.0
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=spec-residuos.spec.js.map
