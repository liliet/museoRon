import { ObtencionAppPage } from '../obtencion-app-page';
import { MenuItem } from '../../global/menu-page/menu-item';

export class AguardienteAppPage extends ObtencionAppPage {
    inicialize() {
        super.inicialize();
        this.menuSelectId = 2;
        this.routeBasePath = `${this.routeBasePath}/aguardiente`;
        this.submenus = [
            new MenuItem(1, 'Historia', this.routeBasePath),
            new MenuItem(2, 'Casas Productoras', `${this.routeBasePath}/casas`),
            new MenuItem(3, 'Industrias Destiladoras', `${this.routeBasePath}/industrias`)
        ];
    }
}
