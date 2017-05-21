import { call, put, takeLatest, cancel, select, take } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';
import { browserHistory } from 'react-router';

import { LOGIN } from './constants';
import { makeSelectUser } from './selectors';
import { loginError, loginSuccess } from './actions';


export function* login() {
  const requestURL = 'http://localhost:3000/api/auth/signin';
  const user = yield select(makeSelectUser());
  console.log('string', JSON.stringify(user));
  const optinos = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  };
  try{
    const response = yield call(request, requestURL, optinos);
    console.log(response);
    yield put(loginSuccess(response));
    browserHistory.push('/');
  } catch (err){
    console.log(err.response);
    yield put(loginError(err));
  }
}

export function* loginData() {
  const watcher = yield takeLatest(LOGIN, login);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  loginData,
]
