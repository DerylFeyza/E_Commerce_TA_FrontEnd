import ProductList from "../../components/Product/ProductList";
import Pagination from "../../components/Pagination";
import { useState, useEffect } from "react";
import { findProduct } from "../../services/products";

const Searched = () => {
	const [products, setProducts] = useState([]);
	const [paginationData, setPaginationData] = useState(null);

	useEffect(() => {
		retrieveProducts();
	}, []);

	const retrieveProducts = async () => {
		const queryParams = new URLSearchParams(window.location.search);
		const keyword = queryParams.get("k");
		try {
			const res = await findProduct(keyword);
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
			<ProductList products={products} />
			<Pagination PaginationData={paginationData} />
		</>
	);
};

export default Searched;
