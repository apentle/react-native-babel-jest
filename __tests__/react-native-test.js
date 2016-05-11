'use strict';

jest.unmock('../react-native');
const React = require('../react-native');
const { View, TouchableOpacity } = React;
const TestUtils = React.addons.TestUtils;

describe('renderToHTML', () => {
  it('View must be render to HTML', () => {
    const view = TestUtils.renderIntoDocument(<View>HTML</View>);
    expect(TestUtils.findRenderedDOMComponentWithClass(view, 'View').textContent).toBe('HTML');
  });
  it('Simulator onClick instead of onPress', () => {
    const callback = jest.fn();
    const btn = TestUtils.renderIntoDocument(<TouchableOpacity onPress={callback} />);
    TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithClass(btn, 'TouchableOpacity'));
    expect(callback.mock.calls.length).toBe(1);
  });
});
