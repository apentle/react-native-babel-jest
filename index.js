/**
 * https://github.com/facebook/jest/blob/master/packages/babel-jest/src/index.js
 */

'use strict';

const babel = require('babel-core');
const reactNative = require('babel-preset-react-native');

module.exports = {
  process(src, filename) {
    if (babel.util.canCompile(filename)) {
      return babel.transform(src, {
        auxiliaryCommentBefore: ' istanbul ignore next ',
        filename,
        presets: [reactNative],
        retainLines: true,
      }).code;
    }
    return src;
  },
};
