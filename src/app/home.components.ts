import { Component } from "@angular/core";
import { increaseElementDepthCount } from '@angular/core/src/render3/state';
import { CategoryService } from './shared/services/category.service';
import { Category } from './models/category.model';

@Component({
    //selector: "app-home",
    templateUrl: "./home.component.html"
})
export class HomeComponent {
    mycontent:string = "<b><u>My Sample Content</u></b>"
    count = 0

    incrementCount() {
        this.count++;
    }
}

@Component ({
    //selector: "app-list",
    template: `
    <div class="row">
        <div class="col-sm-3 card">
            <div class="card-header bg-info">
                <b>Categories</b>
            </div>
            <div class="card-body">
                <ul class ="list-group">
                    <li class="list-group-item" *ngFor="let link of ctgLinks">
                        <a [routerLink]="link.id">{{link.name}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-sm-5">
            <!-- <app-products></app-products>  -->
            <router-outlet></router-outlet>
        </div>
        <div class="col-sm-4 card">
            <app-cartitems></app-cartitems>
        </div>
    </div>
    `

})
export class ListComponent {
    ctgLinks: Category[] = []
    constructor(private csvc:CategoryService) {}

    ngOnInit() {
        this.csvc.getCategories().subscribe((data)=>this.ctgLinks=data, (err)=>console.log("Error"))
    }
}

@Component({
    //selector: "not-found",
    template: `<h2> Oooops!!! 404. Not Found </h2>`
})
export class NotFoundComponent {}