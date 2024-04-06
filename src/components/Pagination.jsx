import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import PropTypes from "prop-types";

const Pagination = ({ PaginationData, URL, RefreshPage }) => {
	const [PageCount] = useState(PaginationData.totalPages);
	const [currentPage, setCurrentPage] = useState(
		PaginationData.currentPage - 1
	);

	const navigate = useNavigate();

	const handlePageChange = (event) => {
		const selectedPage = event.selected;
		navigate(`${URL}${selectedPage + 1}`);
		setCurrentPage(selectedPage);
		RefreshPage();
	};
	return (
		<div className="pagination-container">
			<ReactPaginate
				containerClassName="pagination justify-content-center"
				breakLabel="..."
				nextLabel={<MdOutlineNavigateNext size={30} />}
				previousLabel={<MdOutlineNavigateBefore size={30} />}
				onPageChange={handlePageChange}
				forcePage={currentPage}
				pageRangeDisplayed={2}
				pageCount={PageCount}
				renderOnZeroPageCount={null}
			/>
		</div>
	);
};

Pagination.propTypes = {
	PaginationData: PropTypes.shape({
		totalPages: PropTypes.number.isRequired,
		currentPage: PropTypes.number.isRequired,
	}).isRequired,
	URL: PropTypes.string.isRequired,
	RefreshPage: PropTypes.func.isRequired,
};

export default Pagination;
