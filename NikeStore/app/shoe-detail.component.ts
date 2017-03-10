import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Shoe } from './shoe';
import { ShoeService } from './shoe.service';

@Component({
    moduleId: module.id,
    selector: 'shoe-detail',
    templateUrl: './shoe-detail.component.html',
    styleUrls: ['./shoe-detail.component.css'],
})
export class ShoeDetailComponent implements OnInit {
    shoe: Shoe;

    constructor(
        private shoeservice: ShoeService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.shoeservice.getShoe(+params['id']))
            .subscribe(
            shoe => this.shoe = shoe);
    }

    goBack(): void {
        this.location.back();
    }

    //save(): void {
    //    this.shoeservice.update(this.shoe)
    //        .then(() => this.goBack());
    //}
    //save(): void {
    //    var a = JSON.stringify(this.shoe);
    //    this.shoeservice.update(a)
    //        .subscribe(() => this.goBack());
    //}
    save(): void {
        this.shoeservice.update(this.shoe)
            .subscribe(() => this.goBack());
    }
}