import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'modal-popup-page',
    loadChildren: () => import('./modal-popup/modal-popup.module').then(m => m.ModalPopupPageModule)
  },
  {
    path: 'modal-popup',
    loadChildren: () => import('./modal-popup/modal-popup.module').then(m => m.ModalPopupPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
