import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectShopping } from "../state/shopping-cart/shopping-cart.selector";
import { Products } from 'core/domain/products';

@Injectable({
  providedIn: 'root'
})
export class DetailGuard implements CanActivate {
  products!: Products[];
  shopping$ = this.store.select(selectShopping)

  redirect(){
    this.router.navigate(['/products'])
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.products?.length  < 1){
        this.redirect()
      }
    return true;
  }


  constructor(private store: Store, private router: Router) {
    this.shopping$.subscribe({
      next : (p) => this.products = p
    })
  }
  
}
