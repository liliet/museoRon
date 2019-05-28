import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { GalleryImage } from '../gallery-image';

@Component({
  selector: 'sp-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {
  img: GalleryImage;
  constructor(
    private navParams: NavParams,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.img = this.navParams.get('img');
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
