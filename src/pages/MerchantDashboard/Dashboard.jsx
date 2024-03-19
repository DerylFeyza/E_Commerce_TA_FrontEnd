import ProductList from "../../components/Product/ProductList";
import RecentPurchaseCard from "./RecentPurchases";
import { useState, useEffect } from "react";
import {
	getMerchantProducts,
	getRecentPurchase,
} from "../../services/products";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const MerchantDashboard = () => {
	const [products, setProducts] = useState([]);
	const [purchasesDetail, setPurchasesDetail] = useState([]);
	const [purchasesProducts, setPurchasesProducts] = useState([]);

	useEffect(() => {
		retrieveProducts();
	}, []);

	const retrieveProducts = async () => {
		try {
			const res = await getMerchantProducts();
			setProducts(res.data);
			const PurchasesRes = await getRecentPurchase();
			setPurchasesDetail(PurchasesRes.data);
			setPurchasesProducts(PurchasesRes.products);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<div className="container">
				<div>
					<h1>Product List</h1>
					<ProductList products={products} />
				</div>
				<Link to="/products/add">
					<button>Add Product</button>
				</Link>
			</div>
			<div>
				{purchasesDetail.map((purchases, index) => (
					<RecentPurchaseCard
						key={index}
						purchaseData={purchases}
						purchaseProduct={purchasesProducts[index]}
					/>
				))}
			</div>
		</>
	);
};

export default MerchantDashboard;
