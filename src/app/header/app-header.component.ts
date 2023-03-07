import {Component} from "@angular/core"
import { LoginService } from '../shared/services/login.service';

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})

export class AppHeaderComponent{
    constructor(private ls:LoginService) {
        console.log("Header Component constructor")
    }

    isAdminLoggedIn() {
        return this.ls.getIsAdminLoggedIn();
    }
}