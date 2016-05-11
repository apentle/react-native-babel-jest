/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

const ShowComponent = require('./ShowComponent');
const ActionComponent = require('./ActionComponent');

class TestingExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ShowComponent />
        <ActionComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('TestingExample', () => TestingExample);
