import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from './Container';
import { AddModal } from './AddModal';
import { ProfileController } from '../../controllers';
import { Header, LoginForm } from '../../components';
import { Alert, Button } from 'react-bootstrap';

class Profile extends Container {
	constructor(props) {
		super(props);

		this.state = {
			estado:'', cidade:'', logradouro:'', numero:'', complemento:'', email_empresa:'',
			table:[]
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
		$('#add_company').modal();
	}

	componentWillReceiveProps(nextProps) {
	}

	componentDidUpdate() {
	}
	render() {
		const { handleChangeAction, handleSubmitAction } = this.controller;
		const { estado, cidade, logradouro, numero, complemento, email_empresa } = this.state;
		return (
    <div className='profile'>
			<AddModal handleChange={handleChangeAction} estado={estado} cidade={cidade} logradouro={logradouro} numero={numero} complemento={complemento} email_empresa={email_empresa} handleSubmit={handleSubmitAction}/>
			<Header/>
			<Alert bsStyle="success">
  			<strong>Adicione um estabelecimento!</strong> Clique no botão para adicionar um estabelecimento.
				<Button bsStyle="primary" onClick={() => $('#add_company').modal('open')}>Adicionar +</Button>
			</Alert>
		</div>
		);
	}
}

const mstp = state => {
	console.log(state);
};

export default connect(mstp, {})(Profile);
