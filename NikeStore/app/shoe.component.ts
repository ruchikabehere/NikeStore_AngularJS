import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { Shoe } from './shoe';
import { ShoeService } from './shoe.service';

@Component({
    moduleId: module.id,
    selector: 'my-shoes',
    templateUrl: './shoe.component.html',
    styleUrls: ['./shoe.component.css'],
})
export class ShoeComponent implements OnInit {
    shoesArray: Shoe[];
    selectedShoe: Shoe;
    shoeObj: Shoe;

    constructor(
        private shoeservice: ShoeService,
        private router: Router
    ) { }

    onSelect(shoe: Shoe): void {
        this.selectedShoe = shoe;
    }

    //Synchronous call
    //getShoes(): void {
    //    this.shoesArray = this.shoeservice.getShoes();
    //}

    //Asynchronous call
    //getShoes(): void {
    //    this.shoeservice.getShoes().then(shoesArray => this.shoesArray = shoesArray);
    //}
    getShoes(): void {
        this.shoeservice.getShoes()
            .subscribe(
            shoesArray => this.shoesArray = shoesArray);
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedShoe.id]);
    }

    //addShoe(type: string): void {
    //    type = type.trim();
    //    if (!type) { return; }
    //    this.shoeservice.create(type)
    //        .then(shoe => {
    //            this.shoesArray.push(shoe);
    //            this.selectedShoe = null;
    //        });
    //    }
    addShoe(type: string): void {
        if (!type) { return; }
        this.shoeObj = { "id":0, "shoeType": type };
        type = JSON.stringify(this.shoeObj);
       
        this.shoeservice.create(type)
            .subscribe(sh => {
                this.shoesArray.push(sh);
                this.selectedShoe = null;
            });
    }

    //deleteShoe(shoe: Shoe): void {
    //    this.shoeservice.delete(shoe.id)
    //        .then(() => {
    //            this.shoesArray = this.shoesArray.filter(s => s !== shoe);
    //            if (this.selectedShoe === shoe) { this.selectedShoe = null; }
    //        });
    //}
    deleteShoe(shoe: Shoe): void {
        this.shoeservice.delete(shoe.id)
            .subscribe(() => {
                this.shoesArray = this.shoesArray.filter(s => s !== shoe);
                if (this.selectedShoe === shoe) { this.selectedShoe = null; }
            });
    }

    ngOnInit(): void {
        this.getShoes();
    }

}


