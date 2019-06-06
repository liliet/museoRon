import { Input, Component, OnInit } from '@angular/core';
import { GalleryImage } from '../gallery-image';

@Component({
    selector: 'sp-zoom',
    template: `<div align="center">
                <img [src]="img.src" fxLayoutAlign="center start" />
                <br />
                <ion-label *ngIf="img.label">{{ img.label }}</ion-label>
            </div>`,
})
export class ZoomComponent implements OnInit {

    @Input() img: GalleryImage;

    ngOnInit() { }
}
