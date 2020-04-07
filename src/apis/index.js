import questionsSet from '../mock';

const Api = {
    fetchQuestions: (userId) => {
        return questionsSet;
    },
    submitQuestion: ({questionId, answer}) => {
        return {questionId, answer};
    },
};

export default Api;
