import {fromJS} from 'immutable';

import {
    LOAD_ORDER,
    CLOSE_ORDER,
    UPDATE_SUTOTAL,
    UPDATE_ORDER,
} from './constants';

const initialState = fromJS({
    error: false,
    order: false,
    showModal: false,
});

function orderDetailReducer(state=initialState, action) {
    switch (action.type){
        case LOAD_ORDER:
            return state
                .set('order', action.order)
                .set('showModal', true);
        case CLOSE_ORDER:
            return state
                .set('order', false)
                .set('showModal', false);
        case UPDATE_SUTOTAL:
            return state
                .set('order', {
                    ...state.order,
                    subtotal: action.subtotal,
                })
                .set('showModal', true);
        case UPDATE_ORDER:
            return state
                .set('order', action.order)
                .set('showModal', true);
        default:
            return state;
    }
}

export default orderDetailReducer;