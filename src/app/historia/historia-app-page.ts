import { AppPageOne } from '../global/app-page-one';
import { MenuItem } from '../global/menu-page/menu-item';

export class HistoriaAppPage extends AppPageOne {

    menuSelectId: number;
    routeBasePath: string;

    inicialize() {
        this.routeBasePath = '/historia';
        this.menus = [
            new MenuItem(1, 'Historia del Ron Cubano', this.routeBasePath),
            new MenuItem(2, 'Bacardí', `${this.routeBasePath}/bacardi`),
            new MenuItem(3, 'Nave Don Pancho', `${this.routeBasePath}/pancho`),
            new MenuItem(4, 'Rones Antiguos de Cuba', `${this.routeBasePath}/rones`)
        ];
        const menuSelected = this.menus[this.menuSelectId - 1];
        menuSelected.selected = true;
        menuSelected.route = '#';
    }
}
