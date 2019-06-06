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
    this.menuSelectId = 4;
    this.inicialize();
   }

  ngOnInit() {
  }

  inicialize() {
    super.inicialize();
    this.images = [
      new GalleryImage(1, `assets${this.routeBasePath}/rones/ron1.jpg`, 'Ron Castillo'),
      new GalleryImage(2, `assets${this.routeBasePath}/rones/ron2.jpg`, 'Ron Albuerne y Comp.'),
      new GalleryImage(3, `assets${this.routeBasePath}/rones/ron3.jpg`, 'Ron Elixir-Cordial Bacardi'),
      new GalleryImage(4, `assets${this.routeBasePath}/rones/ron4.jpg`, 'Ron Castillo')
    ];
  }

}
