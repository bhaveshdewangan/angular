import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyLodeComponent } from './lazy-lode.component';

const routes: Routes = [
  {path:'', component: LazyLodeComponent}
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
