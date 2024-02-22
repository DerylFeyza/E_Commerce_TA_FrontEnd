import { FaShoppingCart } from "react-icons/fa";
import PropTypes from "prop-types";
import { BASE_API } from "../../utils/http-common";

const DetailLayout = ({ product }) => {
	const IMAGEURL = `${BASE_API}/produk/image/${product.gambar_barang}`;

	return (
		<>
			<section className="py-5">
				<div className="container px-4 px-lg-5 my-5">
					<div className="row gx-4 gx-lg-5 align-items-center">
						<div className="col-md-6">
							<img
								className="card-img-top mb-5 mb-md-0"
								src={IMAGEURL}
								alt={product.nama_barang}
							/>
						</div>
						<div className="col-md-6">
							<div className="small mb-1">Stok: {product.stok}</div>
							<h1 className="display-5 fw-bolder">{product.nama_barang}</h1>
							<div className="fs-5 mb-5">
								<span>Rp. {product.harga}</span>
							</div>
							<p className="lead">{product.details}</p>
							<div className="d-flex">
								<input
									className="form-control text-center me-3"
									id="inputQuantity"
									type="num"
									defaultValue="1"
									style={{ maxWidth: "3rem" }}
								/>
								<button
									className="btn btn-outline-dark flex-shrink-0"
									type="button"
								>
									<FaShoppingCart className="me-1" />
									Add to cart
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

DetailLayout.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number.isRequired,
		nama_barang: PropTypes.string.isRequired,
		gambar_barang: PropTypes.string.isRequired,
		kategori: PropTypes.string.isRequired,
		details: PropTypes.string.isRequired,
		harga: PropTypes.number.isRequired,
		stok: PropTypes.number.isRequired,
	}).isRequired,
};

export default DetailLayout;
