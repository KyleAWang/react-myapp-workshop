import React from 'react';
import { shallow } from 'enzyme';
import { KTable } from '../ktable';


describe('<ktable />', () => {
  it ('should rend table', () => {
    const renderedComponent = shallow(
      <KTable items={[]} />
    );
    expect(renderedComponent.contains('<Table/>')).toBe(true);
  })
});
