import { cancel, take, put, takeLatest } from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/lib/utils';
import { LOCATION_CHANGE } from 'react-router-redux';

import { getOrders, ordersData, updateOrder, updateOrderData } from '../sagas';
import { loadOrdersSuccess, loadOrdersError, submitUpdateFormSuccess, responseError } from '../actions';
import { LOAD_ORDERS, SUBMIT_UPDATE_FORM } from '../constants';


describe('getOrders Saga', () => {
  let getOrdersGenerator;

  beforeEach(() => {
    getOrdersGenerator = getOrders();

    const callDescriptor = getOrdersGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch loadOrdersSuccess action if order loaded successfully', () => {
    const response = orders;
    const putDescriptor = getOrdersGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(loadOrdersSuccess(orders.data.orders)));
  });

  it('should dispatch loadOrdersError action if the response errors', () => {
    const response = new Error('some errors');
    const putDescriptor = getOrdersGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(loadOrdersError(response)));
  });
});

describe('ordersData Saga', () => {
  const ordersDataSaga = ordersData();
  const mockedTask = createMockTask();

  it('should start task to watch LOAD_ORDERS action', () => {
    const takeLatestDescriptor = ordersDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_ORDERS, getOrders));
  });

  it('should yield until LOCATION_CHANGE action', () => {
    const takeDescriptor = ordersDataSaga.next(mockedTask).value;
    expect(takeDescriptor).toEqual(take(LOCATION_CHANGE));
  });

  it('should cancel the forked task when LOCATION_CHANGE happens', () => {
    const cancelDescriptor = ordersDataSaga.next().value;
    expect(cancelDescriptor).toEqual(cancel(mockedTask));
  });
});

describe('updateOrder Saga', () => {
  let updateOrderGenerator;

  beforeEach(() => {
    updateOrderGenerator = updateOrder();

    const selectDescriptor = updateOrderGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = updateOrderGenerator.next(order).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch submitUpdateFormSuccess action if update successfully', () => {
    const putDescriptor = updateOrderGenerator.next().value;
    expect(putDescriptor).toEqual(put(submitUpdateFormSuccess()));
  });

  it('should dispatch error action if response error', () => {
    const error = new Error('some errors');
    const putDescriptor = updateOrderGenerator.throw(error).value;
    expect(putDescriptor).toEqual(put(responseError(error)));
  });
});

describe('updateOrderData Saga', () => {
  const updateOrderDataSaga = updateOrderData();
  const mockedTask = createMockTask();

  it('should start task to watch SUBMIT_UPDATE_FORM action', () => {
    const takeLatestDescriptor = updateOrderDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(SUBMIT_UPDATE_FORM, updateOrder));
  });

  it('should yield until LOCATION_CHANGE action', () => {
    const takeDescriptor = updateOrderDataSaga.next(mockedTask).value;
    expect(takeDescriptor).toEqual(take(LOCATION_CHANGE));
  });

  it('should cancel the forked task when LOCATION_CHANGE happens', () => {
    const cancelDescriptor = updateOrderDataSaga.next().value;
    expect(cancelDescriptor).toEqual(cancel(mockedTask));
  });
});

const order = {
  _id: '5912937e07835c3ea03186e7',
  orderId: '20160703202175',
  created: '2017-05-17T00:00:00.000Z',
  subtotal: 110.29,
  status: 'Customers',
  totalCost: 109.29,
  totalRmbCost: 519.8,
  items: [
    {
      name: 'Bio Island 幼儿童补锌咀嚼片宝宝锌片120粒提高免疫增强食欲',
      url: 'http://www.wellcome.co.nz/product-1877.html',
      price: 17.85,
      quantity: 1,
      subtotal: 17.85,
    },
    {
      name: 'SUSTAGEN 医院配方营养粉奶粉 老人孕妇体弱适用 840克 香草味 可直邮回国',
      url: 'http://www.wellcome.co.nz/product-1294.html',
      price: 25.8,
      quantity: 1,
      subtotal: 25.8,
    },
    {
      name: 'Ecostore 实木婴儿洗护礼盒 大号七件套',
      url: 'http://www.wellcome.co.nz/product-1759.html',
      price: 64.64,
      quantity: 1,
      subtotal: 64.64,
    },
  ],
  address: {
    name: '张',
    tel: '158018',
    zip: '200093',
    weight: 3880,
    address: '中国上海市杨浦区控江401',
  },
  shipping: [
    {
      no: 'EF516295687NZ',
      url: 'http://member.efspost.net/cgi-bin/GInfo.dll?EmmisTrack?cno=EF516295687NZ',
      status: 'Signed',
    },
    {
      no: 'EF516295688NZ',
      url: 'http://member.efspost.net/cgi-bin/GInfo.dll?EmmisTrack?cno=EF516295688NZ',
      status: 'Signed',
    },
  ],
};

