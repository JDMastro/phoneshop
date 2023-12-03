import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@infrastructure/http/products/products.service';
import { Store } from '@ngrx/store';
import { Products } from 'core/domain/products';
import { AddShoppingCart } from "../../state/shopping-cart/shopping-cart.actions";
import { selectShopping } from "../../state/shopping-cart/shopping-cart.selector";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {

  search: string = "";
  tipoCel: string = "";
  products?: Products[];
  shopping$ = this.store.select(selectShopping)
  
  //shoppingProducts : Products[] = [];

 
  constructor(private productService: ProductsService, private store: Store, ) {
    this.getAllProducts()
  }

  /*ngOnInit(): void {
    this.shopping$.subscribe({ next:(p)=>  this.shoppingProducts = p })
  }*/

  getAllProducts(){
    this.productService.getProductAll().subscribe({
      next : (p) => this.products = p
    })
  }

  addToCart(product: Products){
    this.store.dispatch(AddShoppingCart({
      product
    }))
  }

  check(id:number): boolean {
    let checked = true
    this.shopping$.subscribe({
      next : (ele)=> checked = ele.find(s => s.id === id)?.selected ? false : true
    })
     return checked
  }

  checkDetail(id:number): boolean {
    let checked = true
    this.shopping$.subscribe({
      next : (ele)=> checked = ele.find(s => s.id === id)?.selected ? true : false
    })
     return checked
  }


  tipohabChange(tipoCel: string){
      this.tipoCel = tipoCel;
  }
}
