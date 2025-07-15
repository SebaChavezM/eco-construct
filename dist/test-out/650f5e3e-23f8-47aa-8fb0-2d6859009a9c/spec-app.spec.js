import {
  RouterOutlet,
  init_router
} from "./chunk-ERWER4IP.js";
import "./chunk-WITBNL6W.js";
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

// src/app/app.ts
var App;
var init_app = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_router();
    App = class App2 {
    };
    App = __decorate([
      Component({
        selector: "app-root",
        standalone: true,
        imports: [RouterOutlet],
        template: `<router-outlet></router-outlet>`
      })
    ], App);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_testing();
    init_app();
    describe("App", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [App]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
      it("should render title", () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("h1")?.textContent).toContain("Hello, eco-construct");
      });
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app.spec.js.map
