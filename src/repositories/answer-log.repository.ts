import { AnswerLogEntry } from '../models';
import { Connection } from 'typeorm/browser';
import { IAnswerLogRepository } from './types';
import { RepositoryBase } from './repository-base';
import { injectable, inject } from 'inversify';


@injectable()
class AnswerLogRepository extends RepositoryBase<AnswerLogEntry> implements IAnswerLogRepository {
    @inject('sqliteConnection') protected connection: Connection
    constructor() {
        super();
        this.tableName = 'answerLog';
    }
}

export { AnswerLogRepository };
