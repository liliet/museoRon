import { Component, OnInit, Input } from '@angular/core';
import { GalleryImage } from '../gallery-image';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './../modal/modal.component';
import { enterModalAnimation } from 'src/app/animations/enterModalAnimation';
import { leaveModalAnimation } from 'src/app/animations/leaveModalAnimation';

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

  openDetail(index: number): void {
    if (!this.images[index].templateType) {
      return;
    }
    this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        images: this.images,
        index
      },
      keyboardClose: true,
      cssClass: 'modalPage',
      enterAnimation: enterModalAnimation,
      leaveAnimation: leaveModalAnimation
    }).then(modal => {
      modal.present();
    });
  }

}
