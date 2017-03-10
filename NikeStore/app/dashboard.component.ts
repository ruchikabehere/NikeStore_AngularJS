import { Component, OnInit } from '@angular/core';

import { Shoe } from './shoe';
import { ShoeService } from './shoe.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    //styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    shoesArray: Shoe[] = [];
    constructor(private shoeservice: ShoeService) { }

    ngOnInit(): void {
        //this.shoeservice.getShoes()
        //    .then(shoesArray => this.shoesArray = shoesArray.slice(1, 5));
        this.shoeservice.getShoes()
            .subscribe(
            shoesArray => this.shoesArray = shoesArray.slice(1,5));
    }
}
