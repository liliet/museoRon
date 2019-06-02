import { Component, OnInit } from '@angular/core';
import { BacardiAppPage } from '../barcardi-app-page';
import { MenuController } from '@ionic/angular';
import { GalleryImage } from 'src/app/global/gallery-image';

@Component({
  selector: 'sp-creador',
  templateUrl: './creador.page.html',
  styleUrls: ['./creador.page.scss'],
})
export class CreadorPage extends BacardiAppPage implements OnInit {

  constructor(
    menuCtrl: MenuController
  ) {
    super(menuCtrl);
    this.menuSelectId = 2;
    this.submenuSelectId = 2;
    this.inicialize();
  }

  ngOnInit() {
  }

  inicialize() {
    super.inicialize();
    this.images = [
      new GalleryImage(1, `assets${this.routeBasePath}/facundo.jpg`, 'Facundo Bacardí Masó')
    ];
// tslint:disable-next-line: max-line-length
    this.textContent = '<p>Don Facundo Bacardí Massó, fundador de la empresa Ron Bacardí, nace en Sitges (Barcelona) en el año 1813. Con apenas 14 años emigró a Cuba, donde prosperó como importador de vinos y otras mercancías. Hoy, Bacardi Limited es una gran empresa, y uno de los líderes mundiales en su sector.</p><p>En sus orígenes, Don Facundo empezó a producir para su propio uso un ron refinado y agradable al paladar que se empezó a distribuir entre sus amigos y conocidos.En aquel entonces se puso a la venta una pequeña destilería: un cobertizo, viejos alambiques, tanques de fermentación, barriles de añejamiento, y una colonia de murciélagos.</p><p>Así, un 4 de febrero de 1862 se fundó la empresa Ron Bacardí.El negocio familiar fue creciendo, mucha gente de la época no sabía leer y tuvieron que identificar el ron con una marca.La solución la dio la esposa de Don Facundo: los murciélagos que vivían bajo el techo del cobertizo, que eran a la vez un símbolo de buena suerte y protección.Registraron la marca del murciélago que aparece en todas las etiquetas de Ron Bacardí y que se conserva hasta nuestros días.</p><p>Luego del triunfo de la Revolución Cubana, la familia Bacardí no simpatizó con los principios de nacionalización para poner en manos del pueblo los bienes del país y salieron de Cuba.</p>';
  }

}
