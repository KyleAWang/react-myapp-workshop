import React from 'react';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import { LoginPage } from '../index';

describe('<LoginPage/>', () => {
  let renderedComponent;
  beforeEach(() => {
    renderedComponent = mount(
      <IntlProvider locale="en">
        <LoginPage user={user}/>
      </IntlProvider>
    );
  });
  it('should get correct username', () => {
    expect(renderedComponent.find('#formHorizontalUsername').node.value).toEqual('kylewind');
  });

  it('should change username', () => {
    const usernameInput = renderedComponent.find('#formHorizontalUsername');
    const username = 'soneyar';
    usernameInput.simulate('change', {target:{value: username}});
    expect(usernameInput.node.value).toEqual(username);
  })
});


const user = {
  username: 'kylewind',
};


