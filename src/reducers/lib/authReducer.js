import {
  SET_AUTH
} from "../../actions";

const INITIAL_STATE = {
	model: false
};

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case SET_AUTH: return { model: action.data };
		default: return state;
	}
};
