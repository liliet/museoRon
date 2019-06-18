import { Component } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'sp-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  subscription: any;
  constructor(
    private menuCtrl: MenuController,
    private platform: Platform
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribe(() => {
// tslint:disable-next-line: no-string-literal
      navigator['app'].exitApp();
    });
  }
}
