import React, {Component} from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, StatusBar, ActivityIndicator, AsyncStorage } from 'react-native'
import firebase from 'firebase'
import Config from 'react-native-config'
import { connect } from 'react-redux'

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			isLogin: false
		};

		this._bootstrapAsync();
	}

	_bootstrapAsync = async () => {
		await AsyncStorage.getItem('Token', (error, result) => {
			if(result){
				this.setState({
					isLogin: true,
					token: result
				})
				this.props.navigation.navigate('Home')
			} else {
				this.setState({
					isLogin: false
				})
				this.props.navigation.navigate('Auth')
			}
		})
	}

	componentDidMount(){

		let firebaseConfig = {
			apiKey: '',
			authDomain: '',
			databaseURL: '',
			projectId: '',
			storageBucket: '',
			messagingSenderId: '',
			appId: ''
		};
		// Initialize Firebase
		// if (!firebase.apps.length) {
		// 	firebase.initializeApp(firebaseConfig);
		// }

		// firebase.auth().onAuthStateChanged(user => {
		// 	this.props.navigation.navigate(user ? 'Home' : 'Auth')
		// })

		this.willFocusSubscription = this.props.navigation.addListener(
      	'willFocus',
      		() => {
        		this._bootstrapAsync();
      		}
    	);

		// if (this.state.isLogin) {
		// 	this.props.navigation.navigate('Home')
		// } else {
		// 	this.props.navigation.navigate('Auth')
		// }
	}

	componentWillUnmount() {
    	this.willFocusSubscription.remove();
  	}

	render(){
		return(
			<React.Fragment>
				<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
					<ActivityIndicator size="large" color="#5ba4e5" />
				</View>
			</React.Fragment>
		)
	}
}

export default connect(state=>({auth: state.auth, users: state.users}))(App)