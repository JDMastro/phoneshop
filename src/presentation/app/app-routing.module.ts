import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailGuard } from './guards/detail.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/inicio/inicio.module').then((m)=> m.InicioModule ),
  },
  {
    path: 'about',
    loadChildren: ()=>
      import('./pages/about/about.module').then((m)=> m.AboutModule ),
  },
  {
    path: 'contactus',
    loadChildren: ()=>
      import('./pages/contact/contact.module').then((m)=> m.ContactModule ),
  },
  {
    path: 'products',
    loadChildren: ()=>
      import('./pages/product/product.module').then((m)=> m.ProductModule ),
  },
  {
    path: 'products/details',
    loadChildren: ()=>
      import('./pages/details/details.module').then((m)=> m.DetailsModule ),
      canActivate: [DetailGuard]
  },
  {
    path: '',
    pathMatch : 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
