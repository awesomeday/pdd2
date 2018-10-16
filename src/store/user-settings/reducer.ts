import { IUserSettingsState } from './types';
import { ColorTheme } from '../../models';
import * as ActionTypes from './constants';

const INITIAL_STATE: IUserSettingsState = {
    colorTheme: ColorTheme.Light
};

export const userSettingsReducer = (state: IUserSettingsState = INITIAL_STATE, action): IUserSettingsState => {
    switch (action.type) {
        case ActionTypes.USER_SETTINGS_SET_THEME: {
            return {
                ...state,
                colorTheme: action.payload
            };
        }

        default: {
            return state;
        }
    }
};
