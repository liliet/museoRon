import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { GalleryImage } from 'src/app/global/gallery-image';



@Component({
  selector: 'sp-historia',
  templateUrl: './historia.page.html',
  styleUrls: ['./historia.page.scss'],
})
export class HistoriaPage implements OnInit {

  images: Array<GalleryImage>;
  textContent: string;

  constructor(
    private menuCtrl: MenuController
  ) {
    this.inicialize();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  inicialize() {
    const imgsHistoryBasePath = `assets/historia/`;
    this.images = [
      new GalleryImage(1, `${imgsHistoryBasePath}mapa.png`, 'Ruta de la caña de azúcar'),
      new GalleryImage(2, `${imgsHistoryBasePath}historia2.jpg`, 'Cunyanya'),
      new GalleryImage(3, `${imgsHistoryBasePath}historia3.jpg`, 'Ruta de la caña de azúcar'),
      new GalleryImage(4, `${imgsHistoryBasePath}historia4.jpg`, 'Cunyanya')
    ];
// tslint:disable-next-line: max-line-length
    this.textContent = 'La historia del ron cubano forma parte inseparable de la historia de Cuba. Trajo Colón de Islas Canarias, en su segundo viaje las zocas, raíces de caña de azúcar, sin imaginar que con ellas sustituiría al oro que vinieron buscando en esta isla, llamada Cipango por sus aborígenes. En memorando a los Reyes Católicos, escribió: “Las cañas de azúcar según unas poquitas que se pusieron han prendido”.<br /><br />Las condiciones climáticas de nuestro país: sus fértiles tierras, sus aguas y sol, hicieron posible que crecieran los plantíos alrededor de los cacicazgos indios, nacía de este modo la caña de azúcar cubana.<br /><br />La cunyaya, aparato indígena, se cuenta como el primer instrumento empleado para extraer el guarapo (jugo de caña). A este le sucedieron trapiches, tirados por fuerza animal (caballos y bueyes), ingenios con fuerza hidráulica (poderosos equipos de agua) y, por último, los centrales.<br /><br />La mano de obra aborigen fue sustituida por los negros esclavos traídos de África, un factor importante en el desarrollo de la industria azucarera. Ya en el año 1539, en una Real Orden de Carlos V se relacionaban varios productos de la industria cañera: azúcar blanco, cuajado y purificado, azúcar refinado, espumas, re-espumas, caras, cogullos clarificados, mieles y remieles.<br /><br />El padre Jean Baptiste Labat observó que “los salvajes, los negros y los pequeños pobladores de la isla” fabrican una bebida fuerte y brutal a partir del guarapo de caña, que los alegraba y reponía de sus fatigas. Es de esa bebida fermentada de la que se tiene conocimiento en Europa a principios del siglo XVIII, conocimiento que llega entre otras vías por corsarios y piratas, agentes comerciales de esta bebida, entre los que se destaca Francis Drake, que dejó castellanizado un trago popular, el draque, fundamentalmente a base de aguardiente.';
  }

}