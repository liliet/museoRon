import { AppPage } from '../global/app-page';
import { MenuItem } from '../global/menu-page/menu-item';

export class RonerasAppPage extends AppPage{
    inicialize() {
        this.routeBasePath = `/roneras`;
        this.menus = [
            new MenuItem(1, 'CubaRon', `${this.routeBasePath}`),
            new MenuItem(2, 'Ronera Central', `${this.routeBasePath}/central`),
            new MenuItem(3, 'Cárdenas', `${this.routeBasePath}/cardenas`),
            new MenuItem(4, 'Santa Cruz', `${this.routeBasePath}/santa-cruz`),
            new MenuItem(5, 'Santiago de Cuba', `${this.routeBasePath}/santiago`)
        ];
    }
}
