import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './containers/App';

export default store => {

	return (
		<Router history={browserHistory}>
			<Route component={App} >
			   <Route path='/' component={Home} />
			</Route>
    </Router>);
};
