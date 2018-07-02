import { BaseRepository } from "./BaseRepository";

export class CompanyRepository extends BaseRepository {
	constructor() {
		super();
	}

	create(body) {
		return this.post("/estabelecimento_novo", body);
	}
	getAll(body) {
		return this.post("/estabelecimentos", body);
	}

}
