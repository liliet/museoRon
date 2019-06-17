import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalGalleryComponent } from './vertical-gallery/vertical-gallery.component';
import { IonicModule } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { RouterModule } from '@angular/router';
import { PageTypeOneComponent } from './page-type-one/page-type-one.component';
import { ZoomComponent } from './modal/zoom.component';
import { EvolucionComponent } from './modal/evolucion/evolucion.component';
import { PageTypeTwoComponent } from './page-type-two/page-type-two.component';
import { HorizontalGalleryComponent } from './horizontal-gallery/horizontal-gallery.component';
import { AlambiqueComponent } from './modal/alambique/alambique.component';
import { BiografiaComponent } from './modal/biografia/biografia.component';

@NgModule({
  declarations: [
    ModalComponent,
    VerticalGalleryComponent,
    MenuPageComponent,
    PageTypeOneComponent,
    ZoomComponent,
    EvolucionComponent,
    AlambiqueComponent,
    BiografiaComponent,
    HorizontalGalleryComponent,
    PageTypeTwoComponent
  ],
  imports: [
  CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    VerticalGalleryComponent,
    MenuPageComponent,
    PageTypeOneComponent,
    HorizontalGalleryComponent,
    PageTypeTwoComponent
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class GlobalModule { }
