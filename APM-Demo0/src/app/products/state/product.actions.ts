import { Action } from '@ngrx/store';
import { Product } from '../product';


export enum ProductionActionTypes {
 ToggleProductCode = '[Product] Toggle product code',
 SetCurrentProduct = '[Product] set current product code',
 ClearCurrentProduct = '[Product] clear current product code',
 InitialzieCurrentProduct = '[Product] initialzie current product code'
}

export class ToggleProductCode implements Action {
    readonly type =  ProductionActionTypes.ToggleProductCode;

    constructor(public payload: boolean) {}
}

export class SetCurrentProduct implements Action {
    readonly type =  ProductionActionTypes.SetCurrentProduct;

    constructor(public payload: Product) {}
}


export class ClearCurrentProduct implements Action {
    readonly type =  ProductionActionTypes.ClearCurrentProduct;
}


export class InitialzieCurrentProduct implements Action {
    readonly type =  ProductionActionTypes.InitialzieCurrentProduct;
}

export type ProductActions  = ToggleProductCode | SetCurrentProduct | ClearCurrentProduct| InitialzieCurrentProduct;
