import questionsSet from '../mock';

const Api = {
    fetchUser: (userId) => {
        console.log(userId);
        return questionsSet;
    },
    submitQuestion: ({questionId, answer}) => {
        console.log("SUBMIT ANSWER");
        return {questionId, answer};
    },
};

export default Api;
