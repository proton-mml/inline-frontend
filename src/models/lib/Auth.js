export class Auth {
	constructor(auth = {}) {
		this.email = auth.data ? auth.data.email : '';
		this.nome = auth.data ? auth.data.nome : '';
		this.tipo = auth.data ? auth.data.tipo : '';
		this.token = auth.token || '';
	}
}
