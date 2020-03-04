import { Component, OnInit, Input } from '@angular/core';
import {MenuAPIService} from '../menu-api.service'
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public service: MenuAPIService) { 
  }
  
  menu : MenuItem[]= [];
  showShoppingCart=false
  showMenu = true
  ngOnInit() {
    this.getMenu()
  }
  getMenu() {
    this.service.getMenu().subscribe( (menu : MenuItem[]) => {
      console.log(menu);
      this.menu = menu;
    });
  }
  showCart(){
    this.showShoppingCart= !this.showShoppingCart;
    this.showMenu =!this.showMenu;
  }
}
