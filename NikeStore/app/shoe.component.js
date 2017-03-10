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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var shoe_service_1 = require('./shoe.service');
var ShoeComponent = (function () {
    function ShoeComponent(shoeservice, router) {
        this.shoeservice = shoeservice;
        this.router = router;
    }
    ShoeComponent.prototype.onSelect = function (shoe) {
        this.selectedShoe = shoe;
    };
    //Synchronous call
    //getShoes(): void {
    //    this.shoesArray = this.shoeservice.getShoes();
    //}
    //Asynchronous call
    //getShoes(): void {
    //    this.shoeservice.getShoes().then(shoesArray => this.shoesArray = shoesArray);
    //}
    ShoeComponent.prototype.getShoes = function () {
        var _this = this;
        this.shoeservice.getShoes()
            .subscribe(function (shoesArray) { return _this.shoesArray = shoesArray; });
    };
    ShoeComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedShoe.id]);
    };
    //addShoe(type: string): void {
    //    type = type.trim();
    //    if (!type) { return; }
    //    this.shoeservice.create(type)
    //        .then(shoe => {
    //            this.shoesArray.push(shoe);
    //            this.selectedShoe = null;
    //        });
    //    }
    ShoeComponent.prototype.addShoe = function (type) {
        var _this = this;
        if (!type) {
            return;
        }
        this.shoeObj = { "id": 0, "shoeType": type };
        type = JSON.stringify(this.shoeObj);
        this.shoeservice.create(type)
            .subscribe(function (sh) {
            _this.shoesArray.push(sh);
            _this.selectedShoe = null;
        });
    };
    //deleteShoe(shoe: Shoe): void {
    //    this.shoeservice.delete(shoe.id)
    //        .then(() => {
    //            this.shoesArray = this.shoesArray.filter(s => s !== shoe);
    //            if (this.selectedShoe === shoe) { this.selectedShoe = null; }
    //        });
    //}
    ShoeComponent.prototype.deleteShoe = function (shoe) {
        var _this = this;
        this.shoeservice.delete(shoe.id)
            .subscribe(function () {
            _this.shoesArray = _this.shoesArray.filter(function (s) { return s !== shoe; });
            if (_this.selectedShoe === shoe) {
                _this.selectedShoe = null;
            }
        });
    };
    ShoeComponent.prototype.ngOnInit = function () {
        this.getShoes();
    };
    ShoeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-shoes',
            templateUrl: './shoe.component.html',
            styleUrls: ['./shoe.component.css'],
        }), 
        __metadata('design:paramtypes', [shoe_service_1.ShoeService, router_1.Router])
    ], ShoeComponent);
    return ShoeComponent;
}());
exports.ShoeComponent = ShoeComponent;
//# sourceMappingURL=shoe.component.js.map