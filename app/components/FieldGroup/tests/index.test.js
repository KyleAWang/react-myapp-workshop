import React from 'react';
import { shallow } from 'enzyme';
import { ControlLabel } from 'react-bootstrap';
import FieldGroup from '../index';

const props = {
  id: 'formControlsText',
  label: 'Zip',
  type: 'text',
  value: '111111',
  placeholder: 'Zip',
};

const renderComponent = () => shallow(
  <FieldGroup
    id={props.id}
    label={props.label}
    placeholder={props.placeholder}
    type={props.type}
    value={props.value}
  />
);

describe('<FieldGroup />', () => {
  it('should have a label', () => {
    const renderedComponent = renderComponent();
    const label = <ControlLabel>{props.label}</ControlLabel>;
    expect(renderedComponent.contains(label)).toBe(true);
  });

  // it('should have a FromControl', () => {
  //   const renderedComponent = renderComponent();
  //   console.log(renderedComponent.html());
  //   const formControl = <FormControl
  //     type='text'
  //     value='111111'
  //     placeholder='Zip'
  //   />;
  //   expect(renderedComponent.find(<FormControl/>).length).toEqual(1);
  // })
});
