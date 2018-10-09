export interface IQuestion {
    id: string,
    ticketId: string,
    order: number,
    hasImage: boolean,
    questionText: string,
    answers: string[],
    rightAnswerIndex: number,
    topicId: string
}

const topics = {
    common: { id: 'common', title: 'Общие положения' }
};

export const questions: IQuestion[] = [
    {
        id: 'bt0q0',
        ticketId: 'bt0',
        order: 0,
        hasImage: false,
        questionText: 'В каком случае водитель совершит вынужденную остановку?',
        answers: [
            'Остановившись непосредственно перед пешеходным переходом, чтобы уступить дорогу пешеходу.',
            'Остановившись на проезжей части из-за технической неисправности транспортного средства.',
            'В обоих перечисленных случаях.'
        ],
        rightAnswerIndex: 1,
        topicId: topics.common.id
    }
];
