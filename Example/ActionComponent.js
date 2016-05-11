'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

class ActionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {isOn: false};
    this._onPress = this._onPress.bind(this);
  }
  _onPress() {
    this.setState({isOn: !this.state.isOn});
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPress}>
          <Text style={styles.button}>
            {this.state.isOn ? "On" : "Off"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'red',
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

module.exports = ActionComponent;
