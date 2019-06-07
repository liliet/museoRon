import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AguardientePage } from './aguardiente.page';
import { GlobalModule } from '../../global/global.module';

const routes: Routes = [
  {
    path: '',
    component: AguardientePage
  },
  { path: 'casas', loadChildren: './casas/casas.module#CasasPageModule' },
  { path: 'industrias', loadChildren: './industrias/industrias.module#IndustriasPageModule' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    GlobalModule
  ],
  declarations: [AguardientePage]
})
export class AguardientePageModule {}
