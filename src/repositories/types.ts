import { AnswerLogEntry } from "../models/answer-log-entry.model";

export interface IRepository<TEntity> {
    save: (entry: TEntity) => Promise<TEntity>;
    clear(): Promise<void>;
    getAll(): Promise<TEntity[]> 
}

export interface IAnswerLogRepository extends IRepository<AnswerLogEntry> {
}
