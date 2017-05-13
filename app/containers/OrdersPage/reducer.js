import { fromJS } from 'immutable';
import {
    LOAD_ORDERS,
    LOAD_ORDERS_SUCCESS,
    LOAD_ORDERS_ERROR,
    LOAD_ORDER,
    CLOSE_ORDER,
    UPDATE_SUTOTAL,
    UPDATE_ORDER,
    SUBMIT_UPDATE_FORM,
    RESPONSE_ERROR,
    SUBMIT_UPDATE_FORM_SUCCESS,
} from './constants';


const initialState = fromJS({
  loading: false,
  error: false,
  orders: false,
  item: false,
  showModal: false,
  order: false,
});

function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ORDERS:
      return state
                .set('loading', false);
    case LOAD_ORDERS_SUCCESS:
      return state
                .set('loading', true)
                .set('orders', action.orders);
    case LOAD_ORDERS_ERROR:
      return state
                .set('loading', false)
                .set('error', action.error);
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
    case SUBMIT_UPDATE_FORM:
      return state
                .set('showModal', true);
    case SUBMIT_UPDATE_FORM_SUCCESS:
      return state
                .set('showModal', false);
    case RESPONSE_ERROR:
      return state
                .set('showModal', true)
                .set('error', action.err);
    default:
      return state;
  }
}

export default ordersReducer;
