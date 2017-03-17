'use strict';

var fs = require('fs');
if (fs.existsSync('./node_modules/react-native/packager/src/Resolver/polyfills/babelHelpers.js')) {
  require.requireActual('react-native/packager/src/Resolver/polyfills/babelHelpers.js');
} else {
  require.requireActual('react-native/packager/react-packager/src/Resolver/polyfills/babelHelpers.js');
}

global.__DEV__ = true;
global.__fbBatchedBridgeConfig = {
  remoteModuleConfig: [],
  localModulesConfig: [],
};

global.Promise = require('promise');
global.regeneratorRuntime = require.requireActual('regenerator-runtime/runtime');

/**
 * Mock react-native
 */
jest.setMock('react-native', require('./react-native/index'));
