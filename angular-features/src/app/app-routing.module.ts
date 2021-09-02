import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/container/users.component';

const route: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'users', component: UsersComponent},
  {path: 'lazy-loading-component', loadChildren:() => import('app/lazy-component/lazy.module').then(m => m.LazyModule)},
  {path: 'lazy-loading-image', loadChildren:() => import('app/lazy-loading-image/lazy-loading-image.module').then(m => m.LazyLoadingImageModule)}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(route);