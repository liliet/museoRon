import { Input, Component, OnInit } from '@angular/core';
import { GalleryImage } from '../../gallery-image';

@Component({
    selector: 'sp-zoom',
    templateUrl: './zoom.component.html',
    styleUrls: ['./zoom.component.scss']
})
export class ZoomComponent implements OnInit {

    @Input() images: Array<GalleryImage>;
    @Input() initial: number;

    ngOnInit() { }
}
