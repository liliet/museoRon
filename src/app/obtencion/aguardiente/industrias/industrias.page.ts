import { Component, OnInit } from '@angular/core';
import { AguardienteAppPage } from './../aguardiente-app-page';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'sp-industrias',
  templateUrl: './industrias.page.html',
  styleUrls: ['./industrias.page.scss'],
})
export class IndustriasPage extends AguardienteAppPage implements OnInit {

  constructor(
    menuCtrl: MenuController
  ) {
    super(menuCtrl);
  }

  ngOnInit() {
  }

  inicialize() {
    super.inicialize();
    this.submenuSelectId = 3;
    this.selectPageMenu();
  }

}
