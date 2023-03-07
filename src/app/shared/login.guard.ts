import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router';
import { LoginService } from './services/login.service';

@Injectable({providedIn: 'root'})
export class LoginGuard implements CanActivate{

    canActivate() {
        return this.ls.getIsAdminLoggedIn();
    }

    constructor(private ls:LoginService) {}
}