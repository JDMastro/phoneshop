import { Component } from '@angular/core';
import { ProductsService } from '@infrastructure/http/products/products.service';
import { Products } from 'core/domain/products';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
 

  products?: Products[];

 
  constructor(private productService: ProductsService) {
    this.getRandomProducts()
  }

  getRandomProducts(){
    return this.productService.getRandomsProducts()
       .subscribe({
        next: (v) => this.products = v
       })
  }

}
