import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Shoe } from './shoe';

@Injectable()
export class ShoeService {
    private shoesURL = 'api/shoesArray';

    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) { }

    getShoes(): Observable<Shoe[]> {
        return this.http.get('/Home/GetShoes')
            .map(response => response.json() as Shoe[]);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getShoe(id: number): Observable<Shoe> {
        this.shoesURL = '/Home/GetShoe';
        const url = `${this.shoesURL}/${id}`;
        return this.http.get(url, { headers: this.headers })
            .map(
            response => response.json() as Shoe);
    }

    update(shoe: Shoe) {
        this.shoesURL = '/Home/Update'
        const url = `${this.shoesURL}/${shoe.id}`;
        return <Observable<Shoe>>this.http
            .post(url, JSON.stringify(shoe), { headers: this.headers })
            .map(
            (() => shoe));
    }

    create(type: string) {
        var shoeObj = JSON.parse(type);
        return <Observable<Shoe>>this.http
            .post('/Home/Create/', shoeObj, { headers: this.headers })
            .map(response => response.json());
    }

    
    delete(id: number): Observable<Shoe> {
        this.shoesURL = '/Home/Delete';
        const url = `${this.shoesURL}/${id}`;
        return this.http.post(url, { headers: this.headers })
        //return this.http.delete(url, { headers: this.headers })
            .map(()=>null);
    }
}


