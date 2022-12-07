import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'app/models/Product';
import { pipe } from 'rxjs';
import { CartService } from './../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cartList: Product[]
  existingProductS: Product[]
  totalPrice: number = 0.0
  amount: number
  fullName: string
  address: string
  creditCard: number
  constructor(private cartService: CartService, private Router: Router) {

  }
  ngOnInit() {
    this.cartList = this.cartService.getCartProducts();
    this.calcTotalPrice()
    this.cartList.forEach(item => this.amount = item.amount)
    console.log(this.cartList)
  }
  changeQuantity(amount: number, product: Product) {
    this.totalPrice = 0
    console.log(amount)
    this.cartList.find(p => {
      if (p.id === product.id)
        product.amount = amount

    })
    this.calcTotalPrice()
  }
  calcTotalPrice() {
    this.cartList.forEach(cartItem => {
      this.totalPrice += cartItem.amount * cartItem.price
    });
  }
  remove(id: number) {
    console.log(id)
    this.cartService.deleteProduct(id)
    this.cartList = this.cartService.getCartProducts()
  }
  orderNow() {
    this.Router.navigate(['/confirmation', this.fullName, this.totalPrice])
  }
}
