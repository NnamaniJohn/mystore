import { Component } from '@angular/core';
import {CartService} from "../../carts/cart.service";
import {Bill} from "../../carts/cart";
import {Product} from "../../products/product";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  billing: Bill = {
    name: '',
    address: '',
    card: 0
  };
  cart: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.billing = this.cartService.getBilling()
    this.cart = this.cartService.getCart()
  }

  sum() {
    return this.cartService.getSum()
  }
}
