import React, {Component} from 'react';
import {View, Button, Alert} from 'react-native';

export default class Touches extends Component{
	_onPressButton(){
		Alert.alert(
			'Alerta',
			'Ahí la llevo',
			[
				{text: 'NO', onPress: () => console.warn ('NO Pressed'), style: 'cancel'},
				{text: 'YES', onPress:() => console.warn('YES Pressed')},

			]
		)
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