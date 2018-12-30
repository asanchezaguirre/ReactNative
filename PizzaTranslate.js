import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';


export default class PizzaTranslate extends Component {
  constructor() {
    super();
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 60, backgroundColor: 'skyblue'}}
          placeholder="Escribir aquí!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && 'pandi').join(' ')}
        </Text>
      </View>
    );
  }
}