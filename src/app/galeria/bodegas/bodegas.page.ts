import { Component, OnInit } from '@angular/core';
import { GaleriaAppPage } from '../galeria-app-page';
import { MenuController } from '@ionic/angular';
import { GalleryImage } from 'src/app/global/gallery-image';

@Component({
  selector: 'sp-bodegas',
  template: '<sp-page-type-three [menus]="menus" [images]="images" ></sp-page-type-three>',
})
export class BodegasPage extends GaleriaAppPage implements OnInit {

  constructor(
    menuCtrl: MenuController
  ) {
    super(menuCtrl);
  }

  ngOnInit() {
  }

  inicialize() {
    super.inicialize();
    this.menuSelectId = 2;
    this.selectPageMenu();
    this.routeBasePath = `${this.routeBasePath}/pancho`;
    this.images = [
      new GalleryImage(1, `assets${this.routeBasePath}/Don Pancho (antiguas).jpg`, 'Don Pancho (antiguas)', 'zoom'),
      new GalleryImage(2, `assets${this.routeBasePath}/Don Pancho (antiguas) (2).jpg`, 'Don Pancho (antiguas) (2)', 'zoom'),
      new GalleryImage(3, `assets${this.routeBasePath}/Don Pancho.JPG`, 'Don Pancho', 'zoom'),
      new GalleryImage(4, `assets${this.routeBasePath}/Don Pancho 2.JPG`, 'Don Pancho 2', 'zoom'),
      new GalleryImage(5, `assets${this.routeBasePath}/Don Pancho 3.JPG`, 'Don Pancho 3', 'zoom'),
      new GalleryImage(6, `assets${this.routeBasePath}/Don Pancho 4.JPG`, 'Don Pancho 4', 'zoom'),
      new GalleryImage(7, `assets${this.routeBasePath}/Don Pancho 5.JPG`, 'Don Pancho 5', 'zoom'),
      new GalleryImage(8, `assets${this.routeBasePath}/Don Pancho 6.JPG`, 'Don Pancho 6', 'zoom'),
      new GalleryImage(9, `assets${this.routeBasePath}/Nave Don Pancho 0.jpg`, 'Nave Don Pancho', 'zoom'),
      new GalleryImage(10, `assets${this.routeBasePath}/Nave Don Pancho 1.jpg`, 'Nave Don Pancho 1', 'zoom')
    ];
  }

}
