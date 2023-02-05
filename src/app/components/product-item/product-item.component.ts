import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../products/product";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: ''
  };
  @Input() btnShow = true;

  @Output() add = new EventEmitter();

  addToCart() {
    this.add.emit()
  }
}
