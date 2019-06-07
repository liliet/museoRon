import { Component, OnInit } from '@angular/core';
import { BacardiAppPage } from '../barcardi-app-page';
import { MenuController } from '@ionic/angular';
import { GalleryImage } from 'src/app/global/gallery-image';

@Component({
  selector: 'sp-santiago',
  template: '<sp-page-type-one [menus]="menus" [submenus]="submenus" [textWidth]="textWidth" [images]="images" [textContent]="textContent"></sp-page-type-one>'
})
export class SantiagoPage extends BacardiAppPage implements OnInit {

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
    this.images = [
      new GalleryImage(1, `assets${this.routeBasePath}/santiago1.jpg`),
      new GalleryImage(2, `assets${this.routeBasePath}/santiago2.jpg`),
      new GalleryImage(3, `assets${this.routeBasePath}/santiago3.jpg`)
    ];
// tslint:disable-next-line: max-line-length
    this.textContent = '<p>Emilio Bacardí Moreau fue primer alcalde electo de la ciudad de Santiago de Cuba e “Hijo Predilecto” de Santiago de Cuba.</p><p>La historia de esta familia fue llevada a la literatura, en forma de ficción, por el más encumbrado de los novelistas santiagueros, el Premio Nacional de Literatura José Soler Puig en su novela de 1982 Un mundo de cosas, donde muestra una visión profunda de cómo la familia hizo su fortuna gracias a la fabricación de uno de los rones cubanos más afamados, y cómo influyeron sus diversos personajes en la vida del Santiago de su época.</p><p>El linaje de los Bacardí en Cuba comienza con Facundo Bacardí Massó nacido en una región costera de Cataluña, España y que se estableció en Cuba con apenas 16 años.</p><p>Hijo de comerciantes de vino, en tierra cubana se dedicó al negocio de sus padres y años después, por el 1852 comenzó a experimentar con la destilación de ron con vistas a obtener una bebida más suave.Una vez logrado su objetivo adquirió en Santiago de Cuba, con ayuda de su hermano José, una destilería con la cual funda en 1862 lo que sería la mundialmente reconocida empresa Bacardí, una empresa netamente familiar que con el pasar del tiempo, y no sin algunos tropiezos, se adueñó del comercio del ron en Cuba y buena parte del mundo.</p><p>Pronto las características únicas de este ron le ganaron amplia popularidad entre los bebedores, lo cual vino a ser respaldado por varios reconocimientos entre los que destaca la Medalla de Oro de la Exposición Universal de Filadelfia en 1876. En es propio año 1876, Facundo se retira del negocio dejándolo en manos de sus hijos, quienes en unión de Enrique Schueg, expanden mucho más el negocio y obtienen nuevos mercados.</p><p>Diez años después de su retiro, el 9 de mayo de 1886, fallece el creador de la marca del Murciélago.</p>';
  }

}
