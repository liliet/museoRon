import { OnInit, Component, Input } from '@angular/core';
import { GalleryImage } from '../../gallery-image';

@Component({
    selector: 'sp-biografia',
    templateUrl: './biografia.component.html',
    styleUrls: ['./biografia.component.scss']
})
export class BiografiaComponent implements OnInit {

    @Input() img: GalleryImage;

    ngOnInit() {}

}
