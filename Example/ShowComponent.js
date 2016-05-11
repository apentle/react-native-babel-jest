'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class ShowComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.show}>
          Show Text
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  show: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

module.exports = ShowComponent;
