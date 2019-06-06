import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { GalleryImage } from '../gallery-image';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'sp-horizontal-gallery',
  templateUrl: './horizontal-gallery.component.html',
  styleUrls: ['./horizontal-gallery.component.scss'],
})
export class HorizontalGalleryComponent implements OnInit {

  @Input() images: Array<GalleryImage>;
  @ViewChild('slides') slides: IonSlides;
  isBegining = true;
  isEnd = false;

  sliderOpts = {
    zoom: false,
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true
  };

  constructor() { }

  ngOnInit() { }

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

}
