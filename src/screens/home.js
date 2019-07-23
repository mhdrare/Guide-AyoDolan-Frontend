import React, {Component} from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image, StatusBar, ActivityIndicator, AsyncStorage } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

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
				<View style={component.header}>
					<View style={component.itemsHeader}>
						<Text style={component.items}>Home</Text>
					</View>
				</View>
				<View style={component.body}>
					<TouchableOpacity style={items.edit}>
						<MaterialCommunityIcons name="pencil-circle-outline" size={25} color={'#ffffff'}/>
					</TouchableOpacity>
					<View style={items.top}>
						<Image style={items.image} source={{uri: 'https://i.pinimg.com/originals/ed/a1/c0/eda1c044bca1e775d3a82dd524ca2321.jpg' }} />
						<View style={items.itemsTop}>
							<Text style={text.itemsName}>Guide AyoDolan!</Text>
							<Text style={text.itemsPhone}>0822-2222-4444</Text>
							<Text style={text.itemsPhone}>L (34)</Text>
						</View>
					</View>
					<View style={items.bot}>
						<View style={{flexDirection: 'row', alignItems: 'center'}}>
							<Ionicons style={{flex: 1}} name="ios-pin" size={25}/>
							<Text style={{flex: 9, color: '#fff'}}>DI Yogyakarta</Text>
						</View>
					</View>
				</View>
				<View style={component.menu}>
					<View style={component.itemsMenu}>
						<View style={component.menuChat}>
							<Ionicons name="ios-list-box" size={40} style={{flex: 1, alignSelf: 'center'}}/>
							<Text style={{flex: 1, alignSelf: 'center'}}>Orders</Text>
						</View>
					</View>
					<View style={component.itemsMenu}>
						<View style={component.menuScan}>
							<MaterialCommunityIcons name="qrcode-scan" size={40} style={{flex: 1, alignSelf: 'center'}}/>
							<Text style={{flex: 1, alignSelf: 'center'}}>Scan</Text>
						</View>
					</View>
					<View style={component.itemsMenu}>
						<View style={component.menuOpt}>
							<SimpleLineIcons name="bubble" size={40} style={{flex: 1, alignSelf: 'center'}}/>
							<Text style={{flex: 1, alignSelf: 'center'}}>Chat</Text>
						</View>
					</View>
				</View>
			</React.Fragment>
		)
	}
}

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
	},
	items: {
		fontSize: 24,
		fontWeight: '600',
		fontFamily: 'sans-serif-condensed',
		paddingLeft: 25
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