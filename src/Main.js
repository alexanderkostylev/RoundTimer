import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import Item from './Item';
  
export default class Main extends Component {

  get data (){
    return [100];
  }

  drawItems(){
      const output = this.data.map((item, index) => (
        <Item key={index} initialValue={item} />
      ));
      return output;
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
    padding: 5, 
    backgroundColor: '#FFF',
  }
});
