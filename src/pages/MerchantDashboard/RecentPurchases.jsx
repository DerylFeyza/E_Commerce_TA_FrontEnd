import PropTypes from "prop-types";
import CheckmarkLogo from "../../assets/checkmark.svg";
import { imageFetcher } from "../../services/products";

const RecentPurchaseCard = ({ purchaseData, purchaseProduct }) => {
	const dateString = new Date(purchaseData.updatedAt).toLocaleDateString(
		"en-US",
		{ timeZone: "Asia/Jakarta" }
	);
	const timeString = new Date(purchaseData.updatedAt).toLocaleTimeString(
		"en-US",
		{ timeZone: "Asia/Jakarta" }
	);

	return (
		<div className="container">
			<div className="purchase-success-container">
				<div className="purchase-success row">
					<div className="col-md-2 image-container">
						<img
							src={CheckmarkLogo}
							alt="Purchase success"
							className="success-image img-fluid"
						/>
					</div>
					<div className="col-md-2 image-container">
						<img
							src={imageFetcher(purchaseProduct.gambar_barang)}
							alt="Purchase success"
							className="img-fluid"
						/>
					</div>
					<div className="col-md-4">
						<h3>Product Sold</h3>
						<span>{dateString}</span> <span>{timeString} UTC+7</span>
					</div>
					<div className="col-md-3">
						<p>Name: {purchaseProduct.nama_barang}</p>
						<p>Price: {purchaseProduct.harga}</p>
						<p>Quantity: {purchaseData.quantity}</p>
					</div>
					<div className="col-md-3 text-right">
						<p>Total: {purchaseProduct.harga * purchaseData.quantity}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

RecentPurchaseCard.propTypes = {
	purchaseData: PropTypes.object.isRequired, // Ensure purchaseData is an object and is required
	purchaseProduct: PropTypes.object.isRequired, // Ensure purchaseProduct is an object and is required
};

export default RecentPurchaseCard;
