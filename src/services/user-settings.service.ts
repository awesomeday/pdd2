import { injectable } from "inversify";
import { IUserSettingsRepository } from '../repositories/user-settings.repository';
import { IUserSettingsService } from './types';


@injectable()
export class UserSettingsService implements IUserSettingsService {
    a: number = 42;

    constructor() {
        console.log('CONSTRUCTOR!!!!');
    }
}
