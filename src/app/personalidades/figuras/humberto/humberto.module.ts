import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HumbertoPage } from './humberto.page';
import { GlobalModule } from 'src/app/global/global.module';

const routes: Routes = [
  {
    path: '',
    component: HumbertoPage
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
  declarations: [HumbertoPage]
})
export class HumbertoPageModule {}
