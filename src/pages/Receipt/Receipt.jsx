import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPurchaseReceipt } from "../../services/receipt";

const PurchaseReceipt = () => {
	const { id } = useParams();
	const [user, setUser] = useState(null);
	const [transactionInfo, setTransactionInfo] = useState(null);
	const [products, setProducts] = useState([null]);

	useEffect(() => {
		const retrieveProductById = async () => {
			try {
				const res = await getPurchaseReceipt(id);
				setUser(res.user.username);
				setTransactionInfo(res.receipt);
				setProducts(res.cart);
			} catch (err) {
				console.log(err);
			}
		};

		retrieveProductById();
	}, [id]);

	if (!user || !transactionInfo || !products) {
		return <div>Loading...</div>;
	}

	return (
		<div className="card">
			<div className="card-body mx-4">
				<div className="container">
					<p className="my-5 mx-5" style={{ fontSize: "30px" }}>
						Thank for your purchase
					</p>
					<div className="row">
						<ul className="list-unstyled">
							<li className="text-black">{user}</li>
							<li className="text-muted mt-1">
								<span className="text-black">Invoice</span> #
								{transactionInfo.id}
							</li>
							<li className="text-black mt-1">
								{new Date(transactionInfo.updatedAt).toDateString()}
							</li>
						</ul>
						<hr />
						<div className="row">
							<div className="col">
								<p className="fw-bold">Name</p>
							</div>
							<div className="col">
								<p className="fw-bold">Price</p>
							</div>
							<div className="col">
								<p className="fw-bold">Quantity</p>
							</div>
							<div className="col">
								<p className="fw-bold">Total</p>
							</div>
						</div>
						{products.map((item, index) => (
							<div key={index} className="row">
								<div className="col">
									<p>{item.namaproduk}</p>
								</div>
								<div className="col">
									<p>${item.hargaproduk.toFixed(2)}</p>
								</div>
								<div className="col">
									<p>{item.quantity}</p>
								</div>
								<div className="col">
									<p>${item.total.toFixed(2)}</p>
								</div>
								<hr />
							</div>
						))}
						<div className="row text-black">
							<div className="col">
								<p className="float-end fw-bold">
									Total: ${transactionInfo.totalharga.toFixed(2)}
								</p>
							</div>
							<hr style={{ border: "2px solid black" }} />
						</div>
						<div className="text-center" style={{ marginTop: "90px" }}>
							<a>
								<u className="text-info">View in browser</u>
							</a>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PurchaseReceipt;
