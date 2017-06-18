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
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

import './styles/index.scss';
import {login, updateUser, validateFormError} from './actions';
import {makeSelectUser, makeSelectError, makeSelectFormErrors} from './selectors';
import InputGroup from 'components/InputGroup';

export class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onClickSumit = this.onClickSumit.bind(this);
  }

  removeByKey(obj, deleteKey) {
    return Object.keys(obj)
      .filter(key => key !== deleteKey)
      .reduce((result, current) => {
        result[current] = obj[current];
        return result;
      }, {});
  }

  onChangeUsername(evt) {
    let newFormErrors = this.props.formErrors;
    if (!evt.target.value) {
      newFormErrors = {
        ...this.props.formErrors,
        username: 'User name is required',
      };
    } else if (this.props.formErrors && this.props.formErrors.username){
      newFormErrors = this.removeByKey(this.props.formErrors, 'username');
    }

    const newUser = {
      ...this.props.user,
      username: evt.target.value,
    };
    this.props.onUpdateUser(newUser, newFormErrors);
  }

  onChangePassword(evt) {
    let newFormErrors = this.props.formErrors;
    if (!evt.target.value) {
      newFormErrors = {
        ...this.props.formErrors,
        password: 'Password is required',
      };
    } else if (this.props.formErrors && this.props.formErrors.password) {
       newFormErrors = this.removeByKey(this.props.formErrors, 'password');
    }

    const newUser = {
      ...this.props.user,
      password: evt.target.value,
    };
    this.props.onUpdateUser(newUser, newFormErrors);
  }

  onClickSumit(evt) {
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }

    const user = this.props.user;
    let newFormErrors;

    if (!user) {
      newFormErrors = {
        username: 'User name is required',
        password: 'Password is required',
      }
    } else if (!user.username) {
      newFormErrors = {
        username: 'User name is required',
      }
    } else if (!user.password) {
      newFormErrors = {
        password: 'Password is required',
      }
    }

    if (newFormErrors) {
      this.props.onValidFormError(newFormErrors);
    } else {
      this.props.onSubmitForm()
    }
  }

  render() {
    const {user, onSubmitForm, error, formErrors} = this.props;

    const test = {
      usernamme: 'test username',
      password: 'test password',
    };

    let unError, pError, serverError, unValideState, userNameInputGroup, passwordInputGroup;
    if (formErrors && formErrors.username) {
      userNameInputGroup =(
        <InputGroup
          value={user.username}
          placeholder="username"
          controlId="formLoginUsername"
          error={formErrors.username }
          handleChange={this.onChangeUsername}
          type="text"/>
      )
    } else {
      userNameInputGroup = (
        <InputGroup
          value={user.username}
          placeholder="username"
          controlId="formLoginUsername"
          handleChange={this.onChangeUsername}
          type="text"/>
      )
    }


    if (formErrors && formErrors.password) {
      passwordInputGroup = (
        <InputGroup
          value={user.password}
          placeholder="username"
          controlId="formLoginPassword"
          error={formErrors.password }
          handleChange={this.onChangePassword}
          type="text"/>
      )
    } else {
      passwordInputGroup = (
        <InputGroup
          value={user.password}
          placeholder="password"
          controlId="formLoginPassword"
          handleChange={this.onChangePassword}
          type="text"/>
      )
    }
    const context = (
      <Form onSubmit={this.onClickSumit}>
        {userNameInputGroup}
        {passwordInputGroup}
        <FormGroup>
          <Checkbox>Remember me</Checkbox>
        </FormGroup>

        <Button type="submit" id="formLoginSubmit">
          Sign in
        </Button>
      </Form>
    );

    if (error) {
      serverError = (
        <ListGroup>
          <ListGroupItem bsStyle="danger">error</ListGroupItem>
        </ListGroup>
      );
    }

    return (
      <div className="wrapper">
        <div className="inner_div">
          <h3 className="title">Login</h3>
          {serverError}
          {context}
        </div>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (evt) => dispatch(login()),
    onUpdateUser: (user, formErrors, input) => dispatch(updateUser(user, formErrors, input)),
    onValidFormError: (formErrors) => dispatch(validateFormError(formErrors)),
  }
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  error: makeSelectError(),
  formErrors: makeSelectFormErrors(),
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
  onSubmitForm: React.PropTypes.func,
  onUpdateUser: React.PropTypes.func,
  formErrors: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
