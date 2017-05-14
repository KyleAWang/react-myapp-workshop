import React from 'react';
import { shallow, mount } from 'enzyme';

import OrdersPage from '../index';

describe('<OrdersPage />', () => {
  it ('should render loading if no orders', () => {
    const renderedComponent = mount(
      <OrdersPage/>
    );
    expect(renderedComponent.contains(<div>Loading...</div>)).toBe(true);
  });
});
