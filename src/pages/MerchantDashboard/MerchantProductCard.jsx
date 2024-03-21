import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { imageFetcher } from "../../services/products";

const MerchantProductCard = ({ product, handleDelete }) => {
	return (
		<div className="card">
			<img
				src={imageFetcher(product.gambar_barang)}
				className="card-img-top"
				alt={product.nama_barang}
			/>
			<div className="card-body">
				<h5 className="card-title">{product.nama_barang}</h5>
				<h5 className="card-title">{product.id}</h5>
				<p className="card-text">Category: {product.kategori}</p>
				<p className="card-text">Price: ${product.harga}</p>

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
