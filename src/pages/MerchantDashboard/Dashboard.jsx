import RecentPurchaseCard from "./RecentPurchases";
import MerchantProductCard from "./MerchantProductCard";
import { useState, useEffect } from "react";
import {
	getMerchantProducts,
	getRecentPurchase,
	deleteProduct,
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

	const handleDelete = async (idProduct) => {
		try {
			await deleteProduct(idProduct);
			retrieveProducts();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className="container">
				<div className="row">
					<h1>Product List</h1>
					{products.map((product, index) => (
						<div key={index} className="col-md-4 mb-4">
							<MerchantProductCard
								product={product}
								handleDelete={handleDelete}
							/>
						</div>
					))}
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
