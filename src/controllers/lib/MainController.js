import { Navigator } from "../../helper";
import { AuthRepository } from '../../repositories';
import { Auth } from '../../models';

export class MainController {

	constructor({ callback, getState, getProps, setAuth, router }) {

		this.callback = callback;
		this.getState = getState;
		this.getProps = getProps;
		this.setAuth = setAuth;

		this.navigator = new Navigator(router);
		this.authRepo = new AuthRepository();

		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.handleLogin = this.handleLogin.bind(this);

	}
	async handleLogin() {
		const token = window.sessionStorage.getItem('session_token');
		const userPromise = await this.authRepo.validateToken(token);
		if(!userPromise.err) {
			this.setAuth(new Auth(userPromise.data));
		} else {
			this.handleLogoutClick();
		}
	}
	handleLogoutClick() {
		window.sessionStorage.removeItem('session_token');
		this.navigator.navigateTo('/');
	}
}
