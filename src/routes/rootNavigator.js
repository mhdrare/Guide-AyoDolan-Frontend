import { createAppContainer, createStackNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';
import Login from '../screens/auth/login';
import Home from '../screens/home';
import AuthCheck from '../screens/authCheck';
import Chat from '../screens/chat/index';
import Personal from '../screens/chat/personal';

const AuthNavigator = createStackNavigator({
	Login,
}, {
	initialRouteName: 'Login',
	headerMode: 'none'
})

const HomeNavigator = createStackNavigator({
	Home,
	// Chat,
	// Personal,
}, {
	initialRouteName: 'Home',
	headerMode: 'none'
})

const SwitchNavigator = createSwitchNavigator({
	Auth: AuthNavigator,
	AuthCheck: AuthCheck,
	Home: HomeNavigator
},{
	initialRouteName: 'AuthCheck',
})

export default createAppContainer(SwitchNavigator);