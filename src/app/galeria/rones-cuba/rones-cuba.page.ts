import { Component, OnInit } from '@angular/core';
import { GaleriaAppPage } from '../galeria-app-page';
import { MenuController } from '@ionic/angular';
import { MenuItem } from 'src/app/global/menu-page/menu-item';
import { GalleryImage } from 'src/app/global/gallery-image';

@Component({
  selector: 'sp-rones-cuba',
  template: '<sp-page-type-three [menus]="menus" [submenus]="submenus" [images]="images" ></sp-page-type-three>',
})
export class RonesCubaPage extends GaleriaAppPage implements OnInit {

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
    this.submenus = [
      new MenuItem(1, 'Etiquetas', `${this.routeBasePath}/rones-cuba`),
      new MenuItem(2, 'Prensa', `${this.routeBasePath}/rones-cuba/prensa`)
    ];
    this.submenuSelectId = 1;
    this.selectPageMenu();
    this.routeBasePath = `${this.routeBasePath}/rones/etiquetas`;
    this.images = [
      new GalleryImage(1, `assets${this.routeBasePath}/palau3.jpg`, 'Palau', 'zoom'),
      new GalleryImage(2, `assets${this.routeBasePath}/palau8.jpg`, 'Palau', 'zoom'),
      new GalleryImage(3, `assets${this.routeBasePath}/DSCN1719.JPG`, 'Ron Boy', 'zoom'),
      new GalleryImage(4, `assets${this.routeBasePath}/albuerne1.jpg`, 'Albuerne', 'zoom'),
      new GalleryImage(5, `assets${this.routeBasePath}/dario1.jpg`, 'Diario', 'zoom'),
      new GalleryImage(6, `assets${this.routeBasePath}/dario2.jpg`, 'Diario', 'zoom'),
      new GalleryImage(7, `assets${this.routeBasePath}/DSCN1616.JPG`, 'Castillo', 'zoom'),
      new GalleryImage(8, `assets${this.routeBasePath}/DSCN1623.JPG`, 'Castillo', 'zoom'),
      new GalleryImage(9, `assets${this.routeBasePath}/DSCN1624.JPG`, 'Rovira y Cia.', 'zoom'),
      new GalleryImage(10, `assets${this.routeBasePath}/DSCN1625.JPG`, 'Rovira y Cia.', 'zoom'),
      new GalleryImage(11, `assets${this.routeBasePath}/DSCN1659.JPG`, 'Rovira y Cia.', 'zoom'),
      new GalleryImage(12, `assets${this.routeBasePath}/DSCN1665.JPG`, 'Castillo', 'zoom'),
      new GalleryImage(13, `assets${this.routeBasePath}/DSCN1675.JPG`, 'Castillo', 'zoom'),
      new GalleryImage(14, `assets${this.routeBasePath}/DSCN1695.JPG`, 'Rovira y Ca.', 'zoom'),
      new GalleryImage(15, `assets${this.routeBasePath}/DSCN1698.JPG`, 'Rovira y Ca.', 'zoom'),
      new GalleryImage(16, `assets${this.routeBasePath}/DSCN1702.JPG`, 'Rovira y Co', 'zoom'),
      new GalleryImage(17, `assets${this.routeBasePath}/DSCN1710.JPG`, 'Rovira y Cia.', 'zoom'),
      new GalleryImage(18, `assets${this.routeBasePath}/DSCN1718.JPG`, 'Rovira y Ca.', 'zoom'),
      new GalleryImage(19, `assets${this.routeBasePath}/DSCN1820.JPG`, 'Bacardí', 'zoom'),
      new GalleryImage(20, `assets${this.routeBasePath}/DSCN1754.JPG`, 'Bacardí', 'zoom'),
      new GalleryImage(21, `assets${this.routeBasePath}/DSCN1755.JPG`, 'Bacardí', 'zoom'),
      new GalleryImage(22, `assets${this.routeBasePath}/DSCN1756.JPG`, 'Bacardí', 'zoom'),
      new GalleryImage(23, `assets${this.routeBasePath}/DSCN1809.JPG`, 'Cancañon, Martell y Hno', 'zoom'),
      new GalleryImage(24, `assets${this.routeBasePath}/DSCN1836.JPG`, 'R. Fontanals y Ca.', 'zoom'),
      new GalleryImage(25, `assets${this.routeBasePath}/DSCN1828.JPG`, 'R. Fontanals', 'zoom'),
      new GalleryImage(26, `assets${this.routeBasePath}/DSCN1835.JPG`, 'Alvarez Camp & Cia.', 'zoom'),
      new GalleryImage(27, `assets${this.routeBasePath}/DSCN1839.JPG`, 'Enrique Camp', 'zoom'),
      new GalleryImage(28, `assets${this.routeBasePath}/linares1.jpg`, 'Linares', 'zoom'),
      new GalleryImage(29, `assets${this.routeBasePath}/DSCN1844.JPG`, 'Linares', 'zoom'),
      new GalleryImage(30, `assets${this.routeBasePath}/DSCN1854.JPG`, 'Caney', 'zoom'),
      new GalleryImage(31, `assets${this.routeBasePath}/DSCN1869.JPG`, 'Candado', 'zoom'),
      new GalleryImage(32, `assets${this.routeBasePath}/DSCN1879.JPG`, 'Martí', 'zoom'),
      new GalleryImage(33, `assets${this.routeBasePath}/DSCN1880.JPG`, 'Caribe', 'zoom'),
      new GalleryImage(34, `assets${this.routeBasePath}/Imagen 042.jpg`, 'Matusalem', 'zoom'),
      new GalleryImage(35, `assets${this.routeBasePath}/Imagen 043.jpg`, 'Matusalem', 'zoom'),
      new GalleryImage(36, `assets${this.routeBasePath}/Imagen 044.jpg`, 'Matusalem', 'zoom'),
      new GalleryImage(37, `assets${this.routeBasePath}/Imagen 045.jpg`, 'Matusa', 'zoom'),
      new GalleryImage(38, `assets${this.routeBasePath}/Imagen 047.jpg`, 'Portosanto', 'zoom'),
      new GalleryImage(39, `assets${this.routeBasePath}/Imagen 046.jpg`, 'Portosanto', 'zoom'),
      new GalleryImage(40, `assets${this.routeBasePath}/Imagen 049.jpg`, 'Santiago', 'zoom'),
      new GalleryImage(41, `assets${this.routeBasePath}/Imagen 050.jpg`, 'Santiago', 'zoom'),
      new GalleryImage(42, `assets${this.routeBasePath}/Imagen 051.jpg`, 'Santiago', 'zoom'),
      new GalleryImage(43, `assets${this.routeBasePath}/Imagen 052.jpg`, 'Santiago', 'zoom'),
      new GalleryImage(44, `assets${this.routeBasePath}/Imagen 054.jpg`, 'Varadero', 'zoom'),
      new GalleryImage(45, `assets${this.routeBasePath}/Imagen 055.jpg`, 'Varadero', 'zoom'),
      new GalleryImage(46, `assets${this.routeBasePath}/Imagen 056.jpg`, 'Varadero', 'zoom'),
      new GalleryImage(47, `assets${this.routeBasePath}/Imagen 058.jpg`, 'Varadero', 'zoom'),
      new GalleryImage(48, `assets${this.routeBasePath}/Imagen 060.jpg`, 'Varadero', 'zoom'),
      new GalleryImage(49, `assets${this.routeBasePath}/Imagen 061.jpg`, 'Carribean Club', 'zoom'),
      new GalleryImage(50, `assets${this.routeBasePath}/Imagen 063.jpg`, 'Carribean Club', 'zoom'),
      new GalleryImage(51, `assets${this.routeBasePath}/Imagen 065.jpg`, 'Carribean Club', 'zoom'),
      new GalleryImage(52, `assets${this.routeBasePath}/Imagen 066.jpg`, 'Caney', 'zoom'),
      new GalleryImage(53, `assets${this.routeBasePath}/Imagen 072.jpg`, 'Caney', 'zoom'),
      new GalleryImage(54, `assets${this.routeBasePath}/Imagen 067.jpg`, 'Santiago', 'zoom'),
      new GalleryImage(55, `assets${this.routeBasePath}/Imagen 068.jpg`, 'Santiago', 'zoom'),
      new GalleryImage(56, `assets${this.routeBasePath}/Imagen 070.jpg`, 'Caribe', 'zoom'),
      new GalleryImage(57, `assets${this.routeBasePath}/Imagen 071.jpg`, 'Caribe', 'zoom'),
      new GalleryImage(58, `assets${this.routeBasePath}/Imagen 073.jpg`, 'Castillo', 'zoom'),
      new GalleryImage(59, `assets${this.routeBasePath}/Imagen 020.jpg`, 'Los Marinos', 'zoom'),
      new GalleryImage(60, `assets${this.routeBasePath}/Imagen 022.jpg`, 'Arecha', 'zoom'),
      new GalleryImage(61, `assets${this.routeBasePath}/Imagen 023.jpg`, 'Arecha', 'zoom'),
      new GalleryImage(62, `assets${this.routeBasePath}/Imagen 024.jpg`, 'Caney', 'zoom'),
      new GalleryImage(63, `assets${this.routeBasePath}/Imagen 025.jpg`, 'Caney', 'zoom'),
      new GalleryImage(64, `assets${this.routeBasePath}/Imagen 026.jpg`, 'Caney', 'zoom'),
      new GalleryImage(65, `assets${this.routeBasePath}/Imagen 027.jpg`, 'Caney', 'zoom'),
      new GalleryImage(66, `assets${this.routeBasePath}/Imagen 028.jpg`, 'Caney', 'zoom'),
      new GalleryImage(67, `assets${this.routeBasePath}/Imagen 029.jpg`, 'Caney', 'zoom'),
      new GalleryImage(68, `assets${this.routeBasePath}/Imagen 030.jpg`, 'Caney', 'zoom'),
      new GalleryImage(69, `assets${this.routeBasePath}/Imagen 031.jpg`, 'Caney', 'zoom'),
      new GalleryImage(70, `assets${this.routeBasePath}/Imagen 032.jpg`, 'Caney', 'zoom'),
      new GalleryImage(71, `assets${this.routeBasePath}/Imagen 033.jpg`, 'Caney', 'zoom'),
      new GalleryImage(72, `assets${this.routeBasePath}/Imagen 034.jpg`, 'Caney', 'zoom'),
      new GalleryImage(73, `assets${this.routeBasePath}/Imagen 035.jpg`, 'Caney', 'zoom'),
      new GalleryImage(74, `assets${this.routeBasePath}/Imagen 036.jpg`, 'Caney', 'zoom'),
      new GalleryImage(75, `assets${this.routeBasePath}/Imagen 037.jpg`, 'Caney', 'zoom'),
      new GalleryImage(76, `assets${this.routeBasePath}/Imagen 038.jpg`, 'Caney', 'zoom'),
      new GalleryImage(77, `assets${this.routeBasePath}/Imagen 039.jpg`, 'Caney', 'zoom'),
      new GalleryImage(78, `assets${this.routeBasePath}/Imagen 040.jpg`, 'Caney', 'zoom'),
      new GalleryImage(79, `assets${this.routeBasePath}/martusalem2.jpg`, 'Alvarez Camp', 'zoom')
    ];
  }

}
