import {
  FormsModule,
  init_forms
} from "./chunk-F2W3QBU3.js";
import {
  Router,
  init_router
} from "./chunk-ERWER4IP.js";
import {
  CommonModule,
  init_common
} from "./chunk-WITBNL6W.js";
import "./chunk-DBD3S2RT.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-IH5F2UGT.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\pages\login\login.html
var login_default;
var init_login = __esm({
  "angular:jit:template:src\\app\\pages\\login\\login.html"() {
    login_default = `<div class="login-container">\r
  <!-- Lado izquierdo -->\r
  <div class="left-side">\r
    <div class="brand-content">\r
      <div class="logo-container">\r
        <div class="logo-icon">\r
          <i class="bi bi-leaf-fill" style="font-size: 1.5rem; color: white;"></i>\r
        </div>\r
        <span class="brand-name">EcoConstruct</span>\r
      </div>\r
      <h1 class="brand-title">\r
        Gesti\xF3n Inteligente<br>\r
        de Residuos\r
      </h1>\r
      <p class="brand-subtitle">Construyendo un futuro sostenible</p>\r
    </div>\r
  </div>\r
\r
  <!-- Lado derecho -->\r
  <div class="right-side">\r
    <div class="form-container">\r
      <div class="form-header text-center mb-4">\r
        <h2 class="fw-light">Iniciar sesi\xF3n</h2>\r
        <p class="text-muted">Confirma tus datos para acceder</p>\r
      </div>\r
\r
      <form (submit)="onSubmit($event)">\r
        <div class="alert alert-danger py-2" *ngIf="showError">\r
          Credenciales incorrectas. Intenta con adminecoconstruct.com / admin123\r
        </div>\r
\r
        <div class="mb-3">\r
          <label for="email" class="form-label">Email</label>\r
          <input id="email" [(ngModel)]="email" name="email" class="form-control" placeholder="usuario@ecoconstruct.com" required>\r
        </div>\r
\r
        <div class="mb-3">\r
          <label for="password" class="form-label">Contrase\xF1a</label>\r
          <div class="input-group">\r
            <input id="password" [type]="showPassword ? 'text' : 'password'" [(ngModel)]="password" name="password" class="form-control" placeholder="Contrase\xF1a" required>\r
            <button class="btn btn-outline-secondary" type="button" (click)="togglePassword()">\r
              <i class="bi" [ngClass]="showPassword ? 'bi-eye-slash' : 'bi-eye'"></i>\r
            </button>\r
          </div>\r
        </div>\r
\r
        <div class="d-flex justify-content-between align-items-center mb-3">\r
          <div class="form-check">\r
            <input class="form-check-input" type="checkbox" id="remember">\r
            <label class="form-check-label" for="remember">Recordarme</label>\r
          </div>\r
          <button type="button" class="btn btn-link p-0 text-success">\xBFOlvidaste tu contrase\xF1a?</button>\r
        </div>\r
\r
        <button type="submit" class="btn btn-success w-100">CONTINUAR</button>\r
      </form>\r
\r
        <div class="divider">O CONTIN\xDAA CON</div>\r
\r
        <button type="button" class="btn btn-outline-secondary w-100 mb-3 d-flex align-items-center justify-content-center gap-2">\r
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" width="20" height="20">\r
          Google\r
        </button>\r
        <button (click)="login()" type="button" class="btn btn-outline-secondary w-100 mb-3 d-flex align-items-center justify-content-center gap-2">\r
          <img src="https://www.svgrepo.com/show/452062/microsoft.svg" width="20" height="20">\r
          Microsoft\r
        </button>\r
\r
    </div>\r
  </div>\r
</div>\r
`;
  }
});

