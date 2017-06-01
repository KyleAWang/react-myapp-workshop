import React from 'react';
import { FormGroup, Col, Button, Form, FormControl, Checkbox, ListGroup, ListGroupItem } from 'react-bootstrap';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './styles/index.scss';
import { login, updateUser } from './actions';
import { makeSelectUser, makeSelectError } from './selectors';

export class LoginPage extends React.Component {

  constructor(props){
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onChangeUsername(evt){
    const newUser = {
      ...this.props.user,
      username: evt.target.value,
    };
    this.props.onUpdateUser(newUser);
  }

  onChangePassword(evt){
    const newUser = {
      ...this.props.user,
      password: evt.target.value,
    };
    this.props.onUpdateUser(newUser);
  }

  render() {
    const { user, onSubmitForm, error } = this.props;

    const context = (
      <Form horizontal onSubmit={onSubmitForm}>
        <FormGroup controlId="formHorizontalUsername">
          <Col sm={2}>
            User Name
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="User Name" value={user.username} onChange={this.onChangeUsername}/>
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" value={user.password} onChange={this.onChangePassword}/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit" >
              Sign in
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
    return (
      <div className="wrapper">
        <div className="inner_div">
          <ListGroup>
            <ListGroupItem bsStyle="danger">error</ListGroupItem>
          </ListGroup>
          {context}
        </div>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault){
        evt.preventDefault();
      }
      console.log('submit');
      dispatch(login());
    },
    onUpdateUser: (user) => dispatch(updateUser(user)),
  }
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  error: makeSelectError(),
});

LoginPage.propTypes = {
  user: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
