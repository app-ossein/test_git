import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { ListPage } from '../list/list';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ListPage;
  tab2Root: any = HomePage;
  tab3Root: any = CartPage;
  constructor(public navCtrl: NavController) {
  }
  goToCart(params){
    if (!params) params = {};
    this.navCtrl.push(CartPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToList(params){
    if (!params) params = {};
    this.navCtrl.push(ListPage);
  }
}
