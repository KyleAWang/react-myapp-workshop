import { fromJS } from 'immutable';

import { LOGIN, UPDATE_USER, LOGIN_ERROR, LOGIN_SUCCESS, FORM_VALIDATE_ERROR } from './constants';

const initialState = fromJS({
  user: false,
  isRemb: false,
  loading: false,
  error: false,
  formErrors: false,
});

function userReducer(state = initialState, action) {
  switch(action.type){
    case LOGIN:
      return state
        .set('loading', true);
    case UPDATE_USER:
      return state
        .set('user', action.user)
        .set('formErrors', action.formErrors);
    case LOGIN_ERROR:
      return state
        .set('loading', false)
        .set('error', action.err);
    case LOGIN_SUCCESS:
      return state
        .set('loading', false)
        .set('user', action.user);
    case FORM_VALIDATE_ERROR:
      return state
        .set('formErrors', action.formErrors);
    default:
      return state;
  }
}

export default userReducer;
