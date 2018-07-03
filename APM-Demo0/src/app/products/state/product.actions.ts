import { Action } from '@ngrx/store';
import { Product } from '../product';
import { LoadChildren } from '@angular/router';


export enum ProductionActionTypes {
 ToggleProductCode = '[Product] Toggle product code',
 SetCurrentProduct = '[Product] set current product code',
 ClearCurrentProduct = '[Product] clear current product code',
 InitialzieCurrentProduct = '[Product] initialzie current product code',
 Load = '[Product] Load',
 LoadSuccess = '[Product] Load success',
 LoadFail = '[Product] Load fail'
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

export class Load implements Action {
    readonly type =  ProductionActionTypes.Load;
}

export class LoadSuccess implements Action {
    readonly type =  ProductionActionTypes.LoadSuccess;
    constructor(public payload: Product[]) {}
}

export class LoadFail implements Action {
    readonly type =  ProductionActionTypes.LoadFail;
    constructor(public payload: string) {}
}



export type ProductActions = ToggleProductCode
 | SetCurrentProduct
 | ClearCurrentProduct
 | InitialzieCurrentProduct
 | Load
 | LoadSuccess
 | LoadFail;
