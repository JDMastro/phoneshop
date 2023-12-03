import { Component } from '@angular/core';
import { selectShopping } from "../../state/shopping-cart/shopping-cart.selector";
import { State } from "../../state/shopping-cart/shopping-cart.reducer";
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  shopping$ = this.store.select(selectShopping)

  constructor(
    private store: Store<State>
  ) {}


  

}
