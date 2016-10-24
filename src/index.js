/**
 * https://github.com/lelandrichardson/react-native-mock/blob/master/src/react-native.js
 */
'use strict';

const ReactNative = require('../react-native-mock/react-native');
const React = require('react');

/**
 * render react-native component to HTML
 */
const renderToHTML = (type) => {
  var proto = ReactNative[type].prototype;
  if (typeof proto !== 'undefined') {
    const render = function () {
      var properties = {className: type};
      Object.assign(properties, this.props);
      /**
       * use onClick for Simulate instead of onPress
       */
      if (typeof this.props.onPress !== 'undefined') {
        properties.onClick = this.props.onPress;
        delete properties.onPress;
      }
      // TODO: add more event mapping
      return (
        <div {...properties}>{this.props.children}</div>
      );
    };
    //proto.__reactAutoBindPairs[proto.__reactAutoBindPairs.indexOf['render'] + 1] = render;
    proto['render'] = render;
  }
};

/**
 * react-native components
 */
[
  'ActivityIndicatorIOS',
  'ART',
  'DatePickerIOS',
  'DrawerLayoutAndroid',
  'Image',
  'ImageEditor',
  'ImageStore',
  'ListView',
  'MapView',
  'Modal',
  'Navigator',
  'NavigatorIOS',
  'Picker',
  'PickerIOS',
  'ProgressBarAndroid',
  'ProgressViewIOS',
  'ScrollView',
  'SegmentedControlIOS',
  'SliderIOS',
  'SnapshotViewIOS',
  'Switch',
  'PullToRefreshViewAndroid',
  'RecyclerViewBackedScrollView',
  'RefreshControl',
  'SwitchAndroid',
  'SwitchIOS',
  'TabBarIOS',
  'Text',
  'TextInput',
  'ToastAndroid',
  'ToolbarAndroid',
  'Touchable',
  'TouchableHighlight',
  'TouchableNativeFeedback',
  'TouchableOpacity',
  'TouchableWithoutFeedback',
  'View',
  'ViewPagerAndroid',
  'WebView',
].forEach(renderToHTML);

module.exports = ReactNative;
