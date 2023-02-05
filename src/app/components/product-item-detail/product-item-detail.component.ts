import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {ProductService} from "../../products/product.service";
import {Product} from "../../products/product";
import {CartService} from "../../carts/cart.service";

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent {
  id: string = '';
  product:  Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: ''
  };

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string

    this.productService.getProducts().subscribe(data => {
      this.product = data.filter(el => el.id == parseInt(this.id))[0];
      if (!this.product.quantity) this.product.quantity = 1;
    });
  }

  addToCart(product: Product): void {
    if (!product.quantity) product.quantity = 1;
    this.cartService.addToCart(product)
  }
}
