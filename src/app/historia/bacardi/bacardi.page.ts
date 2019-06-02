import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/global/menu-page/menu-item';
import { GalleryImage } from 'src/app/global/gallery-image';
import { MenuController } from '@ionic/angular';
import { AppPageOne } from 'src/app/global/app-page-one';

@Component({
  selector: 'sp-bacardi',
  templateUrl: './bacardi.page.html',
  styleUrls: ['./bacardi.page.scss'],
})
export class BacardiPage extends AppPageOne implements OnInit {

  constructor(
    menuCtrl: MenuController
  ) {
    super(menuCtrl);
  }

  ngOnInit() {
  }

  inicialize() {
    this.menus = [
      new MenuItem(1, 'Historia del Ron Cubano', '/historia'),
      new MenuItem(2, 'Bacardí', '#', true),
      new MenuItem(3, 'Nave Don Pancho', '#'),
      new MenuItem(4, 'Rones Antiguos de Cuba', '#')
    ];
    this.submenus = [
      new MenuItem(1, 'Historia de la Marca', '#', true),
      new MenuItem(2, 'Su creador', '#'),
      new MenuItem(3, 'Santiago y Los Bacardí', '#')
    ];
    const imgsBacardiBasePath = `assets/historia/bacardi/`;
    this.images = [
      new GalleryImage(1, `${imgsBacardiBasePath}marca-1862.png`, ''),
      new GalleryImage(2, `${imgsBacardiBasePath}evolucion.png`, 'Evolución de la marca')
    ];
// tslint:disable-next-line: max-line-length
    this.textContent = `<p>Bacardí es un apellido usado como marca comercial de la compañía de bebidas alcohólicas fundada por Don Facundo Bacardí Massó, un emigrante de Sitges (provincia de Barcelona, Cataluña, España ). Esta empresa fue fundada en Santiago de Cuba en 1862 como es conocido mundialmente. Actualmente, la sede internacional de esta empresa está en Bermudas, pero también tiene oficinas en Miami y en Puerto Rico.</p><p>En la década de los 60, la compañía trasladó sus operaciones a Puerto Rico. Tiene la destilería de ron más grande del mundo. Aunque la mayoría de las operaciones todavía se centran en Puerto Rico, las oficinas centrales (y la sede social) de la corporación se ubican en las Bermudas donde se registró como Bacardi Limited.</p><p>Fue adquirida en 1993 por la italiana Martini & Rossi y en 2005, el ron Bacardi era el segundo licor más vendido en el mundo. Además del famoso ron, la corporación posee las marcas del vodka Grey Goose, el whisky Dewar´s y la ginebra Bombay Sapphire, entre otros.</p><p>Continúa siendo una corporación familiar y privada. En 2004, los beneficios de la compañía fueron aproximadamente de 3300 millones de dólares estadounidenses.</p><p>Bacardí en Puerto Rico</p><p>En 1936, Bacardí estableció una destilería en Puerto Rico para evitar el pago de aranceles sobre el ron que enviaba a Estados Unidos. Su destilería, ubicada al otro lado de El Morro, al otro lado de la bahía de San Juan, en el pueblo de Cataño.</p><p>A las instalaciones de Bacardí se puede llegar por ferry, y en el lugar se puede aprender sobre la producción del ron, degustar diferentes variedades del producto, y disfrutar de bellos jardines y bonitas vistas. En la destilería se producen unos 100 mil galones de ron.</p>`;
  }

}
