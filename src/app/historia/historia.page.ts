import { Component, OnInit } from '@angular/core';
import { GalleryImage } from 'src/app/global/gallery-image';
import { HistoriaAppPage } from './historia-app-page';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'sp-historia',
  template: '<sp-page-type-one [menus]="menus" [images]="images" [textContent]="textContent" ></sp-page-type-one>'
})
export class HistoriaPage extends HistoriaAppPage implements OnInit {

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
    this.images = [
      new GalleryImage(1, `assets${this.routeBasePath}/mapa.png`, 'Ruta de la caña de azúcar', 'zoom'),
      new GalleryImage(2, `assets${this.routeBasePath}/historia1.jpg`, 'Cunyanya', 'zoom'),
      new GalleryImage(3, `assets${this.routeBasePath}/historia2.jpg`, 'Ruta de la caña de azúcar', 'zoom'),
      new GalleryImage(4, `assets${this.routeBasePath}/historia3.jpg`, 'Cunyanya', 'zoom')
    ];
    // tslint:disable-next-line: max-line-length
    this.textContent = '<p>La historia del ron cubano forma parte inseparable de la historia de Cuba. Trajo Colón de Islas Canarias, en su segundo viaje las zocas, raíces de caña de azúcar, sin imaginar que con ellas sustituiría al oro que vinieron buscando en esta isla, llamada Cipango por sus aborígenes. En memorando a los Reyes Católicos, escribió: “Las cañas de azúcar según unas poquitas que se pusieron han prendido”.</p><p>Las condiciones climáticas de nuestro país: sus fértiles tierras, sus aguas y sol, hicieron posible que crecieran los plantíos alrededor de los cacicazgos indios, nacía de este modo la caña de azúcar cubana.</p><p>La cunyaya, aparato indígena, se cuenta como el primer instrumento empleado para extraer el guarapo (jugo de caña). A este le sucedieron trapiches, tirados por fuerza animal (caballos y bueyes), ingenios con fuerza hidráulica (poderosos equipos de agua) y, por último, los centrales.</p><p>La mano de obra aborigen fue sustituida por los negros esclavos traídos de África, un factor importante en el desarrollo de la industria azucarera. Ya en el año 1539, en una Real Orden de Carlos V se relacionaban varios productos de la industria cañera: azúcar blanco, cuajado y purificado, azúcar refinado, espumas, re-espumas, caras, cogullos clarificados, mieles y remieles.</p><p>El padre Jean Baptiste Labat observó que “los salvajes, los negros y los pequeños pobladores de la isla” fabrican una bebida fuerte y brutal a partir del guarapo de caña, que los alegraba y reponía de sus fatigas. Es de esa bebida fermentada de la que se tiene conocimiento en Europa a principios del siglo XVIII, conocimiento que llega entre otras vías por corsarios y piratas, agentes comerciales de esta bebida, entre los que se destaca Francis Drake, que dejó castellanizado un trago popular, el draque, fundamentalmente a base de aguardiente.</p>';
  }
}
