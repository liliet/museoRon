import { Component, OnInit } from '@angular/core';
import { ToneleriaAppPage } from '../toneleria-app-page';
import { MenuController } from '@ionic/angular';
import { GalleryImage } from 'src/app/global/gallery-image';

@Component({
  selector: 'sp-tonelero',
  template: '<sp-page-type-one [menus]="menus" [submenus]="submenus" [textWidth]="textWidth" [images]="images" [textContent]="textContent"></sp-page-type-one>'
})
export class ToneleroPage extends ToneleriaAppPage implements OnInit {

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
      new GalleryImage(1, `assets${this.routeBasePath}/tonelero.jpg`, 'Toneles de Roble Blanco')
    ];
    this.textWidth = 68;
    // tslint:disable-next-line: max-line-length
    this.textContent = `<h1>La labor del tonelero: entrevista a Raúl Segura Rodríguez</h1><p>"Al barril hay que darle donde pide" y "no se trata solo de reparar el barril para que no se salga el ron, sino también para que se vea bonito". Estas son expresiones de Raúl Segura Rodríguez, tonelero retirado de la Ronera de Santiago de Cuba y un paradigma viviente de compromiso, sentido de pertenencia y laboriosidad.</p><p>Segura, de 78 años de edad y con un historial laboral de 48 años dentro de la industria ronera, se ha mantenido - aún después de su retiro en 1998- asistiendo diariamente al taller de tonelería trasmitiendo sus conocimientos, sus experiencias y su amor por el trabajo y por el barril. "El tonelero que le gusta su trabajo, llega a querer al barril, lo cuida, lo protege, le duele que algo le pase". Este trabajador tan orgulloso de su oficio y al que todos lo califican de maestro tonelero, cuenta con toda una herencia y una cultura propias de TONELERO. "Mi abuelo fue tonelero, trabajó aquí cuando Bacardí, luego mi padre y después le seguimos mi hermano y yo y todos como toneleros". La dedicación y el saber de este maestro se deben a la formación de varios grupos de toneleros, estableciéndose en la Ronera de Santiago de Cuba varios cursos de formación de toneleros que han mantenido la continuidad de esta actividad tanto en la Ronera de Santiago de Cuba como en el territorio.</p><p>A decir del Maestro Ronero Tranquilino Palencia definiendo al Barril "...es el cofre que guarda nuestro gran tesoro que es el Genuino Ron Cubano”. Entonces podemos afirmar que con trabajadores tan celosos de este magnífico cofre; como el querido Segura, nuestro futuro está garantizado.</p>`;
  }
}
