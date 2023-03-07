import { Component } from '@angular/core';

@Component({
    selector: "user-say",
    templateUrl: "./user-say.component.html",
    styleUrls: ["./user-say.component.scss"]
})

export class UserSayComponent{

    constructor() {
        console.log("user-say Component constructor");
    }
}