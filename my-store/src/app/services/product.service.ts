import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products:Product[]=[];

cartProducts:Product[]=[];
product:Product;
  constructor(private httpClient:HttpClient) {
    this.product={
      id:1,
      name:"",
      price:0.0,
      description:"",
      url:""

    }
  }

  getProducts():Observable <Product[]>{
    return this.httpClient.get<Product[]>('../../assets/data.json')
    }

    addToCart(product:Product):void{
this.cartProducts.unshift(product)
    }
  }

