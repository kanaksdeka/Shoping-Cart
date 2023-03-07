import { Injectable } from "@angular/core";
import { CartItem } from 'src/app/models/cartitem.model';

@Injectable()
export class CartService {
    private cartData: CartItem[] = []

    getCartItems() {
        return this.cartData
    }

    addCartItem(newItem:CartItem) {
        this.cartData.push(newItem)
    }

    deleteCartItem(idx:number) {
        this.cartData.splice(idx, 1)
    }
}