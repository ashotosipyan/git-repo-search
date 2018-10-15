import React from "react";

const Pagination = props => {
	return (
		<nav aria-label="Page navigation example">
			<ul className="pagination">
				<li className="page-item">
					<button
						disabled={
							parseInt(props.currentPage) === 1 ? true : false
						}
						className="page-link"
						onClick={props.prevPage}
					>
						Previous
					</button>
				</li>
				<li className="page-item">
					<button
						disabled={props.lastPage ? true : false}
						className="page-link"
						onClick={props.nextPage}
					>
						Next
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
