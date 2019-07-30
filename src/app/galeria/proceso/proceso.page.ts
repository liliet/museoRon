import { Component, OnInit } from '@angular/core';
import { GaleriaAppPage } from '../galeria-app-page';
import { MenuController } from '@ionic/angular';
import { GalleryImage } from 'src/app/global/gallery-image';

@Component({
  selector: 'sp-proceso',
  template: '<sp-page-type-three [menus]="menus" [images]="images" ></sp-page-type-three>'
})
export class ProcesoPage extends GaleriaAppPage implements OnInit {

  constructor(
    menuCtrl: MenuController
  ) {
    super(menuCtrl);
   }

  ngOnInit() {
  }

  inicialize() {
    super.inicialize();
    this.menuSelectId = 4;
    this.selectPageMenu();
    this.routeBasePath = `${this.routeBasePath}/obtencion`;
    this.images = [
      new GalleryImage(1, `assets${this.routeBasePath}/Alambiques ingenios Santiago.jpg`, 'Alambiques ingenios Santiago', 'zoom'),
      new GalleryImage(2, `assets${this.routeBasePath}/Panel 6 Alambiques.jpg`, '6 Alambiques', 'zoom'),
      new GalleryImage(3, `assets${this.routeBasePath}/Flujo tecnológico de aguardiente.jpg`, 'Flujo tecnológico de aguardiente', 'zoom'),
      new GalleryImage(4, `assets${this.routeBasePath}/Proceso de obtención.jpg`, 'Proceso de obtención', 'zoom'),
      new GalleryImage(5, `assets${this.routeBasePath}/Industria destiladora del aguardiente (1860_1862).jpg`, 'Industria destiladora del aguardiente (1860_1862)', 'zoom')
    ];
  }

}
