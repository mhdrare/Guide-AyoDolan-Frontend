import { createAppContainer, createStackNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';
import Login from '../screens/auth/login';
import ForgotPassword from '../screens/auth/forgotPassword';
import ConfirmCode from '../screens/auth/confirmCode';
import NewPassword from '../screens/auth/newPassword';
import Home from '../screens/home';
import AuthCheck from '../screens/authCheck';
import Chat from '../screens/chat/index';
import Personal from '../screens/chat/personal';

const AuthNavigator = createStackNavigator({
	Login,
	ForgotPassword,
	ConfirmCode,
	NewPassword,
}, {
	initialRouteName: 'Login',
	headerMode: 'none'
})

const HomeNavigator = createStackNavigator({
	Home,
	// Chat,
	// Personal,
	// Scanner
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