import { Action, Dispatch } from 'redux';


export type ThunkAction = (dispatch: Dispatch, getState: () => any) => any;

export interface IInjectAction<T extends Action> extends Action {
    meta: {
        inject: string[],
        fn: (...deps: any[]) => T | ThunkAction
    }
}
