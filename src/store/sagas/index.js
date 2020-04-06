import { call, put, select, delay, takeLatest, take } from 'redux-saga/effects'
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

function* initAppFlow() {
    const profile = yield select((state) => state.profile);

    yield delay(3000);

    if(!profile) {
        history.push(routes.SELECT_PROFILE);
    } else {
        history.push(routes.HOW_TO_PLAY);
    }

    const profileSet = yield take(actionTypes.SET_PROFILE);

    if (profileSet) {
        history.push(routes.HOW_TO_PLAY);
    }
}

function* rootSaga() {
    yield takeLatest(actionTypes.FETCH_QUESTIONS, fetchUser);
    yield takeLatest(actionTypes.INIT_APP, initAppFlow);
}

export default rootSaga;
