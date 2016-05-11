/**
 * https://github.com/facebook/jest/blob/master/packages/babel-jest/src/index.js
 */

'use strict';

const babel = require('babel-core');
const jestPreset = require('babel-preset-jest');
const es2015Preset = require('babel-preset-es2015');
const reactPreset = require('babel-preset-react');

module.exports = {
  process(src, filename) {
    if (babel.util.canCompile(filename)) {
      return babel.transform(src, {
        auxiliaryCommentBefore: ' istanbul ignore next ',
        filename,
        presets: [jestPreset, es2015Preset, reactPreset],
        retainLines: true,
      }).code;
    }
    return src;
  },
};
