import { ObtencionAppPage } from '../obtencion-app-page';
import { MenuItem } from 'src/app/global/menu-page/menu-item';

export class ToneleriaAppPage extends ObtencionAppPage {
    inicialize() {
        super.inicialize();
        this.menuSelectId = 4;
        this.routeBasePath = `${this.routeBasePath}/toneleria`;
        this.submenus = [
            new MenuItem(1, 'Generalidades', this.routeBasePath),
            new MenuItem(2, 'Historia', `${this.routeBasePath}/historia`),
            new MenuItem(3, 'El Tonelero', `${this.routeBasePath}/tonelero`)
        ];
    }
}
