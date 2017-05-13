import React from 'react';
import { mount } from 'enzyme';

import Address from '../index';

const address = {
  ID: '320682198310146143',
  address: '中国上海市杨浦区控江路1505弄20号401',
  name: '张小燕',
  tel: '15801859839',
  weight: 3880,
  zip: '200093',
};

const childName = <div>张小燕,15801859839</div>;
const childAddress = <div>中国上海市杨浦区控江路1505弄20号401</div>;
const childWeight = <div>3880</div>;

const renderComponent = () => mount(
  <Address address={address} />
);

describe('<Address />', () => {
  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(childName)).toEqual(true);
    expect(renderedComponent.contains(childAddress)).toEqual(true);
    expect(renderedComponent.contains(childWeight)).toEqual(true);
  });
});
