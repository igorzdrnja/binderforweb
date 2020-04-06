import actionTypes from '../action-types';

const INITIAL_STATE = {
    profile: null,
    questions: null,
};

function reducer(state = INITIAL_STATE, action) {
    switch (actionTypes.SET_PROFILE) {
        case actionTypes.SET_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case actionTypes.FETCH_QUESTIONS_SUCCESS:
            return {
                ...state,
                profile: action.questions,
            };
        default:
            return state
    }
}

export default reducer;
