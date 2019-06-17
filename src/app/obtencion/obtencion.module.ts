import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ObtencionPage } from './obtencion.page';
import { GlobalModule } from '../global/global.module';

const routes: Routes = [
  {
    path: '',
    component: ObtencionPage
  },
  { path: 'aguardiente', loadChildren: './aguardiente/aguardiente.module#AguardientePageModule' },
  { path: 'alambique', loadChildren: './alambique/alambique.module#AlambiquePageModule' },
  { path: 'toneleria', loadChildren: './toneleria/toneleria.module#ToneleriaPageModule' },
  { path: 'denominacion', loadChildren: './denominacion/denominacion.module#DenominacionPageModule' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    GlobalModule
  ],
  declarations: [ObtencionPage]
})
export class ObtencionPageModule {}
