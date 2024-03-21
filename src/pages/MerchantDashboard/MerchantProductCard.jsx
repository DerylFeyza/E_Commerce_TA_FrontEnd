import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { imageFetcher } from "../../services/products";

const MerchantProductCard = ({ product }) => {
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
				<Link to={`/products/update/${product.id}`} className="btn btn-primary">
					Edit
				</Link>
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
};

export default MerchantProductCard;
