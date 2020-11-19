import { NgModule, ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/container/users.component';

const route: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'users', component: UsersComponent},
  {path: 'lazy-loading', loadChildren:() => import('app/lazy-component/lazy.module').then(m => m.LazyModule)}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(route);