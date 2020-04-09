import actionTypes from '../action-types';

const INITIAL_STATE = {
    profileType: null,
    currentQuestionIndex: null,
    questions: null,
    questionsSetId: null,
    correctAnswers: 0,
    communityFormData: null,
};

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actionTypes.SET_PROFILE:
            return {
                ...state,
                profileType: action.profileType,
            };
        case actionTypes.START_QUIZ:
            return {
                ...state,
                correctAnswers: 0,
            };
        case actionTypes.FETCH_QUESTIONS_SUCCESS:
            return {
                ...state,
                questions: action.questionsSet.data.Questions,
                questionsSetId: action.questionsSet.data.Id,
                currentQuestionIndex: 0,
            };
        case actionTypes.SUBMIT_ANSWER:
            return {
                ...state,
                correctAnswers: action.answer.IsCorrectAnswer ? state.correctAnswers + 1 : state.correctAnswers,
            };
        case actionTypes.SUBMIT_COMMUNITY_DATA_SUCCESS:
            return {
                ...state,
                communityFormData: action.response,
            };
        case actionTypes.GET_NEXT_QUESTION:
            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex + 1,
            };
        case actionTypes.RESET_APP_FLOW:
            return {
                ...state,
                profileType: null,
                currentQuestionIndex: null,
                questions: null,
                questionsSetId: null,
                correctAnswers: 0,
                communityFormData: null,
            };
        default:
            return state
    }
}

export default reducer;
