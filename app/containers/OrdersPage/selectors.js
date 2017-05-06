import { createSelector } from 'reselect';

const selectOrders = (state) => state.get('orders');

const makeSelectOreders = () => createSelector(
    selectOrders,
    (ordersState) => ordersState.get('orders'),
);

const makeSelectItem = () => createSelector(
    selectOrders,
    (selectOrders) => selectOrders.get('item'),
);


// const selectOrder = (state) => state.get('order');

const makeSelectOrder = () => createSelector(
    selectOrders,
    (selectOrders) => selectOrders.get('order'),
);

const makeSelectShowModal = () => createSelector(
    selectOrders,
    (selectOrders) => selectOrders.get('showModal'),
);

export {
    selectOrders,
    makeSelectOreders,
    // selectOrder,
    makeSelectShowModal,
    makeSelectOrder,
};