import axios from 'axios'
import store from '../store/index'

// const apiRootUrl = 'https://apigmtest.azurewebsites.net/api/Waste/'
const apiRootUrl = 'https://api.greenmoney.com.au/api/Waste/';

const Api = {
    fetchQuestions: () => {
        return axios.get(apiRootUrl + 'CreateQuizz?profileTypeId=' + store.getState().profileType)
    },
    submitQuestionAnswer: (answerData) => {
        return axios.post(apiRootUrl + 'ReportQuizAnswer', {}, {
            headers: {
                questionId: answerData.questionId,
                quizId: store.getState().quizId,
                answerId: answerData.answer.Id
            }
        });
    },
    submitQuizResult: (resultPercentage) => {
        const state = store.getState()
        return axios.post(apiRootUrl + 'FinalizeQuiz', {}, {
            headers: {
                score: (state.correctAnswers * 100 / state.questions.length).toFixed(),
                quizId: state.quizId
            }
        });
    },
    submitCommunityData: (data) => {
        return {...data};
    },
};

export default Api;
