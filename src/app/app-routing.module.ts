import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'edituser',
    loadChildren: () => import('./edituser/edituser.module').then( m => m.EdituserPageModule)
  },
  {
    path: 'carrito', 
    loadChildren: () => import('./carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  
  {
    path: 'carP',
    loadChildren: () => import('./cart-p/cart-p.module').then( m => m.CartPPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'admincli',
    loadChildren: () => import('./admincli/admincli.module').then( m => m.AdmincliPageModule)
  },
  {
    path: 'addproduct',
    loadChildren: () => import('./addproduct/addproduct.module').then( m => m.AddproductPageModule)
  },
  {
    path: 'addtienda',
    loadChildren: () => import('./addtienda/addtienda.module').then( m => m.AddtiendaPageModule)
  },
  {
    path: 'productt',
    loadChildren: () => import('./productt/productt.module').then( m => m.ProducttPageModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./store/store.module').then( m => m.StorePageModule)
  },
  {
    path: 'agregartiendas',
    loadChildren: () => import('./agregartiendas/agregartiendas.module').then( m => m.AgregartiendasPageModule)
  }
 


 

];
@NgModule({
  imports: [ 
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
