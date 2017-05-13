import { fromJS } from 'immutable';

import {
    SAY_HELLO,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  content: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SAY_HELLO:
      return state
                .set('content', action.content);
    default:
      return state;
  }
}

export default appReducer;
