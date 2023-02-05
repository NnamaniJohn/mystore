import { Component } from '@angular/core';
import {ProductService} from "../../products/product.service";
import {CartService} from "../../carts/cart.service";
import {Product} from "../../products/product";
import {ActivatedRoute, Router} from "@angular/router";
import {Bill} from "../../carts/cart";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  name = '';
  address = '';
  card = '';
  cart: Product[] = [];

  constructor(private cartService: CartService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart()
  }

  remove(item: Product) {
    if (item.quantity == 0) {
      this.cartService.removeFromCart(item);
      this.cart = this.cart.filter(cartItem => cartItem.id != item.id)
    }
  }

  sum() {
    return this.cartService.getSum()
  }

  onSubmit(): void {
    const bill: Bill = {
      name: this.name,
      address: this.address,
      card: this.card as unknown as number
    }
    this.cartService.addBilling(bill)
    this.router.navigate([`/confirmation`], { relativeTo: this.route });
  }

}
