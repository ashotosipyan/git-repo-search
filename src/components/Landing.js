import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import SearchBar from "./SearchBar";

class Landing extends Component {
	constructor() {
		super();
		this.searchInputValue = "";
		this.pageNumber = 0;
	}

	inputChange = e => {
		e.preventDefault();
		this.searchInputValue = e.target.value;
	};

	submitFormResult = e => {
		if (!e.target.checkValidity()) {
			return;
		}
		e.preventDefault();
		this.props.submitForm();
	};

	render() {
		let { isSubmitted } = this.props;

		if (isSubmitted.formSubmitted) {
			return (
				<Redirect
					to={`/search?page=1&repoName=${this.searchInputValue}`}
				/>
			);
		}
		return (
			<SearchBar
				handleInputChange={this.inputChange}
				handleFormSubmit={this.submitFormResult}
			/>
		);
	}
}

export default connect(
	state => {
		return state;
	},
	actions
)(Landing);
