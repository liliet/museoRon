import { Component, OnInit } from '@angular/core';
import { HistoriaAppPage } from 'src/app/historia/historia-app-page';
import { MenuController } from '@ionic/angular';
import { GalleryImage } from 'src/app/global/gallery-image';

@Component({
  selector: 'sp-rones',
  template: `<sp-page-type-two [menus]="menus" [images]="images" ></sp-page-type-two>`
})
export class RonesPage extends HistoriaAppPage implements OnInit {

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
    this.images = [
      new GalleryImage(1, `assets${this.routeBasePath}/rones/ron1.jpg`, ''),
      new GalleryImage(2, `assets${this.routeBasePath}/rones/ron2.jpg`, ''),
      new GalleryImage(3, `assets${this.routeBasePath}/rones/ron3.jpg`, ''),
      new GalleryImage(4, `assets${this.routeBasePath}/rones/ron4.jpg`, ''),
      new GalleryImage(5, `assets${this.routeBasePath}/rones/ron5.jpg`, ''),
      new GalleryImage(6, `assets${this.routeBasePath}/rones/ron6.jpg`, ''),
      new GalleryImage(7, `assets${this.routeBasePath}/rones/ron7.jpg`, ''),
      new GalleryImage(8, `assets${this.routeBasePath}/rones/ron8.jpg`, ''),
      new GalleryImage(9, `assets${this.routeBasePath}/rones/ron9.jpg`, '')
    ];
  }

}
