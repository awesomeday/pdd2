import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm/browser';

@Entity('answerLog')
class AnswerLogEntry {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'datetime', default: () => "NOW()" })
    timestamp?: Date;

    @Column('varchar')
    questionId: string;

    @Column('tinyint')
    answerIndex: number;
}

export { AnswerLogEntry };
