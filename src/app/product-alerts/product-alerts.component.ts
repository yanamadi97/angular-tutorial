import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

//@Component() decorator indicates following class is component
@Component({
  selector: 'app-product-alerts', //identifies component
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product : Product | undefined;
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
