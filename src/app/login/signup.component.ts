import { Component } from "@angular/core";

@Component ({
    selector: "sign-up",
    template: `<my-sign [title]="signUpHeading"></my-sign>`
})
export class SingUpComponent {
    signUpHeading = "Quick Sing Up"
}