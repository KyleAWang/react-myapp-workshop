import { LOGIN, UPDATE_USER, LOGIN_ERROR, LOGIN_SUCCESS } from './constants';

export function login() {
  return {
    type: LOGIN,
  }
}

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    user,
  }
}

export function loginError(err) {
  return {
    type: LOGIN_ERROR,
    err
  }
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  }
}
