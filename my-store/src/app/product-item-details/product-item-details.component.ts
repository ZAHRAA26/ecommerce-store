import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from 'app/services/product.service';
import { CartService } from './../services/cart.service';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css'],
})
export class ProductItemDetailsComponent {
  routerSubscription: Subscription;
  serviceSubscription: Subscription;
  selectedItem: number = 1;
  productId: number;
  product: Product;
  selectedValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService,
    private router: Router
  ) {
    this.routerSubscription = this.route.params.subscribe((params) => {
      this.productId = +params['id'];
    });
    this.serviceSubscription = this.productService
      .getProducts()
      .subscribe((products) => {
        if (this.productId === undefined) return;

        const product = products.find(
          (product) => product.id === this.productId
        );
        if (!product) {
          this.router.navigate(['404']);
          return;
        }

        this.product = product;
      });
  }
  ngOnInit() {}

  changeQuantity(value: any) {
    this.selectedItem = value;
  }
  addToCart(p: Product) {
    let productInCart;
    productInCart = this.cartService
      .getCartProducts()
      .find((product) => product.id === p.id);
    productInCart
      ? (productInCart.amount += +this.selectedItem)
      : ((p.amount = +this.selectedItem), this.cartService.addToCart(p));
    alert('Product added!');
  }
  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
    this.serviceSubscription.unsubscribe();
  }
}
