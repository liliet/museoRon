import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'sp-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private menuCtrl: MenuController
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
}
