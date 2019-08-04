import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../menu-page/menu-item';
import { GalleryImage } from '../gallery-image';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { enterModalAnimation } from 'src/app/animations/enterModalAnimation';
import { leaveModalAnimation } from 'src/app/animations/leaveModalAnimation';

@Component({
  selector: 'sp-page-type-three',
  templateUrl: './page-type-three.component.html',
  styleUrls: ['./page-type-three.component.scss'],
})
export class PageTypeThreeComponent implements OnInit {

  @Input() menus: Array<MenuItem>;
  @Input() submenus: Array<MenuItem>;
  @Input() images: Array<GalleryImage>;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    // this.reOrder();
  }

  getViewCols() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 992) {
      return 4;
    }
    if (windowWidth >= 576) {
      return 3;
    }
    return 2;
  }

  reOrder() {
    const cols = this.getViewCols();
    const out = [];
    let col = 0;
    while (col < cols) {
      for (let i = 0; i + col < this.images.length; i += cols) {
        out.push(this.images[i + col]);
      }
      col++;
    }
    this.images = out;
  }

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
