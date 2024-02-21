import PropTypes from "prop-types";
import { BASE_API } from "../utils/http-common";

const ProductCard = ({ product }) => {
	const IMAGEURL = `${BASE_API}/produk/image/${product.gambar_barang}`;
	return (
		<div className="card">
			<img src={IMAGEURL} className="card-img-top" alt={product.nama_barang} />
			<div className="card-body">
				<h5 className="card-title">{product.nama_barang}</h5>
				<p className="card-text">Category: {product.kategori}</p>
				<p className="card-text">Price: ${product.harga}</p>
			</div>
		</div>
	);
};

ProductCard.propTypes = {
	product: PropTypes.shape({
		nama_barang: PropTypes.string.isRequired,
		gambar_barang: PropTypes.string.isRequired,
		kategori: PropTypes.string.isRequired,
		harga: PropTypes.number.isRequired,
	}).isRequired,
};

export default ProductCard;
