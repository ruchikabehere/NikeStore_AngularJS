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
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
// Observable class extensions
require('rxjs/add/observable/of');
// Observable operators
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
var shoe_search_service_1 = require('./shoe-search.service');
var ShoeSearchComponent = (function () {
    function ShoeSearchComponent(shoesearchservice, router) {
        this.shoesearchservice = shoesearchservice;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    ShoeSearchComponent.prototype.search = function (searchKeyword) {
        this.searchTerms.next(searchKeyword);
    };
    ShoeSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shoesArray = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (searchKeyword) { return searchKeyword ? _this.shoesearchservice.search(searchKeyword) :
            Observable_1.Observable.of([]); })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    ShoeSearchComponent.prototype.gotoDetail = function (shoe) {
        var link = ['./detail', shoe.id];
        this.router.navigate(link);
    };
    ShoeSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nike-search',
            templateUrl: './shoe-search.component.html',
            styleUrls: ['./shoe-search.component.css'],
            providers: [shoe_search_service_1.ShoeSearchService]
        }), 
        __metadata('design:paramtypes', [shoe_search_service_1.ShoeSearchService, router_1.Router])
    ], ShoeSearchComponent);
    return ShoeSearchComponent;
}());
exports.ShoeSearchComponent = ShoeSearchComponent;
//# sourceMappingURL=shoe-search.component.js.map