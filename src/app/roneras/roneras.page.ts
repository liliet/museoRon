import { Component, OnInit } from '@angular/core';
import { RonerasAppPage } from './roneras-app-page';
import { MenuController } from '@ionic/angular';
import { GalleryImage } from '../global/gallery-image';

@Component({
  selector: 'sp-roneras',
  template: '<sp-page-type-one [menus]="menus" [textWidth]="textWidth" [images]="images" [textContent]="textContent"></sp-page-type-one>',
})
export class RonerasPage extends RonerasAppPage implements OnInit {

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
    this.images = [
      new GalleryImage(1, `assets${this.routeBasePath}/central.jpg`, '')
    ];
    this.textWidth = 68;
    // tslint:disable-next-line: max-line-length
    this.textContent = `<h1>Historia de la Ronera Central</h1><p>La Ronera Central “Agustín Rodríguez Mena” del municipio de Santo Domingo de la provincia de Villa Clara, pertenece a la Corporación Cuba Ron S.A. Esta entidad fue fundada en el año 1972.  Anteriormente, pertenecía a la Empresa de Bebidas y Licores de Villa Clara del Ministerio de la Industria Alimenticia.</p><p>En 1993, año en que se crea la Corporación Cuba Ron S.A, pasa a formar parte de las instalaciones que componen esta organización.</p><p>La más cercana tradición ronera que se conoce de esta zona central, se ubica en la actual Cienfuegos, en una destilería de principios del siglo XIX llamada San Lino que producía aguardiente.</p><p>En la década de los años 70 ubicamos en el propio Cienfuegos a la destilería Bodegas Jagua. En el año 1972 debido a un trágico incendio en el que se pierde la mitad de la instalación, exceptuando las centenarias bodegas de añejamiento, se traslada a las instalaciones de una antigua algodonera que se encontraba en Santo Domingo (Villa Clara), la cual se dedicaba a prensar el algodón y almacenar semillas.</p><p>Cuando ocurre esta unión de Bodegas Jagua y la Algodonera, comenzaron las labores de construcción de la nueva fábrica que con largas e ininterrumpidas jornadas de trabajo hicieron florecer lo que es hoy la Ronera Central.</p><p>Su cartera de productos:<ul><li>	Cubay Añejo Suave.</li><li>	Cubay Añejo.</li><li>	Cubay Carta Dorada.</li><li>	Cubay Carta Blanca.</li><li>	Cubay Añejo Superior 10 Años.</li></ul></p>`;
  }

}
