import React, {Component} from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, StatusBar, ActivityIndicator, AsyncStorage } from 'react-native'

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			
		};
	}

	componentDidMount(){

	}

	render(){
		return(
			<React.Fragment>
				<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
					<Text>HALLO!</Text>
				</View>
			</React.Fragment>
		)
	}
}
