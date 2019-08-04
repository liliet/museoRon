import { Component, OnInit } from '@angular/core';
import { FigurasAppPage } from './../figuras-app-page';
import { MenuController } from '@ionic/angular';
import { GalleryImage } from 'src/app/global/gallery-image';

@Component({
  selector: 'sp-humberto',
  template: '<sp-page-type-one [menus]="menus" [submenus]="submenus" [textWidth]="textWidth" [images]="images" [textContent]="textContent"></sp-page-type-one>',
})
export class HumbertoPage extends FigurasAppPage implements OnInit {

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
      new GalleryImage(1, `assets${this.routeBasePath}/humberto.jpg`, 'Humberto Corona')
    ];
    this.textWidth = 68;
    // tslint:disable-next-line: max-line-length
    this.textContent = `<p>Humberto Corona nació el 10 de noviembre de 1916 en Santiago de Cuba. Comenzó a trabajar a la edad de 15 años en la Fábrica de Ron Bacardí, donde también laboraba su padre, para garantizarse cierta independencia económica como cargador de bocoyes.</p><p>Mientras trabajó en la Fábrica, se hizo Contador Público en la Escuela Profesional de Comercio. Su carácter serio, los conocimientos alcanzados, su afán de investigar y auto prepararse constituyeron avales para que los dueños de la Bacardí le confirieran la plaza de Jefe de Producción de tan importante industria.</p><p>Aprendió inglés de forma autodidacta, lo que le sirvió para convertirse en traductor, muchas veces hasta de los propios Bacardí cuando hacían negocios con firmas extranjeras, como la canadiense comercializadora de las tapas de sus botellas.</p><p>Aun cuando era el hombre de confianza de la fábrica, cuando sus dueños abandonaron el país decidió quedarse en Cuba y, junto a Alfonso Matamoros y Mariano Lavigne, fusionaron sus conocimientos para hacer posible la fabricación de aquel ron, hecho por primera vez luego de 100 años sin la presencia de un Bacardí.</p><p>Nacionalizada la fábrica, por sus características de hombre sencillo, inteligente, tenaz y fiel a sus principios, se mantuvo como Jefe de Producción de la naciente “Ron Caney”. Esos primeros años fueron muy difíciles y únicamente su celo infinito impidió la debacle definitiva de la industria, pues se opuso al intento triunfalista de doblar la producción de ron que significaría el agotamiento prematuro de los rones añejos, razón por la cual se negó a sacar un litro más de lo previsto, salvando el futuro de la Industria Santiaguera.</p><p>A mediados de la década del 70, se crea un equipo de técnicos para asesorar la producción nacional de rones, el PIR (Plan Integral del Ron) en el cual contribuyó decisivamente con su experiencia y conocimientos prácticos.</p><p>Se enferma a mediados de julio de 1978 y es operado de su dolencia. Apenas en octubre de ese mismo año se incorpora al trabajo, pero la recuperación es breve, enferma gravemente y fallece el 19 de mayo de 1980.</p>`;
  }

}
