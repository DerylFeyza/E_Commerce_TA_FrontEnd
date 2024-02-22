import ProductList from "../../components/Product/ProductList";
import { useState, useEffect } from "react";
import { getPaginatedDataProduct } from "../../services/products";

const Home = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		retrieveProducts();
	}, []);

	const retrieveProducts = async () => {
		const queryParams = new URLSearchParams(window.location.search);
		const page = queryParams.get("page");
		try {
			const res = await getPaginatedDataProduct(page);
			console.log(res.status);
			console.log(res);
			setProducts(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<div className="home-container">
				<div>
					<h1>Product List</h1>
					<ProductList products={products} />
					{console.log(products)}
				</div>
			</div>
		</>
	);
};

export default Home;
