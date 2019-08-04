import { Component, OnInit } from '@angular/core';
import { FigurasAppPage } from './../figuras-app-page';
import { MenuController } from '@ionic/angular';
import { GalleryImage } from 'src/app/global/gallery-image';

@Component({
  selector: 'sp-arturo',
  template: '<sp-page-type-one [menus]="menus" [submenus]="submenus" [textWidth]="textWidth" [images]="images" [textContent]="textContent"></sp-page-type-one>',
})
export class ArturoPage extends FigurasAppPage implements OnInit {

  constructor(
    menuCtrl: MenuController
  ) {
    super(menuCtrl);
   }

  ngOnInit() {
  }

  inicialize() {
    super.inicialize();
    this.submenuSelectId = 2;
    this.selectPageMenu();
    this.images = [
      new GalleryImage(1, `assets${this.routeBasePath}/arturo.jpg`, 'Arturo García Núñez')
    ];
    this.textWidth = 68;
    // tslint:disable-next-line: max-line-length
    this.textContent = `<p>Arturo García Núñez nació en Santiago de Cuba en 1938. Se graduó de Contador Público en la Escuela Profesional de Comercio y comienza a trabajar en 1958 en las oficinas centrales de la Compañía Ron Bacardí con sus antiguos dueños.</p><p>En 1960 en virtud de la “Ley de Nacionalización” la fábrica pasó a ser propiedad estatal, pero se mantuvo trabajando en la misma.</p><p>En 1966 se creó la “Delegación de Bebidas” y se crea la Empresa de Bebidas y trabaja en el Departamento de abastecimiento donde permaneció hasta 1969 que se crea la Empresa de Bebidas y Licores desempeñándose como programador de las actividades de Licores y Vinos.</p><p>En 1977 se designa como reserva de cuadro, trabajando con el jefe de producción de ese momento (Humberto Corona), cargo que ocupó a partir de 1980, responsabilizado en velar por la cantidad y calidad de los rones que se fabricaban en la industria.</p><p>Con su peculiar estilo de trabajo, fue capaz de llevar el control de los almacenes centrales de la Empresa de Bebidas, así como conocer todos los secretos de la producción para poder hacer los pedidos, ya que hasta ese momento no había normas para el control de la calidad, esto se realizaba de forma empírica.</p><p>En 1993 cuando se funda la Corporación Cuba Ron SA, ocupó la plaza de Especialista en la Gerencia de Operaciones.</p><p>El 3 de enero de 2008 muere en plena labor y por su meritoria trayectoria se decidió colocar una tarja conmemorativa a la entrada de la nave de añejamiento con su nombre impreso.</p>`;
  }

}
