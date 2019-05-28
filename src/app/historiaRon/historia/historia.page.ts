import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { imgsPath } from 'src/app/images-gallerys';
import { ImageModalPage } from 'src/app/image-modal/image-modal.page';
import { GalleryImage } from 'src/app/gallery-image';



@Component({
  selector: 'sp-historia',
  templateUrl: './historia.page.html',
  styleUrls: ['./historia.page.scss'],
})
export class HistoriaPage implements OnInit {
  images: Array<GalleryImage> = [];
  textContent: string;
  sliderOpts = {
    spaceBetween: 5,
    slidesPerView: 'auto',
    direction: 'vertical'
  };
  constructor(
    private menuCtrl: MenuController,
    private modalCtrl: ModalController
  ) {
    this.images = imgsPath.historia;
    this.setTextContent();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  setTextContent() {
// tslint:disable-next-line: max-line-length
    this.textContent = 'La historia del ron cubano forma parte inseparable de la historia de Cuba. Trajo Colón de Islas Canarias, en su segundo viaje las zocas, raíces de caña de azúcar, sin imaginar que con ellas sustituiría al oro que vinieron buscando en esta isla, llamada Cipango por sus aborígenes. En memorando a los Reyes Católicos, escribió: “Las cañas de azúcar según unas poquitas que se pusieron han prendido”.<br /><br />Las condiciones climáticas de nuestro país: sus fértiles tierras, sus aguas y sol, hicieron posible que crecieran los plantíos alrededor de los cacicazgos indios, nacía de este modo la caña de azúcar cubana.<br /><br />La cunyaya, aparato indígena, se cuenta como el primer instrumento empleado para extraer el guarapo (jugo de caña). A este le sucedieron trapiches, tirados por fuerza animal (caballos y bueyes), ingenios con fuerza hidráulica (poderosos equipos de agua) y, por último, los centrales.<br /><br />La mano de obra aborigen fue sustituida por los negros esclavos traídos de África, un factor importante en el desarrollo de la industria azucarera. Ya en el año 1539, en una Real Orden de Carlos V se relacionaban varios productos de la industria cañera: azúcar blanco, cuajado y purificado, azúcar refinado, espumas, re-espumas, caras, cogullos clarificados, mieles y remieles.<br /><br />El padre Jean Baptiste Labat observó que “los salvajes, los negros y los pequeños pobladores de la isla” fabrican una bebida fuerte y brutal a partir del guarapo de caña, que los alegraba y reponía de sus fatigas. Es de esa bebida fermentada de la que se tiene conocimiento en Europa a principios del siglo XVIII, conocimiento que llega entre otras vías por corsarios y piratas, agentes comerciales de esta bebida, entre los que se destaca Francis Drake, que dejó castellanizado un trago popular, el draque, fundamentalmente a base de aguardiente.';
  }

  openPreview(img: GalleryImage) {
    this.modalCtrl.create({
      component: ImageModalPage,
      componentProps: {
        img
      },
      keyboardClose: true,
      cssClass: 'imageModalPage'
    }).then(modal => {
      modal.present();
    });
  }

}
