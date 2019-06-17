import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BacardiPage } from './bacardi.page';
import { GlobalModule } from 'src/app/global/global.module';

const routes: Routes = [
  {
    path: '',
    component: BacardiPage
  },
  { path: 'creador', loadChildren: './creador/creador.module#CreadorPageModule' },
  { path: 'santiago', loadChildren: '../bacardi/santiago/santiago.module#SantiagoPageModule' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    GlobalModule
  ],
  declarations: [BacardiPage]
})
export class BacardiPageModule {}
