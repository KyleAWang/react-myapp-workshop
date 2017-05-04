import { fromJS } from 'immutable';
import { LOAD_ORDERS, LOAD_ORDERS_SUCCESS, LOAD_ORDERS_ERROR, OPEN_MODAL, CLOS_MODAL } from './constants';


const initialState = fromJS({
    loading: false,
    error: false,
    orders: false,
    item: false,
    showModal: false,
});

function ordersReducer(state = initialState, action) {
    switch (action.type){
        case LOAD_ORDERS:
            return state
                .set('loading', false);
        case  LOAD_ORDERS_SUCCESS:
            return state
                .set('loading', true)
                .set('orders', action.orders);
        case LOAD_ORDERS_ERROR:
            return state
                .set('loading', false)
                .set('error', action.error);
        default:
            return state;
    }
}

export default ordersReducer;