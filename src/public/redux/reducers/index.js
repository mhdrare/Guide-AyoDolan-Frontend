import { combineReducers } from 'redux';
import auth from './auth';
import users from './users';
import history from './history';
import scan from './scan';

const appReducer = combineReducers({
	auth,
	users,
	history,
	scan
})

export default appReducer;