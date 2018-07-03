import { Product } from '../product';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductActions, ProductionActionTypes } from './product.actions';

export interface State extends fromRoot.State {
    products: ProductState;
}


export interface ProductState {
    showProductCode: boolean;
    currentProductId: number | null;
    products: Product[];
    error: string;
}

const initialState: ProductState = {
    showProductCode: true,
    currentProductId: null,
    products: [],
    error: ''
};

const getProductFeatureState = createFeatureSelector<ProductState>('products');

 export const getShowProductCode = createSelector(
     getProductFeatureState,
     state => state.showProductCode
 );
 export const getCurrentProductId = createSelector(
    getProductFeatureState,
    state => state.currentProductId
  );

   export const getCurrentProduct = createSelector(
    getProductFeatureState,
    getCurrentProductId,
    (state, currentProductId) => {
      if (currentProductId === 0) {
        return {
          id: 0,
          productName: '',
          productCode: 'New',
          description: '',
          starRating: 0
        };
      } else {
        return currentProductId ? state.products.find(p => p.id === currentProductId) : null;
      }
    }
  );

 export const getProducts = createSelector(
     getProductFeatureState,
     state => state.products
 );

export const getError = createSelector(
    getProductFeatureState,
    state => state.error
);

export function reducer(state = initialState, action: ProductActions): ProductState {
    switch ( action.type) {
        case ProductionActionTypes.ToggleProductCode:
          console.log('existing state:' + JSON.stringify(state));
          console.log('payload: ' + action.payload);
          return {
              ...state,
              showProductCode: action.payload
          };

        case ProductionActionTypes.SetCurrentProduct:
            return {
                ...state,
                currentProductId: action.payload.id
            };

        case ProductionActionTypes.ClearCurrentProduct:
            return {
                ...state,
                currentProductId: null
            };

        case ProductionActionTypes.InitialzieCurrentProduct:
            return {
                ...state,
                currentProductId: 0
            };

        case ProductionActionTypes.LoadSuccess:
            return {
                ...state,
                products: action.payload,
                error: ''
            };

        case ProductionActionTypes.LoadFail:
            return {
                ...state,
                products: [],
                error: action.payload

            };

        case ProductionActionTypes.UpdateProductSuccess:
            const updateProducts = state.products.map(
                item => action.payload.id === item.id ? action.payload : item);
            return {
                ...state,
                products: updateProducts,
                currentProductId: action.payload.id,
                error: ''
            };

        case ProductionActionTypes.UpdateProductFail:
            return {
                ...state,
                error: action.payload

            };
        default:
         return state;
    }
}
