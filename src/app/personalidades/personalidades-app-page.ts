import { AppPage } from '../global/app-page';
import { MenuItem } from '../global/menu-page/menu-item';

export class PersonalidadesAppPage extends AppPage {
    inicialize() {
        this.routeBasePath = '/personalidades';
        this.menus = [
            new MenuItem(1, 'Grandes Figuras', this.routeBasePath),
            new MenuItem(2, 'Maestros Roneros', `${this.routeBasePath}/maestros`),
            new MenuItem(3, 'Cómo llegar a Maestro Ronero', `${this.routeBasePath}/como-llegar`)
        ];
    }
}
