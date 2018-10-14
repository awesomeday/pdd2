import { injectable, inject } from 'inversify';

import { AnswerLogEntry } from '../models';
import { IAnswerLogRepository } from './types';
import { RepositoryBase } from './repository-base';
import { IConnectionProvider } from '../core/services';


@injectable()
class AnswerLogRepository extends RepositoryBase<AnswerLogEntry> implements IAnswerLogRepository {
    @inject('IConnectionProvider') protected connectionProvider: IConnectionProvider

    constructor() {
        super();
        this.tableName = 'answerLog';
    }
}

export { AnswerLogRepository };
