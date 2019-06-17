import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComoLlegarPage } from './como-llegar.page';

const routes: Routes = [
  {
    path: '',
    component: ComoLlegarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComoLlegarPage]
})
export class ComoLlegarPageModule {}
