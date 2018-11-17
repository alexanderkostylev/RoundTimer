import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native';

import Item from './Item';
  
export default class Main extends Component {

  get data (){
    return [100, 50, 200, 30, 60, 90, 150];
  }

  getCord(){
    const {height, width} = Dimensions.get('window');
    return this.data.map(( value, index) => {
       let array = new Array(value, value);
       return array;
    }, []);
  }

  render() {
    return (
        <View style={styles.page}>
          {this.data.map((value, index) => (
           <Item key={index} initialValue={value} cord={this.getCord()[index]} />
           ))}
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
