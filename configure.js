/**
 * configure package.json before public
 */

'use strict';

var jsonfile = require('jsonfile');

// Merge dependencies from react-native-mock to this package
var main = jsonfile.readFileSync('./package.json');
var mock = jsonfile.readFileSync('./node_modules/react-native-mock/package.json');
var deps = main.dependencies;
Object.assign(deps, mock.dependencies);
main.dependencies = deps;

// Write back to file
jsonfile.writeFileSync('./package.json', main, {spaces: 2});
