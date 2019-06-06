import { OnInit, Component } from '@angular/core';

@Component({
    selector: 'sp-evolucion',
    templateUrl: './evolucion.component.html',
    styleUrls: ['./evolucion.component.scss']
})
export class EvolucionComponent implements OnInit {

    basePath = 'assets/historia/bacardi/';
    marcas = [
        { src: 'marca-1890.png', label: '1890' },
        { src: 'marca-1910.png', label: '1910' },
        { src: 'marca-1920.png', label: '1920' },
        { src: 'marca-1940.png', label: '1940' },
        { src: 'marca-1970.png', label: '1970' },
        { src: 'marca-1997.png', label: '1997' }
    ];
    sliderOpts = {
        zoom: false,
        slidesPerView: 'auto',
        centerInsufficientSlides: true
    };

    ngOnInit() {}

}
