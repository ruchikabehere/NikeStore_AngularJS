import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Shoe } from './shoe';

@Injectable()
export class ShoeSearchService {
    constructor(private http: Http) { }

    search(searchKeyword: string): Observable<Shoe[]> {
        return this.http
            .get(`app/shoesArray/?type=${searchKeyword}`)
            .map(response => response.json().data as Shoe[]);
    }

}