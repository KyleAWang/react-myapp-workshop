import {
    EDIT_ORDER,
    EDIT_ORDER_ERROR,
    EDIT_ORDER_SUCCESS,
    LOAD_ORDER,
    LOAD_ORDER_ERROR,
    LOAD_ORDER_SUCCESS,
} from './constants';


export function loadOrder() {
    return {
        type: LOAD_ORDER
    };
}

export function loadOrderSuccess(order) {
    return {
        type: LOAD_ORDER_SUCCESS,
        order,
    };
}

export function loadOrderError(error) {
    return {
        type: LOAD_ORDER_ERROR,
        error,
    };
}

export function editOrder(order) {
    return {
        type: EDIT_ORDER,
        order,
    };
}

export function editOrderSuccess(response) {
    return {
        type: EDIT_ORDER_SUCCESS,
        response,
    };
}

export function editOrderError(error) {
    return {
        type: EDIT_ORDER_ERROR,
        error,
    };
}