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

export function startQuiz() {
    return {
        type: actionTypes.START_QUIZ,
    };
};

export function submitAnswer({questionId, answer}) {
    return {
        type: actionTypes.SUBMIT_ANSWER,
        questionId,
        answer,
    };
};

export function getNextQuestion() {
    return {
        type: actionTypes.GET_NEXT_QUESTION,
    };
};

export function finishQuiz() {
    return {
        type: actionTypes.QUIZ_FINISHED,
    };
};

export function resetApp() {
    return {
        type: actionTypes.RESET_APP_FLOW,
    };
};

export function submitCommunityData(communityData) {
    return {
        type: actionTypes.SUBMIT_COMMUNITY_DATA,
        payload: {
            communityData,
        },
    };
};
