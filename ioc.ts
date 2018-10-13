import { Container } from "inversify";
import { UserSettingsService } from './src/services/user-settings.service';

import { IUserSettingsService } from './src/services/types';

import { TYPES } from './src/types';


const container = new Container();
container.bind<IUserSettingsService>(TYPES.userSettingsService).to(UserSettingsService);

export { container };
