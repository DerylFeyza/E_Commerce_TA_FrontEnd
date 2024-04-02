import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProductCarousel = ({ products }) => {
	const sliderImageUrl = [
		//First image url
		{
			url: "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1",
		},
		{
			url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
		},
		//Second image url
		{
			url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
		},
		//Third image url
		{
			url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU",
		},

		//Fourth image url

		{
			url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU",
		},
	];
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 5,
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
			<Carousel
				responsive={responsive}
				autoPlay={true}
				swipeable={true}
				draggable={true}
				infinite={true}
			>
				{products.map((product, index) => (
					<div key={index} className="m-4 d-flex justify-content-center">
						<ProductCard product={product} />
					</div>
				))}
				{/* {sliderImageUrl.map((imageUrl, index) => {
					return (
						<div className="slider" key={index}>
							<img src={imageUrl.url} alt="movie" />
						</div>
					);
				})} */}
			</Carousel>
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
