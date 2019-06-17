import { PersonalidadesAppPage } from '../personalidades-app-page';
import { MenuItem } from 'src/app/global/menu-page/menu-item';

export class FigurasAppPage extends PersonalidadesAppPage {
    inicialize() {
        super.inicialize();
        this.menuSelectId = 1;
        this.routeBasePath = `${this.routeBasePath}/figuras`;
        this.submenus = [
            new MenuItem(1, 'Facundo Bacardí Massó', this.routeBasePath),
            new MenuItem(2, 'Arturo García', `${this.routeBasePath}/arturo`),
            new MenuItem(3, 'Humberto Corona', `${this.routeBasePath}/humberto`),
            new MenuItem(2, 'Mariano Lavigne', `${this.routeBasePath}/mariano`)
        ];
    }
}
