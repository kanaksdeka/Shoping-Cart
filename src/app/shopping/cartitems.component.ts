import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import { CartItem } from '../models/cartitem.model';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styles: []
})
export class CartitemsComponent implements OnInit {

  cartItems:CartItem[] = []
  constructor(private csvc:CartService) { }

  ngOnInit() {
    this.cartItems = this.csvc.getCartItems()
  }

  delete(idx:number) {
    this.csvc.deleteCartItem(idx)
  }

  totalAmount() {
    let tot = 0;

    for(let e of this.cartItems) {
      tot += (e.price * e.qty)
    }
    return tot;
  }
}
