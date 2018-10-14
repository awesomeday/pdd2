import { IConnectionProvider } from '../core/services';
import { IRepository } from './types';
import { injectable } from 'inversify';


@injectable()
class RepositoryBase<TEntity> implements IRepository<TEntity> {
    protected connectionProvider: IConnectionProvider;
    protected tableName: string;

    constructor() {
    }

    save(entry: TEntity): Promise<TEntity> {
        return this.connect()
            .then((connection) => connection.getRepository(this.tableName).save(entry));
    }

    clear(): Promise<void> {
        throw new Error('not implemented');
    }

    getAll(): Promise<TEntity[]> {
        return this.connect()
            .then((connection) => connection.getRepository<TEntity>(this.tableName).find());
    }

    private connect() {
        return this.connectionProvider.getConnection();
    }
}

export { RepositoryBase };
