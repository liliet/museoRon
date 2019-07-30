import { Component, OnInit } from '@angular/core';
import { RonerasAppPage } from '../roneras-app-page';
import { MenuController } from '@ionic/angular';
import { GalleryImage } from 'src/app/global/gallery-image';

@Component({
  selector: 'sp-santa-cruz',
  template: '<sp-page-type-one [menus]="menus" [textWidth]="textWidth" [images]="images" [textContent]="textContent"></sp-page-type-one>'
})
export class SantaCruzPage extends RonerasAppPage implements OnInit {

  constructor(
    menuCtrl: MenuController
  ) {
    super(menuCtrl);
  }

  ngOnInit() {
  }

  inicialize() {
    super.inicialize();
    this.menuSelectId = 4;
    this.selectPageMenu();
    this.images = [
      new GalleryImage(1, `assets/${this.routeBasePath}/santa_cruz.jpg`, '')
    ];
    this.textWidth = 68;
    // tslint:disable-next-line: max-line-length
    this.textContent = `<p>La Ronera Santa Cruz es una de las entidades que integra la Corporación Cuba Ron S.A que pertenece al Ministerio de la Industria Alimenticia de Cuba. Se encuentra ubicada en el Municipio Santa Cruz del Norte, en provincia de Mayabeque. Limita al norte con el Océano Atlántico, al oeste con la bahía de Santa Cruz, al este con la bahía Chipiona y al sur con la carretera Vía Blanca. Posee un área total de 35,1 hectáreas y un área techada de 73 788 m².</p><p>Su construcción data del año 1919. En sus inicios era sólo una destilería para la producción de alcohol y aguardiente. La rudimentaria fábrica se edificó en el entorno de una aldea, entre ranchos de pescadores que disfrutaban los beneficios del mar, clima que también es propicio para la producción cañera y que favorece la obtención de derivados de alta calidad.</p><p>Hacia 1889 aquella pequeña instalación intensificó su comercio y notoriedad. Por ello la localidad llegó a ser nombrada Ayuntamiento Santa Cruz del Norte, y la destilería asume dicho nombre.</p><p>Más cercanos en el tiempo, específicamente en la década de los años 70, se realiza una reconstrucción capital de la añeja construcción, en la cual se remodela la vieja fábrica y se construyen nuevas instalaciones: otra destilería, una planta productora y embotelladora de licores, naves de añejamiento, planta de producción de levadura torula, planta de fabricación de rones, embotellado de rones, bloque energético y área de oficinas.</p><p>Cuando en 1993 se crea la Corporación Cuba Ron S.A, la Ronera Santa Cruz que hasta ese momento había pertenecido a la Empresa de Bebidas y Licores del Ministerio de la Industria Alimenticia, se integra a su sistema corporativo.  En ella se producen los rones de la marca Havana Club, producto líder de la Corporación.</p><p>La entidad cuenta además de su Dirección General y sus 3 áreas de regulación y control, (Economía, Fuerza de trabajo y Operaciones) con 8 UEB:<ul><li>	Destilería</li><li>	Ronera</li><li>	Añejamiento y Tonelería</li><li>	Energético</li><li>	Servicios Generales</li><li>	Mantenimiento </li><li>	Ventas</li><li>	Abastecimiento</li></ul></p><p>El Objeto social de la Ronera Santa Cruz se adscribe al aprobado para la Corporación Cuba Ron S.A.<br />-	Producir y comercializar de forma mayorista rones y otras bebidas alcohólicas de distintos tipos y calidades, aguardientes, alcoholes y sus derivados, en moneda nacional y divisas.<br />-	Importar y exportar según nomenclatura aprobada por el Ministerio del Comercio Exterior, en divisas.<br />-	Comercializar de forma mayorista, en moneda nacional y en divisas los productos importados, según la nomenclatura que para este fin aprueben los Ministerios del Comercio Exterior e Interior.<br />-	Dirigir, operar y controlar el Museo del Ron de Santiago de Cuba.<br />-	Vender las entradas del Museo del Ron de Santiago de Cuba, en moneda nacional a la población y en moneda libremente convertible a extranjeros.<br />-	Comercializar de forma mayorista bebidas no alcohólicas, así como artículos promocionales vinculados a las marcas que comercializa para complementar el servicio que brinda a las instituciones usuarias, en moneda nacional y divisas, según nomenclatura aprobada por el Ministerio del Comercio Interior.<br />-	Ofrecer servicios de suministro de materias primas, vapor y agua tratada a las empresas mixtas que radican en sus instalaciones, en divisas.<br />-	Prestar servicios de suministro de fuerza de trabajo como entidad empleadora a las asociaciones económicas internacionales en las que participa, con la autorización correspondiente del Ministerio del Trabajo y Seguridad Social, en divisas.</p><h1>Misión</h1><p>La Ronera Santa Cruz perteneciente a la Corporación Cuba Ron S.A produce Rones, Licores, Aguardiente y CO2, con vistas a satisfacer la demanda de los clientes, garantizando la calidad, inocuidad, desempeño ambiental de sus producciones y la disminución de los riesgos laborales, utilizando avances tecnológicos combinados con la tradición en la elaboración del mejor Ron Cubano.</p><h1>Visión</h1><p>Alcanzar los niveles de producción que satisfagan los pronósticos de ventas, proyectadas hasta el 2013 logrando una alta eficiencia económica a partir  de la optimización del consumo de materias primas fundamentales y auxiliares, portadores energéticos, la preparación e instrucción del personal, garantizando el mantenimiento del Sistema de Gestión de la Calidad e Inocuidad y la implantación del Sistema de Gestión Ambiental, Gestión de la Innovación y gestión de la Seguridad y Salud de Trabajadores.</p><h1>Cartera de Productos</h1><p>La Cartera incluye productos y servicios.</p><h1>Productos</h1><p>Rones Havana Club<ul><li> Añejo blanco 700 ml</li><li>	Añejo blanco 500 ml</li><li> Añejo blanco 1000 ml</li><li> Añejo blanco 1.14 ml</li><li> Añejo blanco 750 ml</li><li>	Añejo 3 años 700 ml</li><li>	Añejo 3 años 750 ml</li><li> Añejo especial 500 ml</li><li>	Añejo especial 500 ml</li><li> Añejo reserva 1.14 ml</li><li> Añejo blanco 700 ml</li><li> Añejo blanco 500 ml</li><li> Añejo blanco 1000 ml</li><li> Añejo blanco 1.14 ml</li></ul></p><h1>Licores</h1><ul><li> Licor de plátano</li><li> Licor de piña</li><li>	Licor de menta</li><li>	Licor de cacao</li><li>	Licor de café</li><li> Licor marrasquino</li><li>	Licor o triple sec</li><li>	Licor azul curasao</li><li>	Licor granadina</li></ul><h1>Otros Productos</h1><ul><li>Caldo para ron 34</li><li>Aguardiente fresco</li><li>Co2</li><li>Ron base 7 </li><li>Ron base 7 b</li></ul><h1>Servicios</h1><ul><li>Agua tratada.</li><li>Vapor</li></ul>`;
  }

}
