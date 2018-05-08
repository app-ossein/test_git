import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToList(params){
    if (!params) params = {};
    this.navCtrl.push(ListPage);
  }goToCart(params){
    if (!params) params = {};
    this.navCtrl.push(CartPage);
  }
}
