import { Component, OnInit } from '@angular/core';
import { ToneleriaAppPage } from './toneleria-app-page';
import { MenuController } from '@ionic/angular';
import { GalleryImage } from 'src/app/global/gallery-image';

@Component({
  selector: 'sp-toneleria',
  template: '<sp-page-type-one [menus]="menus" [submenus]="submenus" [textWidth]="textWidth" [images]="images" [textContent]="textContent"></sp-page-type-one>',
})
export class ToneleriaPage extends ToneleriaAppPage implements OnInit {

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
      new GalleryImage(1, `assets/${this.routeBasePath}/barriles.jpg`, 'Toneles de Roble Blanco')
    ];
    this.textWidth = 68;
// tslint:disable-next-line: max-line-length
    this.textContent = `<h1>Del ron al barril</h1><p>El roble es un árbol a lo largo de la historia valorado por el hombre, en especial en Europa occidental. Inicialmente un símbolo de longevidad y sabiduría, luego objeto de culto y ritos religiosos, por último fuente de alimentación para los animales, de construcción y calor para el hombre.</p><p>Actualmente el roble es una especie forestal noble y cara. Entre las actividades artesanales que se desarrollan entorno a esta madera, la fabricación de toneles ha sido la que probablemente ha sabido reservar su lugar distinguido y justifica su carácter indispensable para el envejecimiento de los grandes vinos y aguardientes.</p><p>En efecto la actividad tonelera se ha preocupado de fijar y transmitir las mejores condiciones de selección y preparación de maderas para la construcción de barricas y otros contenedores. La madera reemplaza a los antiguos recipientes de conservación y transporte del vino, al inicio se construyeron contenedores de diversas formas y tipos de madera, entre las más destacadas el roble, las acacias, castaño y en general todas aquellas que dieran seguridad de estanqueidad.</p><p>Claramente hoy en día queda de manifiesto que la especie que da valor agregado a los vinos y aguardientes es el roble, que es una fuente rica en compuestos fenólicos extractibles (Lignina, elagitaninos, ácidos fenólicos, cumarinas) y aromáticos (whisky-lactonas, eugenol, vainillina, etc).</p><p> Género, morfología y composición química del roble</p><p>Género: Pertenece al género de los QUERCUS. El subgénero Euquercus es el propio de la zona templadas del hemisferio norte. Una sección del subgénero Euquercus incluye la especie de interés económico explotado en las tonelerías.</p><p>Quercus pedunculata = Roble pedunculado. Se encuentra en toda la Europa central, hasta los Urales y caucáseo. En Francia es domínate en el lado occidental del Macizo central.</p><p>Quercus sessilis = Quercus petraea = Roble sessile. Es de menor expación que el pedunculado, quedando limitado al este por Lituania y Bielorrusia. En Francia es dominante en la mitad norte y centro.</p><p>Quercus alba = Roble blanco. Característico de Estados Unidos. Se extiende por la cordillera occidental de los Apalaches y en el medio oeste por la cordillera de los Ozarks. La explotación se concentra en Missouri, Kentucky y Tennessee.</p><p>Morfología: La morfología de esta madera está constituida por diferentes tejidos organizados tridimensionalmente: elementos conductores de savia (vasos, elementos de sostén: fibras y elementos de almacenamiento: parénquimas y radios).</p><p>Composición química: según la composición química, globalmente se clasifican en macromoléculas constitutivas de paredes celulares y compuestos extractibles. Las macromoléculas dominantes en la madera son: celulosa, hemicelulosa y lignina. Los compuestos extractibles pertenecen a la familia de los polifenoles; lignanas, cumarinas, ácidos fenólicos y taninos. Desde el punto de vista de las barricas para la crianza de los productos de calidad, los taninos y las sustancias odorantes son los componentes más importantes.</p><h1>De la tala al barril</h1><p>En lo que respecta a la tala de estos nobles árboles, se debe tener mucha paciencia, en el caso del roble europeo, las datas van de los 150 a 200 años, mientras que el roble blanco (roble americano), van de los 80 a 100 años. Este tiempo sin duda es un aliado para que los árboles contengan el potencial de compuestos químicos que serán aportados a los vinos y aguardientes.</p><p>Tratamientos a las maderas para fabricar un tonel</p><p>Después de la tala de los árboles continúa el camino antes que las manos de los artesanos trasforme la madera en un tonel. El Secado y curado de las maderas es un proceso que dependiendo de la aplicación, va de 12 a 36 meses, tiempo en el cual la madera es dispuesta al aire libre, y la influencia del sol, la lluvia, el aire y la formación de una microflora (hongos principalmente), que inciden el los resultados organolépticos que se obtendrán. El domado y tostado del barril es la etapa en que el barril se debe someter a un proceso térmico.</p><p>El domado que es la primera etapa se hace con el fin de ablandar la madera y quede maleable para dar la forma curva a las duelas que componen el cuerpo del tonel. Luego es necesario someter el barril a un tostado a fuego vivo, que es el responsable de degradar los compuestos químicos del roble y dejarlos libres para ser extraídos por los caldos que se envejecerán en él.</p><p>Esquemáticamente, los compuestos más significativos y los aromas asociados, que se desarrollan con el tostado son los siguientes:</p><table><tr><th >Molécula aromática</th><th>Nota aromática</th></tr><tr><td>Furfural</td><td>Almendras</td></tr><tr><td>Metil-furfural</td><td>Almendras tostadas</td></tr><tr><td>Maltol</td><td>Caramelo</td></tr><tr><td>Iso-Maltol</td><td>Pan tostado</td></tr><tr><td>Piridina</td><td>Chocolate</td></tr><tr><td>Pirazina</td><td>Pan fresco</td></tr><tr><td>Guayacol</td><td>Ahumado</td></tr><tr><td>Eugenol</td><td>Especias</td></tr><tr><td>Vainillina</td><td>Vainilla</td></tr><tr><td>Cis-Metil-octo-lactona</td><td>Roble y coco</td></tr></table><p>Sin duda que para que un roble se convierta en tonel hay un largo camino, hecho que nos hace pensar que un barril debe seguir dando frutos después de cumplir su tarea de cuatro o cinco años con el vino, ya que pueden seguir aportando cualidades al ron o al whisky dándole prolongación al noble material y a las manos del artesano que fabricó el tonel.</p>`;
  }

}
