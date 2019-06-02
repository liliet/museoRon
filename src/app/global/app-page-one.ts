import { AppPage } from './app-page';
import { MenuController } from '@ionic/angular';
import { MenuItem } from './menu-page/menu-item';
import { GalleryImage } from './gallery-image';

export abstract class AppPageOne extends AppPage {

    menus: Array<MenuItem>;
    submenus: Array<MenuItem>;
    images: Array<GalleryImage>;
    textContent: string;

    constructor(
        menuCtrl: MenuController
    ) {
        super(menuCtrl);
    }
}
