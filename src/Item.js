import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Alert} from 'react-native';
  
export default class Item extends Component {
  constructor(props){
    super(props);
    this.state = {
      initialValue: Number(props.initialValue),
      time: Number(props.initialValue),
      isActive: false,
    };
  }

  _timer(){
    let mainTimer;
    const start = () => {
      this.setState({
        isActive: true,
      });

      mainTimer = setInterval(() => {
        if (this.state.time && this.state.isActive) {
          this.setState({ 
            time: this.state.time - 1
          });
         } else {
           pause();
         }
      }, 1000);
    }
    const pause = () => {
      this.setState({
        isActive: false,
      });
      clearInterval(mainTimer);
    }

    const reset = () => {
      pause();
      this.setState({
        time: this.state.initialValue,
      });
    }

    return {
      start, pause, reset,
    }
  }

  onPress(){
    const onSinglePress = () => {
      this.state.isActive ? this._timer().pause() : this._timer().start(); 
    }

    const onDoublePress = () => {
      this._timer().reset();
    }

    const time = new Date().getTime();
    const delta = time - this.lastPress;
    const DOUBLE_PRESS_DELAY = 400;

    delta > DOUBLE_PRESS_DELAY ? onSinglePress() : onDoublePress();
    this.lastPress = time;
    }

  render() {
    return (
        <View style={this.calcStyle().item}>
          <TouchableOpacity style={this.calcStyle().item__touch} onPress={this.onPress.bind(this)}>
            <Text style={this.calcStyle().item__text}>{this.state.time}</Text>
          </TouchableOpacity> 
        </View>
    );
  }

  calcStyle (){ 
    const value = this.state.initialValue;
    const isActive = this.state.isActive;

    return {
      item: {
        width: value, 
        height: value, 
        position: 'absolute',
        top: 0,
        borderRadius: value,
        borderWidth: 2.5,
        backgroundColor: isActive ? 'green' : 'red',
      }, 

      //TODO Выравнивание текста
      item__text: {
        fontSize: value/2.5,
      },
      item__touch: {
        justifyContent: 'center', 
        alignItems: 'center',
        width: '100%', 
        height: '100%', 
        borderRadius: value,
      },
    };
  }
}