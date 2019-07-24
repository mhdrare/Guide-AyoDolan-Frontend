import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppNavigator from './src/routes/rootNavigator';
import store from './src/public/redux/store';
import { Provider } from 'react-redux';

export default class App extends Component {
	render() {
		return (
			<Provider store={store} >
				<AppNavigator/>
			</Provider>
		);
	}
}
