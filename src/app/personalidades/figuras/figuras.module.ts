import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FigurasPage } from './figuras.page';
import { GlobalModule } from 'src/app/global/global.module';

const routes: Routes = [
  {
    path: '',
    component: FigurasPage
  },
  { path: 'arturo', loadChildren: './arturo/arturo.module#ArturoPageModule' },
  { path: 'humberto', loadChildren: './humberto/humberto.module#HumbertoPageModule' },
  { path: 'mariano', loadChildren: './mariano/mariano.module#MarianoPageModule' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    GlobalModule
  ],
  declarations: [FigurasPage]
})
export class FigurasPageModule {}
