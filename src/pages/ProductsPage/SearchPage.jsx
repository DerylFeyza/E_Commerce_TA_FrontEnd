import { useState, useEffect } from "react";
import { findProduct, getPaginatedDataProduct } from "../../services/products";

import ProductList from "../../components/Product/ProductList";
import Pagination from "../../components/Pagination";
import NoProduct from "./NoProductPage";

const Searched = () => {
	const [products, setProducts] = useState([]);
	const [paginationData, setPaginationData] = useState(null);
	const [keyword, setKeyword] = useState(null);
	const [URL, setURL] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		retrieveProducts();
	}, []);

	const retrieveProducts = async () => {
		const queryParams = new URLSearchParams(window.location.search);
		const page = queryParams.get("page");
		const keyword = queryParams.get("k");
		let res;
		setLoading(true);
		try {
			if (window.location.pathname === "/search") {
				console.log(keyword);
				res = await findProduct(keyword, page);
				if (res.status === "noproduct") {
					setKeyword(keyword);
				} else {
					setKeyword(null);
				}
				setURL(`/search?k=${keyword}&page=`);
			} else if (window.location.pathname === "/products") {
				res = await getPaginatedDataProduct(page, 50);
				setURL(`/products?page=`);
				setKeyword(null);
			}
			setProducts(res.data);
			setPaginationData(res.pagination);
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<div className="ProductListContainer-home paginated-product-container">
				{keyword !== null ? (
					<NoProduct productname={keyword} />
				) : (
					<div className="page">
						<ProductList products={products} />
						<Pagination
							PaginationData={paginationData}
							URL={URL}
							RefreshPage={retrieveProducts}
						/>
					</div>
				)}
			</div>
		</>
	);
};

export default Searched;
