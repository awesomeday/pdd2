import { Container } from 'inversify';
import { Connection, getConnectionManager } from 'typeorm/browser';

import { IAnswerLogService, AnswerLogService } from './src/services';
import { IAnswerLogRepository, AnswerLogRepository } from './src/repositories';

import { AnswerLogEntry } from './src/models';
import { ConnectionProvider, IConnectionProvider } from './src/core/services';


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

const connectionProvider = new ConnectionProvider(sqliteConnection);

container.bind<IConnectionProvider>('IConnectionProvider').toConstantValue(connectionProvider);
container.bind<IAnswerLogRepository>('IAnswerLogRepository').to(AnswerLogRepository).inSingletonScope();
container.bind<IAnswerLogService>('IAnswerLogService').to(AnswerLogService).inSingletonScope();

export { container };
