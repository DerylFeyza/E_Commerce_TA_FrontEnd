import ProductList from "../../components/Product/ProductList";
import { useState, useEffect } from "react";
import { getPaginatedDataProduct } from "../../services/products";
import Hero from "../Home/hero"

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
					<Hero />
					<ProductList />
				</div>
			</div>
		</>
	);
};

export default Home;
