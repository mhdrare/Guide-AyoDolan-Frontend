import React, {Component} from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Alert, Image, StatusBar, ActivityIndicator, AsyncStorage } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import OneSignal from 'react-native-onesignal'
import { connect } from 'react-redux'
import { fetchData } from '../public/redux/actions/users'

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			id: 0
		};
	}

	componentDidMount(){
		AsyncStorage.getItem('Id', (error, result) => {
			if(result){
				this.setState({
					id: result
				})
				this.props.dispatch(fetchData(this.state.id))
			} else {
				console.log(error)
			}
		})

	}

	logout = () => {
    	AsyncStorage.removeItem('Token', (error) => {
			if (error) {
				alert(error)
			} else {
				this.props.navigation.navigate('AuthCheck');
			}
		})
	}

	logoutHandler = () => {
		Alert.alert(
            "Logout",
            "Are you sure ?",
            [
                {
                    text: "NO", onPress: () => {
                    }
                },
                {
                    text: "YES", onPress: () => {
                        this.logout()
                    }
                }
            ],
            { cancelable: false }
        )
	}

	render(){
		return(
			<React.Fragment>
				<View style={component.header}>
					<View style={component.itemsHeader}>
						<Text style={component.items}>Home</Text>
						<TouchableOpacity style={component.logout} onPress={this.logoutHandler}>
							<Ionicons name="md-log-out" size={28} color="#c62828"/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={component.body}>
					<TouchableOpacity style={items.edit}>
						<MaterialCommunityIcons name="pencil-circle-outline" size={25} color={'#ffffff'}/>
					</TouchableOpacity>
					<View style={items.top}>
						<Image style={items.image} source={{uri: 'https://i.pinimg.com/originals/ed/a1/c0/eda1c044bca1e775d3a82dd524ca2321.jpg' }} />
						<View style={items.itemsTop}>
							<Text style={text.itemsName}>{this.props.users.data.guide_name}</Text>
							<Text style={text.itemsPhone}>{this.props.users.data.no_phone}</Text>
							<Text style={text.itemsPhone}>{this.props.users.data.gender} ({this.props.users.data.age})</Text>
						</View>
					</View>
					<View style={items.bot}>
						<View style={{flexDirection: 'row', alignItems: 'center'}}>
							<Ionicons style={{flex: 1}} name="ios-pin" size={25}/>
							<Text style={{flex: 9, color: '#fff'}}>{this.props.users.data.id_destination}</Text>
						</View>
					</View>
				</View>
				<View style={component.menu}>
					<View style={component.itemsMenu}>
						<View style={component.menuChat}>
							<Ionicons name="ios-list-box" size={34} style={{flex: 1, alignSelf: 'center'}}/>
							<Text style={{flex: 1, alignSelf: 'center'}}>Orders</Text>
						</View>
					</View>
					<View style={component.itemsMenu}>
						<TouchableOpacity style={component.menuScan} onPress={() => this.props.navigation.navigate('Scanner')}>
							<MaterialCommunityIcons name="qrcode-scan" size={34} style={{flex: 1, alignSelf: 'center'}}/>
							<Text style={{flex: 1, alignSelf: 'center'}}>Scan</Text>
						</TouchableOpacity>
					</View>
					<View style={component.itemsMenu}>
						<TouchableOpacity style={component.menuOpt} onPress={() => this.props.navigation.navigate('Chat')}>
							<SimpleLineIcons name="bubble" size={34} style={{flex: 1, alignSelf: 'center'}}/>
							<Text style={{flex: 1, alignSelf: 'center'}}>Chat</Text>
						</TouchableOpacity>
					</View>
				</View>
			</React.Fragment>
		)
	}
}

export default connect(state => ({users: state.users, auth: state.auth}))(App)

const text = StyleSheet.create({
	itemsName: {
		color: '#ffffff',
		fontSize: 15,
		fontFamily: 'sans-serif-medium'
	},
	itemsPhone: {
		color: '#ffffff',
		fontSize: 13,
		fontFamily: 'sans-serif-thin'
	}
})

const items = StyleSheet.create({
	top: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 15,
	},
	itemsTop: {
		flexDirection: 'column',
		paddingLeft: 15,
	},
	bot: {
		paddingLeft: 25,
		marginTop: 10,
		width: '100%',
		height: 20
	},
	image: {
		width: 55,
		height: 55,
		borderRadius: 150,
		borderWidth: 2,
		borderColor: '#ffffff'
	},
	edit: {
		width: '100%', 
		height: 20, 
		alignItems: 'flex-end', 
		paddingRight: 5, 
		paddingTop: 5
	}
})

const component = StyleSheet.create({
	header: {
		position: 'absolute',
		paddingTop: 20,
		width: '100%'
	},
	itemsHeader: {
		height: 45,
		justifyContent: 'center',
		flexDirection: 'row'
	},
	items: {
		fontSize: 24,
		fontWeight: '600',
		fontFamily: 'sans-serif-condensed',
		paddingLeft: 25,
		flex: 1
	},
	logout: {
		flex: 1,
		alignSelf: 'center',
		alignItems: 'flex-end',
		paddingRight: 20
	},
	body: {
		marginTop: 80,
		width: '90%',
		height: 120,
		backgroundColor: '#0277bd',
		alignSelf: 'center',
		borderRadius: 15,
		flexDirection: 'column'
	},
	menu: {
		flexDirection: 'row',
		marginTop: 25,
	},
	itemsMenu: {
		flex: 1,
	},
	menuChat: {
		marginLeft: 10,
		height: 90,
		width: '80%',
		alignSelf: 'center',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	menuScan: {
		height: 90,
		width: '80%',
		alignSelf: 'center',
	},
	menuOpt: {
		marginRight: 10,
		height: 90,
		width: '80%',
		alignSelf: 'center',
	}
})