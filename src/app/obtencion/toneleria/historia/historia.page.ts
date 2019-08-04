import { Component, OnInit } from '@angular/core';
import { ToneleriaAppPage } from './../toneleria-app-page';
import { MenuController } from '@ionic/angular';
import { GalleryImage } from 'src/app/global/gallery-image';

@Component({
  selector: 'sp-historia',
  template: '<sp-page-type-two [menus]="menus" [submenus]="submenus" [images]="images" [spaceBetween]="spaceBetween" [slidesPerView]="slidesPerView" [likeSteps]="likeSteps"></sp-page-type-two>'
})
export class HistoriaPage extends ToneleriaAppPage implements OnInit {

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
    this.spaceBetween = 150;
    this.slidesPerView = 2.5;
    this.likeSteps = true;
    this.images = [
// tslint:disable-next-line: max-line-length
      new GalleryImage(1, `assets${this.routeBasePath}/tonel1.png`, 'Esta importante actividad la desarrollan en Cuba Ron S.A. los toneleros quienes se encargan de mantener en perfecto estado los barriles que tan celosamente se guardan en nuestras bodegas.'),
// tslint:disable-next-line: max-line-length
      new GalleryImage(2, `assets${this.routeBasePath}/tonel2.png`, 'El origen de la fabricación de estos recipientes de madera hay que atribuírselo a los celtas. El hábitat de estos pueblos, ubicado entre bosques, hizo de la madera la principal materia prima de sus actividades.<br />Durante más de 2.000 años, los barriles sirvieron de envase a distintos productos, tanto líquidos(vino, cerveza, sidra, agua), como sólidos(grano, salazones, manteca e incluso clavos).'),
// tslint:disable-next-line: max-line-length
      new GalleryImage(3, `assets${this.routeBasePath}/tonel3.png`, 'Construir y reparar un tonel de forma artesanal constituye un arte porque depende en gran medida de la habilidad  del operario y de las herramientas de que se disponga para su fabricación.<br />Hay algunos detalles de su construcción que queremos darles a conocer, para ampliar nuestra cultura.'),
// tslint:disable-next-line: max-line-length
      new GalleryImage(4, `assets${this.routeBasePath}/tonel4.png`, 'Por ejemplo para lograr esa forma cónica es necesario disminuir la anchura de las duelas en sus dos extremidades, estas posteriormente se ensamblan mediante un aro de hierro atornillado que las mantiene en su lugar, a la vez se colocan en cada uno de sus extremos dos aros de madera.<br />A las duelas es necesario hacerle una curvatura que se logra mediante el calor.<br />También sobre los extremos de estas se realizan unas ranuras que permiten acoplar posteriormente el fondo de la pieza.'),
// tslint:disable-next-line: max-line-length
      new GalleryImage(5, `assets${this.routeBasePath}/tonel5.png`, 'Cuando ya el tonel está armado se le hace un agujero por el cual se introduce el líquido al interior. Posteriormente se cierra con un tapón de madera.<br />El proceso parece sencillo pero no lo es.'),
// tslint:disable-next-line: max-line-length
      new GalleryImage(6, `assets${this.routeBasePath}/tonel6.png`, 'Por sus apreciadas características aromáticas los fabricantes de vino continúan utilizando el barril de roble para añejar los vinos.<br />Específicamente los de roble blanco son los que emplea la Corporación Cuba Ron S.A.en el proceso de añejamiento  del ron.')
    ];
  }

}
