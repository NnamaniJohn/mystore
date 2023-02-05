import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, filter, find, first, elementAt} from 'rxjs';
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _jsonURL = '../../assets/data.json'
  private num: number = 0;

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this._jsonURL);
  }

  public inc(): void {
    this.num += 1;
  }

  public getNum(): number {
    return this.num;
  }
}
