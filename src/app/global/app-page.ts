import { MenuController } from '@ionic/angular';

export abstract class AppPage {
    constructor(
        private menuCtrl: MenuController
    ) {
        this.inicialize();
    }

    ionViewWillEnter() {
        this.menuCtrl.enable(true);
    }

    abstract inicialize(): void;
}
