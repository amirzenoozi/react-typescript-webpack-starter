import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { DotBadge } from './dot-badge';

Enzyme.configure({ adapter: new Adapter() });

describe('test dot-badge render', () => {
  it('render of dot-badge component', () => {
    shallow(<DotBadge />);
  });
});
