import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { Table } from './table';

Enzyme.configure({ adapter: new Adapter() });

describe('Test of table', () => {
  it('Render Table Component', () => {
    shallow(
        <Table
          columns={[
            { key: 'test1', title: 'test1' },
            { key: 'test2', title: 'test2' },
          ]}
          data={[
            { test1: 'test1', test2: 'test2' },
            { test1: 'test1', test2: 'test2' },
          ]}
        />
    );
  });
});
