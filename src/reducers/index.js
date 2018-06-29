import { combineReducers } from 'redux';

import authReducer from './lib/authReducer';

export default combineReducers({
	auth: authReducer,
});
