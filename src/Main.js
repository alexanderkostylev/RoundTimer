import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import Item from './Item';
  
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFF',
  }
});

export default class Main extends Component {
  drawItems(){
    return <Item></Item>;
  }

  render() {
    return (
        <View style={styles.page}>
          {this.drawItems()}
        </View>
    );
  }
}
