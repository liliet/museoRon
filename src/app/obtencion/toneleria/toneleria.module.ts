import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ToneleriaPage } from './toneleria.page';
import { GlobalModule } from 'src/app/global/global.module';

const routes: Routes = [
  {
    path: '',
    component: ToneleriaPage
  },
  { path: 'historia', loadChildren: '../toneleria/historia/historia.module#HistoriaPageModule' },
  { path: 'tonelero', loadChildren: './tonelero/tonelero.module#ToneleroPageModule' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    GlobalModule
  ],
  declarations: [ToneleriaPage]
})
export class ToneleriaPageModule {}
