import { AnswerLogEntry } from '../models';
import { IAnswerLogRepository } from '../repositories';
import { IAnswerLogService } from './types';
import { injectable, inject } from 'inversify';


@injectable()
class AnswerLogService implements IAnswerLogService {
    @inject('IAnswerLogRepository') public answerLogRepository: IAnswerLogRepository;
    
    constructor() {
    }

    save(logEntry: AnswerLogEntry): Promise<AnswerLogEntry> {
        logEntry.timestamp = new Date();

        return this.answerLogRepository.save(logEntry);
    }

    clear(): Promise<void> {
        return this.answerLogRepository.clear();
    }

    getLog(): Promise<AnswerLogEntry[]> {
        return this.answerLogRepository.getAll();
    }
}

export { AnswerLogService };
