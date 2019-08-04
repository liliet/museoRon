import { Component, OnInit } from '@angular/core';
import { RonerasAppPage } from '../roneras-app-page';
import { MenuController } from '@ionic/angular';
import { GalleryImage } from 'src/app/global/gallery-image';

@Component({
  selector: 'sp-cubaron',
  template: '<sp-page-type-one [menus]="menus" [textWidth]="textWidth" [images]="images" [textContent]="textContent"></sp-page-type-one>'
})
export class CubaronPage extends RonerasAppPage implements OnInit {

  constructor(
    menuCtrl: MenuController
  ) {
    super(menuCtrl);
  }

  ngOnInit() {
  }

  inicialize() {
    super.inicialize();
    this.menuSelectId = 1;
    this.selectPageMenu();
    /* this.images = [
      new GalleryImage(1, `assets${this.routeBasePath}/santiago_cuba.jpg`, '')
    ]; */
    this.textWidth = 68;
    // tslint:disable-next-line: max-line-length
    this.textContent = `<h1>¿Qué es Cuba Ron S.A?</h1><p>Con el objetivo de potenciar las exportaciones de Ron Cubano y aumentar el ingreso de divisas al país. La corporación se creó a partir de las fábricas de ron más importantes del país (Santiago de Cuba, Santa Cruz del Norte y Cárdenas) sumándose a esta lista la Ronera Central en el municipio Santo Domingo provincia Villa Clara.</p><p><b>II. Quiénes somos</b></p><p>La Corporación Cuba Ron S.A. es una entidad cubana que se dedica a producir y comercializar alcoholes, aguardientes, rones y vinos. Fue constituida oficialmente el 8 de noviembre de 1993, con el objetivo de unificar las principales y más tradicionales fábricas de ron cubano. Está constituida por las siguientes entidades:</p><p><b>Ronera Santa Cruz:</b> Ubicada en el municipio Santa Cruz del Norte de Provincia Habana. Cuenta además de su Dirección General y sus 3 áreas de regulación y control (economía, fuerza de trabajo y operaciones), con 8 UEB: destilería, ronera, añejamiento y tonelería, energético, servicios generales, mantenimiento, ventas y abastecimiento.</p><p><b>Ronera Cárdenas:</b> Ubicada en el municipio Cárdenas de la provincia de Matanzas. Cuenta con una Dirección General, 3 áreas de regulación y control (economía, fuerza de trabajo y operaciones), 4 UEB, destilería, ronera, mantenimiento e inversiones, comercial y la agencia de distribución.</p><p><b>Ronera Villa Clara:</b> Ubicada en el poblado de Manacas, Municipio Santo Domingo de la provincia Villa Clara. Cuenta con una Dirección General, sus 3 áreas de regulación y control (economía, fuerza de trabajo y operaciones) y con 3 UEB: destilería, ronera y comercial y una agencia de distribución en Ciego de Ávila.</p><p><b>Ronera Santiago de Cuba:</b> Ubicada en el municipio Santiago de Cuba de la provincia Santiago de Cuba. Cuenta con una Dirección General, 3 áreas de regulación y control (economía, fuerza de trabajo y operaciones), con 5 UEB: destilería, ronera, añejamiento y tonelería, servicios generales, comercial y las agencias de distribución ubicadas en Holguín y Santiago de Cuba. Además de un Museo de Ron en la ciudad de Santiago de Cuba.</p><p><b>Comercializadora Cuba Ron:</b> Ubicada en Ciudad de la Habana, encargada de comercializar rones y vinos tanto en el mercado nacional como en el internacional.  Cuenta con una Dirección General, 2 áreas de regulación y control (economía y fuerza de trabajo), una Dirección Comercial, una de Logística y una Agencia de Distribución en Ciudad de la Habana.</p><p><b>Bodegas San Cristóbal:</b> Está ubicada en el Municipio San Cristóbal de la provincia Pinar del Río. Se dedica a la producción de vinos.</p><p>A Cuba Ron también se encuentran asociadas las siguientes Empresas Mixtas:</p><p><b>Havana Club Internacional S.A (HCI):</b> Es una empresa mixta fundada en el año 1993 en asociación con el Grupo francés Pernod Ricard. Ubicada su oficina central en Ciudad de la Habana en el municipio Plaza. Cuenta con un Museo de Ron, ubicado en la Habana Vieja y una fábrica de Ron, en el Municipio San José de las Lajas provincia La Habana. Tiene además Direcciones Territoriales de venta y distribución en Pinar del Río, La Habana, Cienfuegos, Camagüey, Holguín y Santiago de Cuba.  Produce los rones oscuros de Havana Club y comercializa toda su gama en el mercado nacional e internacional.</p><p><b>Bebidas del Caribe S.A. (BECASA):</b> Es una empresa mixta creada en el año 1996, cuenta con una fábrica ubicada en Santa Cruz del Norte. Se dedica a la producción y comercialización de refrescos y aguas en el mercado nacional. Está asociada con la empresa mexicana Perfil Corporativo S.A. perteneciente al Grupo FEMSA.</p><p><b>Levaduras y Fermentos S.A. (LEFERSA):</b> Se encuentra ubicada en el Municipio Santa Cruz del Norte. Produce y comercializa en el mercado nacional levadura seca en asociación con la Empresa PANIBERICA de Levadura S.A de España, perteneciente al Grupo Lesaffre.</p><p>La condición de Empresa en Perfeccionamiento Empresarial se le otorgó a la Corporación Cuba Ron S.A en el año 2000 y a partir de esa fecha, ha continuado su fortalecimiento y desarrollo mediante la implantación de todos los sistemas que lo integran bajo el principio de la mejora continua.</p>`;
  }

}
