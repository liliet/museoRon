import { MenuController } from '@ionic/angular';
import { MenuItem } from './menu-page/menu-item';
import { GalleryImage } from './gallery-image';

export abstract class AppPage {

    menus: Array<MenuItem>;
    menuSelectId: number;
    submenus: Array<MenuItem>;
    submenuSelectId: number;
    routeBasePath: string;
    images: Array<GalleryImage>;
    spaceBetween: number;
    slidesPerView: number;
    likeSteps: boolean;
    textContent: string;
    textWidth: number;

    constructor(
        private menuCtrl: MenuController
    ) {
        this.inicialize();
    }

    ionViewWillEnter() {
        this.menuCtrl.enable(true);
    }

    abstract inicialize(): void;

    selectPageMenu() {
        this._selectMenu(this.menus, this.menuSelectId);
        this._selectMenu(this.submenus, this.submenuSelectId);
    }

    private _selectMenu(menus: Array<MenuItem>, selectId: number) {
        if (menus && menus.length > 0 && selectId > 0 && menus[selectId - 1]) {
            const menuSelected = menus[selectId - 1];
            menuSelected.selected = true;
            menuSelected.route = '#';
        }
    }
}
