import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];

  product: Product;
  constructor(private httpClient: HttpClient) {

  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('../../assets/data.json')
  }

}

