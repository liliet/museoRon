import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'historia',
    loadChildren: '../app/historia/historia.module#HistoriaPageModule'
  },
  { path: 'obtencion', loadChildren: './obtencion/obtencion.module#ObtencionPageModule' },
  { path: 'personalidades', loadChildren: './personalidades/personalidades.module#PersonalidadesPageModule' },
  { path: 'roneras', loadChildren: './roneras/roneras.module#RonerasPageModule' },
  { path: 'galeria', loadChildren: './galeria/galeria.module#GaleriaPageModule' },
  { path: 'conferencias', loadChildren: './conferencias/conferencias.module#ConferenciasPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
