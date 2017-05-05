import { call, take, takeLatest, cancel, put, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';
import { UPDATE_ORDER } from './constants';
import { updateSuccess, responseError } from './actions';
import { makeSelectOrder } from './selectors';

export function* updateOrder () {
    const order = select(makeSelectOrder);
    const requestURL = `http://localhost:3000/graphql?mutation{updateOrder(order:${order}){orderId}}`;

    try {
        const orderId = yield call(request, requestURL);
        console.log(orderId);
        yield put(updateSuccess());
    } catch (err){
        yield put(responseError(err));
    }
}

export function* updateOrderData() {
    const watcher = yield takeLatest(UPDATE_ORDER, updateOrder);
    yield take(LOCATION_CHANGE);
    yield cancel(watcher);
}

export default [
    updateOrderData,
];