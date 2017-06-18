import React from 'react';
import { shallow } from 'enzyme';

import InputGroup from '../index';

describe('<InputGroup />', () => {
  it('should render an <FormGroup> tag', () => {
    const renderedComponent = shallow(<InputGroup />);
    expect(renderedComponent.node.props.bsClass).toEqual('form-group');
  });

  it('should have a control Id', () => {
    const controlId = "testId";
    const renderedComponent = shallow(<InputGroup controlId={controlId}/>);
    expect(renderedComponent.node.props.controlId).toEqual(controlId);
  });
});
