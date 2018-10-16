import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Main extends Component {
  render() {
    return (
        <View style={styles.page}>
          <View style={styles.item}>

          </View>
        </View>
        
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFF',
  },
  item: {
    width: 50,
    height: 50,
    borderRadius:50,
    borderWidth: 2,
  }
});
