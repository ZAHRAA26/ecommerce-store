import { Component, OnInit } from '@angular/core';
import { Product } from 'app/models/Product';
import { ProductService } from 'app/services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  orderQuantity(product: Product) {
    this.products.forEach((p) => {
      if (p.id === product.id) {
        p.amount = product.amount;
      }
    });
  }
}
