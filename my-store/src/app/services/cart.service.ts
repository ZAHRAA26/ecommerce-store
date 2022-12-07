import { Injectable } from '@angular/core';
import { Product } from 'app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: Product[] = [];

  constructor() { }
  getCartProducts() {
    return this.cartProducts
  }
  addToCart(product: Product): Product[] {
    this.cartProducts.push(product)
    return this.cartProducts
  }
  deleteProduct(id: number): void {
    let products = this.cartProducts.filter(p => { p.id !== id })
    this.cartProducts = products

    console.log(this.cartProducts)
  }
}
