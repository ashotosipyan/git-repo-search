import axios from "axios";
import * as actionTypes from "./actionTypes";

export let startForkSearch = () => {
	return {
		type: actionTypes.START_FORKS_SEARCH
	};
};

export let endForkSearch = forksArray => {
	return {
		type: actionTypes.END_FORKS_SEARCH,
		forksArray
	};
};

export let fetchForks = (inputResult, page) => {
	let url = `https://api.github.com/repos/${inputResult}/forks?page=${page}&per_page=10`;
	return dispatch => {
		dispatch(startForkSearch());
		return axios.get(url).then(
			response => {
				let forksArr = response.data;
				dispatch(endForkSearch(forksArr));
			},
			err => {
				console.log(err);
			}
		);
	};
};
