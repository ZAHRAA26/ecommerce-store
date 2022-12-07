import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemDetailsComponent } from './product-item-details/product-item-details.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
const routes: Routes = [{
  path: "", component: ProductListComponent
},
{ path: "cart", component: CartComponent },
{ path: "product-item-details/:id", component: ProductItemDetailsComponent },
{ path: "confirmation/:fullName/:totalPayments", component: ConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
