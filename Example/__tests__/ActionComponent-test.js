'use strict';

import React, { Text, TouchableOpacity } from 'react-native';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';

jest.unmock('../ActionComponent');
const ActionComponent = require('../ActionComponent');

describe('<ActionComponent />', () => {
  it('Component response to user action', () => {
    // Full DOM rendering
    const wrapper = mount(<ActionComponent />);
    expect(wrapper.find(Text).text()).toBe('Off');

    // Snapshot testing
    expect(mountToJson(wrapper)).toMatchSnapshot();

    // Simulate user tap
    wrapper.find(TouchableOpacity).simulate('click');
    expect(wrapper.find(Text).text()).toBe('On');

    // Snapshot testing
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});
