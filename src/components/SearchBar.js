import React from "react";

const SearchBar = props => {
	return (
		<div className="searchBoxWrapper row justify-content-center">
			<h1>Welcome to the Git repo search!</h1>
			<form
				className="form-inline search-form"
				onSubmit={props.handleFormSubmit}
				noValidate
			>
				<div className="form-group mx-sm-3 mb-4 formWrapper">
					<label htmlFor="gitRepoInput" className="sr-only">
						Git repo name
					</label>
					<input
						type="text"
						className="form-control"
						id="gitRepoInput"
						placeholder="Owner/RepositoryName"
						onChange={props.handleInputChange}
						required
					/>
				</div>
				<button type="submit" className="btn btn-primary mb-2">
					Search forks
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
