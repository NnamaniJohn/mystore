import {Product} from "../products/product";

export interface CartItem {
  product: Product;
}

export interface Bill {
  name: string;
  address: string;
  card: number;
}
