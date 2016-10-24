# react-native-babel-jest
[![Build Status](https://travis-ci.org/apentle/react-native-babel-jest.svg?branch=master)](https://travis-ci.org/apentle/react-native-babel-jest) [![Coverage Status](https://coveralls.io/repos/github/apentle/react-native-babel-jest/badge.svg?branch=master)](https://coveralls.io/github/apentle/react-native-babel-jest?branch=master)

Simple testing configuration for React Native with Jest

## Installation
```bash
npm i --save-dev react-native-babel-jest jest-cli
```

## Usage
Add configuration to `package.json` file
```javascript
{
  "scripts": {
    "test": "jest"
  },
  ...
  "jest": {
    "scriptPreprocessor": "<rootDir>/node_modules/react-native-babel-jest",
    "setupFiles": [
      "<rootDir>/node_modules/react-native-babel-jest/env.js"
    ],
    "automock": true,
    "unmockedModulePathPatterns": [
      "react",
      "enzyme",
      "promise",
      "source-map"
    ]
  }
}
```
Write your test in `__tests__` folder, run test command
```bash
npm test
```

## Recommendation
We recommend you using `enzyme` to render components, and `enzyme-to-json` to make snapshot testing. See more in the example below.

## Example
[See this example](https://github.com/apentle/react-native-babel-jest/blob/master/Example/README.md)
