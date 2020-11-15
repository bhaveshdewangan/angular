import { NgModule, ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const route: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'contactus', component: ContactUsComponent},
  {path: 'lazy', loadChildren:() => import('app/lazy-component/lazy.module').then(m => m.LazyModule)}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(route);