import React, {Component} from 'react';
import { View, Text} from 'react-native';
  
export default class Item extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: 0,
      isActive: false
    };
  }

  calcStyle (num, multiplier = 1){ 
    num *= multiplier;
    return {
      width: num, 
      height: num, 
      borderRadius: num,
      borderWidth: 2,
    };
  }
  

  timer(initCount){
    let count = initCount;
    setInterval(() =>  count-- , 1000);
    return (
      <Text>{count}</Text>
    )

  }

  render() {
    return (
          <View style={this.calcStyle(150)}>
            {this.timer(100)}
          </View>        
    );
  }
}
