import MerchantProductCard from "./MerchantProductCard";
import RestockForm from "./RestockForm";
import { useState, useEffect } from "react";
import {
	getMerchantProducts,
	getRecentPurchase,
	deleteProduct,
} from "../../services/products";
import { Link } from "react-router-dom";
import { imageFetcher, restockProduct } from "../../services/products";

const MerchantDashboard = () => {
	const [products, setProducts] = useState([]);
	const [purchasesDetail, setPurchasesDetail] = useState([]);
	const [purchasesProducts, setPurchasesProducts] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [initialData, setInitialData] = useState(null);

	const handleRestock = async (id, value) => {
		const requestBody = { add: value };
		try {
			const res = await restockProduct(id, requestBody);
			console.log(res);
			setShowModal(false);
			retrieveProducts();
			return res.status;
		} catch (error) {
			console.log(error);
		}
	};

	const productForm = (product) => {
		setShowModal(true);
		setInitialData(product);
	};

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

	if (!products || !purchasesDetail) {
		return <>loading</>;
	}

	return (
		<div className="merchant-dashboard-container">
			<div className="container-recent-sales">
				<div className="left-column-dashboard">
					<h1>Recent Sales</h1>
				</div>
				<div className="right-column-dashboard">
					{/* <div>
						{purchasesDetail.map((purchases, index) => (
							<RecentPurchaseCard
								key={index}
								purchaseData={purchases}
								purchaseProduct={purchasesProducts[index]}
							/>
						))}
					</div> */}
					<div className="table-responsive">
						<table className="table">
							<thead>
								<tr>
									<th scope="col">Name</th>
									<th scope="col">image</th>
									<th scope="col">Quantity Sold</th>
									<th scope="col">Price</th>
									<th scope="col">Total</th>
								</tr>
							</thead>
							<tbody>
								{purchasesProducts.map((products, index) => (
									<tr key={index}>
										<th scope="row" style={{ color: "#666666" }}>
											{products.nama_barang}
										</th>
										<td>
											<img
												src={imageFetcher(products.gambar_barang)}
												alt={products.nama_barang}
												style={{
													width: "50px",
												}}
											/>
										</td>
										<td>{purchasesDetail[index].quantity}</td>
										<td>{products.harga}</td>
										<td>{products.harga * purchasesDetail[index].quantity}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<div className="container-merchant-products">
				<div className="row">
					<div className="product-list-details-memrchant-container">
						<h1>Your Products</h1>
						<Link to="/products/add" className="btn btn-success">
							Add Product
						</Link>
					</div>
					{products.map((product, index) => (
						<div key={index} className="custom-column mb-4 mt-4">
							<MerchantProductCard
								product={product}
								handleDelete={handleDelete}
								productForm={productForm}
							/>
						</div>
					))}
				</div>
			</div>
			<RestockForm
				Product={initialData}
				HandleRestock={handleRestock}
				showModal={showModal}
				setShowModal={setShowModal}
			/>
		</div>
	);
};

export default MerchantDashboard;
