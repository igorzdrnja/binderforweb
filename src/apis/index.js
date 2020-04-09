import axios from 'axios'
import store from '../store/index'

const apiRootUrl = 'http://apigmtest.azurewebsites.net/api/Waste/'


const Api = {
    fetchQuestions: () => {
        return axios.get(apiRootUrl + 'CreateQuizz?profileTypeId=' + store.getState().profileType)
    },
    submitQuestion: ({questionId, answer}) => {
        return {questionId, answer};
    },
    submitCommunityData: (data) => {
        return {...data};
    },
};

export default Api;
