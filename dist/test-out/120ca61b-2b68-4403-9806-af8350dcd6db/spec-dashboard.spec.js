import {
  Chart,
  defaults,
  init_chart,
  registerables
} from "./chunk-OWFJCNXR.js";
import {
  Router,
  RouterModule,
  init_router
} from "./chunk-6OS43OYY.js";
import {
  CommonModule,
  init_common
} from "./chunk-6LR7LCV7.js";
import "./chunk-KRHRSQJI.js";
import {
  BehaviorSubject,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  FactoryTarget,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  TestBed,
  __decorate,
  core_exports,
  distinctUntilChanged,
  init_core,
  init_esm,
  init_operators,
  init_testing,
  init_tslib_es6,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-VPLQVZLL.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-SR4DERTU.js";

// angular:jit:template:src\app\pages\dashboard\dashboard.html
var dashboard_default;
var init_dashboard = __esm({
  "angular:jit:template:src\\app\\pages\\dashboard\\dashboard.html"() {
    dashboard_default = '<div class="d-flex vh-100 overflow-hidden">\r\n\r\n<aside class="sidebar text-white flex-shrink-0 p-3" style="width:240px">\r\n  <div class="d-flex align-items-center mb-4">\r\n    <i class="bi bi-leaf-fill fs-4 me-2"></i>\r\n    <span class="h5 mb-0">EcoConstruct</span>\r\n  </div>\r\n\r\n  <nav class="nav flex-column">\r\n\r\n    <small class="text-uppercase text-white-50 mb-2">Principal</small>\r\n\r\n    <a\r\n      routerLink="/dashboard"\r\n      routerLinkActive="active"\r\n      [routerLinkActiveOptions]="{ exact: true }"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-speedometer2 me-2"></i>\r\n      Dashboard\r\n    </a>\r\n\r\n    <a\r\n      routerLink="/gestion-obras"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-building me-2"></i>\r\n      Gesti\xF3n de Obras\r\n    </a>\r\n\r\n    <a\r\n      routerLink="/registro-residuos"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-card-checklist me-2"></i>\r\n      Registro de Residuos\r\n    </a>\r\n\r\n    <a\r\n      routerLink="/transporte"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-truck me-2"></i>\r\n      Transporte\r\n    </a>\r\n\r\n    <a\r\n      routerLink="/inventario"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-box-seam me-2"></i>\r\n      Inventario\r\n    </a>\r\n\r\n    <a\r\n      routerLink="/historial-trazabilidad"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-clock-history me-2"></i>\r\n      Historial y Trazabilidad\r\n    </a>\r\n\r\n    <a\r\n      routerLink="/reportes"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-bar-chart me-2"></i>\r\n      Reportes\r\n    </a>\r\n\r\n    <hr class="border-light">\r\n\r\n    <small class="text-uppercase text-white-50 mb-2">Sistema</small>\r\n    <a\r\n      routerLink="/perfil"\r\n      routerLinkActive="active"\r\n      class="nav-link text-white"\r\n    >\r\n      <i class="bi bi-person-circle me-2"></i>\r\n      Perfil\r\n    </a>\r\n          <a routerLink="/usuarios"\r\n         routerLinkActive="active"\r\n         class="nav-link text-white mt-2">\r\n        <i class="bi bi-people me-2"></i>Usuarios\r\n    </a>\r\n    <a\r\n      href="#"\r\n      (click)="logout()"\r\n      class="nav-link text-white mt-2"\r\n    >\r\n      <i class="bi bi-box-arrow-right me-2"></i>\r\n      Cerrar Sesi\xF3n\r\n    </a>\r\n  </nav>\r\n</aside>\r\n\r\n  <main class="flex-grow-1 overflow-auto p-4">\r\n\r\n    <div class="d-flex justify-content-between align-items-start mb-4">\r\n      <div>\r\n        <h2 class="h4 mb-1">EcoConstruct</h2>\r\n        <small class="text-muted">Sistema de Gesti\xF3n de Residuos de Construcci\xF3n</small>\r\n      </div>\r\n      <div class="d-flex gap-2">\r\n        <select class="form-select form-select-sm">\r\n          <option>Filtrar por obra</option>\r\n        </select>\r\n        <select class="form-select form-select-sm">\r\n          <option>Tipo de residuo</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row gx-3 gy-3 mb-4">\r\n      <div class="col-12 col-md-6 col-lg-3">\r\n        <button class="btn btn-outline-success step-btn d-flex align-items-center w-100 p-3">\r\n          <span class="step-number text-success fw-bold me-3">1.</span>\r\n          <div class="flex-grow-1 text-start">\r\n            <div class="step-title">Registro de Residuos</div>\r\n            <small class="step-subtitle text-muted">Ingresar nuevos residuos</small>\r\n          </div>\r\n          <span class="step-icon bg-success bg-opacity-10 rounded-circle p-2">\r\n            <i class="bi bi-plus-lg text-success"></i>\r\n          </span>\r\n        </button>\r\n      </div>\r\n      <div class="col-12 col-md-6 col-lg-3">\r\n        <button class="btn btn-outline-primary step-btn d-flex align-items-center w-100 p-3">\r\n          <span class="step-number text-primary fw-bold me-3">2.</span>\r\n          <div class="flex-grow-1 text-start">\r\n            <div class="step-title">Trazabilidad</div>\r\n            <small class="step-subtitle text-muted">Seguir recorrido de residuos</small>\r\n          </div>\r\n          <span class="step-icon bg-primary bg-opacity-10 rounded-circle p-2">\r\n            <i class="bi bi-filter-right text-primary"></i>\r\n          </span>\r\n        </button>\r\n      </div>\r\n      <div class="col-12 col-md-6 col-lg-3">\r\n        <button class="btn btn-outline-secondary step-btn d-flex align-items-center w-100 p-3">\r\n          <span class="step-number text-secondary fw-bold me-3">3.</span>\r\n          <div class="flex-grow-1 text-start">\r\n            <div class="step-title">Reportes</div>\r\n            <small class="step-subtitle text-muted">Generar reportes visuales</small>\r\n          </div>\r\n          <span class="step-icon bg-secondary bg-opacity-10 rounded-circle p-2">\r\n            <i class="bi bi-file-earmark-text text-secondary"></i>\r\n          </span>\r\n        </button>\r\n      </div>\r\n      <div class="col-12 col-md-6 col-lg-3">\r\n        <button class="btn btn-outline-warning step-btn d-flex align-items-center w-100 p-3">\r\n          <span class="step-number text-warning fw-bold me-3">4.</span>\r\n          <div class="flex-grow-1 text-start">\r\n            <div class="step-title">Panel Visual</div>\r\n            <small class="step-subtitle text-muted">Gr\xE1ficos y estad\xEDsticas</small>\r\n          </div>\r\n          <span class="step-icon bg-warning bg-opacity-10 rounded-circle p-2">\r\n            <i class="bi bi-bar-chart-line-fill text-warning"></i>\r\n          </span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row gx-3 gy-3 mb-4">\r\n      <div class="col-12 col-md-6 col-lg-3">\r\n        <div class="card h-100 shadow-sm">\r\n          <div class="card-body position-relative">\r\n            <i class="bi bi-box position-absolute" style="top:1rem; right:1rem; color:#6b7280;"></i>\r\n            <small class="text-muted">Total Residuos</small>\r\n            <h2 class="fw-bold mt-1">324 m\xB3</h2>\r\n            <small class="text-success">Este mes</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="col-12 col-md-6 col-lg-3">\r\n        <div class="card h-100 shadow-sm">\r\n          <div class="card-body position-relative">\r\n            <i class="bi bi-arrow-repeat position-absolute" style="top:1rem; right:1rem; color:#6b7280;"></i>\r\n            <small class="text-muted">% Reciclado</small>\r\n            <h2 class="fw-bold text-success mt-1">68.5%</h2>\r\n            <small class="text-success">\u2191 3.2%</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="col-12 col-md-6 col-lg-3">\r\n        <div class="card h-100 shadow-sm">\r\n          <div class="card-body position-relative">\r\n            <i class="bi bi-building position-absolute" style="top:1rem; right:1rem; color:#6b7280;"></i>\r\n            <small class="text-muted">Obras Activas</small>\r\n            <h2 class="fw-bold mt-1">3</h2>\r\n            <small class="text-muted">En seguimiento</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="col-12 col-md-6 col-lg-3">\r\n        <div class="card h-100 shadow-sm">\r\n          <div class="card-body position-relative">\r\n            <i class="bi bi-graph-up position-absolute" style="top:1rem; right:1rem; color:#6b7280;"></i>\r\n            <small class="text-muted">Eficiencia</small>\r\n            <h2 class="fw-bold mt-1">85.2%</h2>\r\n            <small class="text-success">\u2191 5.1%</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row gx-4 gy-4 mb-4">\r\n      <div class="col-12 col-md-6">\r\n        <div class="card h-100 p-3 shadow-sm">\r\n          <h6 class="mb-3">Destino de Residuos</h6>\r\n          <div class="ratio ratio-1x1 mx-auto" style="max-width:300px">\r\n            <canvas\r\n              baseChart\r\n              [data]="pieChartData"\r\n              [type]="pieChartType"\r\n              [options]="pieChartOptions"\r\n              class="w-100 h-100">\r\n            </canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="col-12 col-md-6">\r\n        <div class="card h-100 p-3 shadow-sm">\r\n          <h6 class="mb-3">Volumen por Obra y Tipo</h6>\r\n          <div class="ratio ratio-16x9">\r\n            <canvas\r\n              baseChart\r\n              [data]="barChartData"\r\n              [type]="barChartType"\r\n              [options]="barChartOptions"\r\n              class="w-100 h-100">\r\n            </canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="d-flex flex-wrap gap-2 mb-4">\r\n      <button class="btn btn-success">\r\n        <i class="bi bi-plus-lg me-1"></i> Nuevo Registro\r\n      </button>\r\n      <button class="btn btn-outline-secondary">\r\n        <i class="bi bi-link-45deg me-1"></i> Ver Trazabilidad\r\n      </button>\r\n      <button class="btn btn-outline-secondary">\r\n        <i class="bi bi-file-earmark-text me-1"></i> Generar Reporte\r\n      </button>\r\n      <button class="btn btn-outline-secondary">\r\n        <i class="bi bi-filter me-1"></i> Filtros Avanzados\r\n      </button>\r\n    </div>\r\n  </main>\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\pages\dashboard\dashboard.css
var dashboard_default2;
var init_dashboard2 = __esm({
  "angular:jit:style:src\\app\\pages\\dashboard\\dashboard.css"() {
    dashboard_default2 = '/* src/app/pages/dashboard/dashboard.css */\n.dashboard-layout {\n  display: flex;\n  min-height: 100vh;\n  font-family: "Segoe UI", sans-serif;\n  background-color: #f9fafb;\n}\n.sidebar {\n  width: 240px;\n  background-color: #16a249;\n  color: white;\n  padding: 2rem 1rem;\n  display: flex;\n  flex-direction: column;\n}\n.logo-icon {\n  font-size: 1.5rem;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 2rem;\n}\n.brand-name {\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.nav-section {\n  flex: 1;\n}\n.nav-section-title {\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  opacity: 0.7;\n  margin: 1rem 0 0.5rem;\n}\n.nav-link {\n  color: white;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.25rem 0;\n  text-decoration: none;\n  transition: opacity .2s;\n}\n.nav-link.active,\n.nav-link:hover {\n  opacity: 0.8;\n}\n.main-content {\n  flex: 1;\n  padding: 1.5rem 2rem;\n  overflow-y: auto;\n}\n.step-btn {\n  border-width: 1.5px;\n  border-radius: 0.5rem;\n  transition: background-color .2s, box-shadow .2s;\n}\n.step-btn:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.step-number {\n  font-size: 1rem;\n}\n.step-title {\n  font-size: 0.95rem;\n  font-weight: 600;\n}\n.step-subtitle {\n  font-size: 0.85rem;\n}\n.step-icon {\n  width: 2.25rem;\n  height: 2.25rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.page-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.page-subtitle {\n  color: #6b7280;\n  font-size: 0.9rem;\n}\n.filters select {\n  width: auto;\n  margin-left: 0.5rem;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.stat-card {\n  background: white;\n  padding: 1rem;\n  border-radius: 8px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.stat-label {\n  font-size: 0.85rem;\n  color: #6b7280;\n}\n.stat-value {\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0.25rem 0;\n}\n.stat-footer {\n  font-size: 0.8rem;\n}\n.charts-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.chart-card {\n  background: white;\n  padding: 1rem;\n  border-radius: 8px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.chart-header {\n  font-weight: 600;\n  margin-bottom: 0.75rem;\n}\n.chart {\n  display: block;\n  width: 100% !important;\n  height: 300px !important;\n}\n.quick-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-bottom: 2rem;\n}\n.quick-actions .btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n@media (max-width: 768px) {\n  .dashboard-layout {\n    flex-direction: column;\n  }\n  .sidebar {\n    width: 100%;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .steps {\n    grid-template-columns: 1fr;\n  }\n  .header {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=dashboard.css.map */\n';
  }
});

// node_modules/lodash-es/_freeGlobal.js
var freeGlobal, freeGlobal_default;
var init_freeGlobal = __esm({
  "node_modules/lodash-es/_freeGlobal.js"() {
    "use strict";
    freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    freeGlobal_default = freeGlobal;
  }
});

// node_modules/lodash-es/_root.js
var freeSelf, root, root_default;
var init_root = __esm({
  "node_modules/lodash-es/_root.js"() {
    "use strict";
    init_freeGlobal();
    freeSelf = typeof self == "object" && self && self.Object === Object && self;
    root = freeGlobal_default || freeSelf || Function("return this")();
    root_default = root;
  }
});

// node_modules/lodash-es/_Symbol.js
var Symbol, Symbol_default;
var init_Symbol = __esm({
  "node_modules/lodash-es/_Symbol.js"() {
    "use strict";
    init_root();
    Symbol = root_default.Symbol;
    Symbol_default = Symbol;
  }
});

// node_modules/lodash-es/_getRawTag.js
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
  try {
    value[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
var objectProto, hasOwnProperty, nativeObjectToString, symToStringTag, getRawTag_default;
var init_getRawTag = __esm({
  "node_modules/lodash-es/_getRawTag.js"() {
    "use strict";
    init_Symbol();
    objectProto = Object.prototype;
    hasOwnProperty = objectProto.hasOwnProperty;
    nativeObjectToString = objectProto.toString;
    symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
    getRawTag_default = getRawTag;
  }
});

// node_modules/lodash-es/_objectToString.js
function objectToString(value) {
  return nativeObjectToString2.call(value);
}
var objectProto2, nativeObjectToString2, objectToString_default;
var init_objectToString = __esm({
  "node_modules/lodash-es/_objectToString.js"() {
    "use strict";
    objectProto2 = Object.prototype;
    nativeObjectToString2 = objectProto2.toString;
    objectToString_default = objectToString;
  }
});

// node_modules/lodash-es/_baseGetTag.js
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
var nullTag, undefinedTag, symToStringTag2, baseGetTag_default;
var init_baseGetTag = __esm({
  "node_modules/lodash-es/_baseGetTag.js"() {
    "use strict";
    init_Symbol();
    init_getRawTag();
    init_objectToString();
    nullTag = "[object Null]";
    undefinedTag = "[object Undefined]";
    symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
    baseGetTag_default = baseGetTag;
  }
});

// node_modules/lodash-es/isObjectLike.js
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default;
var init_isObjectLike = __esm({
  "node_modules/lodash-es/isObjectLike.js"() {
    "use strict";
    isObjectLike_default = isObjectLike;
  }
});

// node_modules/lodash-es/isArray.js
var isArray, isArray_default;
var init_isArray = __esm({
  "node_modules/lodash-es/isArray.js"() {
    "use strict";
    isArray = Array.isArray;
    isArray_default = isArray;
  }
});

// node_modules/lodash-es/isObject.js
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_default;
var init_isObject = __esm({
  "node_modules/lodash-es/isObject.js"() {
    "use strict";
    isObject_default = isObject;
  }
});

// node_modules/lodash-es/identity.js
function identity(value) {
  return value;
}
var identity_default;
var init_identity = __esm({
  "node_modules/lodash-es/identity.js"() {
    "use strict";
    identity_default = identity;
  }
});

// node_modules/lodash-es/isFunction.js
function isFunction(value) {
  if (!isObject_default(value)) {
    return false;
  }
  var tag = baseGetTag_default(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var asyncTag, funcTag, genTag, proxyTag, isFunction_default;
var init_isFunction = __esm({
  "node_modules/lodash-es/isFunction.js"() {
    "use strict";
    init_baseGetTag();
    init_isObject();
    asyncTag = "[object AsyncFunction]";
    funcTag = "[object Function]";
    genTag = "[object GeneratorFunction]";
    proxyTag = "[object Proxy]";
    isFunction_default = isFunction;
  }
});

// node_modules/lodash-es/_coreJsData.js
var coreJsData, coreJsData_default;
var init_coreJsData = __esm({
  "node_modules/lodash-es/_coreJsData.js"() {
    "use strict";
    init_root();
    coreJsData = root_default["__core-js_shared__"];
    coreJsData_default = coreJsData;
  }
});

// node_modules/lodash-es/_isMasked.js
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var maskSrcKey, isMasked_default;
var init_isMasked = __esm({
  "node_modules/lodash-es/_isMasked.js"() {
    "use strict";
    init_coreJsData();
    maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    isMasked_default = isMasked;
  }
});

// node_modules/lodash-es/_toSource.js
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var funcProto, funcToString, toSource_default;
var init_toSource = __esm({
  "node_modules/lodash-es/_toSource.js"() {
    "use strict";
    funcProto = Function.prototype;
    funcToString = funcProto.toString;
    toSource_default = toSource;
  }
});

// node_modules/lodash-es/_baseIsNative.js
function baseIsNative(value) {
  if (!isObject_default(value) || isMasked_default(value)) {
    return false;
  }
  var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value));
}
var reRegExpChar, reIsHostCtor, funcProto2, objectProto3, funcToString2, hasOwnProperty2, reIsNative, baseIsNative_default;
var init_baseIsNative = __esm({
  "node_modules/lodash-es/_baseIsNative.js"() {
    "use strict";
    init_isFunction();
    init_isMasked();
    init_isObject();
    init_toSource();
    reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    reIsHostCtor = /^\[object .+?Constructor\]$/;
    funcProto2 = Function.prototype;
    objectProto3 = Object.prototype;
    funcToString2 = funcProto2.toString;
    hasOwnProperty2 = objectProto3.hasOwnProperty;
    reIsNative = RegExp(
      "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    baseIsNative_default = baseIsNative;
  }
});

// node_modules/lodash-es/_getValue.js
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
var getValue_default;
var init_getValue = __esm({
  "node_modules/lodash-es/_getValue.js"() {
    "use strict";
    getValue_default = getValue;
  }
});

// node_modules/lodash-es/_getNative.js
function getNative(object, key) {
  var value = getValue_default(object, key);
  return baseIsNative_default(value) ? value : void 0;
}
var getNative_default;
var init_getNative = __esm({
  "node_modules/lodash-es/_getNative.js"() {
    "use strict";
    init_baseIsNative();
    init_getValue();
    getNative_default = getNative;
  }
});

// node_modules/lodash-es/_baseCreate.js
var objectCreate, baseCreate, baseCreate_default;
var init_baseCreate = __esm({
  "node_modules/lodash-es/_baseCreate.js"() {
    "use strict";
    init_isObject();
    objectCreate = Object.create;
    baseCreate = /* @__PURE__ */ function() {
      function object() {
      }
      return function(proto) {
        if (!isObject_default(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    }();
    baseCreate_default = baseCreate;
  }
});

// node_modules/lodash-es/_apply.js
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var apply_default;
var init_apply = __esm({
  "node_modules/lodash-es/_apply.js"() {
    "use strict";
    apply_default = apply;
  }
});

// node_modules/lodash-es/_copyArray.js
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var copyArray_default;
var init_copyArray = __esm({
  "node_modules/lodash-es/_copyArray.js"() {
    "use strict";
    copyArray_default = copyArray;
  }
});

// node_modules/lodash-es/_shortOut.js
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var HOT_COUNT, HOT_SPAN, nativeNow, shortOut_default;
var init_shortOut = __esm({
  "node_modules/lodash-es/_shortOut.js"() {
    "use strict";
    HOT_COUNT = 800;
    HOT_SPAN = 16;
    nativeNow = Date.now;
    shortOut_default = shortOut;
  }
});

// node_modules/lodash-es/constant.js
function constant(value) {
  return function() {
    return value;
  };
}
var constant_default;
var init_constant = __esm({
  "node_modules/lodash-es/constant.js"() {
    "use strict";
    constant_default = constant;
  }
});

// node_modules/lodash-es/_defineProperty.js
var defineProperty, defineProperty_default;
var init_defineProperty = __esm({
  "node_modules/lodash-es/_defineProperty.js"() {
    "use strict";
    init_getNative();
    defineProperty = function() {
      try {
        var func = getNative_default(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    defineProperty_default = defineProperty;
  }
});

// node_modules/lodash-es/_baseSetToString.js
var baseSetToString, baseSetToString_default;
var init_baseSetToString = __esm({
  "node_modules/lodash-es/_baseSetToString.js"() {
    "use strict";
    init_constant();
    init_defineProperty();
    init_identity();
    baseSetToString = !defineProperty_default ? identity_default : function(func, string) {
      return defineProperty_default(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant_default(string),
        "writable": true
      });
    };
    baseSetToString_default = baseSetToString;
  }
});

// node_modules/lodash-es/_setToString.js
var setToString, setToString_default;
var init_setToString = __esm({
  "node_modules/lodash-es/_setToString.js"() {
    "use strict";
    init_baseSetToString();
    init_shortOut();
    setToString = shortOut_default(baseSetToString_default);
    setToString_default = setToString;
  }
});

// node_modules/lodash-es/_isIndex.js
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var MAX_SAFE_INTEGER, reIsUint, isIndex_default;
var init_isIndex = __esm({
  "node_modules/lodash-es/_isIndex.js"() {
    "use strict";
    MAX_SAFE_INTEGER = 9007199254740991;
    reIsUint = /^(?:0|[1-9]\d*)$/;
    isIndex_default = isIndex;
  }
});

// node_modules/lodash-es/_baseAssignValue.js
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty_default) {
    defineProperty_default(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var baseAssignValue_default;
var init_baseAssignValue = __esm({
  "node_modules/lodash-es/_baseAssignValue.js"() {
    "use strict";
    init_defineProperty();
    baseAssignValue_default = baseAssignValue;
  }
});

// node_modules/lodash-es/eq.js
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_default;
var init_eq = __esm({
  "node_modules/lodash-es/eq.js"() {
    "use strict";
    eq_default = eq;
  }
});

// node_modules/lodash-es/_assignValue.js
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty3.call(object, key) && eq_default(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue_default(object, key, value);
  }
}
var objectProto4, hasOwnProperty3, assignValue_default;
var init_assignValue = __esm({
  "node_modules/lodash-es/_assignValue.js"() {
    "use strict";
    init_baseAssignValue();
    init_eq();
    objectProto4 = Object.prototype;
    hasOwnProperty3 = objectProto4.hasOwnProperty;
    assignValue_default = assignValue;
  }
});

// node_modules/lodash-es/_copyObject.js
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue_default(object, key, newValue);
    } else {
      assignValue_default(object, key, newValue);
    }
  }
  return object;
}
var copyObject_default;
var init_copyObject = __esm({
  "node_modules/lodash-es/_copyObject.js"() {
    "use strict";
    init_assignValue();
    init_baseAssignValue();
    copyObject_default = copyObject;
  }
});

// node_modules/lodash-es/_overRest.js
function overRest(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply_default(func, this, otherArgs);
  };
}
var nativeMax, overRest_default;
var init_overRest = __esm({
  "node_modules/lodash-es/_overRest.js"() {
    "use strict";
    init_apply();
    nativeMax = Math.max;
    overRest_default = overRest;
  }
});

// node_modules/lodash-es/_baseRest.js
function baseRest(func, start) {
  return setToString_default(overRest_default(func, start, identity_default), func + "");
}
var baseRest_default;
var init_baseRest = __esm({
  "node_modules/lodash-es/_baseRest.js"() {
    "use strict";
    init_identity();
    init_overRest();
    init_setToString();
    baseRest_default = baseRest;
  }
});

// node_modules/lodash-es/isLength.js
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
}
var MAX_SAFE_INTEGER2, isLength_default;
var init_isLength = __esm({
  "node_modules/lodash-es/isLength.js"() {
    "use strict";
    MAX_SAFE_INTEGER2 = 9007199254740991;
    isLength_default = isLength;
  }
});

// node_modules/lodash-es/isArrayLike.js
function isArrayLike(value) {
  return value != null && isLength_default(value.length) && !isFunction_default(value);
}
var isArrayLike_default;
var init_isArrayLike = __esm({
  "node_modules/lodash-es/isArrayLike.js"() {
    "use strict";
    init_isFunction();
    init_isLength();
    isArrayLike_default = isArrayLike;
  }
});

// node_modules/lodash-es/_isIterateeCall.js
function isIterateeCall(value, index, object) {
  if (!isObject_default(object)) {
    return false;
  }
  var type = typeof index;
  if (type == "number" ? isArrayLike_default(object) && isIndex_default(index, object.length) : type == "string" && index in object) {
    return eq_default(object[index], value);
  }
  return false;
}
var isIterateeCall_default;
var init_isIterateeCall = __esm({
  "node_modules/lodash-es/_isIterateeCall.js"() {
    "use strict";
    init_eq();
    init_isArrayLike();
    init_isIndex();
    init_isObject();
    isIterateeCall_default = isIterateeCall;
  }
});

// node_modules/lodash-es/_createAssigner.js
function createAssigner(assigner) {
  return baseRest_default(function(object, sources) {
    var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall_default(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
var createAssigner_default;
var init_createAssigner = __esm({
  "node_modules/lodash-es/_createAssigner.js"() {
    "use strict";
    init_baseRest();
    init_isIterateeCall();
    createAssigner_default = createAssigner;
  }
});

// node_modules/lodash-es/_isPrototype.js
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto5;
  return value === proto;
}
var objectProto5, isPrototype_default;
var init_isPrototype = __esm({
  "node_modules/lodash-es/_isPrototype.js"() {
    "use strict";
    objectProto5 = Object.prototype;
    isPrototype_default = isPrototype;
  }
});

// node_modules/lodash-es/_baseTimes.js
function baseTimes(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var baseTimes_default;
var init_baseTimes = __esm({
  "node_modules/lodash-es/_baseTimes.js"() {
    "use strict";
    baseTimes_default = baseTimes;
  }
});

// node_modules/lodash-es/_baseIsArguments.js
function baseIsArguments(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
}
var argsTag, baseIsArguments_default;
var init_baseIsArguments = __esm({
  "node_modules/lodash-es/_baseIsArguments.js"() {
    "use strict";
    init_baseGetTag();
    init_isObjectLike();
    argsTag = "[object Arguments]";
    baseIsArguments_default = baseIsArguments;
  }
});

// node_modules/lodash-es/isArguments.js
var objectProto6, hasOwnProperty4, propertyIsEnumerable, isArguments, isArguments_default;
var init_isArguments = __esm({
  "node_modules/lodash-es/isArguments.js"() {
    "use strict";
    init_baseIsArguments();
    init_isObjectLike();
    objectProto6 = Object.prototype;
    hasOwnProperty4 = objectProto6.hasOwnProperty;
    propertyIsEnumerable = objectProto6.propertyIsEnumerable;
    isArguments = baseIsArguments_default(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments_default : function(value) {
      return isObjectLike_default(value) && hasOwnProperty4.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    isArguments_default = isArguments;
  }
});

// node_modules/lodash-es/stubFalse.js
function stubFalse() {
  return false;
}
var stubFalse_default;
var init_stubFalse = __esm({
  "node_modules/lodash-es/stubFalse.js"() {
    "use strict";
    stubFalse_default = stubFalse;
  }
});

// node_modules/lodash-es/isBuffer.js
var freeExports, freeModule, moduleExports, Buffer, nativeIsBuffer, isBuffer, isBuffer_default;
var init_isBuffer = __esm({
  "node_modules/lodash-es/isBuffer.js"() {
    "use strict";
    init_root();
    init_stubFalse();
    freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    moduleExports = freeModule && freeModule.exports === freeExports;
    Buffer = moduleExports ? root_default.Buffer : void 0;
    nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    isBuffer = nativeIsBuffer || stubFalse_default;
    isBuffer_default = isBuffer;
  }
});

// node_modules/lodash-es/_baseIsTypedArray.js
function baseIsTypedArray(value) {
  return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
}
var argsTag2, arrayTag, boolTag, dateTag, errorTag, funcTag2, mapTag, numberTag, objectTag, regexpTag, setTag, stringTag, weakMapTag, arrayBufferTag, dataViewTag, float32Tag, float64Tag, int8Tag, int16Tag, int32Tag, uint8Tag, uint8ClampedTag, uint16Tag, uint32Tag, typedArrayTags, baseIsTypedArray_default;
var init_baseIsTypedArray = __esm({
  "node_modules/lodash-es/_baseIsTypedArray.js"() {
    "use strict";
    init_baseGetTag();
    init_isLength();
    init_isObjectLike();
    argsTag2 = "[object Arguments]";
    arrayTag = "[object Array]";
    boolTag = "[object Boolean]";
    dateTag = "[object Date]";
    errorTag = "[object Error]";
    funcTag2 = "[object Function]";
    mapTag = "[object Map]";
    numberTag = "[object Number]";
    objectTag = "[object Object]";
    regexpTag = "[object RegExp]";
    setTag = "[object Set]";
    stringTag = "[object String]";
    weakMapTag = "[object WeakMap]";
    arrayBufferTag = "[object ArrayBuffer]";
    dataViewTag = "[object DataView]";
    float32Tag = "[object Float32Array]";
    float64Tag = "[object Float64Array]";
    int8Tag = "[object Int8Array]";
    int16Tag = "[object Int16Array]";
    int32Tag = "[object Int32Array]";
    uint8Tag = "[object Uint8Array]";
    uint8ClampedTag = "[object Uint8ClampedArray]";
    uint16Tag = "[object Uint16Array]";
    uint32Tag = "[object Uint32Array]";
    typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    baseIsTypedArray_default = baseIsTypedArray;
  }
});

// node_modules/lodash-es/_baseUnary.js
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var baseUnary_default;
var init_baseUnary = __esm({
  "node_modules/lodash-es/_baseUnary.js"() {
    "use strict";
    baseUnary_default = baseUnary;
  }
});

// node_modules/lodash-es/_nodeUtil.js
var freeExports2, freeModule2, moduleExports2, freeProcess, nodeUtil, nodeUtil_default;
var init_nodeUtil = __esm({
  "node_modules/lodash-es/_nodeUtil.js"() {
    "use strict";
    init_freeGlobal();
    freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
    freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
    moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
    freeProcess = moduleExports2 && freeGlobal_default.process;
    nodeUtil = function() {
      try {
        var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    nodeUtil_default = nodeUtil;
  }
});

// node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray, isTypedArray, isTypedArray_default;
var init_isTypedArray = __esm({
  "node_modules/lodash-es/isTypedArray.js"() {
    "use strict";
    init_baseIsTypedArray();
    init_baseUnary();
    init_nodeUtil();
    nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
    isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
    isTypedArray_default = isTypedArray;
  }
});

// node_modules/lodash-es/_arrayLikeKeys.js
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty5.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex_default(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var objectProto7, hasOwnProperty5, arrayLikeKeys_default;
var init_arrayLikeKeys = __esm({
  "node_modules/lodash-es/_arrayLikeKeys.js"() {
    "use strict";
    init_baseTimes();
    init_isArguments();
    init_isArray();
    init_isBuffer();
    init_isIndex();
    init_isTypedArray();
    objectProto7 = Object.prototype;
    hasOwnProperty5 = objectProto7.hasOwnProperty;
    arrayLikeKeys_default = arrayLikeKeys;
  }
});

// node_modules/lodash-es/_overArg.js
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var overArg_default;
var init_overArg = __esm({
  "node_modules/lodash-es/_overArg.js"() {
    "use strict";
    overArg_default = overArg;
  }
});

// node_modules/lodash-es/_nativeKeysIn.js
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var nativeKeysIn_default;
var init_nativeKeysIn = __esm({
  "node_modules/lodash-es/_nativeKeysIn.js"() {
    "use strict";
    nativeKeysIn_default = nativeKeysIn;
  }
});

// node_modules/lodash-es/_baseKeysIn.js
function baseKeysIn(object) {
  if (!isObject_default(object)) {
    return nativeKeysIn_default(object);
  }
  var isProto = isPrototype_default(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty6.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var objectProto8, hasOwnProperty6, baseKeysIn_default;
var init_baseKeysIn = __esm({
  "node_modules/lodash-es/_baseKeysIn.js"() {
    "use strict";
    init_isObject();
    init_isPrototype();
    init_nativeKeysIn();
    objectProto8 = Object.prototype;
    hasOwnProperty6 = objectProto8.hasOwnProperty;
    baseKeysIn_default = baseKeysIn;
  }
});

// node_modules/lodash-es/keysIn.js
function keysIn(object) {
  return isArrayLike_default(object) ? arrayLikeKeys_default(object, true) : baseKeysIn_default(object);
}
var keysIn_default;
var init_keysIn = __esm({
  "node_modules/lodash-es/keysIn.js"() {
    "use strict";
    init_arrayLikeKeys();
    init_baseKeysIn();
    init_isArrayLike();
    keysIn_default = keysIn;
  }
});

// node_modules/lodash-es/_nativeCreate.js
var nativeCreate, nativeCreate_default;
var init_nativeCreate = __esm({
  "node_modules/lodash-es/_nativeCreate.js"() {
    "use strict";
    init_getNative();
    nativeCreate = getNative_default(Object, "create");
    nativeCreate_default = nativeCreate;
  }
});

// node_modules/lodash-es/_hashClear.js
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
var hashClear_default;
var init_hashClear = __esm({
  "node_modules/lodash-es/_hashClear.js"() {
    "use strict";
    init_nativeCreate();
    hashClear_default = hashClear;
  }
});

// node_modules/lodash-es/_hashDelete.js
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var hashDelete_default;
var init_hashDelete = __esm({
  "node_modules/lodash-es/_hashDelete.js"() {
    "use strict";
    hashDelete_default = hashDelete;
  }
});

// node_modules/lodash-es/_hashGet.js
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty7.call(data, key) ? data[key] : void 0;
}
var HASH_UNDEFINED, objectProto9, hasOwnProperty7, hashGet_default;
var init_hashGet = __esm({
  "node_modules/lodash-es/_hashGet.js"() {
    "use strict";
    init_nativeCreate();
    HASH_UNDEFINED = "__lodash_hash_undefined__";
    objectProto9 = Object.prototype;
    hasOwnProperty7 = objectProto9.hasOwnProperty;
    hashGet_default = hashGet;
  }
});

// node_modules/lodash-es/_hashHas.js
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty8.call(data, key);
}
var objectProto10, hasOwnProperty8, hashHas_default;
var init_hashHas = __esm({
  "node_modules/lodash-es/_hashHas.js"() {
    "use strict";
    init_nativeCreate();
    objectProto10 = Object.prototype;
    hasOwnProperty8 = objectProto10.hasOwnProperty;
    hashHas_default = hashHas;
  }
});

// node_modules/lodash-es/_hashSet.js
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
  return this;
}
var HASH_UNDEFINED2, hashSet_default;
var init_hashSet = __esm({
  "node_modules/lodash-es/_hashSet.js"() {
    "use strict";
    init_nativeCreate();
    HASH_UNDEFINED2 = "__lodash_hash_undefined__";
    hashSet_default = hashSet;
  }
});

// node_modules/lodash-es/_Hash.js
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
var Hash_default;
var init_Hash = __esm({
  "node_modules/lodash-es/_Hash.js"() {
    "use strict";
    init_hashClear();
    init_hashDelete();
    init_hashGet();
    init_hashHas();
    init_hashSet();
    Hash.prototype.clear = hashClear_default;
    Hash.prototype["delete"] = hashDelete_default;
    Hash.prototype.get = hashGet_default;
    Hash.prototype.has = hashHas_default;
    Hash.prototype.set = hashSet_default;
    Hash_default = Hash;
  }
});

// node_modules/lodash-es/_listCacheClear.js
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var listCacheClear_default;
var init_listCacheClear = __esm({
  "node_modules/lodash-es/_listCacheClear.js"() {
    "use strict";
    listCacheClear_default = listCacheClear;
  }
});

// node_modules/lodash-es/_assocIndexOf.js
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_default(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var assocIndexOf_default;
var init_assocIndexOf = __esm({
  "node_modules/lodash-es/_assocIndexOf.js"() {
    "use strict";
    init_eq();
    assocIndexOf_default = assocIndexOf;
  }
});

// node_modules/lodash-es/_listCacheDelete.js
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var arrayProto, splice, listCacheDelete_default;
var init_listCacheDelete = __esm({
  "node_modules/lodash-es/_listCacheDelete.js"() {
    "use strict";
    init_assocIndexOf();
    arrayProto = Array.prototype;
    splice = arrayProto.splice;
    listCacheDelete_default = listCacheDelete;
  }
});

// node_modules/lodash-es/_listCacheGet.js
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var listCacheGet_default;
var init_listCacheGet = __esm({
  "node_modules/lodash-es/_listCacheGet.js"() {
    "use strict";
    init_assocIndexOf();
    listCacheGet_default = listCacheGet;
  }
});

// node_modules/lodash-es/_listCacheHas.js
function listCacheHas(key) {
  return assocIndexOf_default(this.__data__, key) > -1;
}
var listCacheHas_default;
var init_listCacheHas = __esm({
  "node_modules/lodash-es/_listCacheHas.js"() {
    "use strict";
    init_assocIndexOf();
    listCacheHas_default = listCacheHas;
  }
});

// node_modules/lodash-es/_listCacheSet.js
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var listCacheSet_default;
var init_listCacheSet = __esm({
  "node_modules/lodash-es/_listCacheSet.js"() {
    "use strict";
    init_assocIndexOf();
    listCacheSet_default = listCacheSet;
  }
});

// node_modules/lodash-es/_ListCache.js
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
var ListCache_default;
var init_ListCache = __esm({
  "node_modules/lodash-es/_ListCache.js"() {
    "use strict";
    init_listCacheClear();
    init_listCacheDelete();
    init_listCacheGet();
    init_listCacheHas();
    init_listCacheSet();
    ListCache.prototype.clear = listCacheClear_default;
    ListCache.prototype["delete"] = listCacheDelete_default;
    ListCache.prototype.get = listCacheGet_default;
    ListCache.prototype.has = listCacheHas_default;
    ListCache.prototype.set = listCacheSet_default;
    ListCache_default = ListCache;
  }
});

// node_modules/lodash-es/_Map.js
var Map, Map_default;
var init_Map = __esm({
  "node_modules/lodash-es/_Map.js"() {
    "use strict";
    init_getNative();
    init_root();
    Map = getNative_default(root_default, "Map");
    Map_default = Map;
  }
});

// node_modules/lodash-es/_mapCacheClear.js
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash_default(),
    "map": new (Map_default || ListCache_default)(),
    "string": new Hash_default()
  };
}
var mapCacheClear_default;
var init_mapCacheClear = __esm({
  "node_modules/lodash-es/_mapCacheClear.js"() {
    "use strict";
    init_Hash();
    init_ListCache();
    init_Map();
    mapCacheClear_default = mapCacheClear;
  }
});

// node_modules/lodash-es/_isKeyable.js
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var isKeyable_default;
var init_isKeyable = __esm({
  "node_modules/lodash-es/_isKeyable.js"() {
    "use strict";
    isKeyable_default = isKeyable;
  }
});

// node_modules/lodash-es/_getMapData.js
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default;
var init_getMapData = __esm({
  "node_modules/lodash-es/_getMapData.js"() {
    "use strict";
    init_isKeyable();
    getMapData_default = getMapData;
  }
});

// node_modules/lodash-es/_mapCacheDelete.js
function mapCacheDelete(key) {
  var result = getMapData_default(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var mapCacheDelete_default;
var init_mapCacheDelete = __esm({
  "node_modules/lodash-es/_mapCacheDelete.js"() {
    "use strict";
    init_getMapData();
    mapCacheDelete_default = mapCacheDelete;
  }
});

// node_modules/lodash-es/_mapCacheGet.js
function mapCacheGet(key) {
  return getMapData_default(this, key).get(key);
}
var mapCacheGet_default;
var init_mapCacheGet = __esm({
  "node_modules/lodash-es/_mapCacheGet.js"() {
    "use strict";
    init_getMapData();
    mapCacheGet_default = mapCacheGet;
  }
});

// node_modules/lodash-es/_mapCacheHas.js
function mapCacheHas(key) {
  return getMapData_default(this, key).has(key);
}
var mapCacheHas_default;
var init_mapCacheHas = __esm({
  "node_modules/lodash-es/_mapCacheHas.js"() {
    "use strict";
    init_getMapData();
    mapCacheHas_default = mapCacheHas;
  }
});

// node_modules/lodash-es/_mapCacheSet.js
function mapCacheSet(key, value) {
  var data = getMapData_default(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var mapCacheSet_default;
var init_mapCacheSet = __esm({
  "node_modules/lodash-es/_mapCacheSet.js"() {
    "use strict";
    init_getMapData();
    mapCacheSet_default = mapCacheSet;
  }
});

// node_modules/lodash-es/_MapCache.js
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
var MapCache_default;
var init_MapCache = __esm({
  "node_modules/lodash-es/_MapCache.js"() {
    "use strict";
    init_mapCacheClear();
    init_mapCacheDelete();
    init_mapCacheGet();
    init_mapCacheHas();
    init_mapCacheSet();
    MapCache.prototype.clear = mapCacheClear_default;
    MapCache.prototype["delete"] = mapCacheDelete_default;
    MapCache.prototype.get = mapCacheGet_default;
    MapCache.prototype.has = mapCacheHas_default;
    MapCache.prototype.set = mapCacheSet_default;
    MapCache_default = MapCache;
  }
});

// node_modules/lodash-es/_getPrototype.js
var getPrototype, getPrototype_default;
var init_getPrototype = __esm({
  "node_modules/lodash-es/_getPrototype.js"() {
    "use strict";
    init_overArg();
    getPrototype = overArg_default(Object.getPrototypeOf, Object);
    getPrototype_default = getPrototype;
  }
});

// node_modules/lodash-es/isPlainObject.js
function isPlainObject(value) {
  if (!isObjectLike_default(value) || baseGetTag_default(value) != objectTag2) {
    return false;
  }
  var proto = getPrototype_default(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty9.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString3.call(Ctor) == objectCtorString;
}
var objectTag2, funcProto3, objectProto11, funcToString3, hasOwnProperty9, objectCtorString, isPlainObject_default;
var init_isPlainObject = __esm({
  "node_modules/lodash-es/isPlainObject.js"() {
    "use strict";
    init_baseGetTag();
    init_getPrototype();
    init_isObjectLike();
    objectTag2 = "[object Object]";
    funcProto3 = Function.prototype;
    objectProto11 = Object.prototype;
    funcToString3 = funcProto3.toString;
    hasOwnProperty9 = objectProto11.hasOwnProperty;
    objectCtorString = funcToString3.call(Object);
    isPlainObject_default = isPlainObject;
  }
});

// node_modules/lodash-es/_stackClear.js
function stackClear() {
  this.__data__ = new ListCache_default();
  this.size = 0;
}
var stackClear_default;
var init_stackClear = __esm({
  "node_modules/lodash-es/_stackClear.js"() {
    "use strict";
    init_ListCache();
    stackClear_default = stackClear;
  }
});

// node_modules/lodash-es/_stackDelete.js
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var stackDelete_default;
var init_stackDelete = __esm({
  "node_modules/lodash-es/_stackDelete.js"() {
    "use strict";
    stackDelete_default = stackDelete;
  }
});

// node_modules/lodash-es/_stackGet.js
function stackGet(key) {
  return this.__data__.get(key);
}
var stackGet_default;
var init_stackGet = __esm({
  "node_modules/lodash-es/_stackGet.js"() {
    "use strict";
    stackGet_default = stackGet;
  }
});

// node_modules/lodash-es/_stackHas.js
function stackHas(key) {
  return this.__data__.has(key);
}
var stackHas_default;
var init_stackHas = __esm({
  "node_modules/lodash-es/_stackHas.js"() {
    "use strict";
    stackHas_default = stackHas;
  }
});

// node_modules/lodash-es/_stackSet.js
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache_default) {
    var pairs = data.__data__;
    if (!Map_default || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache_default(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var LARGE_ARRAY_SIZE, stackSet_default;
var init_stackSet = __esm({
  "node_modules/lodash-es/_stackSet.js"() {
    "use strict";
    init_ListCache();
    init_Map();
    init_MapCache();
    LARGE_ARRAY_SIZE = 200;
    stackSet_default = stackSet;
  }
});

// node_modules/lodash-es/_Stack.js
function Stack(entries) {
  var data = this.__data__ = new ListCache_default(entries);
  this.size = data.size;
}
var Stack_default;
var init_Stack = __esm({
  "node_modules/lodash-es/_Stack.js"() {
    "use strict";
    init_ListCache();
    init_stackClear();
    init_stackDelete();
    init_stackGet();
    init_stackHas();
    init_stackSet();
    Stack.prototype.clear = stackClear_default;
    Stack.prototype["delete"] = stackDelete_default;
    Stack.prototype.get = stackGet_default;
    Stack.prototype.has = stackHas_default;
    Stack.prototype.set = stackSet_default;
    Stack_default = Stack;
  }
});

// node_modules/lodash-es/_cloneBuffer.js
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
var freeExports3, freeModule3, moduleExports3, Buffer2, allocUnsafe, cloneBuffer_default;
var init_cloneBuffer = __esm({
  "node_modules/lodash-es/_cloneBuffer.js"() {
    "use strict";
    init_root();
    freeExports3 = typeof exports == "object" && exports && !exports.nodeType && exports;
    freeModule3 = freeExports3 && typeof module == "object" && module && !module.nodeType && module;
    moduleExports3 = freeModule3 && freeModule3.exports === freeExports3;
    Buffer2 = moduleExports3 ? root_default.Buffer : void 0;
    allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
    cloneBuffer_default = cloneBuffer;
  }
});

// node_modules/lodash-es/_Uint8Array.js
var Uint8Array, Uint8Array_default;
var init_Uint8Array = __esm({
  "node_modules/lodash-es/_Uint8Array.js"() {
    "use strict";
    init_root();
    Uint8Array = root_default.Uint8Array;
    Uint8Array_default = Uint8Array;
  }
});

// node_modules/lodash-es/_cloneArrayBuffer.js
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array_default(result).set(new Uint8Array_default(arrayBuffer));
  return result;
}
var cloneArrayBuffer_default;
var init_cloneArrayBuffer = __esm({
  "node_modules/lodash-es/_cloneArrayBuffer.js"() {
    "use strict";
    init_Uint8Array();
    cloneArrayBuffer_default = cloneArrayBuffer;
  }
});

// node_modules/lodash-es/_cloneTypedArray.js
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer_default(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var cloneTypedArray_default;
var init_cloneTypedArray = __esm({
  "node_modules/lodash-es/_cloneTypedArray.js"() {
    "use strict";
    init_cloneArrayBuffer();
    cloneTypedArray_default = cloneTypedArray;
  }
});

// node_modules/lodash-es/_initCloneObject.js
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype_default(object) ? baseCreate_default(getPrototype_default(object)) : {};
}
var initCloneObject_default;
var init_initCloneObject = __esm({
  "node_modules/lodash-es/_initCloneObject.js"() {
    "use strict";
    init_baseCreate();
    init_getPrototype();
    init_isPrototype();
    initCloneObject_default = initCloneObject;
  }
});

// node_modules/lodash-es/_createBaseFor.js
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var createBaseFor_default;
var init_createBaseFor = __esm({
  "node_modules/lodash-es/_createBaseFor.js"() {
    "use strict";
    createBaseFor_default = createBaseFor;
  }
});

// node_modules/lodash-es/_baseFor.js
var baseFor, baseFor_default;
var init_baseFor = __esm({
  "node_modules/lodash-es/_baseFor.js"() {
    "use strict";
    init_createBaseFor();
    baseFor = createBaseFor_default();
    baseFor_default = baseFor;
  }
});

// node_modules/lodash-es/_assignMergeValue.js
function assignMergeValue(object, key, value) {
  if (value !== void 0 && !eq_default(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue_default(object, key, value);
  }
}
var assignMergeValue_default;
var init_assignMergeValue = __esm({
  "node_modules/lodash-es/_assignMergeValue.js"() {
    "use strict";
    init_baseAssignValue();
    init_eq();
    assignMergeValue_default = assignMergeValue;
  }
});

// node_modules/lodash-es/isArrayLikeObject.js
function isArrayLikeObject(value) {
  return isObjectLike_default(value) && isArrayLike_default(value);
}
var isArrayLikeObject_default;
var init_isArrayLikeObject = __esm({
  "node_modules/lodash-es/isArrayLikeObject.js"() {
    "use strict";
    init_isArrayLike();
    init_isObjectLike();
    isArrayLikeObject_default = isArrayLikeObject;
  }
});

// node_modules/lodash-es/_safeGet.js
function safeGet(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
var safeGet_default;
var init_safeGet = __esm({
  "node_modules/lodash-es/_safeGet.js"() {
    "use strict";
    safeGet_default = safeGet;
  }
});

// node_modules/lodash-es/toPlainObject.js
function toPlainObject(value) {
  return copyObject_default(value, keysIn_default(value));
}
var toPlainObject_default;
var init_toPlainObject = __esm({
  "node_modules/lodash-es/toPlainObject.js"() {
    "use strict";
    init_copyObject();
    init_keysIn();
    toPlainObject_default = toPlainObject;
  }
});

// node_modules/lodash-es/_baseMergeDeep.js
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet_default(object, key), srcValue = safeGet_default(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue_default(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray_default(srcValue), isBuff = !isArr && isBuffer_default(srcValue), isTyped = !isArr && !isBuff && isTypedArray_default(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray_default(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject_default(objValue)) {
        newValue = copyArray_default(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer_default(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray_default(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject_default(srcValue) || isArguments_default(srcValue)) {
      newValue = objValue;
      if (isArguments_default(objValue)) {
        newValue = toPlainObject_default(objValue);
      } else if (!isObject_default(objValue) || isFunction_default(objValue)) {
        newValue = initCloneObject_default(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue_default(object, key, newValue);
}
var baseMergeDeep_default;
var init_baseMergeDeep = __esm({
  "node_modules/lodash-es/_baseMergeDeep.js"() {
    "use strict";
    init_assignMergeValue();
    init_cloneBuffer();
    init_cloneTypedArray();
    init_copyArray();
    init_initCloneObject();
    init_isArguments();
    init_isArray();
    init_isArrayLikeObject();
    init_isBuffer();
    init_isFunction();
    init_isObject();
    init_isPlainObject();
    init_isTypedArray();
    init_safeGet();
    init_toPlainObject();
    baseMergeDeep_default = baseMergeDeep;
  }
});

// node_modules/lodash-es/_baseMerge.js
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor_default(source, function(srcValue, key) {
    stack || (stack = new Stack_default());
    if (isObject_default(srcValue)) {
      baseMergeDeep_default(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet_default(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue_default(object, key, newValue);
    }
  }, keysIn_default);
}
var baseMerge_default;
var init_baseMerge = __esm({
  "node_modules/lodash-es/_baseMerge.js"() {
    "use strict";
    init_Stack();
    init_assignMergeValue();
    init_baseFor();
    init_baseMergeDeep();
    init_isObject();
    init_keysIn();
    init_safeGet();
    baseMerge_default = baseMerge;
  }
});

// node_modules/lodash-es/merge.js
var merge, merge_default;
var init_merge = __esm({
  "node_modules/lodash-es/merge.js"() {
    "use strict";
    init_baseMerge();
    init_createAssigner();
    merge = createAssigner_default(function(object, source, srcIndex) {
      baseMerge_default(object, source, srcIndex);
    });
    merge_default = merge;
  }
});

// node_modules/lodash-es/lodash.js
var init_lodash = __esm({
  "node_modules/lodash-es/lodash.js"() {
    "use strict";
    init_merge();
  }
});

// node_modules/ng2-charts/fesm2020/ng2-charts.mjs
function rgba(colour, alpha) {
  return "rgba(" + colour.concat(alpha).join(",") + ")";
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomColor() {
  return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
function generateColor(index = 0) {
  return baseColors[index] || getRandomColor();
}
var ThemeService, BaseChartDirective, baseColors, builtInDefaults, NgChartsConfiguration, NgChartsModule;
var init_ng2_charts = __esm({
  "node_modules/ng2-charts/fesm2020/ng2-charts.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_chart();
    init_operators();
    init_lodash();
    init_esm();
    ThemeService = class {
      constructor() {
        this.colorschemesOptions = new BehaviorSubject(void 0);
      }
      setColorschemesOptions(options) {
        this.pColorschemesOptions = options;
        this.colorschemesOptions.next(options);
      }
      getColorschemesOptions() {
        return this.pColorschemesOptions;
      }
    };
    ThemeService.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: core_exports, type: ThemeService, deps: [], target: FactoryTarget.Injectable });
    ThemeService.\u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: core_exports, type: ThemeService, providedIn: "root" });
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: core_exports, type: ThemeService, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }], ctorParameters: function() {
      return [];
    } });
    BaseChartDirective = class {
      constructor(element, zone, themeService) {
        this.zone = zone;
        this.themeService = themeService;
        this.type = "bar";
        this.plugins = [];
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
        this.subs = [];
        this.themeOverrides = {};
        this.ctx = element.nativeElement.getContext("2d");
        this.subs.push(this.themeService.colorschemesOptions.pipe(distinctUntilChanged()).subscribe((r) => this.themeChanged(r)));
      }
      ngOnChanges(changes) {
        const requireRender = ["type"];
        const propertyNames = Object.getOwnPropertyNames(changes);
        if (propertyNames.some((key) => requireRender.includes(key)) || propertyNames.every((key) => changes[key].isFirstChange())) {
          this.render();
        } else {
          const config = this.getChartConfiguration();
          if (this.chart) {
            Object.assign(this.chart.config.data, config.data);
            if (this.chart.config.plugins) {
              Object.assign(this.chart.config.plugins, config.plugins);
            }
            if (this.chart.config.options) {
              Object.assign(this.chart.config.options, config.options);
            }
          }
          this.update();
        }
      }
      ngOnDestroy() {
        if (this.chart) {
          this.chart.destroy();
          this.chart = void 0;
        }
        this.subs.forEach((s) => s.unsubscribe());
      }
      render() {
        if (this.chart) {
          this.chart.destroy();
        }
        return this.zone.runOutsideAngular(() => this.chart = new Chart(this.ctx, this.getChartConfiguration()));
      }
      update(duration) {
        if (this.chart) {
          this.zone.runOutsideAngular(() => this.chart?.update(duration));
        }
      }
      hideDataset(index, hidden) {
        if (this.chart) {
          this.chart.getDatasetMeta(index).hidden = hidden;
          this.update();
        }
      }
      isDatasetHidden(index) {
        return this.chart?.getDatasetMeta(index)?.hidden;
      }
      toBase64Image() {
        return this.chart?.toBase64Image();
      }
      themeChanged(options) {
        this.themeOverrides = options;
        if (this.chart) {
          if (this.chart.config.options) {
            Object.assign(this.chart.config.options, this.getChartOptions());
          }
          this.update();
        }
      }
      getChartOptions() {
        return merge_default({
          onHover: (event, active) => {
            if (!this.chartHover.observed && !this.chartHover.observers?.length) {
              return;
            }
            this.zone.run(() => this.chartHover.emit({ event, active }));
          },
          onClick: (event, active) => {
            if (!this.chartClick.observed && !this.chartClick.observers?.length) {
              return;
            }
            this.zone.run(() => this.chartClick.emit({ event, active }));
          }
        }, this.themeOverrides, this.options, {
          plugins: {
            legend: {
              display: this.legend
            }
          }
        });
      }
      getChartConfiguration() {
        return {
          type: this.type,
          data: this.getChartData(),
          options: this.getChartOptions(),
          plugins: this.plugins
        };
      }
      getChartData() {
        return this.data ? this.data : {
          labels: this.labels || [],
          datasets: this.datasets || []
        };
      }
    };
    BaseChartDirective.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: core_exports, type: BaseChartDirective, deps: [{ token: ElementRef }, { token: NgZone }, { token: ThemeService }], target: FactoryTarget.Directive });
    BaseChartDirective.\u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "14.2.12", type: BaseChartDirective, selector: "canvas[baseChart]", inputs: { type: "type", legend: "legend", data: "data", options: "options", plugins: "plugins", labels: "labels", datasets: "datasets" }, outputs: { chartClick: "chartClick", chartHover: "chartHover" }, exportAs: ["base-chart"], usesOnChanges: true, ngImport: core_exports });
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: core_exports, type: BaseChartDirective, decorators: [{
      type: Directive,
      args: [{
        // eslint-disable-next-line @angular-eslint/directive-selector
        selector: "canvas[baseChart]",
        exportAs: "base-chart"
      }]
    }], ctorParameters: function() {
      return [{ type: ElementRef }, { type: NgZone }, { type: ThemeService }];
    }, propDecorators: { type: [{
      type: Input
    }], legend: [{
      type: Input
    }], data: [{
      type: Input
    }], options: [{
      type: Input
    }], plugins: [{
      type: Input
    }], labels: [{
      type: Input
    }], datasets: [{
      type: Input
    }], chartClick: [{
      type: Output
    }], chartHover: [{
      type: Output
    }] } });
    baseColors = [
      [255, 99, 132],
      [54, 162, 235],
      [255, 206, 86],
      [231, 233, 237],
      [75, 192, 192],
      [151, 187, 205],
      [220, 220, 220],
      [247, 70, 74],
      [70, 191, 189],
      [253, 180, 92],
      [148, 159, 177],
      [77, 83, 96]
    ];
    builtInDefaults = {
      plugins: { colors: { enabled: false } },
      datasets: {
        line: {
          backgroundColor: (context) => rgba(generateColor(context.datasetIndex), 0.4),
          borderColor: (context) => rgba(generateColor(context.datasetIndex), 1),
          pointBackgroundColor: (context) => rgba(generateColor(context.datasetIndex), 1),
          pointBorderColor: "#fff"
        },
        bar: {
          backgroundColor: (context) => rgba(generateColor(context.datasetIndex), 0.6),
          borderColor: (context) => rgba(generateColor(context.datasetIndex), 1)
        },
        get radar() {
          return this.line;
        },
        doughnut: {
          backgroundColor: (context) => rgba(generateColor(context.dataIndex), 0.6),
          borderColor: "#fff"
        },
        get pie() {
          return this.doughnut;
        },
        polarArea: {
          backgroundColor: (context) => rgba(generateColor(context.dataIndex), 0.6),
          borderColor: (context) => rgba(generateColor(context.dataIndex), 1)
        },
        get bubble() {
          return this.doughnut;
        },
        get scatter() {
          return this.doughnut;
        },
        get area() {
          return this.polarArea;
        }
      }
    };
    NgChartsConfiguration = class {
      constructor() {
        this.generateColors = true;
      }
    };
    NgChartsConfiguration.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: core_exports, type: NgChartsConfiguration, deps: [], target: FactoryTarget.Injectable });
    NgChartsConfiguration.\u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: core_exports, type: NgChartsConfiguration, providedIn: "root" });
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: core_exports, type: NgChartsConfiguration, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    Chart.register(...registerables);
    NgChartsModule = class _NgChartsModule {
      constructor(config) {
        if (config?.plugins)
          Chart.register(...config?.plugins);
        const ngChartsDefaults = merge_default(config?.generateColors ? builtInDefaults : {}, config?.defaults || {});
        defaults.set(ngChartsDefaults);
      }
      static forRoot(config) {
        return {
          ngModule: _NgChartsModule,
          providers: [
            { provide: NgChartsConfiguration, useValue: config }
          ]
        };
      }
    };
    NgChartsModule.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: core_exports, type: NgChartsModule, deps: [{ token: NgChartsConfiguration, optional: true }], target: FactoryTarget.NgModule });
    NgChartsModule.\u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: core_exports, type: NgChartsModule, declarations: [BaseChartDirective], exports: [BaseChartDirective] });
    NgChartsModule.\u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: core_exports, type: NgChartsModule });
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: core_exports, type: NgChartsModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [],
        declarations: [BaseChartDirective],
        exports: [BaseChartDirective]
      }]
    }], ctorParameters: function() {
      return [{ type: NgChartsConfiguration, decorators: [{
        type: Optional
      }] }];
    } });
  }
});

// src/app/pages/dashboard/dashboard.ts
var DashboardComponent;
var init_dashboard3 = __esm({
  "src/app/pages/dashboard/dashboard.ts"() {
    "use strict";
    init_tslib_es6();
    init_dashboard();
    init_dashboard2();
    init_core();
    init_common();
    init_router();
    init_ng2_charts();
    DashboardComponent = class DashboardComponent2 {
      router;
      constructor(router) {
        this.router = router;
      }
      pieChartLabels = ["Reciclado", "Disposici\xF3n final", "Reutilizado", "Otro"];
      pieChartData = {
        labels: this.pieChartLabels,
        datasets: [{
          data: [45, 25, 20, 10],
          backgroundColor: ["#10b981", "#3b82f6", "#f59e0b", "#ef4444"]
        }]
      };
      pieChartType = "pie";
      pieChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            labels: { boxWidth: 12, padding: 16 }
          }
        }
      };
      barChartLabels = ["Torre Norte", "Centro Plaza", "Corporativo"];
      barChartData = {
        labels: this.barChartLabels,
        datasets: [
          { label: "Hormig\xF3n", data: [45, 30, 28], backgroundColor: "#9ca3af" },
          { label: "Madera", data: [12, 18, 14], backgroundColor: "#10b981" },
          { label: "Metal", data: [9, 5, 11], backgroundColor: "#3b82f6" }
        ]
      };
      barChartType = "bar";
      barChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: true },
          title: { display: false }
        },
        scales: {
          x: {},
          y: {
            beginAtZero: true,
            title: { display: true, text: "Cantidad (m\xB3)" }
          }
        }
      };
      logout() {
        localStorage.clear();
        sessionStorage.clear();
        this.router.navigate(["/login"]);
      }
      static ctorParameters = () => [
        { type: Router }
      ];
    };
    DashboardComponent = __decorate([
      Component({
        selector: "app-dashboard",
        standalone: true,
        imports: [CommonModule, NgChartsModule, RouterModule],
        template: dashboard_default,
        styles: [dashboard_default2]
      })
    ], DashboardComponent);
  }
});

