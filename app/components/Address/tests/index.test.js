import React from 'react';
import { shallow } from 'enzyme';

import Address from '../index';

const address = {
  address: '中国上海市杨浦区控江路',
  name: '张小',
  tel: '15822221111',
  weight: '3880',
};

const childName = (<li>张小</li>);
const childTel = (<li><span>Tel:</span><span>15822221111</span></li>);
const childAddress = <li>中国上海市杨浦区控江路</li>;
const childWeight = (<li>3880</li>);


const renderComponent = () => shallow(
  <Address address={address} />
);

describe('<Address /> with address', () => {
  it('should have correct name', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(childName)).toBe(true);
  });
  it('should have correct tel', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(childTel)).toBe(true);
  });
  it('should have correct address', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(childAddress)).toBe(true);
  });
  it('should have correct weight', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(childWeight)).toEqual(true);
  });
});

describe('<Address /> without address info', () => {
  it('should have empty <div/>', () => {
    const add = shallow(<Address />);
    expect(add.contains(<div></div>)).toBe(true);
  });
});
