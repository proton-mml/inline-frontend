import { CompanyRepository } from '../../repositories';
import { Navigator } from '../../helper';

export class ProfileController {

	constructor({callback, getState, getProps, router}) {
		this.callback = callback;
		this.getState = getState;
		this.getProps = getProps;

		this.companyRepo = new CompanyRepository();
		this.navigator = new Navigator(router);
		this.handleChangeAction = this.handleChangeAction.bind(this);
		this.handleSubmitAction = this.handleSubmitAction.bind(this);
		this.getAllCompanies = this.getAllCompanies.bind(this);

	}
	async getAllCompanies(my_email) {
		var {table} = this.getState();
		var obj = {
			email_empresa:my_email,
			token:window.sessionStorage.getItem('session_token')
		};
		const resp = await this.companyRepo.getAll(obj);
		Object.keys(resp.data.answer).map(function (key, index) {
			var item = resp.data.answer[key];
			table.push({estado:item.estado, cidade:item.cidade, logradouro:item.logradouro, numero:item.numero, complemento:item.complemento, email_empresa:item.email_empresa, senha:item.senha, nome:item.nome});
		});
		this.callback({table});
	}
	handleChangeAction(e){
		const to = {};
		to[e.target.id] = e.target.value;
		this.callback(to);
	}
	async handleSubmitAction() {
		$('#add_company').modal('close');
		var {estado, cidade, logradouro, numero, complemento, email_empresa, senha, cnpj, nome, table, my_email} = this.getState();
		table.push({estado, cidade, logradouro, numero, complemento, email_empresa, senha, cnpj, nome});
		this.callback({table, estado:'', cidade:'', logradouro:'', numero:'', complemento:'', email_empresa:'',senha: '', cnpj: '', nome:''});
		var obj = {
			nome: nome,
			email: email_empresa,
			email_empresa:my_email,
			endereco: {
				estado: estado,
				cidade:cidade,
				numero: numero,
				complemento:complemento,
				logradouro:logradouro
			},
			posicao_gps:'3213dasdas',
			senha:senha,
			cnpj:cnpj,
			token:window.sessionStorage.getItem('session_token')
		};
		const resp = await this.companyRepo.create(obj);
		console.log(resp);
	}
}
