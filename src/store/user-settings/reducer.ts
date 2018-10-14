import { IUserSettingsState } from './types';
import { ColorTheme } from '../../models';

const INITIAL_STATE: IUserSettingsState = {
    colorTheme: ColorTheme.Light
};

export const userSettingsReducer = (state: IUserSettingsState = INITIAL_STATE, action): IUserSettingsState => {
    return state;
};
