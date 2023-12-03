import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from "@presentation/pipes/product-filter.pipe";


@NgModule({
  declarations: [
    ProductComponent,
    ProductFilterPipe
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ]
})
export class ProductModule { }
