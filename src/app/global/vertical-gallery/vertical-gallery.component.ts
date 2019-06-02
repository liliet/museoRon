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

  openDetail(img: GalleryImage) {
    let template = `<img src="${img.src}"  fxLayoutAlign="center start" />`;
    if (img.label) {
      template = template.concat(`<br /><label>${img.label}</label>`);
    }
    this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        content: template
      },
      keyboardClose: true,
      cssClass: 'modalPage'
    }).then(modal => {
      modal.present();
    });
  }

}
