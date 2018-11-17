import React, {Component} from 'react';
import {StyleSheet, ViewPagerAndroid} from 'react-native';
import Main from './src/Main';
import Options from './src/Options';

export default class App extends Component {
  render() {
    return (
        <Main key="1"></Main>
    );
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
});
