import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { GalleryImage } from '../gallery-image';

@Component({
  selector: 'sp-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  images: Array<GalleryImage>;
  index: number;

  constructor(
    private navParams: NavParams,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.images = this.navParams.get('images');
    this.index = this.navParams.get('index');
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
