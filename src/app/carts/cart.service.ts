import { Injectable } from '@angular/core';
import {Bill, CartItem} from "./cart";
import {Product} from "../products/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];
  private billing: Bill = {
    name: '',
    address: '',
    card: 0
  }

  constructor() { }

  getCart() {
    return this.cart;
  }

  addToCart(item: Product): void {
    let inCart = true;
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].id == item.id) {
        this.cart[i] = item
        inCart = false
      }
    }
    if (inCart) {
      this.cart.push(item);
    }
    alert("Added to cart")
  }

  removeFromCart(item: Product): void {
    this.cart = this.cart.filter(cartItem => cartItem.id != item.id)
    alert("Removed from cart")
  }

  getSum(): string {
    let sum = 0;
    for (let item of this.cart) {
      sum += item.price * (item.quantity ?? 1)
    }
    return sum.toFixed(2)
  }

  addBilling(billing: Bill) {
    this.billing = billing;
  }

  getBilling(): Bill {
    return this.billing;
  }
}
