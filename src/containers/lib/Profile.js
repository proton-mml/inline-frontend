import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from './Container';
import { ProfileController } from '../../controllers';
import { Header, LoginForm } from '../../components';

class Profile extends Container {
	constructor(props) {
		super(props);

		this.state = {
		};

		const toController = {
			callback: this.callback,
			getState: this.getState,
			getProps: this.getProps,
			router: props.router
		};

		this.controller = new ProfileController(toController);
	}

	componentDidMount() {
	}

	componentWillReceiveProps(nextProps) {
	}

	componentDidUpdate() {
	}
	render() {
		const { } = this.controller;
		const { email, password } = this.state;
		return (
    <div className='profile'>
			<Header/>
		</div>
		);
	}
}

const mstp = state => {
	console.log(state);
};

export default connect(mstp, {})(Profile);
