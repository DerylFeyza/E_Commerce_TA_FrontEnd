import PropTypes from "prop-types";
import { BASE_API } from "../../utils/http-common";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import "./Product.css";

const ProductCard = ({ product }) => {
	const IMAGEURL = `${BASE_API}/produk/image/${product.gambar_barang}`;
	return (
		<div className="product-card-container">
			<Link
				to={`/products/${product.id}`}
				className="product-card-link"
				style={{ textDecoration: "none" }}
			>
				<div className="card shadow bg-body-tertiary product-card border-0">
					<img
						src={IMAGEURL}
						className="card-img-top "
						alt={product.nama_barang}
						style={{ objectFit: "cover", width: "100%", height: "400px" }}
					/>
					<div className="card-body product-card-details">
						<h5 className="card-title">{product.nama_barang}</h5>
						<p className="card-text price">Rp. {product.harga}</p>
						<p className="card-text ">Category: {product.kategori}</p>
						<p>
							<GrLocation /> Jakarta Pusat
						</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

ProductCard.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number.isRequired,
		nama_barang: PropTypes.string.isRequired,
		gambar_barang: PropTypes.string.isRequired,
		kategori: PropTypes.string.isRequired,
		harga: PropTypes.number.isRequired,
	}).isRequired,
};

export default ProductCard;
