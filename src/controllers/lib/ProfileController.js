import { AuthRepository } from '../../repositories';
import { Navigator } from '../../helper';

export class ProfileController {

	constructor({callback, getState, getProps, router}) {
		this.callback = callback;
		this.getState = getState;
		this.getProps = getProps;

		this.authRepo = new AuthRepository();
		this.navigator = new Navigator(router);
		this.handleChangeAction = this.handleChangeAction.bind(this);
		this.handleSubmitAction = this.handleSubmitAction.bind(this);

	}
	handleChangeAction(e){
		const to = {};
		to[e.target.id] = e.target.value;
		this.callback(to);
	}
	async handleSubmitAction() {
		$('#add_company').modal('close');
		var {estado, cidade, logradouro, numero, complemento, email_empresa, table} = this.getState();
		console.log(table);
		table.push({estado, cidade, logradouro, numero, complemento, email_empresa});
		this.callback({table, estado:'', cidade:'', logradouro:'', numero:'', complemento:'', email_empresa:'' });
	}
}
