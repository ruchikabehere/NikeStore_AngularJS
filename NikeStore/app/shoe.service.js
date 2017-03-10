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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var ShoeService = (function () {
    function ShoeService(http) {
        this.http = http;
        //while using angular service
        this.shoesURL = 'api/shoesArray';
        //private shoesURL = '/Home/GetShoes';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    //getShoes(): Shoe[] {
    //    return SHOES;
    //}
    //getShoes(): Promise<Shoe[]> {
    //    return Promise.resolve(SHOES);
    //}
    //getShoes(): Promise<Shoe[]> {
    //    return this.http.get(this.shoesURL)
    //        .toPromise()
    //        .then(response => response.json().data as Shoe[])
    //        .catch(this.handleError);
    //}
    ShoeService.prototype.getShoes = function () {
        return this.http.get('/Home/GetShoes')
            .map(function (response) { return response.json(); });
    };
    ShoeService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    //getShoe(id: number): Promise<Shoe> {
    //    return this.getShoes()
    //        .then(shoes => shoes.find(shoe => shoe.id === id));
    //}
    //getShoe(id: number): Promise<Shoe> {
    //    const url = `${this.shoesURL}/${id}`;
    //    return this.http
    //        .get(url)
    //        .toPromise()
    //        .then(response => response.json().data as Shoe)
    //        .catch(this.handleError);
    //}
    ShoeService.prototype.getShoe = function (id) {
        this.shoesURL = '/Home/GetShoe';
        var url = this.shoesURL + "/" + id;
        return this.http.get(url, { headers: this.headers })
            .map(function (response) { return response.json(); });
    };
    //update(shoe: Shoe): Promise<Shoe> {
    //    const url = `${this.shoesURL}/${shoe.id}`;
    //    return this.http
    //        .put(url, JSON.stringify(shoe), { headers: this.headers })
    //        .toPromise()
    //        .then(() => shoe)
    //        .catch(this.handleError);
    //}
    //update(shoe: string) {
    //    this.shoesURL = '/Home/Update'
    //    var myJSON = JSON.parse(shoe);
    //    var x = myJSON[0];
    //    const url = `${this.shoesURL}/${myJSON[0].id}`;
    //    return <Observable<Shoe>>this.http
    //        .post(url, x, { headers: this.headers })
    //        //.map(function (response) { return response.json(); });
    //        .map(
    //        response => response.json());
    //}
    ShoeService.prototype.update = function (shoe) {
        this.shoesURL = '/Home/Update';
        var url = this.shoesURL + "/" + shoe.id;
        return this.http
            .post(url, JSON.stringify(shoe), { headers: this.headers })
            .map((function () { return shoe; }));
    };
    //create(type: string): Promise<Shoe> {
    //    return this.http
    //        .post(this.shoesURL, JSON.stringify({ type: type }), { headers: this.headers })
    //        .toPromise()
    //        .then(res => res.json().data)
    //        .catch(this.handleError);
    //}
    ShoeService.prototype.create = function (type) {
        var shoeObj = JSON.parse(type);
        return this.http
            .post('/Home/Create/', shoeObj, { headers: this.headers })
            .map(function (response) { return response.json(); });
    };
    //delete(id: number): Promise<void> {
    //    const url = `${this.shoesURL}/${id}`;
    //    return this.http.delete(url, { headers: this.headers })
    //        .toPromise()
    //        .then(() => null)
    //        .catch(this.handleError);
    //}
    ShoeService.prototype.delete = function (id) {
        this.shoesURL = '/Home/Delete';
        var url = this.shoesURL + "/" + id;
        return this.http.post(url, { headers: this.headers })
            .map(function () { return null; });
    };
    ShoeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ShoeService);
    return ShoeService;
}());
exports.ShoeService = ShoeService;
//# sourceMappingURL=shoe.service.js.map