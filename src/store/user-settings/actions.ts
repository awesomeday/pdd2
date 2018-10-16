import { inject } from '../../core/redux-inject/redux-inject.action-creator';
import { ColorTheme } from '../../models';
import { IUserSettingsService } from '../../services';
import * as ActionTypes from './constants';


const setTheme = (theme: ColorTheme) => inject(
    'IUserSettingsService', 
    
    (userSettingsService: IUserSettingsService) => (dispatch) => {
        userSettingsService.saveTheme(theme);
        dispatch({ type: ActionTypes.USER_SETTINGS_SET_THEME, payload: theme });
    }
);

export { setTheme };
