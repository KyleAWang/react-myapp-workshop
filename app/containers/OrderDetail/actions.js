import {
    LOAD_ORDER,
    CLOSE_ORDER,
    UPDATE_SUTOTAL,
    UPDATE_ORDER,
} from './constants'

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
    return {
        type: UPDATE_ORDER,
        order,
    }
}