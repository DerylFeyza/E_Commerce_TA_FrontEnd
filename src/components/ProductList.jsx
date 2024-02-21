import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
	return (
		<div className="container">
			<div className="row">
				{products.map((product, index) => (
					<div key={index} className="col-md-4 mb-4">
						<ProductCard product={product} />
					</div>
				))}
			</div>
		</div>
	);
};

ProductList.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			nama_barang: PropTypes.string.isRequired,
			// gambar_barang: PropTypes.string.isRequired,
			kategori: PropTypes.string.isRequired,
			harga: PropTypes.number.isRequired,
		})
	).isRequired,
};

export default ProductList;
