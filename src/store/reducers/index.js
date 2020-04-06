import actionTypes from '../action-types';

const INITIAL_STATE = {
    profile: 'STUDENT'
}

function reducer(state = INITIAL_STATE, action) {
    switch (actionTypes.SET_PROFILE) {
        case actionTypes.SET_PROFILE:
            return {
                ...state,
                profile: action.profile || 'STUDENT',
            };
        default:
            return state
    }
}

export default reducer;
