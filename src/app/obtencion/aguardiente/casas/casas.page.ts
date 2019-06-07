import { Component, OnInit } from '@angular/core';
import { AguardienteAppPage } from '../aguardiente-app-page';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'sp-casas',
  templateUrl: './casas.page.html',
  styleUrls: ['./casas.page.scss'],
})
export class CasasPage extends AguardienteAppPage implements OnInit {

  constructor(
    menuCtrl: MenuController
  ) {
    super(menuCtrl);
  }

  ngOnInit() {
  }

  inicialize() {
    super.inicialize();
    this.submenuSelectId = 2;
    this.selectPageMenu();
  }

}
