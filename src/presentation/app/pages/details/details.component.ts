import { Component, OnInit } from '@angular/core';
import { selectShopping } from "../../state/shopping-cart/shopping-cart.selector";
import { Store } from '@ngrx/store';
import { Products } from 'core/domain/products';
import * as shoppingActions from '../../state/shopping-cart/shopping-cart.actions';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  products: Products[] = [];
  shopping$ = this.store.select(selectShopping)
  total: number = 0;
  USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

  constructor( private store: Store, private router: Router) {}
  ngOnInit(): void {
    this.shopping$.subscribe({ next: (pr)=> this.products = pr })
    this.getTotal()
  }

  getTotal(){
    this.total = 0
    this.products.map((pro)=> this.total+=pro.price )
  }

  decreaseProduct(product: Products){
    this.store.dispatch(shoppingActions.DecreaseShoppingCart({product}))
    this.getTotal()
  }

  incrementQuantity(product: Products){
    this.store.dispatch(shoppingActions.IncrementShoppingCart({product}))
    this.getTotal()
  }

  deleteProduct(product: Products){
    this.store.dispatch(shoppingActions.DeleteShoppingCart({product}))
    this.getTotal()
  }

  payItems(){
    Swal.fire({
      title: 'Datos de pago',
      html: `<input type="text" id="name" class="swal2-input" placeholder="Nombre completo">
      <input type="text" id="address" class="swal2-input" placeholder="Direccion">
      <input type="email" id="email" class="swal2-input" placeholder="Correo">
      <input type="text" id="phone" class="swal2-input" placeholder="Teléfono">
      <input type="text" id="creditcard" class="swal2-input" placeholder="Tarjeta de credito">`,
      confirmButtonText: 'Pagar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      focusConfirm: false,
      preConfirm: () => {
        const name = (document.getElementById(
          'name'
        ) as HTMLInputElement).value;
        const address = (document.getElementById(
          'address'
        ) as HTMLInputElement).value;
        const phone = (document.getElementById(
          'phone'
        ) as HTMLInputElement).value;
        const creditcard = (document.getElementById(
          'creditcard'
        ) as HTMLInputElement).value;
        const email = (document.getElementById(
          'email'
        ) as HTMLInputElement).value;
        

        if (!name || !address || !phone || !creditcard || !email) {
          Swal.showValidationMessage(`Por favor ingrese el dato`)
        }
        return { name, address, phone, creditcard }
      }
    }).then((result) => {

      if(result.isConfirmed){

        Swal.fire(
          'Pago',
          'Su pago se ha hecho correctamente',
          'success'
        )
  
        this.store.dispatch(shoppingActions.InitialShoppingCart())
        this.total = 0;
        this.router.navigate(['/products'])

      }

    
    })
  }

}
