import React, {Component} from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, AsyncStorage, ActivityIndicator, StatusBar } from 'react-native'
import firebase from 'firebase';
import { forgotPassword } from '../../public/redux/actions/auth'
import { connect } from 'react-redux'

class App extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			email: '',
			errEmail: ''
		};
	}

	changeEmail = (value) => {
		this.setState({
			email: value,
			errEmail: ''
		})
	}

	forgotHandler = async () => {
		if (this.state.email == '') {
			this.setState({
				errEmail: 'Email is empty!'
			})
		} else {
			await this.setState({
				loading: true
			})

			this.props.dispatch(forgotPassword(this.state.email))
			.then(() => {
				this.setState({
					loading: false
				}, () => {
					this.props.navigation.navigate('ConfirmCode')
				})
			})
			.catch((err)=>{
        		this.setState({
					loading: false
				}, () => {
        			alert('Email not found!')
				})
        	})
		}

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
				<Text style={text.welcome}>Forgot</Text>
				<Text style={text.title}>Password ?</Text>
				<View style={component.input}>
					<Text style={text.description}>Enter the email address associated with your account.</Text>
					<TextInput placeholder="Email" style={component.email} onChangeText={this.changeEmail}/>
					{this.state.errEmail == '' ? <View/> : <Text style={text.validate}>{this.state.errEmail}</Text>}
					<TouchableOpacity style={component.button} onPress={this.forgotHandler}>
						<Text style={text.button}>{'Send'.toUpperCase()}</Text>
					</TouchableOpacity>
				</View>
			</React.Fragment>
		)
	}
}

export default connect(state => ({auth: state.auth}))(App)

const text = StyleSheet.create({
	welcome: {
		paddingTop: 50,
		fontSize: 34,
		paddingLeft: 20,
		fontFamily: 'sans-serif-condensed'
	},
	title: {
		fontSize: 34,
		paddingLeft: 20,
		fontFamily: 'sans-serif-condensed'
	},
	description: {
		fontSize: 14,
		paddingBottom: 20,
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
	validate: {
		width: '70%',
		paddingTop: 5,
		paddingBottom: -5,
		paddingLeft: 20,
		fontSize: 12,
		color: 'red'
	}
})

const component = StyleSheet.create({
	background: {
		alignSelf: 'center',
		position: 'absolute',
		height: 600,
		bottom: -140,
		backgroundColor: '#4dd0e1',
		width: '150%',
		borderRadius: 1200,
		zIndex: -10,
	},
	input: {
		paddingTop: 100,
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