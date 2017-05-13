import React from 'react';
import { FormGroup, HelpBlock, FormControl, ControlLabel } from 'react-bootstrap';

function FieldGroup(props) {
  return (
    <FormGroup controlId={props.id}>
      <ControlLabel>{props.label}</ControlLabel>
      <FormControl
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        readOnly={props.readOnly === true}
        onChange={props.onChange}
      />
      {props.help && <HelpBlock>{props.help}</HelpBlock>}
    </FormGroup>
  );
}

FieldGroup.propTypes = {
  id: React.PropTypes.string,
  label: React.PropTypes.string,
  type: React.PropTypes.string,
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  placeholder: React.PropTypes.string,
  help: React.PropTypes.string,
  readOnly: React.PropTypes.bool,
  onChange: React.PropTypes.func,
};

export default FieldGroup;
