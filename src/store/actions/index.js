import actionTypes from '../action-types';

export function setProfile(profile) {
    return {
        type: actionTypes.SET_PROFILE,
        profile
    }
};

export function fetchQuestions() {
    return {
        type: actionTypes.FETCH_QUESTIONS,
    };
};
