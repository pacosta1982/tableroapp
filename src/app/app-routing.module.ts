import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './resolver/data-resolver.service';

const routes: Routes = [
  { path: 'main', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  { path: 'showproyecto/:id',
    resolve:{
      special: DataResolverService
    },
    loadChildren: './pages/showproyecto/showproyecto.module#ShowproyectoPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
