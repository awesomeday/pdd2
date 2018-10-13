import { Container } from 'inversify';
import { Connection, getConnectionManager } from 'typeorm/browser';

import { IAnswerLogService, AnswerLogService } from './src/services';
import { IAnswerLogRepository, AnswerLogRepository } from './src/repositories';

import { AnswerLogEntry } from './src/models';


const container = new Container();
const sqliteConnection: Connection = getConnectionManager().create({
    type: 'react-native',
    database: 'awsmdPdd',
    location: 'default',
    logging: ['error', 'query', 'schema'],
    synchronize: true,
    entities: [
        AnswerLogEntry
    ]
});

container.bind<Connection>('sqliteConnection').toConstantValue(sqliteConnection);

// container.bind<string>('sqliteConnection').toConstantValue('hello');
container.bind<IAnswerLogRepository>('answerLogRepository').to(AnswerLogRepository).inSingletonScope();
container.bind<IAnswerLogService>('answerLogService').to(AnswerLogService).inSingletonScope();




export { container };
