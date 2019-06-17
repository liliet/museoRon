import { Component, OnInit } from '@angular/core';
import { HistoriaAppPage } from './../historia-app-page';
import { MenuController } from '@ionic/angular';
import { GalleryImage } from 'src/app/global/gallery-image';

@Component({
  selector: 'sp-pancho',
  template: '<sp-page-type-one [menus]="menus" [images]="images" [textContent]="textContent" [textWidth]="textWidth" ></sp-page-type-one>'
})
export class PanchoPage extends HistoriaAppPage implements OnInit {

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
    this.selectPageMenu();
    this.textWidth = 68;
    this.images = [
      new GalleryImage(1, `assets${this.routeBasePath}/pancho1.jpg`, 'Nave Don Pancho'),
      new GalleryImage(2, `assets${this.routeBasePath}/pancho2.jpg`, 'Nave Don Pancho en la Actualidad')
    ];
// tslint:disable-next-line: max-line-length
    this.textContent = `<p>A principios de la década del 20, del siglo XX, en la intersección de la Ave. Michaelsen y Paseo de Martí, fue construida una gigantesca nave para el almacenamiento de azúcar. En ese entonces, su dueño ¨Cendoya y Cia.¨, la tenían en desuso a raíz de la crisis que se experimentaba recién finalizada la II Guerra Mundial, y cuyo período fue conocido en Cuba como el de las ¨vacas flacas¨.</p><p>Su ubicación, tamaño y condiciones la hacía excepcional para su fin, al estar situada cerca del puerto santiaguero y con conexión al ferrocarril a través de un ramal que entraba diagonalmente al almacén para carga y descarga, con un piso a nivel para los carros transportadores.</p><p>Las condiciones de la nave, la situación de crisis económica imperante, que por supuesto afectaba a sus dueños, y proximidad a la fábrica de ron Bacardí, conllevaron a que en 1921 fuera adquirida por Don Emilio Bacardí Moreau, hijo y primer sucesor en la dirección de esa empresa de su padre Don Facundo Bacardí Massó a raíz de su muerte en 1886, para destinarla al añejamiento de las bases de ron, en barriles de roble blanco americano.</p><p>A partir de la compra de la instalación fue nombrado como primer administrador al Sr. Francisco Savigne Lombard (1869 – 1940), apodado cariñosamente como Don Pancho, epíteto que desde entonces registra como nombre este local.</p><p>Savigne Lombard estaba emparentado por vía materna con Elvira Cape Lombard, lo que le hacia acreedor de una confianza absoluta. Se le reconoce además haber sido miembro del Ejército Libertador Cubano y al terminar la contienda bélica ostentaba el grado de Capitán de Primera.</p><p>Es significativo como sus cualidades personales, moral intachable, responsable y respetado por todos no solo le hacen instituir una línea de trabajo para ese momento sino que se convertirá en el paradigma de todos los que le sucedieron en esa responsabilidad.</p><p>A partir de la desaparición física de Don Pancho, continuaron, con el mismo rigor, abnegación, celo, respeto y amor:<br />1939 – 1956   Armando Garrido<br />1956 – 1974   Francisco Ayala Caro<br />1974 – 1990   Ramón Mourlot Sánchez<br />1990 – 2000   José Antonio Sosa<br />2000 – 2005   César Ortega Martínez<br />2005 – 2007 Lorenzo Lambert Fernández<br />2008 -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;César Ortega Martínez</p><p>Todos ellos han logrado que hoy, en los inicios de este siglo XXI, Santiago de Cuba en particular y Cuba, de manera general, puedan contar con lo que se ha denominado como “La Catedral del Ron Cubano”, almacenando, custodiando y enriqueciendo día a día un producto más de la rica cultura cubana.</p>`;
  }

}
