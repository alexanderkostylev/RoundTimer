import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Alert} from 'react-native';
  
export default class Item extends Component {
  constructor(props){
    super(props);
    this.state = {
      initialValue: Number(props.initialValue),
      time: Number(props.initialValue),
      percentLeft: 100,
      isActive: false,
    };
  }

  timer(){
    let mainTimer;
    const start = () => {
      this.setState({
        isActive: true,
      });

      mainTimer = setInterval(() => {
        if (this.state.time && this.state.isActive) {
          this.setState({ 
            time: this.state.time - 1,
            percentLeft: 100 - ((this.state.initialValue - this.state.time) * 100 / this.state.initialValue),
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
        percentLeft: 100,
      });
    }

    return {
      start, pause, reset,
    }
  }

  onPress(){
    const onSinglePress = () => {
      this.state.isActive ? this.timer().pause() : this.timer().start(); 
    }

    const onDoublePress = () => {
      this.timer().reset();
    }
    
    const time = new Date().getTime();
    const delta = time - this._lastPress;
    const DOUBLE_PRESS_DELAY = 600;

    if (!this._lastPress) { onSinglePress(); }
    else { 
      delta > DOUBLE_PRESS_DELAY ? onSinglePress() : onDoublePress();
    }
    this._lastPress = time;
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
    calcBackgroundColor = (percentLeft, isActive) => {
      return isActive ? `hsla(${percentLeft}, 65%, 45%, 1)` : 'rgb(100%, 100%, 100%, 0)';
    };

    return {
      item: {
        width: this.state.initialValue, 
        height: this.state.initialValue, 
        position: 'absolute',
        top: this.props.cord[0],
        left:this.props.cord[1],
        borderWidth: 2.5,
        borderRadius: this.state.initialValue,
        backgroundColor: calcBackgroundColor(this.state.percentLeft, this.state.isActive),
      }, 

      //TODO Выравнивание текста
      item__text: {
        fontSize: this.state.initialValue/2.5,
      },
      item__touch: {
        justifyContent: 'center', 
        alignItems: 'center',
        width: '100%', 
        height: '100%',
        borderRadius: this.state.initialValue,
      },
    };
  }
}