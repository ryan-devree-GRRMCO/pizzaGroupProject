import { Component, OnInit } from '@angular/core';
import {MenuAPIService} from '../menu-api.service';
import { MenuItem } from '../menu-item';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
pizzaCart: MenuItem[]
  constructor() { }

  ngOnInit() {
  }
  
}
