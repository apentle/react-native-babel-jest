'use strict';

import React, { View, Text } from 'react-native';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

jest.unmock('../ShowComponent');
const ShowComponent = require('../ShowComponent');

describe('<ShowComponent />', () => {
  it('Component must show "Show Text"', () => {
    // Shallow rendering
    const output = shallow(<ShowComponent />);
    expect(output.type()).toBe(View);
    expect(output.find(Text).length).toBe(1);

    // Snapshot testing
    expect(shallowToJson(output)).toMatchSnapshot();

    // Full DOM rendering
    const wrapper= mount(<ShowComponent />);
    expect(wrapper.find(Text).text()).toBe('Show Text');
  });
});
