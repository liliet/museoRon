import { AppPage } from '../global/app-page';
import { MenuItem } from '../global/menu-page/menu-item';

export class RonerasAppPage extends AppPage{
    inicialize() {
        this.routeBasePath = `/roneras`;
        this.menus = [
            new MenuItem(1, 'Ronera Central', `${this.routeBasePath}`),
            new MenuItem(2, 'Cárdenas', `${this.routeBasePath}/cardenas`),
            new MenuItem(3, 'Santa Cruz', `${this.routeBasePath}/santa-cruz`),
            new MenuItem(4, 'Santiago de Cuba', `${this.routeBasePath}/santiago`),
            new MenuItem(5, 'CubaRon', `${this.routeBasePath}/cubaron`)
        ];
    }
}
