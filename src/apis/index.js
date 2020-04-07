import questionsSet from '../mock';

const Api = {
    fetchQuestions: (userId) => {
        return questionsSet;
    },
    submitQuestion: ({questionId, answer}) => {
        return {questionId, answer};
    },
    submitCommunityData: (data) => {
        return {...data};
    },
};

export default Api;
