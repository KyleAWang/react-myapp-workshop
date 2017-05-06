import {
    LOAD_ORDERS,
    LOAD_ORDERS_SUCCESS,
    LOAD_ORDERS_ERROR,
    OPEN_MODAL,
    CLOS_MODAL,
    LOAD_ORDER,
    CLOSE_ORDER,
    UPDATE_SUTOTAL,
    UPDATE_ORDER,
    RESPONSE_ERROR,
    SUBMIT_UPDATE_FORM,
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


export function loadOrder(order) {
    return {
        type: LOAD_ORDER,
        order,
    }
}

export function closeOrder() {
    return {
        type: CLOSE_ORDER,
    }
}

export function changeSubtotal(subtotal) {
    return {
        type: UPDATE_SUTOTAL,
        subtotal,
    }
}

export function updateOrder(order) {
    console.log('updateOrder:', order);
    return {
        type: UPDATE_ORDER,
        order,
    }
}

export function submitUpdateFormSuccess() {
    return{
        type: SUBMIT_UPDATE_FORM_SUCCESS,
    }
}

export function responseError(err) {
    return {
        type: RESPONSE_ERROR,
        err,
    }
}

export function submitUpdateForm(order) {
    return {
        type: SUBMIT_UPDATE_FORM,
        order,
    }
}