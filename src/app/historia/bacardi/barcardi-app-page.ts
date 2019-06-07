import { HistoriaAppPage } from 'src/app/historia/historia-app-page';
import { MenuItem } from 'src/app/global/menu-page/menu-item';

export class BacardiAppPage extends HistoriaAppPage {

    inicialize(){
        super.inicialize();
        this.menuSelectId = 2;
        this.textWidth = 68;
        this.routeBasePath = `${this.routeBasePath}/bacardi`;
        this.submenus = [
            new MenuItem(1, 'Historia de la Marca', this.routeBasePath),
            new MenuItem(2, 'Su creador', `${this.routeBasePath}/creador`),
            new MenuItem(3, 'Santiago y Los Bacardí', `${this.routeBasePath}/santiago`)
        ];
    }
}
