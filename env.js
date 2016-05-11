'use strict';

/**
 * Import react native env.js
 */
require('react-native/jestSupport/env.js');

/**
 * Mock react-native
 */
jest.setMock('react-native', require('./react-native'));
