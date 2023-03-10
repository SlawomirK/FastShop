import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-name',
  templateUrl: './order-name.component.html',
  styleUrls: ['./order-name.component.less']
})
export class OrderNameComponent {
  @Input()
  orderName!: string;
  @Input()
  ilosc!: number;
}
