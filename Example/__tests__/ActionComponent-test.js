'use strict';

import React, { Text, TouchableOpacity } from 'react-native';
import { mount } from 'enzyme';

jest.unmock('../ActionComponent');
const ActionComponent = require('../ActionComponent');

describe('<ActionComponent />', () => {
  it('Component response to user action', () => {
    // Full DOM rendering
    const wrapper = mount(<ActionComponent />);
    expect(wrapper.find(Text).text()).toBe('Off');
    // Simulate user tap
    wrapper.find(TouchableOpacity).simulate('click');
    expect(wrapper.find(Text).text()).toBe('On');
  });
});
