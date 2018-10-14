import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import Pagination from "./Pagination";

class Landing extends Component {
	constructor() {
		super();
		this.searchInputValue = "";
		this.pageNumber = 0;
	}

	inputChange = e => {
		e.preventDefault();
		this.searchInputValue = e.target.value;
		console.log(this.searchInputValue);
	};

	getRepoForks = e => {
		if (!e.target.checkValidity()) {
			return;
		}
		e.preventDefault();
		++this.pageNumber;
		this.props.fetchForks(this.searchInputValue, this.pageNumber);
	};

	render() {
		let { forks } = this.props;
		console.log("fork", forks);
		if (forks.isFetching === true) {
			return <p>Loading...</p>;
		} else {
			return (
				<Fragment>
					<div className="searchBoxWrapper row justify-content-center">
						<h1>Welcome to the Git repo search!</h1>
						<form
							className="form-inline search-form"
							onSubmit={this.getRepoForks}
							noValidate
						>
							<div className="form-group mx-sm-3 mb-4 formWrapper">
								<label
									htmlFor="gitRepoInput"
									className="sr-only"
								>
									Git repo name
								</label>
								<input
									type="text"
									className="form-control"
									id="gitRepoInput"
									placeholder="Owner/RepositoryName"
									onChange={this.inputChange}
									required
								/>
							</div>
							<button
								type="submit"
								className="btn btn-primary mb-2"
							>
								Search repo
							</button>
						</form>
					</div>
					<table className="table table-dark results-table">
						<thead>
							<tr>
								<th scope="col">Repo name</th>
								<th scope="col">Owner</th>
								<th scope="col">Stars</th>
								<th scope="col">Fork URL</th>
							</tr>
						</thead>
						<tbody>
							{forks.forksArray.map(result => (
								<tr key={result.id}>
									<td>{result.full_name}</td>
									<td>{result.owner.login}</td>
									<td>{result.stargazers_count}</td>
									<td>
										<a
											href={result.forks_url}
											className="listLink"
											target="_blank"
											rel="noopener noreferrer"
										>
											{result.forks_url}
										</a>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<Pagination />
				</Fragment>
			);
		}
	}
}

export default connect(
	state => {
		return state;
	},
	actions
)(Landing);
