import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'carros-list',
    pathMatch: 'full'
  },
  {
    path: 'carros-list',
    loadChildren: () => import('./carros/carros-list/carros-list.module').then( m => m.CarrosListPageModule)
  },
  {
    path: 'carros-register',
    loadChildren: () => import('./carros/carros-register/carros-register.module').then( m => m.CarrosRegisterPageModule)
  },
  {
    path: 'vendedores-list',
    loadChildren: () => import('./vendedor/vendedor-list/vendedores-list.module').then( m => m.VendedoresListPageModule)
  },
  {
    path: 'vendedores-register',
    loadChildren: () => import('./vendedor/vendedores-register/vendedores-register.module').then( m => m.VendedoresRegisterPageModule)
  },
  {
    path: 'compras-list',
    loadChildren: () => import('./compras/compras-list/compras-list.module').then( m => m.ComprasListPageModule)
  },
  {
    path: 'compras-register',
    loadChildren: () => import('./compras/compras-register/compras-register.module').then( m => m.ComprasRegisterPageModule)
  },
  {
    path: 'dashboard-compras',
    loadChildren: () => import('./dashboard-compras/dashboard-routing.module').then( d => d.DashboardPageRoutingModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
