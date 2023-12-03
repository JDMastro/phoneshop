import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { CarouselModule } from "../../components/carousel/carousel.module";


@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    CarouselModule
  ]
})
export class InicioModule { }