// src/app/pages/dashboard/dashboard.spec.ts
var require_dashboard_spec = __commonJS({
  "src/app/pages/dashboard/dashboard.spec.ts"(exports2) {
    init_testing();
    init_dashboard3();
    init_router();
    init_ng2_charts();
    describe("DashboardComponent", () => {
      let component;
      let fixture;
      let mockRouter;
      beforeEach(() => __async(null, null, function* () {
        mockRouter = jasmine.createSpyObj("Router", ["navigate"]);
        yield TestBed.configureTestingModule({
          imports: [DashboardComponent, NgChartsModule],
          providers: [
            { provide: Router, useValue: mockRouter }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("deber\xEDa crearse correctamente", () => {
        expect(component).toBeTruthy();
      });
      it("deber\xEDa tener etiquetas de gr\xE1fico circular definidas", () => {
        expect(component.pieChartLabels).toEqual(["Reciclado", "Disposici\xF3n final", "Reutilizado", "Otro"]);
      });
      it('deber\xEDa tener tipo de gr\xE1fico de barras como "bar"', () => {
        expect(component.barChartType).toBe("bar");
      });
      it("deber\xEDa limpiar sesi\xF3n y redirigir al login al hacer logout", () => {
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
export default require_dashboard_spec();
/*! Bundled license information:

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
//# sourceMappingURL=spec-dashboard.spec.js.map
