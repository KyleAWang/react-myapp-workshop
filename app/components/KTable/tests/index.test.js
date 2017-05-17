import React from 'react';
import { shallow } from 'enzyme';

import KTable from '../index';
import OrderDetail from 'containers/OrdersPage/OrderDetail';


const orders =  [
  {
    "_id": "5912937e07835c3ea03186e7",
    "orderId": "20160703202175",
    "created": "2017-05-17T00:00:00.000Z",
    "subtotal": 110.29,
    "status": "Customers",
    "totalCost": 109.29,
    "totalRmbCost": 519.8,
    "items": [
      {
        "name": "Bio Island 幼儿童补锌咀嚼片宝宝锌片120粒提高免疫增强食欲",
        "url": "http://www.wellcome.co.nz/product-1877.html",
        "price": 17.85,
        "quantity": 1,
        "subtotal": 17.85
      },
      {
        "name": "SUSTAGEN 医院配方营养粉奶粉 老人孕妇体弱适用 840克 香草味 可直邮回国",
        "url": "http://www.wellcome.co.nz/product-1294.html",
        "price": 25.8,
        "quantity": 1,
        "subtotal": 25.8
      },
      {
        "name": "Ecostore 实木婴儿洗护礼盒 大号七件套",
        "url": "http://www.wellcome.co.nz/product-1759.html",
        "price": 64.64,
        "quantity": 1,
        "subtotal": 64.64
      }
    ],
    "address": {
      "name": "张小",
      "tel": "15801859",
      "zip": "203",
      "weight": 3880,
      "address": "中国上海市杨浦区控江"
    },
    "shipping": [
      {
        "no": "EF516295687NZ",
        "url": "http://member.efspost.net/cgi-bin/GInfo.dll?EmmisTrack?cno=EF516295687NZ",
        "status": "Signed"
      },
      {
        "no": "EF516295688NZ",
        "url": "http://member.efspost.net/cgi-bin/GInfo.dll?EmmisTrack?cno=EF516295688NZ",
        "status": "Signed"
      }
    ]
  },
  {
    "_id": "57ff54da5cc6b3982367bbb3",
    "orderId": "20161013219597",
    "created": "2016-10-13T09:30:00.000Z",
    "subtotal": 59.17,
    "status": null,
    "totalCost": 59.17,
    "totalRmbCost": 289.94,
    "items": [
      {
        "name": "Merino 绵羊油深层滋润润肤霜 500克",
        "url": "http://www.wellcome.co.nz/product-1015.html",
        "price": 14,
        "quantity": 1,
        "subtotal": 14
      },
      {
        "name": "Bioisland 婴幼儿全天然液体纯乳钙 90粒",
        "url": "http://www.wellcome.co.nz/product-2107.html",
        "price": 19.87,
        "quantity": 1,
        "subtotal": 19.87
      },
      {
        "name": "Ecostore 纯天然温和 羊奶薰衣草宝宝皂 80克",
        "url": "http://www.wellcome.co.nz/product-1089.html",
        "price": 2.22,
        "quantity": 1,
        "subtotal": 2.22
      },
      {
        "name": "Ecostore 植物精华泡沫洗手液 250毫升 (葡萄柚薄荷)",
        "url": "http://www.wellcome.co.nz/product-1763.html",
        "price": 4.78,
        "quantity": 1,
        "subtotal": 4.78
      },
      {
        "name": "Ecostore 植物精华泡沫洗手液补充装 500毫升 (小黄瓜佛手柑)",
        "url": "http://www.wellcome.co.nz/product-1518.html",
        "price": 6.27,
        "quantity": 1,
        "subtotal": 6.27
      }
    ],
    "address": {
      "name": "彭",
      "tel": "0086158008",
      "zip": null,
      "weight": 2015,
      "address": "中国上海宝山区松兰路"
    },
    "shipping": [
      {
        "no": "EF516489305NZ",
        "url": "http://member.efspost.net/cgi-bin/GInfo.dll?EmmisTrack?cno=EF516489305NZ",
        "status": "Signed"
      }
    ]
  }];


describe ('<KTable/>', () => {
  it ('should render empty content if no order', () => {
    const renderedComponent = shallow(
      <KTable/>
    );
    expect(renderedComponent.contains(<div></div>)).toBe(true);
  });

  it ('should render order list if orders are not empty', () => {
    const loadSpy = jest.fn();
    const renderedComponent = shallow(
      <KTable items={orders} loadOrder={loadSpy}/>
    );
    expect(renderedComponent.contains(<OrderDetail/>)).toBe(true);
  });
});
