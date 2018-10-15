import React from "react";

const ResultsTable = props => {
	return (
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
				{props.forksData.map(result => (
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
	);
};

export default ResultsTable;
