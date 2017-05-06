import { call, take, takeLatest, cancel, put, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';
import { LOAD_ORDERS, UPDATE_ORDER, SUBMIT_UPDATE_FORM } from './constants';
import { loadOrdersSuccess, loadOrdersError, updateSuccess, responseError, submitUpdateFormSuccess } from './actions';
import { makeSelectOrder } from './selectors';

export function* getOrders() {
    const requestURL = 'http://localhost:3000/graphql?query={orders{_id,orderId,created,subtotal,status,totalCost,totalRmbCost,items{name,url,price,quantity,subtotal},address{name,tel,zip,weight,address},shipping{no,url,status}}}';

    try{
        const orders = yield call(request, requestURL);
        console.log(orders.data.orders);
        yield put(loadOrdersSuccess(orders.data.orders));
    } catch (err){
        yield put(loadOrdersError(err));
    }
}

export function* ordersData() {
    const watcher = yield takeLatest(LOAD_ORDERS, getOrders);

    yield take(LOCATION_CHANGE);
    yield cancel(watcher);
}

export function* updateOrder () {
    const order = yield select(makeSelectOrder());
    console.log(order);
    const _order = JSON.stringify(order);
    console.log(_order);
    const requestURL = `http://localhost:3000/graphql?mutation{updateOrder(order:${_order}){_id,orderId}}`;
    console.log(requestURL);

    try {
        const orderId = yield call(request, requestURL);
        console.log(orderId);
        yield put(submitUpdateFormSuccess());
    } catch (err){
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