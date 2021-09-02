import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadingImageComponent } from './lazy-loading-image.component';

const routes: Routes = [
  {path:'', component: LazyLoadingImageComponent}
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
