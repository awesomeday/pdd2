import { Connection } from 'typeorm/browser';
import { IRepository } from './types';
import { injectable } from 'inversify';


@injectable()
class RepositoryBase<TEntity> implements IRepository<TEntity> {
    protected connection: Connection;
    protected tableName: string;

    constructor() {
    }

    save(entry: TEntity): Promise<TEntity> {
        return this.connection.connect()
            .then(() => this.connection.getRepository(this.tableName).save(entry));
    }

    clear(): Promise<void> {
        throw new Error('not implemented');
    }

    getAll(): Promise<TEntity[]> {
        return this.connection.connect()
            .then(() => this.connection.getRepository<TEntity>(this.tableName).find());
    }
}

export { RepositoryBase };
