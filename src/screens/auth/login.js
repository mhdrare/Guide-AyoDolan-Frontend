import React, {Component} from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, AsyncStorage, ActivityIndicator, StatusBar } from 'react-native'
import firebase from 'firebase';
import { login } from '../../public/redux/actions/auth'
import { connect } from 'react-redux'

class App extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			email: '',
			password: '',
			errEmail: '',
			errPassword: '',
			loading: false
		};
	}

	changeEmail = (value) => {
		this.setState({
			email: value,
			errEmail: ''
		})
	}

	changePassword = (value) => {
		this.setState({
			password: value,
			errPassword: ''
		})	
	}

	loginHandler = (data) => {
		this.setState({
			loading:true
		});

		if (this.state.email.length < 6 || this.state.email == '') {
			this.setState({errEmail: 'Email is not valid', loading: false})
		} else if (this.state.password.length < 6 || this.state.password == '') {
			this.setState({errPassword: 'Password too short', loading: false})
		} else {
			this.props.dispatch(login({email: this.state.email, password: this.state.password}))
			.then(()=>{
        		this.setState({
					loading: false
				}, () => {
        			this.props.navigation.navigate('Home');
				})
        		
        	})
        	.catch((err)=>{
        		this.setState({
					loading: false
				}, () => {
        			alert('Gagal login')
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
				<Text style={text.welcome}>Welcome to</Text>
				<Text style={text.title}>{'Guide AyoDolan!'.toUpperCase()}</Text>
				<Text style={text.continue}>Please Login to Continue</Text>

				<View style={component.input}>
					<TextInput placeholder="Email" style={component.email} onChangeText={this.changeEmail} keyboardType={'email-address'} />
					{this.state.errEmail == '' ? <View/> : <Text style={text.validate}>{this.state.errEmail}</Text>}
					<TextInput secureTextEntry={true} placeholder="********" style={component.password} onChangeText={this.changePassword} />
					{this.state.errPassword == '' ? <View/> : <Text style={text.validate}>{this.state.errPassword}</Text>}

					<TouchableOpacity style={component.button} onPress={this.loginHandler}>
						<Text style={text.button}>{'Login'.toUpperCase()}</Text>
					</TouchableOpacity>
				</View>
				<Text style={text.forgot} onPress={()=>this.props.navigation.navigate('ForgotPassword')}>{'Forgot password ?'.toUpperCase()}</Text>
			</React.Fragment>
		)
	}
}

export default connect(state => ({auth: state.auth}))(App)

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