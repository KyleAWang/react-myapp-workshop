import { LOGIN, UPDATE_USER, LOGIN_ERROR, LOGIN_SUCCESS, FORM_VALIDATE_ERROR } from './constants';

export function login() {
  return {
    type: LOGIN,
  }
}

export function updateUser(user, formErrors) {
  return {
    type: UPDATE_USER,
    user,
    formErrors,
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

export function validateFormError(formErrors) {
  console.log('action: '+formErrors.username);
  return {
    type: FORM_VALIDATE_ERROR,
    formErrors,
  }
}
