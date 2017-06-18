import React from 'react';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import { LoginPage } from '../index';

describe('<LoginPage/>', () => {
  const submitSpy = jest.fn();
  const updateUser = jest.fn();
  let renderedComponent;
  beforeEach(() => {
    renderedComponent = mount(
      <IntlProvider locale="en">
        <LoginPage
          user={user}
          onSubmitForm={submitSpy}
          onUpdateUser={updateUser}
        />
      </IntlProvider>
    );
  });
  it('should get correct username', () => {
    expect(renderedComponent.find('#formLoginUsername').node.value).toEqual('kylewind');
  });

  it('should update User when change user name', () => {
    const usernameInput = renderedComponent.find('#formLoginUsername');
    const username = 'soneyar';
    usernameInput.simulate('change', {target: {value: username}});
    expect(updateUser).toHaveBeenCalled();
  });

  it('should update User when change user password', () => {
    const passwordInput = renderedComponent.find('#formLoginPassword');
    passwordInput.simulate('change', {target: {value: "test"}});
    expect(updateUser).toHaveBeenCalled();
  });

  it('should submit form when click sign-in button', () => {
    const loginSubmit = renderedComponent.find('#formLoginSubmit');
    loginSubmit.simulate('click');
    console.log(renderedComponent.state());
    expect(renderedComponent.state().formErrors).not.toBeNull();
  })
});


const user = {
  username: 'kylewind',
};


