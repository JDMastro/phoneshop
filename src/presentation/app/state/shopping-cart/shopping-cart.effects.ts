import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as shoppingCartActions from './shopping-cart.actions';

@Injectable()
export class ShoppingEffects {
    shoppingCart$ = createEffect(()=>
       this.actions$.pipe(
        ofType(shoppingCartActions.AddShoppingCart),
       ),
       { dispatch: false }
    )


    incrementProduct$ = createEffect(()=>
       this.actions$.pipe(
        ofType(shoppingCartActions.IncrementShoppingCart),
       ),
       { dispatch: false }
    )

    decreaseProduct$ = createEffect(()=>
    this.actions$.pipe(
     ofType(shoppingCartActions.DecreaseShoppingCart),
    ),
    { dispatch: false }
 )

 deleteProduct$ = createEffect(()=>
    this.actions$.pipe(
     ofType(shoppingCartActions.DeleteShoppingCart),
    ),
    { dispatch: false }
 )

 initialProduct$ = createEffect(()=>
    this.actions$.pipe(
     ofType(shoppingCartActions.InitialShoppingCart),
    ),
    { dispatch: false }
 )






    constructor(
        private actions$: Actions
      ) {}
}