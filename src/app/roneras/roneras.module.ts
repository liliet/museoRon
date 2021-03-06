import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RonerasPage } from './roneras.page';
import { GlobalModule } from '../global/global.module';

const routes: Routes = [
  {
    path: 'central',
    component: RonerasPage
  },
  { path: 'cardenas', loadChildren: './cardenas/cardenas.module#CardenasPageModule' },
  { path: 'santa-cruz', loadChildren: './santa-cruz/santa-cruz.module#SantaCruzPageModule' },
  { path: 'santiago', loadChildren: '../roneras/santiago/santiago.module#SantiagoPageModule' },
  { path: '', loadChildren: './cubaron/cubaron.module#CubaronPageModule' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    GlobalModule
  ],
  declarations: [RonerasPage]
})
export class RonerasPageModule {}
