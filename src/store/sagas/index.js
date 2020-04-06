import { call, put, select, delay, takeLatest, take, race } from 'redux-saga/effects'
import actionTypes from '../action-types';
import routes from '../../routing/routes';
import history from '../../routing/history';
import Api from '../../apis';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
    try {
        yield put({type: actionTypes.FETCH_QUESTIONS_REQUEST});

        const user = yield call(Api.fetchUser, action.payload.userId);
        yield put({type: actionTypes.FETCH_QUESTIONS_SUCCESS, user: user});
    } catch (e) {
        yield put({type: actionTypes.FETCH_QUESTIONS_ERROR, message: e.message});
    }
}

function* masterAppFlow() {
    history.push(routes.SPLASH_SCREEN);
    const profile = yield select((state) => state.profile);

    yield delay(3000);

    if(!profile) {
        history.push(routes.SELECT_PROFILE);
    } else {
        history.push(routes.HOW_TO_PLAY);
    }

    if(!profile) {
        history.push(routes.SELECT_PROFILE);
    } else {
        history.push(routes.HOW_TO_PLAY);
    }

    // const {setProfile, startQuiz, quizFinished} = yield race({
    //     setProfile: actionTypes.SET_PROFILE,
    //     startQuiz: actionTypes.START_QUIZ,
    //     quizFinished: actionTypes.QUIZ_FINISHED
    // });
    // console.log({setProfile, startQuiz, quizFinished})

    const setProfile = yield take(actionTypes.SET_PROFILE);
    if (setProfile) {
        history.push(routes.HOW_TO_PLAY);
    }

    const startQuiz = yield take(actionTypes.START_QUIZ);
    if (startQuiz) {
        history.push(routes.QUESTION);
    }

    const quizFinished = yield take(actionTypes.QUIZ_FINISHED);
    if (quizFinished) {
        history.push(routes.SCORE);
    }
}

function* quizFlow() {
    console.log('START QUIZ FLOW')
}

function* rootSaga() {
    yield takeLatest(actionTypes.FETCH_QUESTIONS, fetchUser);
    yield takeLatest(actionTypes.INIT_APP, masterAppFlow);
    yield takeLatest(actionTypes.START_QUIZ, quizFlow);
}

export default rootSaga;
