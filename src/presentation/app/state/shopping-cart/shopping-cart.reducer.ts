import { Action, createReducer, on } from '@ngrx/store';
import * as cartActions from './shopping-cart.actions';
import { Products } from 'core/domain/products';

export interface State {
  product: Products[];
  oldProduct: Products[];
}

export const initialState: State = {
  product :[],
  oldProduct :[]
};

const _shoppingCartReducer = createReducer(
  initialState,
  on(cartActions.AddShoppingCart, (state, product) => {
    const { id, img, name, price, quantity, selected, brand } = product.product
    const newProduct: Products[] = []
    
       newProduct.push(...state.product,{ id, img, name, price, quantity, selected:true, brand })
    
    return {
      ...state,
      product : newProduct,
      oldProduct : newProduct,
    };
  }),

  on(cartActions.IncrementShoppingCart, (state, product)=>{
    const { id, price, quantity } = product.product

    const oldPrice = state.oldProduct.find(p => p.id === id )!.price
  
    const newProductList = state.product.map((product, i)=>{
      if(product.id === id){
        return {  
          id: product.id, 
          img: product.img, 
          name: product.name, 
          price: (quantity+1) * oldPrice , 
          quantity: quantity+1, 
          selected: product.selected,
        brand: product.brand }
      }
      return product
    })
    return {
      ...state,
      product: newProductList
    }
    
  }),
  on(cartActions.DecreaseShoppingCart,(state, product)=>{
    const { id, price, quantity } = product.product

    const oldPrice = state.oldProduct.find(p => p.id === id )!.price
  
    const newProductList = state.product.map((product, i)=>{
      if(product.id === id){
        return {  
          id: product.id, 
          img: product.img, 
          name: product.name, 
          price: (quantity-1) * oldPrice , 
          quantity: quantity-1, 
          selected: product.selected,
          brand: product.brand }
      }
      return product
    })
    return {
      ...state,
      product: newProductList
    }
  }),

  on(cartActions.DeleteShoppingCart, (state, product) => {
    const { id, price, quantity } = product.product
    const newProduct: Products[] = []
    const oldProduct: Products[] = []
    state.product.map((p)=>{
      if(p.id !== id) { newProduct.push(p); oldProduct.push(p) }
    })

    return {
      ...state,
      product : newProduct,
      oldProduct: oldProduct
    };
  }),

  on(cartActions.InitialShoppingCart, (state, product) => {
   
    const newProduct: Products[] = []
    
    return {
      ...state,
      product : newProduct,
      oldProduct : newProduct,
    };
  })

);

export function shoppingCartReducer(state: any, action: Action) {
  return _shoppingCartReducer(state, action);
}
