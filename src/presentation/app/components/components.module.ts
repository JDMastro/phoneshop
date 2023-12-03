import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from "@presentation/components/navbar/navbar.module";
import { CarouselModule } from "@presentation/components/carousel/carousel.module";
import { FooterModule } from "@presentation/components/footer/footer.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarModule,
    CarouselModule, 
    FooterModule
  ],
  exports:[NavbarModule, CarouselModule, FooterModule]
})
export class ComponentsModule { }
