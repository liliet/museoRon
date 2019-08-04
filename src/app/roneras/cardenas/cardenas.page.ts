import { Component, OnInit } from '@angular/core';
import { RonerasAppPage } from '../roneras-app-page';
import { MenuController } from '@ionic/angular';
import { GalleryImage } from 'src/app/global/gallery-image';

@Component({
  selector: 'sp-cardenas',
  template: '<sp-page-type-one [menus]="menus" [textWidth]="textWidth" [images]="images" [textContent]="textContent"></sp-page-type-one>'
})
export class CardenasPage extends RonerasAppPage implements OnInit {

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
    this.images = [
      new GalleryImage(1, `assets${this.routeBasePath}/cardenas.jpg`, '')
    ];
    this.textWidth = 68;
    // tslint:disable-next-line: max-line-length
    this.textContent = `<h1>Reseña Histórica de la Ronera Cárdenas</h1><p>La Ronera Cárdenas se encuentra ubicada en la provincia de Matanzas, municipio de Cárdenas. Esta fábrica fue fundada en 1878 por Don José Arrechabala y Aldama y llevaba el nombre de La Vizcaya. Más de 600 000 metros cuadrados abarcaban las proyecciones de la empresa en ese entonces.</p><p>El 15 de marzo de 1883 muere el señor Arrechabala jefe de la familia, pasando entonces a ser dirigida por su hijo político, y la empresa adoptó el nombre de Don José Arrechabala S.A., en memoria a la persona que luchó desde un principio por su fructífero desarrollo. La dirección continuó bajo el mando familiar durante muchos años con grandes ganancias.</p><p>Con el transcurso del tiempo, esta industria se engrandeció bajo el talento e iniciativa de su creador y demás familiares y reportó importantes ganancias para la familia. Superó en el tiempo los obstáculos que fueron aconteciendo y que afectaron sus producciones, por ejemplo, a los 10 años de fundada un feroz huracán arrasó con la costa norte de la isla y en Cárdenas hubo muchas pérdidas. Pueden contarse también los quebrantos de las guerras por la independencia de Cuba. Posteriormente las dos guerras mundiales que acarrearon grandes crisis económicas.</p><p>Cuando triunfa la Revolución cubana esta Empresa pasa a manos del pueblo con el nombre de José Antonio Echeverría y en el año 1993, cuando se funda la Corporación Cuba Ron S.A. forma parte de sus entidades.</p>`;
  }

}
