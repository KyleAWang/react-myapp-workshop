import { createSelector } from 'reselect';

const selectOrders = (state) => state.get('orders');

const makeSelectOreders = () => createSelector(
    selectOrders,
    (ordersState) => ordersState.get('orders'),
);

// const selectOrder = (state) => state.get('order');

const makeSelectOrder = () => createSelector(
    selectOrders,
    (ordersState) => ordersState.get('order'),
);

const makeSelectShowModal = () => createSelector(
    selectOrders,
    (ordersState) => ordersState.get('showModal'),
);

export {
    selectOrders,
    makeSelectOreders,
    // selectOrder,
    makeSelectShowModal,
    makeSelectOrder,
};
