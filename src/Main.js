import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import Item from './Item';
  
export default class Main extends Component {
  drawItems(){
    return <Item value="100"></Item>;
  }

  render() {
    return (
        <View style={styles.page}>
          {this.drawItems()}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFF',
  }
});
