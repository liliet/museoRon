import { Component, OnInit } from '@angular/core';
import { FigurasAppPage } from './../figuras-app-page';
import { MenuController } from '@ionic/angular';
import { GalleryImage } from 'src/app/global/gallery-image';

@Component({
  selector: 'sp-mariano',
  template: '<sp-page-type-one [menus]="menus" [submenus]="submenus" [textWidth]="textWidth" [images]="images" [textContent]="textContent"></sp-page-type-one>',
})
export class MarianoPage extends FigurasAppPage implements OnInit {

  constructor(
    menuCtrl: MenuController
  ) {
    super(menuCtrl);
   }

  ngOnInit() {
  }

  inicialize() {
    super.inicialize();
    this.submenuSelectId = 4;
    this.selectPageMenu();
    this.images = [
      new GalleryImage(1, `assets${this.routeBasePath}/mariano.jpg`, 'Mariano Lavigne')
    ];
    this.textWidth = 68;
    // tslint:disable-next-line: max-line-length
    this.textContent = `<p>Mariano Lavigne nació en Santiago de Cuba en 1905. Fue fabricante de la Compañía de Ron Bacardí hasta 1959. Incluso, en 1931 fue uno de los responsables de montar la fábrica Bacardí en México.</p><p>Posteriormente, firme a sus principios y gracias a un fuerte arraigo a su idiosincrasia cubana, continuó como fabricante de ron en la Empresa de Bebidas y Licores de Santiago de Cuba a partir de 1960, luego de la nacionalización de esta industria, una vez que triunfó la Revolución cubana.</p><p>Entre los cargos que ocupó se destaca: Técnico en elaboración. Además, entre sus principales méritos se destaca la defensa de los productos fabricados en esta industria luego de la Revolución, una ardua tarea que asumió con orgullo ante el desprestigio y descrédito que pretendieron enfatizar los enemigos del proceso social que comenzó en Cuba en 1959.</p>`;
  }

}
