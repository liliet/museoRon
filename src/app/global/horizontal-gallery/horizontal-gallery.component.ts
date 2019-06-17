import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { GalleryImage } from '../gallery-image';
import { IonSlides, ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'sp-horizontal-gallery',
  templateUrl: './horizontal-gallery.component.html',
  styleUrls: ['./horizontal-gallery.component.scss'],
})
export class HorizontalGalleryComponent implements OnInit {

  @Input() images: Array<GalleryImage>;
  @Input() spaceBetween: number;
  @Input() slidesPerView: number;
  @Input() likeSteps = false;
  @ViewChild('slides') slides: IonSlides;
  sliderOpts: any;
  isBegining = true;
  isEnd = false;



  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.sliderOpts = {
      zoom: false,
      spaceBetween: (this.spaceBetween) ? this.spaceBetween : 10,
      slidesPerView: (this.slidesPerView) ? this.slidesPerView : 3,
      centeredSlides: true
    };
  }

  trackByImage(index: number, img: GalleryImage) {
    return img.id;
  }

  prev() {
    this.slides.slidePrev();
  }

  next() {
    this.slides.slideNext();
  }

  checkIfNavDisabled() {
    this.slides.isBeginning().then((istrue) => {
      this.isBegining = istrue;
    });
    this.slides.isEnd().then((istrue) => {
      this.isEnd = istrue;
    });
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
