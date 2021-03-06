import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BillPage } from '../pages/bill/bill';
import { InsurerPage } from "../pages/insurer/insurer";
import { PharmacyPage } from "../pages/pharmacy/pharmacy";
import { PrescriptionListPage } from "../pages/prescriptions/prescriptions";
import {FindDoctorPage} from "../pages/finddoctor/finddoctor";
import { MymedsPage } from "../pages/mymeds/mymeds";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'My Bills', component: BillPage },
      { title: 'My Prescriptions', component: PrescriptionListPage },
      { title: 'Pharmacy', component: PharmacyPage },
      { title: 'Insurer', component: InsurerPage },
      { title: 'Find doctor', component: FindDoctorPage },
      { title: 'Mymeds', component: MymedsPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
