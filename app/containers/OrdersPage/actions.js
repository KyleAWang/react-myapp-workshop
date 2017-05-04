import {
    LOAD_ORDERS,
    LOAD_ORDERS_SUCCESS,
    LOAD_ORDERS_ERROR,
    OPEN_MODAL,
    CLOS_MODAL,
} from './constants';

export function loadOrders() {
    return {
        type: LOAD_ORDERS,
    };
}

export function loadOrdersSuccess(orders) {
    return{
        type: LOAD_ORDERS_SUCCESS,
        orders,
    };
}

export function loadOrdersError(error) {
    return{
        type: LOAD_ORDERS_ERROR,
        error,
    };
}