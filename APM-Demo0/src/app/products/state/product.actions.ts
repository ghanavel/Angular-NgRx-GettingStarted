import { Action } from '@ngrx/store';
import { Product } from '../product';


export enum ProductionActionTypes {
 ToggleProductCode = '[Product] Toggle product code',
 SetCurrentProduct = '[Product] set current product code',
 ClearCurrentProduct = '[Product] clear current product code',
 InitialzieCurrentProduct = '[Product] initialzie current product code',
 Load = '[Product] Load',
 LoadSuccess = '[Product] Load success',
 LoadFail = '[Product] Load fail',
 UpdateProduct = '[Product] Update product',
 UpdateProductSuccess = '[Product] Update product success',
 UpdateProductFail = '[Product] Update product fail'

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

export class UpdateProduct implements Action {
    readonly type =  ProductionActionTypes.UpdateProduct;
    constructor(public payload: Product) {}
}

export class UpdateProductSuccess implements Action {
    readonly type =  ProductionActionTypes.UpdateProductSuccess;
    constructor(public payload: Product) {}
}

export class UpdateProductFail implements Action {
    readonly type =  ProductionActionTypes.UpdateProductFail;
    constructor(public payload: string) {}
}

export type ProductActions = ToggleProductCode
 | SetCurrentProduct
 | ClearCurrentProduct
 | InitialzieCurrentProduct
 | Load
 | LoadSuccess
 | LoadFail
 | UpdateProduct
 | UpdateProductSuccess
 | UpdateProductFail;
