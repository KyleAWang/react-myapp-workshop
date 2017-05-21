import { createSelector } from 'reselect';

const selectUser = (state) => state.get('user');

const makeSelectUser = () => createSelector(
  selectUser,
  (userState) => userState.get('user'),
);

const makeSelectError = () => createSelector(
  selectUser,
  (userState) => userState.get('error'),
);

export {
  selectUser,
  makeSelectUser,
  makeSelectError,
}
