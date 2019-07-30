import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GaleriaPage } from './galeria.page';
import { GlobalModule } from '../global/global.module';

const routes: Routes = [
  {
    path: '',
    component: GaleriaPage
  },
  { path: 'bodegas', loadChildren: './bodegas/bodegas.module#BodegasPageModule' },
  { path: 'rones-cuba', loadChildren: './rones-cuba/rones-cuba.module#RonesCubaPageModule' },
  { path: 'proceso', loadChildren: './proceso/proceso.module#ProcesoPageModule' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    GlobalModule
  ],
  declarations: [GaleriaPage]
})
export class GaleriaPageModule {}
