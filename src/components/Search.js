import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import queryString from "query-string";
import ResultsTable from "./ResultsTable";
import Pagination from "./Pagination";
import gear from "../Gear.png";
class Search extends Component {
	constructor(props) {
		super(props);
		this.queryStringResult = queryString.parse(this.props.location.search);
		this.resultsCount = this.props.forks;
	}

	componentDidMount() {
		this.props.fetchForks(
			this.queryStringResult.repoName,
			this.queryStringResult.page
		);
	}

	nextPage = () => {
		window.location.replace(
			`/search?page=${parseInt(this.queryStringResult.page) +
				1}&repoName=${this.queryStringResult.repoName}`
		);
	};

	prevPage = () => {
		if (this.queryStringResult.page > 0) {
			window.location.replace(
				`/search?page=${parseInt(this.queryStringResult.page) -
					1}&repoName=${this.queryStringResult.repoName}`
			);
		}
	};

	render() {
		let { forks } = this.props;

		if (forks.isFetching) {
			return <img src={gear} className="loader-image" alt="loader" />;
		} else {
			return (
				<Fragment>
					<div className="resultsHeading">
						<input
							type="text"
							className="form-control search-result-input"
							value={this.queryStringResult.repoName}
							readOnly={true}
						/>
					</div>
					{forks.listLastItem ? (
						<div
							className="alert alert-warning alert-box"
							role="alert"
						>
							No results for your request
						</div>
					) : (
						<ResultsTable
							forksData={forks.forksArray}
							loading={forks.isFetching}
						/>
					)}
					<Pagination
						currentPage={this.queryStringResult.page}
						lastPage={forks.listLastItem}
						nextPage={this.nextPage}
						prevPage={this.prevPage}
					/>
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
)(Search);
