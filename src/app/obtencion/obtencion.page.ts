import { Component, OnInit } from '@angular/core';
import { ObtencionAppPage } from './obtencion-app-page';
import { MenuController } from '@ionic/angular';
import { GalleryImage } from '../global/gallery-image';

@Component({
  selector: 'sp-obtencion',
  template: `<sp-page-type-two [menus]="menus" [images]="images" [spaceBetween]="spaceBetween" [slidesPerView]="slidesPerView" [likeSteps]="likeSteps"></sp-page-type-two>`,
})
export class ObtencionPage extends ObtencionAppPage implements OnInit {

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
    this.spaceBetween = 150;
    this.slidesPerView = 2.5;
    this.likeSteps = true;
    this.images = [
      new GalleryImage(1, `assets${this.routeBasePath}/proceso1.png`, 'Los rones en Cuba se elaboran a partir del aguardiente natural, obtenido de la fermentación de mieles de caña de azúcar. (Melaza)'),
      new GalleryImage(2, `assets${this.routeBasePath}/proceso2.png`, 'Luego se provoca un proceso de fermentación al mosto con diversas especies de levaduras, y que puede favorecerse mediante inoculación.'),
      new GalleryImage(3, `assets${this.routeBasePath}/proceso3.jpg`, 'Tras un periodo de tiempo que comprende de 2 a 5 días, termina la fermentación, y el licor alcohólico obtenido es destilado a 55-65 grados en un alambique o columna de destilación.'),
// tslint:disable-next-line: max-line-length
      new GalleryImage(4, `assets${this.routeBasePath}/proceso4.png`, 'El aguardiente natural a 75 por ciento de alcohol es añejado en barriles de roble blanco por 1 y 3 años. Es tal la importancia de este aguardiente en el aroma y sabor del ron que en Cuba lo hemos identificado como “alma del ron cubano”.'),
// tslint:disable-next-line: max-line-length
      new GalleryImage(5, `assets${this.routeBasePath}/proceso5.png`, 'Por último, y antes de su expedición para el consumo, se efectúan las mezclas adecuadas para lograr una calidad homogénea; a veces se le da color artificialmente con azúcar quemado o caramelo y, por último, se clarifica por filtración o encolado.')
    ];
  }

}
