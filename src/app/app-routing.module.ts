import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

const routes: Routes = [
  /* Rutas tomadas
    * path: '/auth'  (AuthRoutingModule) 
    * path: '/dashboard'  (PagesRoutingModule) 
  */
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NoPageFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
