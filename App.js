import React, {Component} from 'react';
import {Platform, StyleSheet, ViewPagerAndroid, View, Text} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    return (
      <ViewPagerAndroid
        style={styles.viewPager}
        initialPage={0}>
        <View style={{...styles.pageStyle, backgroundColor: 'powderblue'}} key="1">
          <Text>First page</Text>
        </View>
        <View style={styles.pageStyle} key="2">
          <Text>Second page</Text>
        </View>
      </ViewPagerAndroid>
    );
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  }
});
