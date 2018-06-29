import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from './Container';
import { HomeController } from '../../controllers';
import { Header, LoginForm } from '../../components';

class Home extends Container {
	constructor(props) {
		super(props);

		this.state = {
			email:'',
			password: ''
		};

		const toController = {
			callback: this.callback,
			getState: this.getState,
			getProps: this.getProps,
			router: props.router
		};

		this.controller = new HomeController(toController);
	}

	componentDidMount() {
	}

	componentWillReceiveProps(nextProps) {
	}

	componentDidUpdate() {
	}
	render() {
		const { handleChangeAction, handleSubmitAction } = this.controller;
		const { email, password } = this.state;
		return (
    <div className='home'>
			<Header
				isLoggedIn={()=>console.log("bla")}
				handleLogoutClickAction={()=>console.log("bla")}
			/>
			<LoginForm
				email={email}
				password={password}
				handleChange={handleChangeAction}
				handleSubmit={handleSubmitAction}
			/>
		</div>
		);
	}
}

const mstp = state => {

};

export default connect(mstp, {})(Home);
