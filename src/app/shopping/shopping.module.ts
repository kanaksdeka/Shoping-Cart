import { NgModule } from "@angular/core";
import { ProductsComponent } from '../shopping/products.component';
import { CartitemsComponent } from './cartitems.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchDataPipe } from '../shared/searchdata.pipe';
import { SharedModule } from '../shared/shared.module';
import { CategoryComponent } from './category.component';
import { RouterModule } from '@angular/router';
import { LoginGuard } from '../shared/login.guard';

@NgModule({  
    declarations: [ProductsComponent, CartitemsComponent, CategoryComponent],
    exports: [ProductsComponent, CartitemsComponent],
    imports: [CommonModule, FormsModule, SharedModule, RouterModule.forChild([
        {path:"categories", component: CategoryComponent, canActivate:[LoginGuard]}])]
})
export class ShoppingModule {
    constructor() {
        console.log("Shopping module constructor")
    }
}