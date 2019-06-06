import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../menu-page/menu-item';
import { GalleryImage } from '../gallery-image';

@Component({
  selector: 'sp-page-type-two',
  templateUrl: './page-type-two.component.html',
  styleUrls: ['./page-type-two.component.scss'],
})
export class PageTypeTwoComponent implements OnInit {

  @Input() menus: Array<MenuItem>;
  @Input() submenus: Array<MenuItem>;
  @Input() images: Array<GalleryImage>;

  constructor() { }

  ngOnInit() {}

}
