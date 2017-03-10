import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { ShoeSearchService } from './shoe-search.service';
import { Shoe } from './shoe';

@Component({
    moduleId: module.id,
    selector: 'nike-search',
    templateUrl: './shoe-search.component.html',
    styleUrls: ['./shoe-search.component.css'],
    providers: [ShoeSearchService]
})
export class ShoeSearchComponent implements OnInit{
    shoesArray: Observable<Shoe[]>;
    private searchTerms  = new Subject<string>();
    constructor(private shoesearchservice: ShoeSearchService,
                private router: Router) { }

    search(searchKeyword: string): void{
        this.searchTerms.next(searchKeyword);
    }

    ngOnInit() {
        this.shoesArray = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(searchKeyword => searchKeyword ? this.shoesearchservice.search(searchKeyword) :
                Observable.of<Shoe[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Shoe[]>([])
            });
    }

    gotoDetail(shoe: Shoe): void {
        let link = ['./detail', shoe.id];
        this.router.navigate(link); 
    }

}