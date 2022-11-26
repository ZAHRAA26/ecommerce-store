import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent {
  routerSubscription: Subscription;
  serviceSubscription: Subscription;

  productId:number;
product :Product;

constructor(private route: ActivatedRoute,private productService:ProductService,private router:Router){

  this.routerSubscription = this.route.params.subscribe(params => {
    this.productId = +params['id'];
  });
  this.serviceSubscription = this.productService.getProducts().subscribe(products => {
    if (this.productId === undefined) return;

    const product = products.find(product => product.id === this.productId);
    if (!product) {
      this.router.navigate(['404']);
      return;
    }

    this.product = product;
  });
}
ngOnInit() {
  console.log(this.product)
  }

addToCart(product:Product){
  this.productService.addToCart(product)
  alert("Product added!");
}
  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
    this.serviceSubscription.unsubscribe();
  }
}
