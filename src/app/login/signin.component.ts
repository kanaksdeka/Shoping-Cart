import { Component } from "@angular/core";
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';

@Component({
    selector: "sign-in",
    template: `
    <h1> Welcome {{userName}} </h1>
    <img src="./assets/images/Group63.png" width="30" height="30" alt="logo"/>
    <my-sign [title]="signInHeading" (myEvent)="handleMyEvent($event)"></my-sign>`
})
export class SignInComponent {
    userName = "Guest"
    signInHeading = "Sing In"

    handleMyEvent(obj) {
        this.userName = obj.usr;
        if(this.lsvc.isValidUser(obj.usr, obj.pwd)) {
            this.router.navigate(['/categories'])
        } else {
            this.router.navigate(['login/error'])
        }
    }

    constructor(private lsvc:LoginService, private router:Router) {}
}