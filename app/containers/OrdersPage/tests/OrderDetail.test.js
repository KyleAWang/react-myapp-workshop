import React from 'react';
import {shallow} from 'enzyme';
import { OrderDetail } from '../OrderDetail';

describe('<OrderDetail />', () => {
  it('should render empty div with blank order', () => {
    const renderedComponent = shallow(
      <OrderDetail order={false}/>
    );
    expect(renderedComponent.contains(<div>Loading...</div>)).toBe(true);
  });
});

