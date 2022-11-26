import { Component,Input } from '@angular/core';
// import { Router } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../models/Product';
import {ProductService}from "../services/product.service"

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
@Input() product:Product
constructor(private productService:ProductService,private router:Router){
  this.product={
    id:1,
    name: "",
    price: 0.0,
    url: "",
    description: ""
  }

  }
  addToCart(product:Product){
    this.productService.addToCart(product)
    alert("Product added!");
  }
  goToNextPage(){
let paramid=3
this.router.navigate(['product-item-details',paramid])
  }
}

