import { NgModule } from '@angular/core';
import { LazyLodeComponent }   from './lazy-lode.component';
import { routing } from './lazy-routing.module';

@NgModule({
    imports: [routing],
    declarations: [LazyLodeComponent]
  })
export class LazyModule {}