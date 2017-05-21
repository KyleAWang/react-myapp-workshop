import React from 'react';
import { shallow } from 'enzyme';

import { LoginPage } from '../index';

describe('<LoginPage/>', () => {
  it('should render', () => {
    const renderedComponent = shallow(<LoginPage/>);
    renderedComponent.find('#formHorizontalUsername').value='kylewind';
    expect(renderedComponent.find('#formHorizontalUsername').value).toEqual('kylewind');
  });
});
