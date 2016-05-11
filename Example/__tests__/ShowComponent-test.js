'use strict';

const React = require('react-native');
const { View } = React;
const TestUtils = require('react/lib/ReactTestUtils');

jest.unmock('../ShowComponent');
const ShowComponent = require('../ShowComponent');

describe('<ShowComponent />', () => {
  it('Component must show "Show Text"', () => {
    // Shallow rendering
    const renderer = TestUtils.createRenderer();
    renderer.render(<ShowComponent />);
    let output = renderer.getRenderOutput();
    expect(output.type).toBe(View);
    // Deep render to DOM
    const dom = TestUtils.renderIntoDocument(<ShowComponent />);
    const txtNode = TestUtils.findRenderedDOMComponentWithClass(dom, 'Text');
    expect(txtNode.textContent).toBe('Show Text');
  });
});
