import React from 'react';
import { shallow } from 'enzyme';
import { Modal } from 'react-bootstrap';
import { OrderDetail, mapDispatchToProps } from '../OrderDetail';
import { closeOrder, updateOrder, submitUpdateForm } from '../actions';

describe('<OrderDetail />', () => {
  it('should render empty div with blank order', () => {
    const renderedComponent = shallow(
      <OrderDetail order={false} />
    );
    expect(renderedComponent.contains(<div>Loading...</div>)).toBe(true);
  });


  it('should render order', () => {
    const renderedComponent = shallow(
      <OrderDetail order={order} />
    );

    expect(renderedComponent).toMatchSnapshot();

    expect(renderedComponent.find(order)).toBeDefined();
  });

  describe('should ', () => {
    const renderedComponent = shallow(
      <OrderDetail order={order} showModal />
    );

    it('render Modal', () => {
      expect(renderedComponent.find(Modal)).toBeDefined();
    });

    // it('have correct title', () => {
    //   const title = `Order Id: ${order.orderId}`;
    //   console.log(title);
    //   expect(renderedComponent.contains({title})).toBe(true);
    // })
  });

  describe('mapDispatchToProps', () => {
    describe('onCloseOrder', () => {
      it(' should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onCloseOrder).toBeDefined();
      });

      it(' should dispatch closeOrder when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onCloseOrder();
        expect(dispatch).toHaveBeenCalledWith(closeOrder());
      });
    });

    describe('onUpdateOrder', () => {
      it(' should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onUpdateOrder).toBeDefined();
      });

      it(' should dispatch onUpdateOrder when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onUpdateOrder(order);
        expect(dispatch).toHaveBeenCalledWith(updateOrder(order));
      });
    });

    describe('onSubmitUpdateForm', () => {
      it(' should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitUpdateForm).toBeDefined();
      });

      it(' should dispatch onSubmitUpdateForm when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmitUpdateForm();
        expect(dispatch).toHaveBeenCalledWith(submitUpdateForm());
      });
    });
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
    name: '张小',
    tel: '15801859',
    zip: '2000',
    weight: 3880,
    address: '中国上海市杨浦区控1',
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
