import MerchantProductCard from "./MerchantProductCard";
import RestockForm from "./RestockForm";
import { useState, useEffect } from "react";
import { getMerchantProducts, deleteProduct } from "../../services/products";
import {
	getRecentPurchase,
	getRecentPurchaseDetails,
} from "../../services/receipt";
import { Link } from "react-router-dom";
import { restockProduct } from "../../services/products";
import { getUserInfo } from "../../services/user";
import SaleDetail from "./SaleDetail";

const MerchantDashboard = () => {
	const [products, setProducts] = useState([]);
	const [userData, setUserData] = useState(null);
	const [purchasesDetail, setPurchasesDetail] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [showDetailModal, setShowDetailModal] = useState(false);
	const [initialData, setInitialData] = useState(null);
	const [buyer, setBuyer] = useState(null);
	const [saleDetail, setSaleDetail] = useState(null);

	const handleRestock = async (id, value) => {
		const requestBody = { add: value };
		try {
			const res = await restockProduct(id, requestBody);
			console.log(res);
			setShowModal(false);
			retrieveProducts();
			retrieveuser();
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
		retrieveuser();
	}, []);

	const retrieveProducts = async () => {
		try {
			const res = await getMerchantProducts();
			setProducts(res.data);
			const PurchasesRes = await getRecentPurchase();
			setPurchasesDetail(PurchasesRes.data);
		} catch (err) {
			console.log(err);
		}
	};

	const retrieveuser = async () => {
		try {
			const resUser = await getUserInfo();
			setUserData(resUser.data);
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

	const retrieveSaleDetail = async (id) => {
		try {
			const res = await getRecentPurchaseDetails(id);
			setBuyer(res.user.username);
			setSaleDetail(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	const showSaleDetails = async (id) => {
		try {
			await retrieveSaleDetail(id);
			setShowDetailModal(true);
		} catch (error) {
			console.error("Error fetching details:", error);
		}
	};

	if (!products || !purchasesDetail || !userData) {
		return <>loading</>;
	}

	return (
		<div className="merchant-dashboard-container">
			<div className="container-recent-sales">
				<div className="left-column-dashboard">
					<h1>Recent Sales</h1>
					<h2>{userData.nama_toko}</h2>
					<h3>Balance: {userData.saldo}</h3>
				</div>
				<div className="right-column-dashboard">
					<div className="mx-auto mt-5 pt-5">
						<div className="flex-auto block py-12 pt-6 px-9 relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
							<table className="w-full text-dark border-neutral-200">
								<thead className="align-bottom">
									<tr className="font-semibold text-secondary-dark table-head">
										<th className="pb-3 text-black">Name</th>
										<th className="pb-3 text-black">Quantity</th>
										<th className="pb-3 text-black">Product Price</th>
										<th className="pb-3 text-black">Total Profit</th>
										<th className="pb-3 text-black mx-5"></th>
									</tr>
								</thead>
								<tbody className="align-middle">
									{purchasesDetail.map((products, index) => (
										<tr key={index} className="border-b border-neutral">
											<td className="py-4 text-black">{products.namaproduk}</td>
											<td className="py-4 text-black">{products.quantity}</td>
											<td className="py-4 text-black">
												{products.hargaproduk}
											</td>
											<td className="py-4 text-black">
												Rp. {products.hargaproduk * products.quantity}
											</td>
											<td className="text-black">
												<button
													className="bg-blue hover:bg-darkGrayishBlue text-white font-bold py-2 px-4 rounded"
													style={{ width: "auto", height: "auto" }}
													onClick={() => showSaleDetails(products.id)}
												>
													Details
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
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

			<SaleDetail
				showModal={showDetailModal}
				setShowModal={setShowDetailModal}
				userData={buyer}
				saleDetail={saleDetail}
			/>
		</div>
	);
};

export default MerchantDashboard;
