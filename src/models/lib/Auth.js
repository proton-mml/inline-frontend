export class Auth {
	constructor(auth = {}) {
		this.email = auth.user ? auth.user.email : '';
		this.nome = auth.user ? auth.user.nome : '';
		this.tipo = auth.user ? auth.user.tipo : '';
		this.token = auth.token || '';
	}
}
