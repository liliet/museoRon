import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { GlobalModule } from '../global/global.module';

const routes: Routes = [
  { path: '', loadChildren: './figuras/figuras.module#FigurasPageModule' },
  { path: 'figuras', loadChildren: './figuras/figuras.module#FigurasPageModule' },
  { path: 'maestros', loadChildren: './maestros/maestros.module#MaestrosPageModule' },
  { path: 'como-llegar', loadChildren: './como-llegar/como-llegar.module#ComoLlegarPageModule' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    GlobalModule
  ],
  declarations: []
})
export class PersonalidadesPageModule {}
