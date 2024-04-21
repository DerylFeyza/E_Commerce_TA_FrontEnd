import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { imageFetcher } from "../../services/products";

const MerchantProductCard = ({ product, handleDelete, productForm }) => {
	return (
		<>
			<div className="merchant-product-card-container product-card-container shadow">
				<div>
					<div className="card product-card border-0 ">
						<img
							src={imageFetcher(product.gambar_barang)}
							className="card-img-top "
							alt={product.nama_barang}
							style={{ objectFit: "cover", width: "100%", height: "210px" }}
						/>
						<div className="card-body product-card-details merchant-product-card-details">
							<h3 className="card-title name">{product.nama_barang}</h3>
							<p className="card-title">Stock Remaining: {product.stok}</p>
							{product.status === "SoldOut" ? (
								<div className="product-status-alert warning">SOLD OUT</div>
							) : product.status === "MissingInformation" ? (
								<div className="product-status-alert danger">
									PRODUCT ADDRESS MISSING
								</div>
							) : product.status === "OnSale" ? (
								<div className="product-status-alert success">
									Product On Sale
								</div>
							) : (
								<div className="product-status-alert dark">Sale Halted</div>
							)}
							<div
								className="btn restock-btn btn-warning"
								type="button"
								onClick={() => productForm(product)}
							>
								Restock Product
							</div>
							<div className="button-container">
								<Link
									to={`/products/update/${product.id}`}
									className="btn btn-primary"
								>
									Update
								</Link>
								<div
									className="btn btn-danger"
									type="button"
									onClick={() => handleDelete(product.id)}
								>
									Delete
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

MerchantProductCard.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number.isRequired,
		nama_barang: PropTypes.string.isRequired,
		gambar_barang: PropTypes.string.isRequired,
		stok: PropTypes.number.isRequired,
		status: PropTypes.string.isRequired,
	}).isRequired,
	handleDelete: PropTypes.func.isRequired,
	productForm: PropTypes.func.isRequired,
};

export default MerchantProductCard;
