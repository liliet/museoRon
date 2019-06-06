import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { GalleryImage } from '../gallery-image';

@Component({
  selector: 'sp-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  img: GalleryImage;

  constructor(
    private navParams: NavParams,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.img = this.navParams.get('img');
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
