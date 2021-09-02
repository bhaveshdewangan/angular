import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { routing } from "./lazy-loading-image-routing.module";
import { LazyLoadingImageComponent } from "./lazy-loading-image.component";

@NgModule({
    imports: [CommonModule, routing],
    declarations: [LazyLoadingImageComponent],
})
export class LazyLoadingImageModule { }