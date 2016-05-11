'use strict';

const React = require('react-native');
const TestUtils = require('react/lib/ReactTestUtils');

jest.unmock('../ActionComponent');
const ActionComponent = require('../ActionComponent');

describe('<ActionComponent />', () => {
  it('Component response to user action', () => {
    // Deep render to DOM
    const dom = TestUtils.renderIntoDocument(<ActionComponent />);
    const txtNode = TestUtils.findRenderedDOMComponentWithClass(dom, 'Text');
    expect(txtNode.textContent).toBe('Off');
    // Simulate user tap
    TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithClass(dom, 'TouchableOpacity'));
    expect(txtNode.textContent).toBe('On');
  });
});
