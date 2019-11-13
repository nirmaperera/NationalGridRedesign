import authReducer from './authReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	isLogged: authReducer,

})

export default rootReducer;
