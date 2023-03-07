import { NgModule } from "@angular/core";
import { SignInComponent } from './signin.component';
import { SingUpComponent } from './signup.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SignoutComponent } from './signout.component';
import { ErrorComponent } from './error.component';

let loginRoutes:Routes = [
    {path:"signin", component:SignInComponent},
    {path:"signup", component:SingUpComponent},
    {path:"signout", component:SignoutComponent},
    {path:"error", component:ErrorComponent}
]
@NgModule({
    declarations: [SignInComponent, SingUpComponent, SignoutComponent, ErrorComponent],
    imports: [RouterModule.forChild(loginRoutes), SharedModule]
})
export class LoginModule {
    constructor() {
        console.log("Login module constructor")
    }
}