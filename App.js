import React, {Component} from 'react';
import {StyleSheet, ViewPagerAndroid} from 'react-native';
import Main from './src/Main';
import Options from './src/Options';

export default class App extends Component {
  render() {
    return (
      <ViewPagerAndroid
        style={styles.viewPager}
        initialPage={0}>
        <Main key="1"></Main>
        <Options key="2"></Options>
      </ViewPagerAndroid>
    );
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
});
