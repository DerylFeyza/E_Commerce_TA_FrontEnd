import ProductList from "../../components/Product/ProductList";
import { useState, useEffect } from "react";
import { getMerchantProducts } from "../../services/products";

const MerchantDashboard = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		retrieveProducts();
	}, []);

	const retrieveProducts = async () => {
		try {
			const res = await getMerchantProducts();
			setProducts(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			{console.log(products)}

			<div className="container">
				<div>
					<h1>Product List</h1>
					<ProductList products={products} />
				</div>
			</div>
		</>
	);
};

export default MerchantDashboard;
