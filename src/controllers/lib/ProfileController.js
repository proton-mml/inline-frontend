import { AuthRepository } from '../../repositories';
import { Navigator } from '../../helper';

export class ProfileController {

	constructor({callback, getState, getProps, router}) {
		this.callback = callback;
		this.getState = getState;
		this.getProps = getProps;

		this.authRepo = new AuthRepository();
		this.navigator = new Navigator(router);

	}
}
