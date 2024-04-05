import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

const Pagination = ({ PaginationData }) => {
	const [PageCount, setPageCount] = useState(PaginationData.totalPages);
	const [currentPage, setCurrentPage] = useState(PaginationData.currentPage);

	const navigate = useNavigate();

	const handlePageChange = (event) => {
		const selectedPage = event.selected + 1;
		navigate(`/produk?page=${selectedPage}`);
	};
	return (
		<div className="">
			<ReactPaginate
				className="pagination"
				breakLabel="..."
				nextLabel="next >"
				previousLabel="< previous"
				onPageChange={handlePageChange}
				forcePage={currentPage}
				pageRangeDisplayed={5}
				pageCount={PageCount}
				renderOnZeroPageCount={null}
			/>
		</div>
	);
};

export default Pagination;
