import { combineReducers } from 'redux';
import auth from './auth';
import users from './users';

const appReducer = combineReducers({
	auth,
	users
})

export default appReducer;