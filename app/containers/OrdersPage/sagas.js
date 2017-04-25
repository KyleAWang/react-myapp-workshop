import { call, take, takeLatest, cancel, put } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';
import { LOAD_ORDERS } from './constants';
import { loadOrdersSuccess, loadOrdersError } from './actions';

export function* getOrders() {
    const requestURL = 'http://localhost:3000/graphql?query={orders{orderId,created,subtotal,status,items{name,url,price,quantity,subtotal},address{name,tel,zip,weight,address},shipping{no,url,status}}}';

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

export default [
    ordersData,
];