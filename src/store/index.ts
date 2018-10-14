import { createStore, combineReducers, applyMiddleware } from 'redux';
import { answersReducer } from './answers/reducer';
import { InjectMiddleware } from '../core/redux-inject';
import { container } from '../../ioc';
import { userSettingsReducer } from './user-settings/reducer';


const rootReducer = combineReducers({
    answers: answersReducer,
    userSettings: userSettingsReducer
});

export const store = createStore(rootReducer, undefined, applyMiddleware(InjectMiddleware(container)));