// angular:jit:style:src\app\pages\login\login.css
var login_default2;
var init_login2 = __esm({
  "angular:jit:style:src\\app\\pages\\login\\login.css"() {
    login_default2 = '/* src/app/pages/login/login.css */\n.login-container {\n  display: flex;\n  min-height: 100vh;\n  overflow: hidden;\n}\n.left-side {\n  display: none;\n  width: 50%;\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      #34d399 0%,\n      #14b8a6 35%,\n      #06b6d4 100%);\n  color: white;\n  padding: 4rem 3rem;\n  flex-direction: column;\n  justify-content: center;\n}\n.left-side .logo-container {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 2rem;\n}\n.left-side .logo-icon {\n  width: 48px;\n  height: 48px;\n  background-color: rgba(255, 255, 255, 0.2);\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.left-side .brand-name {\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.brand-title {\n  font-size: 2.25rem;\n  font-weight: 300;\n  margin-bottom: 0.5rem;\n}\n.brand-subtitle {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 1.125rem;\n  font-weight: 300;\n}\n.right-side {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n}\n.form-container {\n  width: 100%;\n  max-width: 440px;\n  padding: 1rem;\n}\n.form-header h2 {\n  font-weight: 300;\n  font-size: 1.8rem;\n}\n.form-header p {\n  color: #6b7280;\n}\n.divider {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin: 1.5rem 0;\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.divider::before,\n.divider::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: #d1d5db;\n  margin: 0 0.75rem;\n}\n.demo-credentials {\n  background-color: #ecfdf5;\n  border: 1px solid #a7f3d0;\n  border-radius: 8px;\n  padding: 1rem;\n  font-size: 0.875rem;\n}\n.demo-credentials p {\n  margin: 0;\n}\n.demo-credentials .demo-title {\n  font-weight: 600;\n  color: #065f46;\n  margin-bottom: 0.5rem;\n}\n.demo-info {\n  color: #047857;\n}\n@media (min-width: 1024px) {\n  .left-side {\n    display: flex;\n  }\n}\nbutton:focus,\ninput:focus,\n.form-control:focus {\n  box-shadow: none !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=login.css.map */\n';
  }
});

// src/app/pages/login/login.ts
var LoginComponent;
var init_login3 = __esm({
  "src/app/pages/login/login.ts"() {
    "use strict";
    init_tslib_es6();
    init_login();
    init_login2();
    init_core();
    init_forms();
    init_common();
    init_router();
    LoginComponent = class LoginComponent2 {
      router;
      email = "";
      password = "";
      showError = false;
      showPassword = false;
      constructor(router) {
        this.router = router;
      }
      onSubmit(event) {
        event.preventDefault();
        if (this.email === "admin@ecoconstruct.com" && this.password === "admin123") {
          this.router.navigate(["/dashboard"]);
        } else {
          this.showError = true;
        }
      }
      togglePassword() {
        this.showPassword = !this.showPassword;
      }
      login() {
        this.router.navigate(["/dashboard"]);
      }
      static ctorParameters = () => [
        { type: Router }
      ];
    };
    LoginComponent = __decorate([
      Component({
        selector: "app-login",
        standalone: true,
        imports: [CommonModule, FormsModule],
        template: login_default,
        styles: [login_default2]
      })
    ], LoginComponent);
  }
});

// src/app/pages/login/login.spec.ts
var require_login_spec = __commonJS({
  "src/app/pages/login/login.spec.ts"(exports) {
    init_testing();
    init_login3();
    init_forms();
    init_common();
    init_router();
    describe("LoginComponent", () => {
      let component;
      let fixture;
      let mockRouter;
      beforeEach(() => __async(null, null, function* () {
        mockRouter = jasmine.createSpyObj("Router", ["navigate"]);
        yield TestBed.configureTestingModule({
          imports: [LoginComponent, FormsModule, CommonModule],
          providers: [{ provide: Router, useValue: mockRouter }]
        }).compileComponents();
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("deber\xEDa crearse correctamente", () => {
        expect(component).toBeTruthy();
      });
      it("deber\xEDa navegar al dashboard con credenciales v\xE1lidas", () => {
        component.email = "admin@ecoconstruct.com";
        component.password = "admin123";
        const fakeEvent = { preventDefault: () => {
        } };
        spyOn(fakeEvent, "preventDefault");
        component.onSubmit(fakeEvent);
        expect(fakeEvent.preventDefault).toHaveBeenCalled();
        expect(mockRouter.navigate).toHaveBeenCalledWith(["/dashboard"]);
        expect(component.showError).toBeFalse();
      });
      it("deber\xEDa mostrar error con credenciales inv\xE1lidas", () => {
        component.email = "user@demo.com";
        component.password = "wrongpass";
        const fakeEvent = { preventDefault: () => {
        } };
        spyOn(fakeEvent, "preventDefault");
        component.onSubmit(fakeEvent);
        expect(fakeEvent.preventDefault).toHaveBeenCalled();
        expect(mockRouter.navigate).not.toHaveBeenCalled();
        expect(component.showError).toBeTrue();
      });
      it("togglePassword deber\xEDa alternar visibilidad", () => {
        expect(component.showPassword).toBeFalse();
        component.togglePassword();
        expect(component.showPassword).toBeTrue();
        component.togglePassword();
        expect(component.showPassword).toBeFalse();
      });
      it("login() deber\xEDa navegar al dashboard", () => {
        component.login();
        expect(mockRouter.navigate).toHaveBeenCalledWith(["/dashboard"]);
      });
    });
  }
});
export default require_login_spec();
//# sourceMappingURL=spec-login.spec.js.map
