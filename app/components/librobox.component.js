"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var LibroBoxComponent = (function () {
    function LibroBoxComponent() {
    }
    return LibroBoxComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LibroBoxComponent.prototype, "libro", void 0);
LibroBoxComponent = __decorate([
    core_1.Component({
        selector: 'librobox',
        template: "\n    <div class=\"libro\">\n    \t<img [src]=\"libro.image\">\n    \t<h2>{{libro.name}}</h2>\n    \t<span class=\"price\">\n    \t\t{{libro.price | currency : 'USD': true : '1.2-2'}}\n    \t</span>\n    \t<br />\n    \t<button>Agregar al carrito</button>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], LibroBoxComponent);
exports.LibroBoxComponent = LibroBoxComponent;
//# sourceMappingURL=librobox.component.js.map