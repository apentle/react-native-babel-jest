'use strict';

import React, { View, Text } from 'react-native';
const ReactTestRenderer = require('react-test-renderer');

jest.unmock('../ShowComponent');
const ShowComponent = require('../ShowComponent');

describe('<ShowComponent />', () => {
  it('Show renderer log', () => {
    const renderer = ReactTestRenderer.create(
      <ShowComponent />
    );
    console.log(renderer.toJSON());
  });
});
