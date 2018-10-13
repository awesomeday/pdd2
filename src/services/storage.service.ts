import sqLite from 'react-native-sqlite-storage';
sqLite.enablePromise(true);

interface IStorageService {
    connect: (dbName: string) => Promise<any>;
}

class SqliteStorageService implements IStorageService {

    constructor() {
        sqLite.openDatabase({ name: 'testDb', location: 'default' })
            .then((db) => {
                
                console.log(db);
            });

        localStorage
    }
}

export {
    SqliteStorageService
}
