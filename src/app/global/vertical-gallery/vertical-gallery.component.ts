import { Component, OnInit, Input } from '@angular/core';
import { GalleryImage } from '../gallery-image';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './../modal/modal.component';

@Component({
  selector: 'sp-vertical-gallery',
  templateUrl: './vertical-gallery.component.html',
  styleUrls: ['./vertical-gallery.component.scss'],
})
export class VerticalGalleryComponent implements OnInit {
  @Input() images: Array<GalleryImage>;

  sliderOpts = {
    zoom: false,
    spaceBetween: 10,
    slidesPerView: 'auto',
    direction: 'vertical'
  };

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() { }

  trackByImage(index: number, img: GalleryImage) {
    return img.id;
  }

  openDetail(img: GalleryImage): void {
    if (!img.templateType) {
      return;
    }
    this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        img
      },
      keyboardClose: true,
      cssClass: 'modalPage'
    }).then(modal => {
      modal.present();
    });
  }

}
