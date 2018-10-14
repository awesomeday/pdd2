import { Action, Dispatch } from 'redux';

import { INJECT_DEPENDENCIES } from './redux-inject.constants';
import { IInjectAction, ThunkAction } from './types';


/**
 * @description
 * Creates an action object handled by redux-inject middleware
 *
 * @param dependencies One or more dependencies
 * @param injectable Function to be provided with the dependencies
 * @returns Action object
 */
const inject = <T extends Action>(
    dependencies: string | string[], injectable: (...deps: any[]) => T | ThunkAction): IInjectAction<T> => {
        return {
            type: INJECT_DEPENDENCIES,
            meta: {
                inject: Array.isArray(dependencies) ? dependencies : [dependencies],
                fn: injectable
            }
        };
    };

export { inject };
