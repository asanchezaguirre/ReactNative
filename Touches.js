import React, {Component} from 'react';
import {View, Button, Alert} from 'react-native';

export default class Touches extends Component{
	_onPressButton(){
		Alert.alert('Ahí la llevo')
	}

	render(){
		return(
			<View>
				<Button
					onPress={this._onPressButton}
					title= "Presionar"
				/>
			</View>
			);
	}
}