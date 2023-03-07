import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { Product } from '../models/product.model';
import { CartService } from '../shared/services/cart.service';
import { CartItem } from '../models/cartitem.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {
  products:Product[] = []
  myDate = new Date();
  queryString = ""
  
  constructor(private psvc:ProductService, private csvc:CartService, private ar:ActivatedRoute) { }

  ngOnInit() {
    //this.products = this.psvc.getProducts()
    this.ar.params.subscribe(
      (paramData)=> {
        let paramId = paramData.ctgid;
        if(paramId == undefined) {
          this.products = this.psvc.getProducts()
        } else {
          this.products = this.psvc.getProducts().filter((e)=>e.ctgid == paramId)
        }
      }
    )
  }

  addToCart(selectedProduct: Product) {
    this.csvc.addCartItem(new CartItem(selectedProduct.id, selectedProduct.name, selectedProduct.price, 1))
  }

}
