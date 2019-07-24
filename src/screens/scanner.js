import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class App extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			data: ''
		};
	}

	barcodeRecognized = ({ barcodes }) => {
		barcodes.forEach(barcode => console.log(barcode.data))
	    // barcodes.forEach(barcode => this.setState({data: barcode.data}))
	};

	// NAME GUIDE
	// ID ORDER
	// NAME
	// NO PHONE
	// DESTINATION
	// DATE
	// STATUS

	render(){
		return(
			<React.Fragment>
				<RNCamera
					ref={ref => {
						this.camera = ref
					}}
					style={{
						flex: 2,
						width: '100%',
			        }}
			        onGoogleVisionBarcodesDetected={this.barcodeRecognized}
				>
					
				</RNCamera>
				<View  style={{flex: 1, backgroundColor: '#f2f2f2'}}>
					<FlatList
						data = {
							[
								{
									id_order: 2,
									name: 'M Faisal A',
									no_phone: '081322224444',
									destination: 'Prambanan',
									date: '10-10-2019',
									status: 'Pending'
								}
							]
						}
						keyExtractor = {(item) => item.id_order}
						style={{flex: 1, width: '100%', height: '100%'}}
						renderItem = {({item, index}) => {
							return (
							<React.Fragment>
								<View style={component.order}>
									<Text style={text.title}>{'Id Order'.toUpperCase()}</Text>
									<Text style={text.description}>{item.id_order}</Text>
								</View>
								<View style={component.row}>
									<View style={component.name}>
										<Text style={text.title}>{'Name'.toUpperCase()}</Text>
										<Text style={text.description}>{item.name}</Text>
									</View>
									<View style={component.phone}>
										<Text style={text.title}>{'No Phone'.toUpperCase()}</Text>
										<Text style={text.description}>{item.no_phone}</Text>
									</View>
								</View>
								<View style={component.row}>
									<View style={component.destination}>
										<Text style={text.title}>{'Destination'.toUpperCase()}</Text>
										<Text style={text.description}>{item.destination}</Text>
									</View>
									<View style={component.date}>
										<Text style={text.title}>{'Date'.toUpperCase()}</Text>
										<Text style={text.description}>{item.date}</Text>
									</View>
								</View>
								<View style={component.status}>
									<Text style={text.title}>{'Status'.toUpperCase()}</Text>
									<Text style={text.description}>{item.status}</Text>
								</View>
							</React.Fragment>
							)
						}
					}>
					</FlatList>
				</View>
					<TouchableOpacity style={component.confirmation}>
						<Text style={text.confirmation}>Confirmation</Text>
					</TouchableOpacity>
			</React.Fragment>
		)
	}
}

const text = StyleSheet.create({
	confirmation: {
		textAlign: 'center',
		fontFamily: 'sans-serif-condensed',
		fontSize: 17,
		color: '#fff'
	},
	title: {
		fontFamily: 'sans-serif-thin',
		fontSize: 13
	},
	description: {
		fontFamily: 'sans-serif-medium',
		fontSize: 18,
		color: '#000'
	}
})

const component = StyleSheet.create({
	confirmation: {
		position: 'absolute',
		bottom: 10,
		right: 10,
		width: 160,
		backgroundColor: '#0277bd',
		height: 40,
		justifyContent: 'center',
		borderRadius: 7
	},
	order: {
		flex: 1,
		height: 40,
		width: 120,
		padding: 10
	},
	name: {
		flex: 1,
		height: 40,
		width: 120,
		padding: 10
	},
	phone: {
		flex: 1,
		height: 40,
		width: 120,
		padding: 10
	},
	destination: {
		flex: 1,
		height: 40,
		width: 120,
		padding: 10
	},
	date: {
		flex: 1,
		height: 40,
		width: 120,
		padding: 10
	},
	status: {
		flex: 1,
		height: 60,
		width: 120,
		padding: 10
	},
	row: {
		flexDirection: 'row'
	}
})

const styles = StyleSheet.create({
	
});