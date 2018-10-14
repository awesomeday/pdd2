import { Connection } from 'typeorm/browser';


export interface IConnectionProvider {
    getConnection: () => Promise<Connection>
}