import { Component, OnInit } from '@angular/core';
import { GaleriaAppPage } from '../../galeria-app-page';
import { MenuController } from '@ionic/angular';
import { MenuItem } from 'src/app/global/menu-page/menu-item';
import { GalleryImage } from 'src/app/global/gallery-image';

@Component({
  selector: 'sp-prensa',
  template: '<sp-page-type-three [menus]="menus" [submenus]="submenus" [images]="images" ></sp-page-type-three>',
})
export class PrensaPage extends GaleriaAppPage implements OnInit {

  constructor(
    menuCtrl: MenuController
  ) {
    super(menuCtrl);
   }

  ngOnInit() {
  }

  inicialize() {
    super.inicialize();
    this.menuSelectId = 3;
    this.submenus = [
      new MenuItem(1, 'Etiquetas', `${this.routeBasePath}/rones-cuba`),
      new MenuItem(2, 'Prensa', `${this.routeBasePath}/rones-cuba/prensa`)
    ];
    this.submenuSelectId = 2;
    this.selectPageMenu();
    this.routeBasePath = `${this.routeBasePath}/rones/prensa`;
    let imgPos = 1;
    this.images = [];
    for (let index = 1; index <= 6; index++) {
      this.images.push(new GalleryImage(imgPos++, `assets${this.routeBasePath}/albuerne${index}.jpg`, 'Albuerne', 'zoom'));
    }
    for (let index = 1; index <= 9; index++) {
      this.images.push(new GalleryImage(imgPos++, `assets${this.routeBasePath}/alvarez${index}.jpg`, 'Alvarez Camp', 'zoom'));
    }
    for (let index = 1; index <= 124; index++) {
      this.images.push(new GalleryImage(imgPos++, `assets${this.routeBasePath}/bacardi (${index}).jpg`, 'Bacardí', 'zoom'));
    }
    this.images.push(new GalleryImage(imgPos++, `assets${this.routeBasePath}/caney.jpg`, 'Caney', 'zoom'));
    for (let index = 1; index <= 16; index++) {
      this.images.push(new GalleryImage(imgPos++, `assets${this.routeBasePath}/castillo (${index}).jpg`, 'Castillo', 'zoom'));
    }
    this.images.push(new GalleryImage(imgPos++, `assets${this.routeBasePath}/linares.jpg`, 'Linares', 'zoom'));
    for (let index = 1; index <= 13; index++) {
      this.images.push(new GalleryImage(imgPos++, `assets${this.routeBasePath}/matusalem (${index}).jpg`, 'Matusalem', 'zoom'));
    }
    for (let index = 1; index <= 8; index++) {
      this.images.push(new GalleryImage(imgPos++, `assets${this.routeBasePath}/pinilla (${index}).jpg`, 'Pinilla', 'zoom'));
    }
    for (let index = 1; index <= 13; index++) {
      this.images.push(new GalleryImage(imgPos++, `assets${this.routeBasePath}/rovira (${index}).jpg`, 'Rovira', 'zoom'));
    }
    for (let index = 1; index <= 2; index++) {
      this.images.push(new GalleryImage(imgPos++, `assets${this.routeBasePath}/santa cruz (${index}).jpg`, 'Santa Cruz', 'zoom'));
    }
  }

}
