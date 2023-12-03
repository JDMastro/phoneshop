import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './shopping-cart.reducer';

const selectShoppingState = createFeatureSelector<State>('shopping');

export const selectShopping = createSelector(
    selectShoppingState,
    (state) => state.product
  );