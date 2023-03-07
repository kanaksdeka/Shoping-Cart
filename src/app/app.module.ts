import { NgModule } from '@angular/core';
import { AppComonent } from './app.component';
import { AppHeaderComponent } from './header/app-header.component';
import {BrowserModule} from "@angular/platform-browser"
import { LoginModule } from './login/login.module';
import { ShoppingModule } from './shopping/shopping.module';
import { HomeComponent, ListComponent, NotFoundComponent } from './home.components';
import {Routes, RouterModule} from "@angular/router"
import {FormsModule} from "@angular/forms"
import { ProductService } from './shared/services/product.service';
import { CartService } from './shared/services/cart.service';
import { ProductsComponent } from './shopping/products.component';
import { FindPlanComponent } from './findPlanComp/find-plan.component';
import {WhyEnergyBuddyComponent} from './whyeb/whyEnergyBuddy.component';
import { WhyNeedEBComponent } from './ebneed/why-need.component';
import { UserSayComponent } from './usersay/user-say.component';
import { AboutEBComponent } from './abouteb/about-eb.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

let appRoutes: Routes = [{path:"home", component: HomeComponent},
    {path:"list", component: ListComponent, children: [
        {path:"", component: ProductsComponent},
        {path:":ctgid", component: ProductsComponent}
    ]},
    {path:"login", loadChildren:"./login/login.module#LoginModule"},
    {path:"", redirectTo: "home", pathMatch: 'full'},
    {path:"**", component: NotFoundComponent}
]

@NgModule({
    //Register component
    declarations: [AppComonent, 
        AppHeaderComponent, 
        HomeComponent, 
        ListComponent, 
        NotFoundComponent, 
        FindPlanComponent, 
        WhyEnergyBuddyComponent,
        WhyNeedEBComponent,
        UserSayComponent,
        AboutEBComponent,
        AboutEBComponent
    ],
    //Startup Compnent
    bootstrap: [AppComonent],
    //Mojdule Dependencies
    imports: [NgbModule, BrowserModule,/*LoginModule,*/ ShoppingModule, RouterModule.forRoot(appRoutes, {useHash: true}), FormsModule],
    //Register Services
    providers: [ProductService, CartService]
})

export class AppModule {
    constructor() {
        console.log("App Module constroctor")
    }
}