import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { getScan, updateScan } from '../public/redux/actions/scan'
import { connect } from 'react-redux'

class App extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			idTransc: '',
			foundID: false,
		};
	}

	barcodeRecognized = async ({ barcodes }) => {
	    if (!this.state.foundID) {
	    	await console.log(barcodes.forEach(barcode => this.setState({idTransc: barcode.data, foundID: true})))
	    	await this.props.dispatch(getScan(this.state.idTransc))
	    }
	};

	updateHandler = () => {
		if (this.state.idTransc == '') {
			alert('USER NOT FOUND!')
		} else {
			this.props.dispatch(updateScan(this.state.idTransc))
			this.props.navigation.goBack()
			alert('Sukses!')
		}
	}

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
				<View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
					<FlatList
						data = { this.props.scan.data }
						keyExtractor = {(item) => item.id_order.toString()}
						style={{flex: 1, width: '100%', height: '100%'}}
						renderItem = {({item, index}) => {
							return (
							<React.Fragment>
								<View style={component.order}>
									<Text style={text.title}>{'Id Transc'.toUpperCase()}</Text>
									<Text style={text.description}>{item.id_transaksi}</Text>
								</View>
								<View style={component.row}>
									<View style={component.name}>
										<Text style={text.title}>{'Name'.toUpperCase()}</Text>
										<Text style={text.description}>{item.name}</Text>
									</View>
									<View style={component.date}>
										<Text style={text.rightTitle}>{'Date'.toUpperCase()}</Text>
										<Text style={text.rightDesc}>{item.no_phone}</Text>
									</View>
								</View>
							</React.Fragment>
							)
						}
					}>
					</FlatList>
				</View>
				<TouchableOpacity style={component.confirmation} onPress={this.updateHandler}>
					<Text style={text.confirmation}>Confirmation</Text>
				</TouchableOpacity>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => {
    return {
        scan: state.scan,
    }
}

export default connect(mapStateToProps)(App)

const text = StyleSheet.create({
	confirmation: {
		textAlign: 'center',
		fontFamily: 'sans-serif-condensed',
		fontSize: 17,
		color: '#fff'
	},
	title: {
		fontFamily: 'sans-serif-thin',
		fontSize: 13,
	},
	rightTitle: {
		fontFamily: 'sans-serif-thin',
		fontSize: 13,
		textAlign: 'right'
	},
	description: {
		fontFamily: 'sans-serif-medium',
		fontSize: 18,
		color: '#000'
	},
	rightDesc: {
		fontFamily: 'sans-serif-medium',
		fontSize: 18,
		color: '#000',
		textAlign: 'right'
	}
})

const component = StyleSheet.create({
	confirmation: {
		position: 'absolute',
		bottom: 10,
		right: 10,
		width: '95%',
		backgroundColor: '#0277bd',
		height: 40,
		justifyContent: 'center',
		borderRadius: 7,
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
		flexDirection: 'row',
		height: 150
	}
})

const styles = StyleSheet.create({
	
});