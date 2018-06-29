export const SET_AUTH = "SET_AUTH";

export function setAuthAction(auth) {
	return {
		type: SET_AUTH,
		data: auth
	};
}