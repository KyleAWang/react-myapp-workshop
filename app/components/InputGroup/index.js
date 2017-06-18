import React from 'react';
import {
  FormGroup,
  Col,
  Button,
  Form,
  FormControl,
  Checkbox,
  ListGroup,
  ListGroupItem,
  ControlLabel
} from 'react-bootstrap';

function InputGroup(props) {
  let context;
  const {controlId, error, value, handleChange, placeholder, label, type} = props;

  if (error) {
    context = (
      <FormGroup controlId={controlId} validationState='error'>
        <ControlLabel>{label}</ControlLabel>
        <FormControl autoFocus
                     type={type} placeholder={placeholder} value={value}
                     onChange={handleChange}/>
      </FormGroup>
    )
  } else {
    context = (
      <FormGroup controlId={controlId}>
        <FormControl autoFocus type={type} placeholder={placeholder} value={value}
                     onChange={handleChange}/>
      </FormGroup>
    )
  }
  return context;
}

InputGroup.propTypes = {
  controlId: React.PropTypes.string,
  error: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string
  ]),
  value: React.PropTypes.string,
  handleChange: React.PropTypes.func,
  placeholder: React.PropTypes.string,
  label: React.PropTypes.string,
  type: React.PropTypes.string,
};

export default InputGroup;
