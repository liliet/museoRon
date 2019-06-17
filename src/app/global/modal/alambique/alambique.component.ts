import { OnInit, Component } from '@angular/core';
import { GalleryImage } from '../../gallery-image';

@Component({
    selector: 'sp-alambique',
    templateUrl: './alambique.component.html',
    styleUrls: ['./alambique.component.scss']
})
export class AlambiqueComponent implements OnInit {

    basePath = 'assets/obtencion/alambique/';
    images = [
        new GalleryImage(1, `${this.basePath}alambique1.png`, 'Alquitara. Destilador más antiguo. Siglo XV'),
        new GalleryImage(2, `${this.basePath}alambique2.png`, 'Alambique tipo Pailón. S. XVI'),
        new GalleryImage(3, `${this.basePath}alambique3.png`, 'Alambique o aguardentera. Siglo XVIII'),
        new GalleryImage(4, `${this.basePath}alambique4.png`, 'Alambique Francés. Utilizado por los fabricantes de coñac. Siglos XVIII y XIX'),
        new GalleryImage(5, `${this.basePath}alambique5.png`, 'Alambiques. Siglo XIX'),
        new GalleryImage(6, `${this.basePath}alambique6.png`, 'Alambique de Savalle. 1867'),
        new GalleryImage(7, `${this.basePath}alambique7.png`, 'Alambique de paila o de olla. Siglo XIX')
    ];

    ngOnInit() {}

}
