import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { Router } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../models/Product';
import { ProductService } from "../services/product.service"
import { CartService } from './../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product
  @Output() totalAmount = new EventEmitter();
  selectedValues: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  selectedItem: number = 1
  productInCart: Product
  constructor(private productService: ProductService, private cartService: CartService, private router: Router) {

  }
  changeQuantity(value: number, product: Product) {
    this.selectedItem = value
    this.product.amount = this.selectedItem

    this.totalAmount.emit(product);

    console.log(this.product)
  }
  addToCart(p: Product) {
    let productInCart
    productInCart = this.cartService.getCartProducts().find(product => product.id === p.id)
    productInCart ? (productInCart.amount += +this.selectedItem, console.log(1 + this.selectedItem)) : (p.amount = +this.selectedItem, this.cartService.addToCart(p))
    console.log(p.amount + 1)
    alert("Product added!");
  }
  // orderQuantity() {
  // }
}

