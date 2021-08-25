import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { GrayIconButton } from './gray-icon-button';

Enzyme.configure({ adapter: new Adapter() });

describe('render gray-icon-button component', () => {
  it('test component render', () => {
    shallow(<GrayIconButton />);
  });

  it('render gray-icon-button component content', () => {
    const wrapper = shallow(
        <GrayIconButton>
          <div>icon</div>
        </GrayIconButton>
    );

    const content = <div>icon</div>;
    expect(wrapper.contains(content)).toEqual(true);
  });
});
