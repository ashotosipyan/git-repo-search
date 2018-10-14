import { combineReducers } from "redux";
import { forksReducer } from "./reducer";

const rootReducer = combineReducers({
	forks: forksReducer
});

export default rootReducer;
