import { SQLiteDatabase } from 'react-native-sqlite-storage';


interface IAnswerLogRepository {
    save: (questionId: string, answerIndex: number) => void;
}

class AnswerLogRepository implements IAnswerLogRepository {
    constructor(private database: SQLiteDatabase) {
    }

    save(questionId: string, answerIndex: number) {
        // this.database.executeSql();
    }
}
