import { AnswerLogEntry } from "../models/answer-log-entry.model";
import { ColorTheme } from "../models";
import { UserSettings } from "../models/user-settings.model";


export interface IUserSettingsService {
    saveTheme(theme: ColorTheme): Promise<UserSettings>;
}

export interface IAnswerLogService {
    save(logEntry: AnswerLogEntry): Promise<AnswerLogEntry>;
    clear(): Promise<void>;
    getLog(): Promise<AnswerLogEntry[]>
}
