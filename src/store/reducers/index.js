import actionTypes from '../action-types';

const INITIAL_STATE = {
    profile: null,
    currentQuestionIndex: null,
    questions: null,
    questionsSetId: null,
    correctAnswers: 0,
};

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actionTypes.SET_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case actionTypes.START_QUIZ:
            return {
                ...state,
                correctAnswers: 0,
            };
        case actionTypes.FETCH_QUESTIONS_SUCCESS:
            // console.log("FETCH_QUESTIONS_SUCCESS", action)
            return {
                ...state,
                // questions: action.questions,
                questions: action.questionsSet.Questions,
                questionsSetId: action.questionsSet.Id,
                currentQuestionIndex: 0,
            };
        case actionTypes.SUBMIT_ANSWER:
            console.log(action);
            return {
                ...state,
                correctAnswers: action.answer.IsCorrectAnswer ? state.correctAnswers + 1 : state.correctAnswers,
                // currentQuestionIndex: state.currentQuestionIndex + 1,
            };
        case actionTypes.GET_NEXT_QUESTION:
            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex + 1,
            };
        default:
            return state
    }
}

export default reducer;
