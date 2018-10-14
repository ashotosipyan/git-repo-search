import React from "react";

const Pagination = props => {
	return (
		<nav aria-label="Page navigation example">
			<ul className="pagination">
				<li className="page-item">
					<a className="page-link">Previous</a>
				</li>
				<li className="page-item">
					<a className="page-link">Next</a>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
