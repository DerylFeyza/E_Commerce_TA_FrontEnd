import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProductCarousel = ({ products }) => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1500 },
			items: 5,
		},
		middesktop: {
			breakpoint: { max: 1500, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<>
			<div className="product-carousel-container">
				<h1>Murah Meriah</h1>
				<Carousel
					className="product-carousel"
					responsive={responsive}
					swipeable={false}
					draggable={false}
					infinite={true}
				>
					{products.map((product, index) => (
						<div key={index} className="m-4 d-flex justify-content-center">
							<ProductCard product={product} />
						</div>
					))}
				</Carousel>
			</div>
		</>
	);
};

ProductCarousel.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			nama_barang: PropTypes.string.isRequired,
			kategori: PropTypes.string.isRequired,
			harga: PropTypes.number.isRequired,
		})
	).isRequired,
};

export default ProductCarousel;
