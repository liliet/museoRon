import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'sp-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss'],
})
export class MenuPageComponent implements OnInit {

  @Input() menus: Array<MenuItem>;
  @Input() submenus: Array<MenuItem>;

  constructor() { }

  ngOnInit() { }

  trackByMenu(index: number, menu: MenuItem) {
    return menu.id;
  }

}
