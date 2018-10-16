import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Options extends Component {
  render() {
    return (
        <View style={{...styles.pageStyle, backgroundColor: 'powderblue'}}>
          <Text>Options page</Text>
        </View>
        
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
