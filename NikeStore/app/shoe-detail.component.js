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
var common_1 = require('@angular/common');
require('rxjs/add/operator/switchMap');
var shoe_service_1 = require('./shoe.service');
var ShoeDetailComponent = (function () {
    function ShoeDetailComponent(shoeservice, route, location) {
        this.shoeservice = shoeservice;
        this.route = route;
        this.location = location;
    }
    ShoeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.shoeservice.getShoe(+params['id']); })
            .subscribe(function (shoe) { return _this.shoe = shoe; });
    };
    ShoeDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    //save(): void {
    //    this.shoeservice.update(this.shoe)
    //        .then(() => this.goBack());
    //}
    //save(): void {
    //    var a = JSON.stringify(this.shoe);
    //    this.shoeservice.update(a)
    //        .subscribe(() => this.goBack());
    //}
    ShoeDetailComponent.prototype.save = function () {
        var _this = this;
        this.shoeservice.update(this.shoe)
            .subscribe(function () { return _this.goBack(); });
    };
    ShoeDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'shoe-detail',
            templateUrl: './shoe-detail.component.html',
            styleUrls: ['./shoe-detail.component.css'],
        }), 
        __metadata('design:paramtypes', [shoe_service_1.ShoeService, router_1.ActivatedRoute, common_1.Location])
    ], ShoeDetailComponent);
    return ShoeDetailComponent;
}());
exports.ShoeDetailComponent = ShoeDetailComponent;
//# sourceMappingURL=shoe-detail.component.js.map