import { Connection } from 'typeorm/browser';
import { IConnectionProvider } from './types';


class ConnectionProvider implements IConnectionProvider {
    private connectionPromise: Promise<Connection>;

    constructor(connection: Connection) {
        this.connectionPromise = connection.connect();
    }

    getConnection(): Promise<Connection> {
        return this.connectionPromise;
    }
}

export { ConnectionProvider };
