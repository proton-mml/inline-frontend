import { AuthRepository } from "../../repositories";
import { setAuthAction } from "../../actions";

export class AuthMiddleware {
	constructor(store) {
		this.store = store;
		this.authRepo = new AuthRepository();
		this.authorize = this.authorize.bind(this);
	}
	clearStorage() {
		window.sessionStorage.removeItem("session_token");
	}
	async authorize(nextState, replace, callback) {
		const token = window.sessionStorage.getItem("session_token") || window.sessionStorage.getItem("session_token");
		if(!token) {
			this.clearStorage();
			replace("/");
			return callback();
		}
		const promise = await this.authRepo.validateToken(token);
		if(promise.err) {
			this.clearStorage();
			replace("/");
			return callback();
		}
		callback();
	}
}
