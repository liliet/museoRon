import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalGalleryComponent } from './vertical-gallery/vertical-gallery.component';
import { IonicModule } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    ModalComponent,
    VerticalGalleryComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ModalComponent,
    VerticalGalleryComponent
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class GlobalModule { }
