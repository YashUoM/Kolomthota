import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';

export default class HelloWorldApp extends Component {
    constructor(){
        super();
        this.state={
            language:'Java',
        }
    }
  render() {
      
    return (
      <View>
        <Picker
  selectedValue={this.state.language}
  style={{ height: 50, width: 100 }}
  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
      </View>
    );
  }
}
