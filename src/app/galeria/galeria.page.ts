import { Component, OnInit } from '@angular/core';
import { GaleriaAppPage } from './galeria-app-page';
import { MenuController } from '@ionic/angular';
import { GalleryImage } from '../global/gallery-image';

@Component({
  selector: 'sp-galeria',
  template: '<sp-page-type-three [menus]="menus" [images]="images" ></sp-page-type-three>'
})
export class GaleriaPage extends GaleriaAppPage implements OnInit {

  constructor(
    menuCtrl: MenuController
  ) {
    super(menuCtrl);
  }

  ngOnInit() {
  }

  inicialize() {
    super.inicialize();
    this.menuSelectId = 1;
    this.selectPageMenu();
    this.routeBasePath = `${this.routeBasePath}/bacardi`;
    let imgPos = 1;
    this.images = [
      new GalleryImage(imgPos++, `assets${this.routeBasePath}/Don Emilio Bacardí Moreau.png`, 'Don Emilio Bacardí Moreau', 'zoom'),
      new GalleryImage(imgPos++, `assets${this.routeBasePath}/MVC-254S..JPG`, 'Emilio Bacardí', 'zoom'),
      new GalleryImage(imgPos++, `assets${this.routeBasePath}/Cheque d la compañia Bacardi 21.6x19.6.jpg`, 'Cheque de la compañía Bacardí', 'zoom'),
      new GalleryImage(imgPos++, `assets${this.routeBasePath}/murciélago (etiqueta).png`, 'Murciélago (etiqueta)', 'zoom'),
      new GalleryImage(imgPos++, `assets${this.routeBasePath}/botella bacardí.png`, 'Botella de Bacardí', 'zoom'),
      new GalleryImage(imgPos++, `assets${this.routeBasePath}/Museo Emilio Bacardí en Santiago de Cuba.png`, 'Museo Emilio Bacardí en Santiago de Cuba', 'zoom'),
      new GalleryImage(imgPos++, `assets${this.routeBasePath}/Primer alambique de Bacardí.jpg`, 'Primer alambique de Bacardí', 'zoom'),
      new GalleryImage(imgPos++, `assets${this.routeBasePath}/Enrique Schueg .png`, 'Enrique Shueg', 'zoom'),
      new GalleryImage(imgPos++, `assets${this.routeBasePath}/Depósito de añejamiento Bacardí.jpg`, 'Depósito de añejamiento Bacardí', 'zoom')
    ];
    for (let index = 1; index <= 20; index++) {
      this.images.push(new GalleryImage(imgPos++, `assets${this.routeBasePath}/bacardi (${index}).JPG`, 'Santiago y los Bacardí', 'zoom'));
    }
    for (let index = 1; index <= 10; index++) {
      this.images.push(new GalleryImage(imgPos++, `assets${this.routeBasePath}/entierro bacardi (${index}).JPG`, 'Entierro de Bacardí', 'zoom'));
    }
    for (let index = 1; index <= 3; index++) {
      this.images.push(new GalleryImage(imgPos++, `assets${this.routeBasePath}/fabrica bacardi (${index}).jpg`, 'Fábrica Bacardí', 'zoom'));
    }
  }

}
