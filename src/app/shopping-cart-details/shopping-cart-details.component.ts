import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../share-data.service';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-shopping-cart-details',
  templateUrl: './shopping-cart-details.component.html',
  styleUrls: ['./shopping-cart-details.component.css']
})
export class ShoppingCartDetailsComponent implements OnInit {
  pizzaCart: MenuItem[];
  constructor(private share: ShareDataService) {  this.share.currentData.subscribe((data: any) => this.pizzaCart = data)}

  ngOnInit() {
  }

  deleteFromCart(pizzaCart: MenuItem) {
    var index = this.pizzaCart.indexOf(pizzaCart);
    this.pizzaCart.splice(index, 1); 
  };

  submit() {
    this.pizzaCart.length = 0;
  }
}
