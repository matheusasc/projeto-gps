import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgImageSliderModule } from 'ng-image-slider';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
  imports: [
    HomeModule,
    CommonModule,
    NgImageSliderModule
  ],
  // Resto das declarações
})
export class HomeModule { }
