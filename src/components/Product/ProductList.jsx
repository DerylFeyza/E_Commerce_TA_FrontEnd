import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
	return (
		<div className="ProductListContainer">
			<div className="container-fluid">
				<div className="row d-flex justify-content-center">
					{products.map((product, index) => (
						<div key={index} className="custom-column mb-4 mt-4">
							<ProductCard product={product} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

ProductList.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			nama_barang: PropTypes.string.isRequired,
			kategori: PropTypes.string.isRequired,
			harga: PropTypes.number.isRequired,
		})
	).isRequired,
};

export default ProductList;
