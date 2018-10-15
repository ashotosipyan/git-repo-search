import * as actionTypes from "../actions/actionTypes";

export let forksReducer = (
	state = { isFetching: false, forksArray: [], listLastItem: false },
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
		case actionTypes.LIST_LAST_ITEM:
			return {
				listLastItem: true
			};
		default:
			return state;
	}
};

export let submitForm = (state = { formSubmitted: false }, action) => {
	switch (action.type) {
		case actionTypes.SUCCESSFUL_FORM_SUBMIT:
			return {
				formSubmitted: true
			};
		default:
			return state;
	}
};
