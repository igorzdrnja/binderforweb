import { call, put, delay, takeLatest, take, race } from 'redux-saga/effects'
import actionTypes from '../action-types';
import routes from '../../routing/routes';
import history from '../../routing/history';
import Api from '../../apis';

function* fetchQuestions(action) {
    try {
        yield put({type: actionTypes.FETCH_QUESTIONS_REQUEST});

        const questionsSet = yield call(Api.fetchQuestions);
        yield put({type: actionTypes.FETCH_QUESTIONS_SUCCESS, questionsSet});
    } catch (e) {
        yield put({type: actionTypes.FETCH_QUESTIONS_ERROR, message: e.message});
    }
}

function* submitQuestion(action) {
    try {
        yield put({type: actionTypes.SUBMIT_ANSWER_REQUEST});

        yield delay(1500);
        const submitedQuestionResponse = yield call(Api.submitQuestion, action);
        yield put({type: actionTypes.SUBMIT_ANSWER_SUCCESS, submitedQuestionResponse});
    } catch (e) {
        yield put({type: actionTypes.SUBMIT_ANSWER_ERROR, message: e.message});
    }
}

function* appFlow() {
    history.push(routes.SELECT_PROFILE);
    const setProfile = yield take(actionTypes.SET_PROFILE);
    if (setProfile) {
        history.push(routes.HOW_TO_PLAY);
    }

    const {startQuiz, resetAppFlow} = yield race({
        startQuiz: take(actionTypes.START_QUIZ),
        resetAppFlow: take(actionTypes.RESET_APP_FLOW),
    });

    if (startQuiz) {
        history.push(routes.QUESTION);
    }

    if (resetAppFlow) {
        return;
    }

    const quizFinished = yield take(actionTypes.QUIZ_FINISHED);
    if (quizFinished) {
        history.push(routes.SCORE);
    }
}

function* initAppFlow() {
    history.push(routes.SPLASH_SCREEN);

    yield delay(3000);

    yield call(appFlow);
}

function* quizFlow() {
    yield call(fetchQuestions);
}

function* rootSaga() {
    yield takeLatest(actionTypes.FETCH_QUESTIONS, fetchQuestions);
    yield takeLatest(actionTypes.INIT_APP, initAppFlow);
    yield takeLatest(actionTypes.START_QUIZ, quizFlow);
    yield takeLatest(actionTypes.SUBMIT_ANSWER, submitQuestion);
    yield takeLatest(actionTypes.RESET_APP_FLOW, appFlow);
}

export default rootSaga;
