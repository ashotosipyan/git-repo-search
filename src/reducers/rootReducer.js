import { combineReducers } from "redux";
import { forksReducer, submitForm } from "./reducer";

const rootReducer = combineReducers({
	forks: forksReducer,
	isSubmitted: submitForm
});

export default rootReducer;
