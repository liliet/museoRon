import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../menu-page/menu-item';
import { GalleryImage } from '../gallery-image';

@Component({
  selector: 'sp-page-type-one',
  templateUrl: './page-type-one.component.html',
  styleUrls: ['./page-type-one.component.scss'],
})
export class PageTypeOneComponent implements OnInit {

  @Input() menus: Array<MenuItem>;
  @Input() submenus: Array<MenuItem>;
  @Input() images: Array<GalleryImage>;
  @Input() textContent: string;

  constructor() { }

  ngOnInit() {}

}
