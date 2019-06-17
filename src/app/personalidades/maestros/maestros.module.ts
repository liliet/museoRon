import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MaestrosPage } from './maestros.page';
import { GlobalModule } from 'src/app/global/global.module';

const routes: Routes = [
  {
    path: '',
    component: MaestrosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    GlobalModule
  ],
  declarations: [MaestrosPage]
})
export class MaestrosPageModule {}
