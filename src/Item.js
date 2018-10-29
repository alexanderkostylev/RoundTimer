import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
  
export default class Item extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: Number(props.value),
      time: Number(props.value),
      isActive: false,
    };
  }

  timer(){
    const mainInterval = setInterval(() => {
      this.setState({isActive: true});
        if (this.state.time > 0) {
          this.setState({
            time: this.state.time - 1
          });
        } else {
          this.setState({isActive: false});
          clearInterval(mainInterval);
        }
    }, 1000);
  }

  render() {
    return (
        <View style={this.calcStyle().item}>
          <TouchableOpacity onPress={this.timer.bind(this)}>
            <Text style={this.calcStyle().item__text}>{this.state.time}</Text>
          </TouchableOpacity> 
        </View>
    );
  }

  calcStyle (){ 
    let value = this.state.value;
    return {
      item: {
        width: value, 
        height: value, 
        borderRadius: value,
        borderWidth: 2,
      }, 
      item__text: {
        fontSize: value/2,
        textAlign: 'center',
      }
    };
  }
}

const styles = StyleSheet.create({
  item__touch: {
    width: 100, 
    height: 100, 
  },
  item__text: {

  }
});
