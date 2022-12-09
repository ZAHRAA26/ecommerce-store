import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent {
  fullName: string;
  totalPayments: number;
  routerSubscription: Subscription;
  constructor(private route: ActivatedRoute) {
    this.routerSubscription = this.route.params.subscribe((params) => {
      this.fullName = params['fullName'];
      this.totalPayments = Number(params['totalPayments']);
    });
  }
  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}
