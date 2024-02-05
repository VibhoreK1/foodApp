import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../../shared/models/Order';

@Component({
  selector: 'order-items-list',
  templateUrl: './order-items-list.component.html',
  styleUrl: './order-items-list.component.css',
})
export class OrderItemListComponent implements OnInit {

  @Input()
  order!: Order;
  constructor() {}
  ngOnInit(): void {}
}