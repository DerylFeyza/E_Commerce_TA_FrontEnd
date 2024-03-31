import ProductList from "../../components/Product/ProductList";
import { useState, useEffect } from "react";
import { findProduct } from "../../services/products";

const Searched = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		retrieveProducts();
	}, []);

	const retrieveProducts = async () => {
		const queryParams = new URLSearchParams(window.location.search);
		const keyword = queryParams.get("k");
		try {
			const res = await findProduct(keyword);
			console.log(res.status);
			console.log(res);
			setProducts(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<ProductList products={products} />
		</>
	);
};

export default Searched;
