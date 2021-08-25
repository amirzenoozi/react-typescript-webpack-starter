import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { SpriteIcon } from './sprite-icon';

Enzyme.configure({ adapter: new Adapter() });

describe('Test SpriteIcon', () => {
  it('Render Sprite Mono Icon Component', () => {
    shallow(<SpriteIcon type="mono" iconName="close" width={30} height={30} />);
  });
});
