import { Component, OnInit } from '@angular/core';
import { GalleryImage } from 'src/app/global/gallery-image';
import { MenuController } from '@ionic/angular';
import { BacardiAppPage } from './barcardi-app-page';

@Component({
  selector: 'sp-bacardi',
  template: '<sp-page-type-one [menus]="menus" [submenus]="submenus" [textWidth]="textWidth" [images]="images" [textContent]="textContent"></sp-page-type-one>'
})
export class BacardiPage extends BacardiAppPage implements OnInit {

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
      new GalleryImage(1, `assets${this.routeBasePath}/marca-1862.png`, ''),
      new GalleryImage(2, `assets${this.routeBasePath}/evolucion.png`, 'Evolución de la marca', 'evolución')
    ];
// tslint:disable-next-line: max-line-length
    this.textContent = `<p>Bacardí es un apellido usado como marca comercial de la compañía de bebidas alcohólicas fundada por Don Facundo Bacardí Massó, un emigrante de Sitges (provincia de Barcelona, Cataluña, España ). Esta empresa fue fundada en Santiago de Cuba en 1862 como es conocido mundialmente. Actualmente, la sede internacional de esta empresa está en Bermudas, pero también tiene oficinas en Miami y en Puerto Rico.</p><p>En la década de los 60, la compañía trasladó sus operaciones a Puerto Rico. Tiene la destilería de ron más grande del mundo. Aunque la mayoría de las operaciones todavía se centran en Puerto Rico, las oficinas centrales (y la sede social) de la corporación se ubican en las Bermudas donde se registró como Bacardi Limited.</p><p>Fue adquirida en 1993 por la italiana Martini & Rossi y en 2005, el ron Bacardi era el segundo licor más vendido en el mundo. Además del famoso ron, la corporación posee las marcas del vodka Grey Goose, el whisky Dewar´s y la ginebra Bombay Sapphire, entre otros.</p><p>Continúa siendo una corporación familiar y privada.</p><p>Bacardí en Puerto Rico</p><p>En 1936, Bacardí estableció una destilería en Puerto Rico para evitar el pago de aranceles sobre el ron que enviaba a Estados Unidos. Su destilería, ubicada al otro lado de El Morro, al otro lado de la bahía de San Juan, en el pueblo de Cataño.</p><p>A las instalaciones de Bacardí se puede llegar por ferry, y en el lugar se puede aprender sobre la producción del ron, degustar diferentes variedades del producto, y disfrutar de bellos jardines y bonitas vistas. En la destilería se producen unos 100 mil galones de ronpor día.</p><p>Bacardí es una de las mayores empresas de Puerto Rico. Cuando se inauguró la Casa Bacardí, un museo dedicado a la empresa, Ferdinand Mercado, secretario de Puerto Rico, comentó que “una de las primeras cosas que preguntan los turistas al llegar a Puerto Rico, es ‘¿Dónde está la fábrica de Bacardí?”.</p><p>En Casa Bacardí, los visitantes son guiados por siete salas donde se puede aprender sobre la historia de la familia Bacardí, la empresa, la producción del ron, los buqués y sabores únicos del famoso licor.</p><p>Su símbolo</p><p>Según la historia familiar, una colonia de murciélagos habitaba en las vigas de la destilería original en Santiago de Cuba. En busca de una marca para el nuevo ron, la esposa de Don Facundo, Doña Amalia, sugirió usar un murciélago como una imagen inconfundible para el producto.</p><p>Al entrar en la primera destilería de Bacardí, Doña Amalia observó que en el techo habitaba una colonia de murciélagos. Los murciélagos tenían un gran significado en el mundo de Doña Amalia. Amante de las artes, sabía que para los Tainos, los ya desaparecidos pobladores originarios de Cuba, los murciélagos eran poseedores de todos los bienes culturales y sabía que entre la población local estaba extendida la creencia de que los murciélagos traían salud, fortuna y unidad familiar. Su propuesta era también realista y pragmática. Debido al alto nivel de analfabetismo en el siglo XIX, un producto necesitaba un logotipo -una marca de fábrica- fácilmente recordable para poder ser identificado y venderse.</p><p>Muy pronto se difundieron por toda Cuba las noticias sobre los nuevos rones madurados con carbón vegetal de Don Facundo: los rones cuidadosamente envejecidos, generosos, oscuros, gratos al paladar y un nuevo y milagroso ron ligero que era suave, civilizado y sorprendentemente bebible. La mitología del murciélago también ayudo. La noticia del murciélago de Don Facundo se propago paralelamente a la fama de sus rones suaves. El murciélago -como dieron fe los cronistas locales- confirió a su ron buena fortuna y poderes mágicos añadidos.</p><p>Hoy el murciélago de Bacardí es una figura bienvenida en los más de 170 países del mundo donde se disfruta el ron Bacardí.</p>`;
  }

}
