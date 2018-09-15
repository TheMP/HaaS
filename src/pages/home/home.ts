import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListPage} from '../list/list';
import {MymedsPage} from '../mymeds/mymeds';
import {BillPage} from '../bill/bill';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  p1:string="assets/img/home1.png";
  p2:string="assets/img/home2.png";
  p3:string="assets/img/home3.png";
  p4:string="assets/img/home4.png";
  gauge:string="assets/img/gauge.png";

  constructor(public navCtrl: NavController) {

  }

  openPrescriptions(){
    this.navCtrl.push(ListPage);
  }

  openMeds(){
    this.navCtrl.push(MymedsPage);
  }

  openBill(){
    this.navCtrl.push(BillPage);
  }

}
