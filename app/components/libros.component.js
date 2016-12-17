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
var LIBROS = [
    {
        id: 1,
        name: 'Seven Nation Army',
        artistName: 'White Stripes',
        image: '/images/Thumb-01.jpg',
        price: 650
    },
    {
        id: 2,
        name: 'Perro come perro',
        artistName: 'Superlitio',
        image: '/images/Thumb-02.jpg',
        price: 999
    }
];
var LibrosComponent = (function () {
    function LibrosComponent() {
        this.title = 'MY WISH LIST';
        this.libros = LIBROS;
    }
    return LibrosComponent;
}());
LibrosComponent = __decorate([
    core_1.Component({
        selector: 'libros',
        template: "\n    <h2>{{title}}</h2>\n    <div class=\"libros_list\">\n    \t<librobox\n    \t\t[libro]=\"libro_info\"\n    \t\t*ngFor = \"let libro_info of libros\"\n    \t></librobox>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], LibrosComponent);
exports.LibrosComponent = LibrosComponent;
//# sourceMappingURL=libros.component.js.map