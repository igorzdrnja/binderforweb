import actionTypes from '../action-types';

export function initApp() {
    return {
        type: actionTypes.INIT_APP,
    }
};

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
