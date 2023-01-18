import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./princi/princi.module').then( m => m.PrinciPageModule)
  },

  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: 'profile/:id',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'princi',
    loadChildren: () => import('./princi/princi.module').then( m => m.PrinciPageModule)
  },  {
    path: 'perfilusuario',
    loadChildren: () => import('./perfilusuario/perfilusuario.module').then( m => m.PerfilusuarioPageModule)
  },
  {
    path: 'perfiladministrador',
    loadChildren: () => import('./perfiladministrador/perfiladministrador.module').then( m => m.PerfiladministradorPageModule)
  },
  {
    path: 'trabajenosotros',
    loadChildren: () => import('./trabajenosotros/trabajenosotros.module').then( m => m.TrabajenosotrosPageModule)
  },


  
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
