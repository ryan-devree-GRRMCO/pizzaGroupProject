import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../menu-item';
import {ShareDataService} from '../share-data.service'


@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent implements OnInit {
  constructor(private share: ShareDataService) { this.share.currentData.subscribe(data => this.pizzaCart = data)}

  @Input() item : MenuItem;
  menu: MenuItem[];
  pizzaCart : MenuItem[]= [];

  ngOnInit() {

    
  }

  addToCart() {
    this.pizzaCart.push(this.item);
    console.log(this.pizzaCart)
    this.share.changeData(this.pizzaCart);
  }

}
