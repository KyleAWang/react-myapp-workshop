import { call, take, takeLatest, cancel, put, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';
import { LOAD_ORDERS, UPDATE_ORDER } from './constants';
import { loadOrdersSuccess, loadOrdersError, updateSuccess, responseError } from './actions';
import { makeSelectOrder } from 'containers/OrderDetail/selectors';

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

export default [
    ordersData,
];