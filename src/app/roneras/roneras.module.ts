import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RonerasPage } from './roneras.page';

const routes: Routes = [
  {
    path: '',
    component: RonerasPage
  },
  { path: 'cardenas', loadChildren: './cardenas/cardenas.module#CardenasPageModule' },
  { path: 'santa-cruz', loadChildren: './santa-cruz/santa-cruz.module#SantaCruzPageModule' },
  { path: 'santiago', loadChildren: '../roneras/santiago/santiago.module#SantiagoPageModule' },
  { path: 'cubaron', loadChildren: './cubaron/cubaron.module#CubaronPageModule' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RonerasPage]
})
export class RonerasPageModule {}
