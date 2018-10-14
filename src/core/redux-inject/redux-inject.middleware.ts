import { Container } from 'inversify';
import { Action } from 'redux';
import { INJECT_DEPENDENCIES } from './redux-inject.constants';
import { IInjectAction } from './types';


const InjectMiddleware = (container: Container) => {
    return ({ dispatch, getState }) => (next) => (action: IInjectAction<Action>) => {

        if (action.type !== INJECT_DEPENDENCIES) {
            return next(action);
        }

        const deps = action.meta.inject.map((dependency) => container.get(dependency));

        const actionResult = action.meta.fn.call(null, ...deps);

        // if it's a thunk
        if (typeof actionResult === 'function') {
            return actionResult(dispatch, getState);
        }

        return next(actionResult);
    };
};

export { InjectMiddleware };
