import ProductList from "../../components/ProductList";
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
				<h1>Welcome to Our Website</h1>
				<p>This is a simple home page.</p>
				<p>You can add more content here.</p>
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
