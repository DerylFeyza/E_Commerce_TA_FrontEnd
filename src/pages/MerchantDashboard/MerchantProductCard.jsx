import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { imageFetcher } from "../../services/products";

const MerchantProductCard = ({ product, handleDelete }) => {
	return (
		<>
			<div className="product-card-container shadow">
				<div>
					<Link
						to={`/products/${product.id}`}
						className="product-card-link"
						style={{ textDecoration: "none" }}
					>
						<div className="card product-card border-0 ">
							<img
								src={imageFetcher(product.gambar_barang)}
								className="card-img-top "
								alt={product.nama_barang}
								style={{ objectFit: "cover", width: "100%", height: "210px" }}
							/>
							<div className="card-body product-card-details">
								<h5 className="card-title name">{product.nama_barang}</h5>

								<div className="button-container">
									<Link
										to={`/products/update/${product.id}`}
										className="btn btn-primary mr-2"
									>
										Edit
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
					</Link>
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
		kategori: PropTypes.string.isRequired,
		harga: PropTypes.number.isRequired,
	}).isRequired,
	handleDelete: PropTypes.func.isRequired,
};

export default MerchantProductCard;
