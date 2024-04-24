import PropTypes from "prop-types";
import { imageFetcher } from "../../services/products";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";

const ProductCard = ({ product }) => {
	const IMAGEURL = imageFetcher(product.gambar_barang);
	return (
		<div className="product-card-container shadow">
			<div>
				<Link
					to={`/products/${product.id}`}
					className="product-card-link"
					style={{ textDecoration: "none" }}
				>
					<div className="card product-card border-0 ">
						<img
							src={IMAGEURL}
							className="card-img-top "
							alt={product.nama_barang}
							style={{ objectFit: "cover", width: "100%", height: "210px" }}
						/>
						<div className="card-body product-card-details">
							<h5 className="card-title name">{product.nama_barang}</h5>
							<p className="card-text price">Rp. {product.harga}</p>
							<p className="card-text shop">
								{product.additional_info[0].nama_toko}
							</p>
							<p className="location flex items-center">
								<GrLocation className="mr-2" />
								{product.additional_info[0].kota}
							</p>
						</div>
					</div>
				</Link>
			</div>
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
		additional_info: PropTypes.arrayOf(
			PropTypes.shape({
				nama_toko: PropTypes.string,
				kota: PropTypes.string,
			})
		),
	}).isRequired,
};

export default ProductCard;
