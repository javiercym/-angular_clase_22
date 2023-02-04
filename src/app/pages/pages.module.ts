import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentModule } from '../component/component.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
