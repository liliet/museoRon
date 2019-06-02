import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalGalleryComponent } from './vertical-gallery/vertical-gallery.component';
import { IonicModule } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { RouterModule } from '@angular/router';
import { PageTypeOneComponent } from './page-type-one/page-type-one.component';

@NgModule({
  declarations: [
    ModalComponent,
    VerticalGalleryComponent,
    MenuPageComponent,
    PageTypeOneComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    ModalComponent,
    VerticalGalleryComponent,
    MenuPageComponent,
    PageTypeOneComponent
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class GlobalModule { }
