import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class LoginService {
    private isAdminLoggedIn = false;

    getIsAdminLoggedIn() {
        return this.isAdminLoggedIn
    }

    setIsAdminLoggedIn(newval:boolean) {
        this.isAdminLoggedIn = newval;
    }

    isValidUser(username: string, password:string) {
        let flag = false;
        if(username == 'admin') {
            flag = true;
        }

        this.isAdminLoggedIn = flag
        return flag;
    }
}