import { createAction, props } from '@ngrx/store';
import * as cartTypes from './shopping-cart.type';
import { Products } from 'core/domain/products';

export const AddShoppingCart = createAction(
    cartTypes.ADD_PRODUCT_CART,
    props<{ product: Products }>()
)

export const DecreaseShoppingCart = createAction(
    cartTypes.DECREASE_PRODUCT_CART,
    props<{ product: Products }>()
)

export const IncrementShoppingCart = createAction(
    cartTypes.INCREMENT_PRODUCT_CART,
    props<{ product: Products }>()
)

export const DeleteShoppingCart = createAction(
    cartTypes.DELETE_PRODUCT_CART,
    props<{ product: Products }>()
)

export const InitialShoppingCart = createAction(
    cartTypes.INITIAL_PRODUCT_CART
   
)