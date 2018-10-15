import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Search from "./components/Search";

const Routes = () => (
	<Switch>
		<Route exact path="/" component={Landing} />
		<Route path="/search/" component={Search} />
	</Switch>
);

export default Routes;
