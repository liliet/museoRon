import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AguardienteAppPage } from './aguardiente-app-page';
import { GalleryImage } from 'src/app/global/gallery-image';

@Component({
  selector: 'sp-aguardiente',
  template: '<sp-page-type-one [menus]="menus" [submenus]="submenus" [images]="images" [textContent]="textContent" [textWidth]="textWidth" ></sp-page-type-one>',
})
export class AguardientePage extends AguardienteAppPage implements OnInit {

  constructor(
    menuCtrl: MenuController
  ) {
    super(menuCtrl);
   }

  ngOnInit() {
  }

  inicialize() {
    super.inicialize();
    this.submenuSelectId = 1;
    this.selectPageMenu();
    this.images = [
      new GalleryImage(1, `/assets${this.routeBasePath}/aguardiente1.jpg`, 'Primer alambique de Bacardí')
    ];
    this.textWidth = 68;
// tslint:disable-next-line: max-line-length
    this.textContent = `<p>Según el diccionario, aguardiente es una destilación alcohólica que se obtiene por destilación del vino o de determinados cereales, frutas o semillas; como el centeno, la cebada, las bayas de enebro, la cereza, el anís, entre otras.</p><p>Los aguardientes: definición, origen y tipos. ¿Qué son los aguardientes?</p><p>Son todas las bebidas alcohólicas de alta graduación, secas o aromáticas obtenidas por destilación de mostos o pastas fermentadas, pueden ser de granos, caña, papa, etcétera. Esta palabra que deriva del término latín "agua ardens" con el que designaban al alcohol obtenido por medio de la destilación.</p><p>Origen de los aguardientes</p><p>Las referencias indican que se difundió por Persia, Siria, Egipto y Sicilia durante la época de Alejandro el Magno que, en aquel entonces, era rey de Macedonia, durante la conquista y organización del Imperio Persa en 327 A.C. aproximadamente. La expansión de sus dominios abrió canales comerciales que facilitaron la difusión e influencia de artículos, especies y costumbres entre Asia Meridional, sur y sudeste de Europa y el Norte de África.</p><p>Solamente después del siglo XV la caña de azúcar pasó a ser producida en gran escala, convirtiéndose bajo la óptica comercial en un producto importante y atractivo para el mercado mundial. Fue introducida en Portugal a través de la Isla de La Madera en el mismo siglo.</p><p>En el Brasil, la caña de azúcar empezó a ser cultivada a partir de la tercera década del siglo XVI. A pesar de estar siempre en segundo plano, la caña de azúcar nunca dejó de ser plantada.</p>`;
  }

}
