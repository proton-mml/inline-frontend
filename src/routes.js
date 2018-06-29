import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { AuthMiddleware } from './middlewares';

import App from './containers/lib/App';
import Main from './containers/lib/Main';
import Home from './containers/lib/Home';
import Profile from './containers/lib/Profile';

export default store => {
	const authMiddleware = new AuthMiddleware(store);

	return (
		<Router history={browserHistory}>
			<Route component={App} >
			<Route path='/' component={Home} />
			<Route component={Main} onEnter={authMiddleware.authorize}>
				<Route path='/profile' component={Profile} />
			</Route>
			</Route>
    </Router>);
};
