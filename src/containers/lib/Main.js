import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container } from './Container';
import { Header } from '../../components';
import { Auth } from '../../models';
import { setAuthAction } from '../../actions';
import { MainController } from '../../controllers';

const actions = { setAuthAction };

class Main extends Container {

	constructor(props) {
		super(props);

		this.state = {
			auth: new Auth(),
		};

		const toController = {
			callback: this.callback,
			getState: this.getState,
			getProps: this.getProps,
			setAuth: props.setAuthAction,
			router: props.router,
		};

		this.controller = new MainController(toController);
	}

	componentWillMount() {
		this.controller.handleLogin();
	}

	componentWillReceiveProps(nextProps) {
	}

	render() {

		return (
      <section className="main">
				{this.props.children}
      </section>
		);
	}
}

const mstp = state => {
	return {
		auth: state.auth.model
	};
};

export default connect(mstp, actions)(Main);
