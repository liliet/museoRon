import { AppPage } from '../global/app-page';
import { MenuItem } from '../global/menu-page/menu-item';

export class GaleriaAppPage extends AppPage {
    inicialize() {
        this.routeBasePath = '/galeria';
        this.menus = [
            new MenuItem(1, 'Bacardí', this.routeBasePath),
            new MenuItem(2, 'Nave Don Pancho', `${this.routeBasePath}/bodegas`),
            new MenuItem(3, 'Rones Antiguos de Cuba', `${this.routeBasePath}/rones-cuba`),
            new MenuItem(4, 'Obtención del Ron', `${this.routeBasePath}/proceso`)
        ];
    }
}
