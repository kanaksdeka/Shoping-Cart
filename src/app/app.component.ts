import { Component } from "@angular/core"
import { template } from '@angular/core/src/render3';


@Component({
    //Specify name of the tag for component
    selector: "app-root",
    //oautput for the component
    template: `<!-- <h1> My First Anurlar Component </h1> -->
    <app-header></app-header>
    <router-outlet></router-outlet>`
})
export class AppComonent {
    constructor() {
        console.log("App component Constructor")
    }
}