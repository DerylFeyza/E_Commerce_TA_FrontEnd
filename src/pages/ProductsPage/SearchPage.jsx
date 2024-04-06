import ProductList from "../../components/Product/ProductList";
import Pagination from "../../components/Pagination";
import { useState, useEffect } from "react";
import { findProduct, getPaginatedDataProduct } from "../../services/products";

const Searched = () => {
	const [products, setProducts] = useState([]);
	const [paginationData, setPaginationData] = useState(null);
	const [URL, setURL] = useState(null);

	useEffect(() => {
		retrieveProducts();
	}, []);

	const retrieveProducts = async () => {
		const queryParams = new URLSearchParams(window.location.search);
		const page = queryParams.get("page");
		const keyword = queryParams.get("k");
		let res;
		try {
			if (window.location.pathname === "/search") {
				res = await findProduct(keyword, page);
				setURL(`/search?k=${keyword}&page=$`);
			} else if (window.location.pathname === "/products") {
				res = await getPaginatedDataProduct(page, 50);
				setURL(`/products?page=`);
			}
			setProducts(res.data);
			setPaginationData(res.pagination);
		} catch (err) {
			console.log(err);
		}
	};

	if (!paginationData) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<div className="ProductListContainer-home paginated-product-container">
				<ProductList products={products} />
				<Pagination
					PaginationData={paginationData}
					URL={URL}
					RefreshPage={retrieveProducts}
				/>
			</div>
		</>
	);
};

export default Searched;
