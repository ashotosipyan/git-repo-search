import * as actionTypes from "../actions/actionTypes";

export let forksReducer = (
	state = { isFetching: false, forksArray: [] },
	action
) => {
	switch (action.type) {
		case actionTypes.START_FORKS_SEARCH:
			return {
				isFetching: true
			};
		case actionTypes.END_FORKS_SEARCH:
			return {
				isFetching: false,
				forksArray: action.forksArray
			};
		default:
			return state;
	}
};
