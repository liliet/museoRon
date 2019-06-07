import { AppPage } from '../global/app-page';
import { MenuItem } from '../global/menu-page/menu-item';

export class ObtencionAppPage extends AppPage {

    inicialize() {
        this.routeBasePath = '/obtencion';
        this.menus = [
            new MenuItem(1, 'El Proceso', this.routeBasePath),
            new MenuItem(2, 'Aguardiente', `${this.routeBasePath}/aguardiente`),
            new MenuItem(3, 'Alambique', `${this.routeBasePath}/alambique`),
            new MenuItem(4, 'Tonelería', `${this.routeBasePath}/toneleria`),
            new MenuItem(5, 'Denomicación de Origen', `${this.routeBasePath}/denominacion`)
        ];
    }
}