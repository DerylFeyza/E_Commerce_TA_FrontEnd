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
			setProducts(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			{console.log(products)}

			<div className="home-container">
				<div>
					<h1>Product List</h1>
					<ProductList products={products} />
				</div>
			</div>
		</>
	);
};

export default Home;
