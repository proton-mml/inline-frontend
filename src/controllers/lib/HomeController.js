import { AuthRepository } from '../../repositories';
import { Navigator } from '../../helper';

export class HomeController {

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
		const { email, password } = this.getState();
		const promise = await this.authRepo.authorize({ email, senha:password });
		console.log("promise->", promise);
		if(promise.data.success) {
			window.sessionStorage.setItem('session_token', promise.data.token);
			this.navigator.navigateTo('/profile');
		} else {
			console.log("Deu erro");
		}

	}
}
