import { Component } from '@angular/core';
import {ProductService} from "../../products/product.service";
import {Product} from "../../products/product";
import {CartService} from "../../carts/cart.service";
import {CartItem} from "../../carts/cart";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products:  Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      for(let d of data) {
        if (!d.quantity) d.quantity = 1;
      }
      this.products = data;
    });
  }

  addToCart(product: Product): void {
    if (!product.quantity) product.quantity = 1;
    this.cartService.addToCart(product)
  }
}