const orders = { data: { orders: [
  {
    _id: '5912937e07835c3ea03186e7',
    orderId: '20160703202175',
    created: '2017-05-17T00:00:00.000Z',
    subtotal: 110.29,
    status: 'Customers',
    totalCost: 109.29,
    totalRmbCost: 519.8,
    items: [
      {
        name: 'Bio Island 幼儿童补锌咀嚼片宝宝锌片120粒提高免疫增强食欲',
        url: 'http://www.wellcome.co.nz/product-1877.html',
        price: 17.85,
        quantity: 1,
        subtotal: 17.85,
      },
      {
        name: 'SUSTAGEN 医院配方营养粉奶粉 老人孕妇体弱适用 840克 香草味 可直邮回国',
        url: 'http://www.wellcome.co.nz/product-1294.html',
        price: 25.8,
        quantity: 1,
        subtotal: 25.8,
      },
      {
        name: 'Ecostore 实木婴儿洗护礼盒 大号七件套',
        url: 'http://www.wellcome.co.nz/product-1759.html',
        price: 64.64,
        quantity: 1,
        subtotal: 64.64,
      },
    ],
    address: {
      name: '张',
      tel: '158018',
      zip: '200093',
      weight: 3880,
      address: '中国上海市杨浦区控江401',
    },
    shipping: [
      {
        no: 'EF516295687NZ',
        url: 'http://member.efspost.net/cgi-bin/GInfo.dll?EmmisTrack?cno=EF516295687NZ',
        status: 'Signed',
      },
      {
        no: 'EF516295688NZ',
        url: 'http://member.efspost.net/cgi-bin/GInfo.dll?EmmisTrack?cno=EF516295688NZ',
        status: 'Signed',
      },
    ],
  },
  {
    _id: '57ff54da5cc6b3982367bbb3',
    orderId: '20161013219597',
    created: '2016-10-13T09:30:00.000Z',
    subtotal: 59.17,
    status: null,
    totalCost: 59.17,
    totalRmbCost: 289.94,
    items: [
      {
        name: 'Merino 绵羊油深层滋润润肤霜 500克',
        url: 'http://www.wellcome.co.nz/product-1015.html',
        price: 14,
        quantity: 1,
        subtotal: 14,
      },
      {
        name: 'Bioisland 婴幼儿全天然液体纯乳钙 90粒',
        url: 'http://www.wellcome.co.nz/product-2107.html',
        price: 19.87,
        quantity: 1,
        subtotal: 19.87,
      },
      {
        name: 'Ecostore 纯天然温和 羊奶薰衣草宝宝皂 80克',
        url: 'http://www.wellcome.co.nz/product-1089.html',
        price: 2.22,
        quantity: 1,
        subtotal: 2.22,
      },
      {
        name: 'Ecostore 植物精华泡沫洗手液 250毫升 (葡萄柚薄荷)',
        url: 'http://www.wellcome.co.nz/product-1763.html',
        price: 4.78,
        quantity: 1,
        subtotal: 4.78,
      },
      {
        name: 'Ecostore 植物精华泡沫洗手液补充装 500毫升 (小黄瓜佛手柑)',
        url: 'http://www.wellcome.co.nz/product-1518.html',
        price: 6.27,
        quantity: 1,
        subtotal: 6.27,
      },
    ],
    address: {
      name: '彭',
      tel: '0086158008',
      zip: null,
      weight: 2015,
      address: '中国上海宝山区松兰',
    },
    shipping: [
      {
        no: 'EF516489305NZ',
        url: 'http://member.efspost.net/cgi-bin/GInfo.dll?EmmisTrack?cno=EF516489305NZ',
        status: 'Signed',
      },
    ],
  }] } };
