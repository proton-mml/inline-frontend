import { BaseRepository } from "./BaseRepository";

export class AuthRepository extends BaseRepository {
	constructor() {
		super();
	}

	authorize(body) {
		console.log(body);
		return this.post("/autorizar", body);
	}

	validateToken(token) {
		return this.post("/validate_token", { token });
	}

}
