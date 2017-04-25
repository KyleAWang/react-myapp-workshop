import {fromJS} from 'immutable';

import {
    LOAD_ORDER,
    LOAD_ORDER_SUCCESS,
    LOAD_ORDER_ERROR,
    EDIT_ORDER_ERROR,
    EDIT_ORDER,
    EDIT_ORDER_SUCCESS
} from './constants';

const initialState = fromJS({
    loading: false,
    error: false,
    order: false,
    response: false,
});

function orderDetailReducer(state=initialState, action) {
    switch (action.type){
        case LOAD_ORDER:
            return state
                .set('loading', true);
        case LOAD_ORDER_SUCCESS:
            return state
                .set('loading', false)
                .set('order', action.order);
        case LOAD_ORDER_ERROR:
            return state
                .set('loading', false)
                .set('error', action.error);
        case EDIT_ORDER:
            return state
                .set('loading', false);
        case EDIT_ORDER_SUCCESS:
            return state
                .set('loading', false)
                .set('response', order.response)
        case EDIT_ORDER_ERROR:
            return state
                .set('loading', false)
                .set('error', action.error);
        default:
            return state;
    }
}

export default orderDetailReducer;