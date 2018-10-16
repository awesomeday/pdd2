import { injectable } from "inversify";
import { IUserSettingsService } from './types';
import { ColorTheme } from '../models';
import { UserSettings } from '../models/user-settings.model';


@injectable()
export class UserSettingsService implements IUserSettingsService {
    saveTheme(theme: ColorTheme): Promise<UserSettings> {
        return Promise.resolve<UserSettings>({ colorTheme: theme });
    }
}
