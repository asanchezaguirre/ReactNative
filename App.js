/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello World!</Text>
        <Imagen  url='http://thesocialsciencepost.com/wp-content/uploads/2016/05/2108594-600x300.jpg'/>
        <Imagen  url='https://http2.mlstatic.com/disfraz-infantil-super-mario-bros-luigi-peach-cgorra-bigote-D_NQ_NP_823236-MLA26198814006_102017-F.jpg'/>
      </View>
    );
  }
}

class Imagen extends Component{
  render(){
    let pic = {
      uri: this.props.url
    };
    return (
      <View style={styles.image}>
        <Image source={pic} style={{width: 100, height: 60}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    fontSize: 35,
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: 'red'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    marginTop: 30,
    borderTopColor: 'red',
    borderTopWidth: 30,
  },
});
