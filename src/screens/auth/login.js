import React, {Component} from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, AsyncStorage, ActivityIndicator, StatusBar } from 'react-native'
import firebase from 'firebase';
import User from '../../../User';

export default class App extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			
		};
	}

	changeEmail = (value) => {
		
	}

	changePassword = (value) => {
		
	}

	loginHandler = () => {
		
	}

	render(){
		return(
			<React.Fragment>
				<View style={component.background}></View>
				<StatusBar 
					translucent
					barStyle="dark-content"
					backgroundColor="rgba(0,0,0,0)"
				/>
				<Text style={text.welcome}>Welcome to</Text>
				<Text style={text.title}>{'Guide AyoDolan!'.toUpperCase()}</Text>
				<Text style={text.continue}>Please Login to Continue</Text>

				<View style={component.input}>
					<TextInput placeholder="Email" style={component.email} />
					<TextInput secureTextEntry={true} placeholder="********" style={component.password} />

					<TouchableOpacity style={component.button} >
						<Text style={text.button}>{'Login'.toUpperCase()}</Text>
					</TouchableOpacity>
				</View>
				<Text style={text.forgot} onPress={()=>alert('Forgot')}>{'Forgot password ?'.toUpperCase()}</Text>
			</React.Fragment>
		)
	}
}

const text = StyleSheet.create({
	welcome: {
		paddingTop: 50,
		fontSize: 18,
		paddingLeft: 20,
		fontFamily: 'sans-serif-light',
	},
	title: {
		fontSize: 32,
		paddingLeft: 18,
		fontFamily: 'sans-serif-condensed'
	},
	continue: {
		fontSize: 14,
		paddingLeft: 20,
		fontFamily: 'sans-serif-light',
	},
	button: {
		alignSelf: 'center',
		color: '#4dd0e1',
		fontFamily: 'sans-serif-condensed',
		fontSize: 18
	},
	forgot: {
		marginTop: 15,
		paddingLeft: 18,
		fontFamily: 'sans-serif-condensed',
		fontWeight: '600'
	},
})

const component = StyleSheet.create({
	background: {
		alignSelf: 'center',
		position: 'absolute',
		height: 600,
		top: -100,
		backgroundColor: '#4dd0e1',
		width: '150%',
		borderRadius: 1200,
		zIndex: -10,
	},
	input: {
		paddingTop: 30,
		alignSelf: 'center',
		justifyContent: 'center',
		width: '90%'
	},
	email: {
		width: '100%',
		backgroundColor: '#00bcd4',
		paddingLeft: 25,
		borderRadius: 30
	},
	password: {
		width: '100%',
		backgroundColor: '#00bcd4',
		paddingLeft: 25,
		borderRadius: 30,
		marginTop: 15
	},
	button: {
		marginTop: 30,
		width: '100%',
		backgroundColor: '#000000',
		borderRadius: 30,
		height: 50,
		justifyContent: 'center',
		elevation: 5
	},
})