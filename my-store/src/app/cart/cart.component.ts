import { Component, OnInit } from '@angular/core';
import { Product } from 'app/models/Product';
import { ProductService } from 'app/services/product.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cartList:Product[]
  totalPrice:number=0
  product:Product
  amount:number
  constructor(private productService:ProductService){
    this.product={
      id:1,
      name: "",
      price: 0.0,
      url: "",
      description: "",
    }

  }
ngOnInit(): void {
  this.cartList= this.productService.cartProducts;
}
increase(){
  this.amount ++;
this.totalPrice+=this.product.price
}
decrease(){
  this.amount --;
  this.totalPrice-=this.product.price
  }
}
