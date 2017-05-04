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


export {
    selectOrders,
    makeSelectOreders,
};