import { createSelector } from 'reselect';

const selectOrder = (state) => state.get('order');

const makeSelectOrder = () => createSelector(
    selectOrder,
    (orderState) => orderState.get('order'),
);

const makeSelectShowModal = () => createSelector(
    selectOrder,
    (orderState) => orderState.get('showModal'),
);

export {
    selectOrder,
    makeSelectShowModal,
    makeSelectOrder,
}