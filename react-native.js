/**
 * https://github.com/lelandrichardson/react-native-mock/blob/master/src/react-native.js
 */
'use strict';

const ReactNative = require('./react-native-mock/react-native');
const React = require('react');

/**
 * render react-native component to HTML
 */
const renderToHTML = (type) => {
  var proto = ReactNative[type].prototype;
  if (typeof proto !== 'undefined') {
    const render = function () {
      var properties = {className: type};
      /**
       * use onClick for Simulate instead of onPress
       */
      if (typeof this.props.onPress !== 'undefined') {
        properties.onClick = this.props.onPress;
      }
      // TODO: add more event mapping
      Object.assign(properties, this.props);
      return (
        <div {...properties}>{this.props.children}</div>
      );
    };
    proto.__reactAutoBindMap['render'] = render;
    proto.render = render;
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

/**
 * ListView mock for react native
 */
ReactNative.ListView.defaultProps = {
  renderScrollComponent: props => <ReactNative.ScrollView {...props} />,
};

module.exports = ReactNative;
