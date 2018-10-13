import { AnswerLogEntry } from "../models/answer-log-entry.model";


export interface IUserSettingsService {
    a: number;
}

export interface IAnswerLogService {
    save(logEntry: AnswerLogEntry): Promise<AnswerLogEntry>;
    clear(): Promise<void>;
    getLog(): Promise<AnswerLogEntry[]>
}
