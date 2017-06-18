import { call, take, takeLatest, cancel, put, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';
import { LOAD_ORDERS, SUBMIT_UPDATE_FORM } from './constants';
import { loadOrdersSuccess, loadOrdersError, responseError, submitUpdateFormSuccess } from './actions';
import { makeSelectOrder } from './selectors';

export function* getOrders() {
  const requestURL = '/graphql?query={orders{_id,orderId,created,subtotal,status,totalCost,totalRmbCost,items{name,url,price,quantity,subtotal},address{name,tel,zip,weight,address},shipping{no,url,status}}}';

  try {
    const orders = yield call(request, requestURL);
    console.log('orders here');
    yield put(loadOrdersSuccess(orders.data.orders));
  } catch (err) {
    yield put(loadOrdersError(err));
  }
}

export function* ordersData() {
  const watcher = yield takeLatest(LOAD_ORDERS, getOrders);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* updateOrder() {
  const order = yield select(makeSelectOrder());
  const ord = JSON.stringify(order);
  const requestURL = `/graphql?mutation{updateOrder(order:${ord}){_id,orderId}}`;


  try {
    yield call(request, requestURL);
    yield put(submitUpdateFormSuccess());
  } catch (err) {
    yield put(responseError(err));
  }
}

export function* updateOrderData() {
  const watcher = yield takeLatest(SUBMIT_UPDATE_FORM, updateOrder);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  ordersData,
  updateOrderData,
];
